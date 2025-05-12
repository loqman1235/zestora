import { DataTable } from "@/components/global/data-table";
import { getLatestOrders } from "@/lib/db/orders";
import { latestOrdersColumns } from "./latest-orders-columns";

export const LatestOrdersTable = async () => {
  const raw = await getLatestOrders();

  const data = raw.map((order) => ({
    id: order.id,
    customer: order.user.name,
    amount: order.totalAmount,
    status: order.status,
    date: order.createdAt.toISOString(),
  }));

  return (
    <div className="bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6">
      <h2 className="font-bold">Latest Orders</h2>
      <DataTable className="h-full" data={data} columns={latestOrdersColumns} />
    </div>
  );
};
