import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { StarRating } from "./star-rating";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;

  return (
    <div className="group/card flex flex-col gap-2">
      {/* Product image */}
      <Link
        href={`/shop/${product.id}`}
        className="bg-muted relative aspect-square w-full overflow-hidden rounded-md"
      >
        <Image
          className="transition group-hover/card:scale-105"
          src={product.image}
          alt={product.name}
          fill
        />
      </Link>
      <div className="flex flex-col gap-1">
        <h4 className="text-base font-bold capitalize md:text-lg">
          {product.name}
        </h4>
        <StarRating ratings={product.ratings} />
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
