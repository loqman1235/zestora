"use client";

import { StarRating } from "@/components/global/star-rating";
import { cn, formatPrice, isBrightColor } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckIcon, MinusIcon, PlusIcon } from "lucide-react";
import { ProductWithDetails } from "@/types";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ProductPreview } from "./product-preview";
import { useCart } from "@/providers/cart-provider";

interface ProductDetailsProps {
  product: ProductWithDetails;
}

const sizes = ["XS", "S", "M", "L", "XL"];

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0] || null,
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.variants[0]?.size);

  const handleSelectSize = (size: string) => setSelectedSize(size);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });

  const handleAddToCart = () => {
    if (product.variants.length > 0) {
      addToCart({
        id: selectedVariant.id,
        name: product.name,
        image: selectedVariant.images[0].url,
        size: selectedSize,
        color: selectedVariant.color,
        quantity,
        price: product.price,
      });
    } else {
      addToCart({
        id: product.id,
        name: product.name,
        image: product.images[0].url,
        size: selectedSize,
        quantity,
        price: product.price,
      });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {selectedVariant?.images ? (
        <ProductPreview images={selectedVariant.images.map((img) => img.url)} />
      ) : (
        <ProductPreview images={product.images.map((img) => img.url)} />
      )}
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

        {product.variants.length > 0 && (
          <>
            <div className="flex flex-col gap-3">
              <h3 className="text-muted-foreground">Select Colors</h3>
              <div className="flex items-center gap-2">
                {product?.variants?.map((variant) => (
                  <button
                    key={variant.id}
                    className={cn(
                      "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-1",
                      variant.color === selectedVariant?.color
                        ? "border-primary border"
                        : "",
                    )}
                    title={variant.color}
                    aria-label={variant.color}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    <span className="sr-only">{variant.color}</span>
                    <span
                      style={{ backgroundColor: variant.hex }}
                      className="flex h-full w-full items-center justify-center rounded-full"
                    >
                      {variant.color === selectedVariant?.color && (
                        <CheckIcon
                          className={cn(
                            "size-3",
                            isBrightColor(variant.hex)
                              ? "text-primary"
                              : "text-white",
                          )}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <Separator className="my-5" />
          </>
        )}

        {/* SELECT SIZE */}
        <div className="flex flex-col gap-3">
          <h3 className="text-muted-foreground">Choose Size</h3>
          <div className="flex items-center gap-2">
            {sizes.map((size) => (
              <Button
                onClick={() => handleSelectSize(size)}
                key={size}
                className="rounded-full"
                variant={selectedSize === size ? "default" : "outline"}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        <Separator className="my-5" />
        {/* ADD TO CART */}
        <div className="flex gap-3">
          <div className="bg-muted flex w-[120px] items-center justify-evenly gap-2 rounded-full p-1">
            <button className="cursor-pointer">
              <MinusIcon onClick={decrementQuantity} className="size-4" />
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity} className="cursor-pointer">
              <PlusIcon className="size-4" />
            </button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="flex-1 rounded-full"
            size="lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
