import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "@/components/ui/badge";
import { ProductWithDetails } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
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

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

type StatusStyle = {
  label: string;
  variant: BadgeVariant;
  className?: string;
};

export function getOrderStatusStyle(status: string): StatusStyle {
  switch (status) {
    case "PENDING":
      return {
        label: "Pending",
        variant: "outline",
        className: "text-yellow-700 border-yellow-500",
      };
    case "PROCESSING":
      return { label: "Processing", variant: "secondary" };
    case "SHIPPED":
      return {
        label: "Shipped",
        variant: "default",
        className: "bg-blue-100 text-blue-800",
      };
    case "DELIVERED":
      return {
        label: "Delivered",
        variant: "default",
        className: "bg-green-100 text-green-800",
      };
    case "COMPLETED":
      return {
        label: "Completed",
        variant: "default",
        className: "bg-emerald-100 text-emerald-800",
      };
    default:
      return { label: status, variant: "outline" };
  }
}

export const getProductHref = ({
  category,
  slug,
}: Pick<ProductWithDetails, "category" | "slug">) => {
  const href = `/shop/${category.slug}${
    category.children?.[0]?.slug ? `/${category.children[0].slug}` : ""
  }/${slug}`;

  return href;
};
