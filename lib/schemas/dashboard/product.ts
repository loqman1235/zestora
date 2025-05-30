import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } from "@/config/consts";
import { z } from "zod";

// Separate schemas for clarity
const baseImageSchema = z.custom<File>((file) => file instanceof File, {
  message: "Image is required",
});

const strictImageSchema = baseImageSchema
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: `Image size should be less than ${MAX_FILE_SIZE / 1000000}MB`,
  })
  .refine((file) => ALLOWED_FILE_TYPES.includes(file.type), {
    message: "Invalid image type",
  });

// Optional version for non-required images
const optionalImageSchema = strictImageSchema.optional();
export const productSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  slug: z.string().trim().optional(),
  description: z.string().trim().min(1, { message: "Description is required" }),
  price: z.coerce.number().min(1, { message: "Price is required" }),
  discountPrice: z.coerce
    .number()
    .min(1, { message: "Discount Price is required" })
    .optional(),
  inventory: z.coerce.number().min(1, { message: "Inventory is required" }),
  thumbnail: strictImageSchema,
  productImages: z.array(optionalImageSchema),
  categoryId: z.string().trim().min(1, { message: "Category is required" }),
  brandId: z.string().trim().min(1, { message: "Brand is required" }),
  isActive: z.boolean().default(true).optional(),
  isFeatured: z.boolean().default(false).optional(),
  variants: z
    .array(
      z.object({
        size: z.string().min(1),
        color: z.string().min(1),
        hex: z.string().optional(),
        price: z.coerce.number().min(0),
        inventory: z.coerce.number().min(0),
        images: z.array(optionalImageSchema),
      }),
    )
    .optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
