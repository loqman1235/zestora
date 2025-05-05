import { Metadata } from "next";
import { MetricCard } from "../_components/metric-card";
import { BoxIcon, DollarSign, PackageIcon, Users2Icon } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
};

const DashboardPage = () => {
  return (
    // Metrics Cards (Sales, Products, Orders, Customers)
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-4">
      <MetricCard
        title="Revenue"
        total={243.99}
        icon={DollarSign}
        percentage={45.21}
        color="#22c55e"
        isRevenue
      />
      <MetricCard
        title="Products"
        total={345}
        icon={BoxIcon}
        color="#3b82f6"
        percentage={5.22}
      />
      <MetricCard
        title="Orders"
        total={200}
        icon={PackageIcon}
        color="#f59e0b"
        percentage={10.22}
      />
      <MetricCard
        title="Customers"
        total={423}
        icon={Users2Icon}
        color="#ef4444"
        percentage={12.35}
      />
    </div>
  );
};
export default DashboardPage;
