"use client";

import { formatPrice } from "@/lib/utils";
import { useCart } from "@/providers/cart-provider";
import { CartItemType } from "@/types/cart";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";

interface CartItemProps extends CartItemType {
  removeFromCart: (id: string) => void;
}

export const CartItem = ({
  id,
  name,
  image,
  size,
  color,
  quantity,
  price,
  removeFromCart,
}: CartItemProps) => {
  const { decrementQuantity, incrementQuantity } = useCart();
  return (
    <div className="border-b-border flex items-center gap-4 border-b py-5 first:pt-0 last:border-b-0 last:pb-0">
      {/* IMAGE */}
      <div className="bg-muted relative size-32 overflow-hidden rounded-lg">
        <Image
          src={image}
          className="h-full w-full object-cover"
          alt={name}
          fill
        />
      </div>
      {/* CONTENT */}
      <div className="flex min-h-[128px] flex-1 flex-col items-start">
        <div className="flex w-full items-start justify-between">
          <div>
            <h3 className="text-lg font-bold capitalize">{name}</h3>
            <p>
              Size: <span className="text-muted-foreground">{size}</span>
            </p>
            <p>
              Color: <span className="text-muted-foreground">{color}</span>
            </p>
          </div>
          <button
            onClick={() => removeFromCart(id)}
            className="bg-destructive/10 hover:bg-destructive/20 cursor-pointer rounded-full p-2 transition"
            aria-label="Delete"
          >
            <Trash2Icon className="text-destructive size-4" />
          </button>
        </div>
        <div className="mt-auto flex w-full items-center justify-between">
          <h3 className="text-xl font-bold tracking-tighter">
            {formatPrice(price)}
          </h3>
          <div className="bg-muted flex w-[120px] items-center justify-evenly gap-2 rounded-full p-1">
            <button
              onClick={() => decrementQuantity(id)}
              className="cursor-pointer"
              aria-label="Minus item"
            >
              <MinusIcon className="size-4" />
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => incrementQuantity(id)}
              className="cursor-pointer"
              aria-label="Plus item"
            >
              <PlusIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
