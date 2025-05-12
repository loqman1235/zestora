import { OrderColumnType } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";

export const ordersColumns: ColumnDef<OrderColumnType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
];
