import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/shop/${product.id}`} className="flex flex-col gap-2">
      {/* Product image */}
      <div className="bg-muted relative aspect-square w-full overflow-hidden rounded-md">
        <Image src={product.image} alt={product.name} fill />
      </div>
      <div>
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <h3 className="text-xl font-bold tracking-tight">
          {formatPrice(product.price)}
        </h3>
      </div>
    </Link>
  );
};
