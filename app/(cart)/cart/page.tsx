import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { CustomBreadcrump } from "@/components/global/custom-breadcrump";
import { CartContent } from "./_components/cart-content";

export const metadata: Metadata = {
  title: "Cart",
  description:
    "Review and manage the items you have added to your shopping cart. Proceed to checkout or continue shopping for more great products.",
};

const CartPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Separator />
      <CustomBreadcrump
        paths={[{ label: "Home", href: "/" }, { label: "Cart" }]}
      />

      <div className="flex flex-col gap-5">
        <h2 className="font-playfair text-2xl font-bold tracking-wide uppercase md:text-3xl">
          Your Cart
        </h2>
        <CartContent />
      </div>
    </div>
  );
};
export default CartPage;
