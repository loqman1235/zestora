import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES } from "@/config/consts";
import { z } from "zod";

const imageSchema = z
  .custom<File>((file) => file instanceof File)
  .refine((file) => !file || file.size <= MAX_FILE_SIZE, {
    message: `File size should be less than ${MAX_FILE_SIZE / 1000000}MB`,
  })
  .refine((file) => !file || ALLOWED_FILE_TYPES.includes(file.type), {
    message: "Invalid file type",
  });

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
  thumbnail: imageSchema,
  productImages: z.array(imageSchema),
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
        images: z.array(imageSchema),
      }),
    )
    .optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
