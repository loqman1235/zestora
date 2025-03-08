import { CustomBreadcrump } from "@/components/global/custom-breadcrump";
import { Separator } from "@/components/ui/separator";
import { FiltersMenu } from "./_components/filters-menu";

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
        <div className="flex-1">Products</div>
      </div>
    </div>
  );
};
export default ShopPage;
