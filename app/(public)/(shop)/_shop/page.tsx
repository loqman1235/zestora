// import { CustomBreadcrump } from "@/components/global/custom-breadcrump";
// import { Separator } from "@/components/ui/separator";
// import { FiltersMenu } from "./_components/filters-menu";
// // import { FilteredProducts } from "./_components/filtered-products";

// interface SearchParams {
//   categories?: string;
//   genders?: string;
//   sizes?: string;
//   colors?: string;
//   minPrice?: string;
//   maxPrice?: string;
// }

// const ShopPage = async (
//   {
//     // searchParams,
//   }: {
//     searchParams: Promise<SearchParams>;
//   },
// ) => {
//   // const params = await searchParams;

//   // const filters = {
//   //   categories: params.categories?.split(",") || [],
//   //   genders: params.genders?.split(",") || [],
//   //   sizes: params.sizes?.split(",") || [],
//   //   colors: params.colors?.split(",") || [],
//   //   minPrice: parseInt(params.minPrice || "0"),
//   //   maxPrice: parseInt(params.maxPrice || "500"),
//   // };

//   // TODO: ADD SHOP PAGE
//   return (
//     <div className="mx-auto max-w-7xl px-5 md:px-20">
//       <Separator />
//       <CustomBreadcrump
//         paths={[{ label: "Home", href: "/" }, { label: "Shop" }]}
//       />

//       <div className="flex gap-10">
//         {/* FILTERS MENU */}
//         <FiltersMenu />
//         {/* PRODUCTS */}
//         {/* <FilteredProducts filters={filters} /> */}
//       </div>
//     </div>
//   );
// };
// export default ShopPage;
