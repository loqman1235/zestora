"use client";

import dynamic from "next/dynamic";

const CartProvider = dynamic(() => import("@/providers/cart-provider"), {
  ssr: false,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};
export default Providers;
