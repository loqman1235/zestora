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
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-bold capitalize">{product.name}</h4>
        <StarRating ratings={product.ratings} />
        <h3 className="text-xl font-bold tracking-tight">
          {formatPrice(product.price)}
        </h3>
      </div>
    </div>
  );
};
