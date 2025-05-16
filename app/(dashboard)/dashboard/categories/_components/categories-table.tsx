import { DataTable } from "@/components/global/data-table";
import { categoriesColumns } from "./categories-columns";

export const CategoriesTable = () => {
  return <DataTable columns={categoriesColumns} data={[]} />;
};
