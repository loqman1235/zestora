import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
};

export const calcAverageRating = (ratings: number[]) => {
  if (ratings.length === 0) return 0;
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  const average = sum / ratings.length;
  return average;
};

export const slugToTitle = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const calcTotal = (
  shippingFree: number,
  discount: number,
  subTotal: number,
) => {
  return formatPrice(subTotal + shippingFree - discount);
};

export const hexToRgb = (hex: string): string => {
  // Remove # if present
  hex = hex.replace(/^#/, "");

  // Convert shorthand 3-char hex to full 6-char hex
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid hex color format");
  }

  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r},${g},${b})`;
};

export const isBrightColor = (hex: string): boolean => {
  const rgbArr = hexToRgb(hex).match(/\d+/g)?.map(Number);

  if (!rgbArr || rgbArr.length !== 3) {
    throw new Error("Invalid RGB conversion");
  }

  const [red, green, blue] = rgbArr;
  const brightness = red * 0.2126 + green * 0.7152 + blue * 0.0722;

  return brightness > 127.5;
};
