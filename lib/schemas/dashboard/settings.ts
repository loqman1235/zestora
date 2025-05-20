import { z } from "zod";

export const settingsFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone is required" })
    .regex(/^\+?[0-9]{10,13}$/, { message: "Invalid phone number" }),
  address: z
    .string()
    .trim()
    .min(1, { message: "Address is required" })
    .regex(/^[a-zA-Z0-9\s,-]+$/, { message: "Invalid address" }),
  stripePublishableKey: z
    .string()
    .trim()
    .min(1, { message: "Stripe publishable key is required" }),
  stripeSecretKey: z
    .string()
    .trim()
    .min(1, { message: "Stripe secret key is required" }),
});

export type SettingsFormSchema = z.infer<typeof settingsFormSchema>;
