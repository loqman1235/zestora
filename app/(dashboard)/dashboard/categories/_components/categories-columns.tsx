import { CategoryColumnType } from "@/types/category";
import { ColumnDef } from "@tanstack/react-table";

export const categoriesColumns: ColumnDef<CategoryColumnType>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "parent",
    header: "Parent",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
