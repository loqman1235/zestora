"use server";
import { auth } from "@/auth";
import { APP_NAME } from "@/config/consts";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { productSchema, ProductSchema } from "@/lib/schemas/dashboard/product";
import { isRedirectError } from "next/dist/client/components/redirect-error";

async function uploadToCloudinary(file: File | Blob): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "auto", folder: `${APP_NAME}/products` },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result?.secure_url || "");
        },
      )
      .end(buffer);
  });
}

export const createNewProductAction = async (
  data: ProductSchema,
): Promise<{ error: string } | void> => {
  try {
    const session = await auth();

    if (!session || !session.user) {
      throw new Error("Unauthorized");
    }

    const validatedFields = productSchema.safeParse(data);

    if (!validatedFields.success) {
      console.log(validatedFields.error.message);
      throw new Error(validatedFields.error.message);
    }

    const {
      name,
      description,
      price,
      discountPrice,
      inventory,
      thumbnail,
      productImages,
      categoryId,
      brandId,
      isActive,
      isFeatured,
      slug,
      variants,
    } = validatedFields.data;

    // Upload thumbnail
    let thumbnailUrl = "";
    if (thumbnail) {
      thumbnailUrl = await uploadToCloudinary(thumbnail);
    }

    // Upload product gallery images
    const productImageUrls = await Promise.all(
      (productImages || []).map(async (file) => {
        return await uploadToCloudinary(file);
      }),
    );

    // Create product in database
    const product = await prisma.product.create({
      data: {
        name,
        slug: slug || name.replace(/\s+/g, "-").toLowerCase(),
        description,
        price,
        discountPrice,
        inventory,
        thumbnail: thumbnailUrl,
        isActive,
        isFeatured,
        categoryId,
        brandId,
        images: {
          create: productImageUrls.map((url) => ({
            url,
          })),
        },
      },
      include: {
        images: true,
      },
    });

    // Handle variants if they exist
    if (variants && variants.length > 0) {
      for (const variant of variants) {
        // Upload variant images
        const variantImageUrls = await Promise.all(
          (variant.images || []).map(async (file) => {
            return await uploadToCloudinary(file);
          }),
        );

        // Create variant in database
        await prisma.productVariant.create({
          data: {
            productId: product.id,
            size: variant.size,
            color: variant.color,
            hex: variant.hex || "",
            price: variant.price,
            inventory: variant.inventory,
            images: {
              create: variantImageUrls.map((url) => ({
                url,
                productId: product.id,
              })),
            },
          },
        });
      }
    }

    console.log("Product created successfully");
  } catch (error) {
    console.log(error);
    if (isRedirectError(error)) {
      throw error;
    }
    return { error: "Something went wrong while creating the product" };
  }
};
