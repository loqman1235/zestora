import { DataTable } from "@/components/global/data-table";
import { ordersColumns } from "./orders-columns";
import { getOrders } from "@/lib/db/orders";

export const OrdersTable = async () => {
  const raw = await getOrders();

  const ordersData = raw.map((order) => ({
    orderId: order.orderId,
    customer: order.user.name,
    amount: order.totalAmount,
    status: order.status,
    date: order.createdAt.toISOString(),
    user: order.user,
  }));

  return <DataTable columns={ordersColumns} data={ordersData} />;
};
