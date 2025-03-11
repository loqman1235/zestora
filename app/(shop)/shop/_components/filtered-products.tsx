import { ProductCard } from "@/components/global/product-card";
import { Button } from "@/components/ui/button";
import { newArrivals, topSelling } from "@/mocks/products";
import { SlidersVertical } from "lucide-react";

const allProducts = [...newArrivals, ...topSelling];

interface FilteredProductsProps {
  filters: {
    categories?: string[];
    genders?: string[];
    sizes?: string[];
    colors?: string[];
    minPrice?: number;
    maxPrice?: number;
  };
}

export const FilteredProducts = ({ filters }: FilteredProductsProps) => {
  console.log("filters", filters);

  return (
    <div className="flex-1 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">All Products</h2>

        <Button
          variant="secondary"
          className="flex size-8 cursor-pointer items-center justify-center rounded-full md:hidden"
        >
          <SlidersVertical className="size-4" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {allProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}

        {/* TODO: ADD PAGINATION HERE OR MORE BUTTON */}
      </div>
    </div>
  );
};
