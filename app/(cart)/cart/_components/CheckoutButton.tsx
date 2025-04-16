import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CheckoutButton = () => {
  return (
    <Button
      className="w-full rounded-full"
      size="lg"
      aria-label="Checkout button"
    >
      Go to checkout <ArrowRight />
    </Button>
  );
};
