import { ProductCard } from "./product-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductWithDetails } from "@/types";

interface SectionProps {
  title: string;
  products: ProductWithDetails[];
  href: string;
  className?: string;
}

export const Section = ({ title, products, href }: SectionProps) => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center gap-10 py-10">
      <h2 className="font-playfair text-2xl font-bold tracking-wide uppercase md:text-3xl">
        {title}
      </h2>

      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Button
        variant="outline"
        className="min-w-[180px] rounded-full"
        size="lg"
        asChild
      >
        <Link href={href}>View All</Link>
      </Button>
    </section>
  );
};
