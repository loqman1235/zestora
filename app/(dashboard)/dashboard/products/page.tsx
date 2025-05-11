import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ProductsTable } from "./_components/products-table";

const ProductsPage = () => {
  return (
    <div className="bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">Products</h3>
            <p className="text-muted-foreground text-sm">
              Add, update, or remove products from your store.
            </p>
          </div>

          <Button variant="default" asChild>
            <Link href="/dashboard/products/new">
              <PlusIcon className="size-4" />
              Add Product
            </Link>
          </Button>
        </div>
      </div>
      <ProductsTable />
    </div>
  );
};

export default ProductsPage;
