import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { CategoriesTable } from "./_components/categories-table";
import { CardContainer } from "../../_components/card-containter";

const CategoriesPage = () => {
  return (
    <CardContainer>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">Categories</h3>
            <p className="text-muted-foreground text-sm">
              Add, update, or remove categories from your store.
            </p>
          </div>

          <Button variant="default" asChild>
            <Link href="/dashboard/categories/new">
              <PlusIcon className="size-4" />
              Add Category
            </Link>
          </Button>
        </div>
      </div>

      <CategoriesTable />
    </CardContainer>
  );
};
export default CategoriesPage;
