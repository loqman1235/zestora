"use client";

import { useCart } from "@/providers/cart-provider";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export const CartLink = () => {
  const { cart } = useCart();
  const cartLength = cart.length;

  return (
    <Link className="relative block" href="/cart">
      <ShoppingCartIcon />
      {cartLength > 0 && (
        <span className="bg-destructive absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-xs text-white">
          {cartLength}
        </span>
      )}
    </Link>
  );
};
