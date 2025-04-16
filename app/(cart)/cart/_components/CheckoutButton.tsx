"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/providers/cart-provider";
import { useState } from "react";
import { DISCOUNT, SHIPPING_FEE } from "@/config/consts";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

export const CheckoutButton = () => {
  const { cart, subTotal } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Send cart, shipping, and discount to your API
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart,
          shippingFee: SHIPPING_FEE,
          discount: DISCOUNT,
          subTotal,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({ sessionId });

      if (error) {
        console.error("Stripe redirect error:", error);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className="w-full rounded-full"
      size="lg"
      aria-label="Checkout button"
      disabled={loading || cart.length === 0}
      onClick={handleCheckout}
    >
      {loading ? (
        "Processing..."
      ) : (
        <>
          Checkout <ArrowRight />
        </>
      )}
    </Button>
  );
};
