import { DataTable } from "@/components/global/data-table";
import { ordersColumns } from "./orders-columns";

export const OrdersTable = () => {
  return <DataTable columns={ordersColumns} data={[]} />;
};
