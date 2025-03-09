import { CustomBreadcrump } from "@/components/global/custom-breadcrump";
import { Separator } from "@/components/ui/separator";
import { FiltersMenu } from "./_components/filters-menu";
import { FilteredProducts } from "./_components/filtered-products";

const ShopPage = () => {
  // TODO: ADD SHOP PAGE
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Separator />
      <CustomBreadcrump
        paths={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <div className="flex gap-10">
        {/* FILTERS MENU */}
        <FiltersMenu />
        {/* PRODUCTS */}
        <FilteredProducts />
      </div>
    </div>
  );
};
export default ShopPage;
