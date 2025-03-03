import { Product } from "@/types";
import { ProductCard } from "./product-card";
import { Button } from "../ui/button";

interface SectionProps {
  title: string;
  products: Product[];
  className?: string;
}

export const Section = ({ title, products }: SectionProps) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl justify-center px-5 pt-16 md:px-20">
      <section className="flex w-full flex-col items-center gap-10">
        <h2 className="font-playfair text-3xl font-bold">{title}</h2>

        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <Button variant="outline" className="rounded-full" size="lg">
          View All
        </Button>
      </section>
    </div>
  );
};
