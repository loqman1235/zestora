import { cn } from "@/lib/utils";
import Link from "next/link";

export const Brand = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-playfair text-2xl font-bold tracking-tight md:text-3xl",
        className,
      )}
    >
      Zestora.
    </Link>
  );
};
