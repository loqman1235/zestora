export const APP_NAME = "Zestora";
export const APP_DESCRIPTION =
  "The best online store for fashion and accessories.";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

export const SHIPPING_FEE = 5.99;
export const DISCOUNT = 2.99;
export const STRIPE_ALLOWED_COUNTRIES = ["US", "CA", "DZ", "TN", "MA", "FR"];

export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;
