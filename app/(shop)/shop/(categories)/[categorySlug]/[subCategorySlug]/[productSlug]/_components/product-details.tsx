"use client";

import { StarRating } from "@/components/global/star-rating";
import { cn, formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { ProductWithDetails } from "@/types";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ProductPreview } from "./product-preview";

interface ProductDetailsProps {
  product: ProductWithDetails;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0] || null,
  );
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <ProductPreview
        images={selectedVariant?.images.map((image) => image.url) || []}
      />
      <div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="font-playfair text-2xl font-bold tracking-wide uppercase md:text-3xl">
              {product?.name}
            </h1>
            <StarRating ratings={[5, 4, 5, 1, 1]} />
            <div className="flex items-center gap-2">
              <h3 className="text-primary text-lg font-bold tracking-tighter md:text-2xl">
                {formatPrice(product?.price || 0)}
              </h3>
              <span className="text-muted-foreground text-lg line-through md:text-2xl">
                {formatPrice(300)}
              </span>
              <span className="bg-destructive/10 text-destructive rounded-full px-2 py-1 text-xs font-bold">
                -{Math.round(((300 - 260) / 300) * 100)}%
              </span>
            </div>
          </div>
          <p className="text-muted-foreground mt-3">{product?.description}</p>
        </div>
        <Separator className="my-5" />
        {/* SELECT COLOR */}
        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground">Select Colors</h3>
          <div className="flex items-center gap-2">
            {product?.variants?.map((variant) => (
              <button
                key={variant.id}
                className={cn(
                  "border-muted-foreground h-8 w-8 rounded-full border",
                  variant.color === selectedVariant?.color ? "border-2" : "",
                )}
                style={{ backgroundColor: variant.color }}
                title={variant.color}
                aria-label={variant.color}
                onClick={() => setSelectedVariant(variant)}
              ></button>
            ))}
          </div>
        </div>
        <Separator className="my-5" />
        {/* SELECT SIZE */}
        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground">Choose Size</h3>
          <div className="flex items-center gap-2">
            <Button className="rounded-full" variant="outline">
              Small
            </Button>
            <Button className="rounded-full">Medium</Button>
            <Button className="rounded-full" variant="outline">
              Large
            </Button>
            <Button className="rounded-full" variant="outline">
              Extra Large
            </Button>
          </div>
        </div>
        <Separator className="my-5" />
        {/* ADD TO CART */}
        <div className="flex gap-3">
          <div className="bg-muted flex w-[120px] items-center justify-evenly gap-2 rounded-full p-1">
            <button className="cursor-pointer">
              <MinusIcon className="size-4" />
            </button>
            <span>1</span>
            <button className="cursor-pointer">
              <PlusIcon className="size-4" />
            </button>
          </div>
          <Button className="flex-1 rounded-full" size="lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
