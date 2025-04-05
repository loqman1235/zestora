"use client";

import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
const CartProvider = dynamic(() => import("@/providers/cart-provider"), {
  ssr: false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
};
export default Providers;
