"use client";

import { useCart } from "@/providers/cart-provider";
import { useSearchParams, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { CheckCircle2, LoaderCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PaymentSuccessPage = () => {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const token = searchParams.get("session_id");
  const [isCleared, setIsCleared] = useState(false);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  // Check token validity on mount
  // Validate token on mount
  useEffect(() => {
    if (!token) {
      redirect("/shop");
    }

    const validateToken = async () => {
      try {
        const response = await fetch(
          `/api/stripe/check-session?session_id=${token}`,
          { credentials: "include" },
        );
        const { isCompleted } = await response.json();
        setIsValidToken(isCompleted);
      } catch (error) {
        console.error(`Error validating token: ${error}`);
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  // Clear cart once token is verified
  useEffect(() => {
    if (!token || isCleared || isValidToken !== true) return;

    clearCart();
    localStorage.removeItem("cart");
    setIsCleared(true);
  }, [clearCart, isCleared, token, isValidToken]);

  // Show loading state until token is validated
  if (isValidToken === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoaderCircle className="size-6 animate-spin" aria-hidden="true" />
      </div>
    );
  }

  if (isValidToken === false) {
    redirect("/shop");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="border-border w-full max-w-md rounded-lg border bg-white p-6 text-center">
        <CheckCircle2
          className="mx-auto mb-3 h-12 w-12 animate-pulse text-green-500"
          aria-hidden="true"
        />
        <h1 className="mb-2 text-xl font-bold text-gray-900">
          Payment Successful!
        </h1>
        <p className="mb-4 text-base text-gray-600">
          Thank you for your purchase. Your order is confirmed, and you’ll
          receive a confirmation email soon.
        </p>
        <div className="mb-4 rounded-md bg-gray-100 p-3">
          <h2 className="mb-1 text-base font-semibold text-gray-800">
            Order Summary
          </h2>
          <p className="text-sm text-gray-600">
            Your order details have been sent to your email. Check your inbox
            (or spam folder) for more information.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/shop">
              <ShoppingBag className="mr-2 h-4 w-4" aria-hidden="true" />
              Continue Shopping
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/account/orders">View Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
