import { OrdersTable } from "./_components/orders-table";

const OrdersPage = () => {
  return (
    <div className="bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">Orders</h3>
            <p className="text-muted-foreground text-sm">
              Manage orders, track shipments, and view sales reports.
            </p>
          </div>
        </div>
      </div>

      <OrdersTable />
    </div>
  );
};
export default OrdersPage;
