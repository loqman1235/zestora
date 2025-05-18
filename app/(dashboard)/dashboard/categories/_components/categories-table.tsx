import { DataTable } from "@/components/global/data-table";
import { categoriesColumns } from "./categories-columns";
import { getCategories } from "@/lib/db/categories";

export const CategoriesTable = async () => {
  const categories = await getCategories();

  return <DataTable columns={categoriesColumns} data={categories} />;
};
