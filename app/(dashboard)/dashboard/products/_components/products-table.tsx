import { DataTable } from "@/components/global/data-table";
import { productsColumns } from "./products-columns";
import { getProducts } from "@/lib/db/products";

export const ProductsTable = async () => {
  const productsData = await getProducts();

  console.log(productsData);

  return <DataTable columns={productsColumns} data={productsData} />;
};
