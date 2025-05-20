import { z } from "zod";

export const settingsFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  phone: z.string().trim().min(1, { message: "Phone is required" }),
  address: z.string().trim().min(1, { message: "Address is required" }),
});

export type SettingsFormSchema = z.infer<typeof settingsFormSchema>;
