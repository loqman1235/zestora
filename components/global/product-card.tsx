import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { StarRating } from "./star-rating";
import { ProductWithDetails } from "@/types";

interface ProductCardProps {
  product: ProductWithDetails;
  className?: string;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;

  const href = `/shop/${product.category.slug}${
    product.category.children?.[0]?.slug
      ? `/${product.category.children[0].slug}`
      : ""
  }/${product.slug}`;

  return (
    <div className="group/card flex flex-col gap-2">
      {/* Product image */}
      <Link
        href={href}
        className="bg-muted relative block h-[360px] w-full overflow-hidden rounded-md shadow-sm"
      >
        <Image
          className="w-full object-cover transition group-hover/card:scale-105"
          src={product.thumbnail}
          alt={product.name}
          fill
        />
      </Link>
      <div className="flex flex-col gap-1">
        <Link
          href={href}
          className="text-base font-bold capitalize hover:underline md:text-lg"
        >
          {product.name}
        </Link>
        {/* <StarRating ratings={product.ratings} /> */}
        <div className="flex items-center gap-2">
          <h3 className="text-primary text-lg font-bold tracking-tighter md:text-xl">
            {formatPrice(hasDiscount ? product.discountPrice! : product.price!)}
          </h3>
          {hasDiscount && (
            <span className="text-muted-foreground line-through">
              {formatPrice(product.price)}
            </span>
          )}

          {hasDiscount && (
            <span className="bg-destructive/10 text-destructive rounded-full px-2 py-1 text-xs font-bold">
              -
              {Math.round(
                ((product.price - product.discountPrice!) / product.price) *
                  100,
              )}
              %
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
