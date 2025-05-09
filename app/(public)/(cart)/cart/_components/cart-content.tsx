"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/providers/cart-provider";
import { formatPrice } from "@/lib/utils";
import { CartItem } from "./cart-item";
import { DISCOUNT, SHIPPING_FEE } from "@/config/consts";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CheckoutButton } from "./CheckoutButton";

export const CartContent = () => {
  const { data: session } = useSession();
  const { cart, subTotal, removeFromCart } = useCart();
  const total = formatPrice(subTotal + SHIPPING_FEE - DISCOUNT);

  return (
    <>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="border-border col-span-2 rounded-xl border p-5">
            {cart.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                {...cartItem}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="border-border flex h-fit flex-col gap-5 rounded-xl border p-5">
            <h4 className="text-xl font-bold">Order Summary</h4>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold"> {formatPrice(subTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount</span>
                <span className="text-destructive font-semibold">
                  -{formatPrice(DISCOUNT)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-semibold">
                  {formatPrice(SHIPPING_FEE)}
                </span>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-xl font-bold tracking-tighter">
                  {/* TOTAL PRICE HERE */}
                  {total}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Input
                className="flex-1 rounded-full px-4"
                placeholder="Enter your coupon code"
              />
              <Button
                className="rounded-full"
                size="lg"
                aria-label="Apply coupon button"
              >
                Apply
              </Button>
            </div>

            {session?.user ? (
              <CheckoutButton />
            ) : (
              <Button
                className="w-full rounded-full"
                size="lg"
                aria-label="Login button"
                asChild
              >
                <Link href="/sign-in">Sign In to checkout</Link>
              </Button>
            )}
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground">Your cart is empty</p>
      )}
    </>
  );
};
