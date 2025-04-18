"use client";

import { useCart } from "@/providers/cart-provider";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentSuccessPage = () => {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [isCleared, setIsCleared] = useState(false);

  useEffect(() => {
    if (!sessionId || isCleared) return;

    const checkSession = async () => {
      try {
        const response = await fetch(
          `/api/stripe/check-session?session_id=${sessionId}`,
        );
        const { isCompleted } = await response.json();
        if (isCompleted) {
          clearCart();
          setIsCleared(true);
        }
      } catch (error) {
        console.error(`Error checking session: ${error}`);
      }
    };

    checkSession();
  }, [clearCart, isCleared, sessionId]);

  return (
    <div>
      <h1>Payment successful!</h1>
      <p>Thank you for your purchase.</p>
    </div>
  );
};
export default PaymentSuccessPage;
