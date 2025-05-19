import { DataTable } from "@/components/global/data-table";
import { getBrands } from "@/lib/db/brands";
import { brandsColumns } from "./brands-columns";

export const BrandsTable = async () => {
  const brands = await getBrands();

  return <DataTable columns={brandsColumns} data={brands} />;
};
