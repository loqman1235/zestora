"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useCart } from "@/providers/cart-provider";
import { formatPrice } from "@/lib/utils";
import { CartItem } from "./cart-item";

export const CartContent = () => {
  const { cart, total, removeFromCart } = useCart();

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
                <span className="font-semibold">$120</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount</span>
                <span className="text-destructive font-semibold">-$20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-semibold">$10</span>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-xl font-bold tracking-tighter">
                  {formatPrice(total)}
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

            <Button
              className="w-full rounded-full"
              size="lg"
              aria-label="Checkout button"
            >
              Go to checkout <ArrowRight />
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground">Your cart is empty</p>
      )}
    </>
  );
};
