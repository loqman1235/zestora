import { Button } from "@/components/ui/button";
import { CardContainer } from "@/components/global/card-container";
import Link from "next/link";
import { PlusIcon } from "lucide-react";
import { BrandsTable } from "./_components/brand-table";

const BrandsPage = () => {
  return (
    <CardContainer>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">Brands</h3>
            <p className="text-muted-foreground text-sm">
              Add, update, or remove brands from your store.
            </p>
          </div>

          <Button variant="default" asChild>
            <Link href="/dashboard/brands/new">
              <PlusIcon className="size-4" />
              Add Brand
            </Link>
          </Button>
        </div>
      </div>

      <BrandsTable />
    </CardContainer>
  );
};
export default BrandsPage;
