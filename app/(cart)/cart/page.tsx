import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CartItem } from "./_components/cart-item";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const CartPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Separator />
      <Breadcrumb className="py-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-5">
        <h2 className="font-playfair text-2xl font-bold tracking-wide uppercase md:text-3xl">
          Your Cart
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="border-border col-span-2 rounded-xl border p-5">
            <CartItem />
            <CartItem />
            <CartItem />
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
                <span className="text-xl font-bold tracking-tighter">$100</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Input
                className="flex-1 rounded-full px-4"
                placeholder="Enter your coupon code"
              />
              <Button className="rounded-full" size="lg">
                Apply
              </Button>
            </div>

            <Button className="w-full rounded-full" size="lg">
              Go to checkout <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
