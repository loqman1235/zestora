import { z } from "zod";

export const productSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  slug: z
    .string()
    .trim()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-zA-Z0-9-]+$/, { message: "Invalid slug" }),
  description: z.string().trim().min(1, { message: "Description is required" }),
  price: z.coerce.number().min(1, { message: "Price is required" }),
  discountPrice: z.coerce
    .number()
    .min(1, { message: "Discount Price is required" })
    .optional(),
  inventory: z.coerce.number().min(1, { message: "Inventory is required" }),
});

export type ProductSchema = z.infer<typeof productSchema>;
