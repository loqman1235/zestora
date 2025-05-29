import { z } from "zod";

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
  thumbnail: z.string().trim().min(1, { message: "Thumbnail is required" }),
  productImages: z
    .array(z.string())
    .min(1, { message: "At least one image is required" }),
  categoryId: z.string().trim().min(1, { message: "Category is required" }),
  brandId: z.string().trim().min(1, { message: "Brand is required" }),
  isActive: z.boolean().default(true).optional(),
  isFeatured: z.boolean().default(false).optional(),
});

export type ProductSchema = z.infer<typeof productSchema>;
