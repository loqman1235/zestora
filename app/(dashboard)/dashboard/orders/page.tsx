import { CardContainer } from "../../_components/card-containter";
import { OrdersTable } from "./_components/orders-table";

const OrdersPage = () => {
  return (
    <CardContainer>
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
    </CardContainer>
  );
};
export default OrdersPage;
