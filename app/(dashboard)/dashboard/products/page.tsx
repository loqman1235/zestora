import { DataTable } from "@/components/global/data-table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { productsColumns } from "./_components/products-columns";

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

          <Button variant="default">
            <PlusIcon className="size-4" />
            Add Product
          </Button>
        </div>
      </div>
      <DataTable columns={productsColumns} data={[]} />
    </div>
  );
};

export default ProductsPage;
