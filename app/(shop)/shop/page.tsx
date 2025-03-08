import { CustomBreadcrump } from "@/components/global/custom-breadcrump";
import { Separator } from "@/components/ui/separator";

const ShopPage = () => {
  // TODO: ADD SHOP PAGE
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-20">
      <Separator />
      <CustomBreadcrump
        paths={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
    </div>
  );
};
export default ShopPage;
