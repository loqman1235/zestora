import { Metadata } from "next";
import { MetricCard } from "../_components/metric-card";
import { BoxIcon, DollarSign, PackageIcon, UsersIcon } from "lucide-react";

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
        isRevenue
      />
      <MetricCard
        title="Products"
        total={345}
        icon={BoxIcon}
        percentage={-5.22}
      />
      <MetricCard
        title="Orders"
        total={200}
        icon={PackageIcon}
        percentage={10.22}
      />
      <MetricCard
        title="Customers"
        total={423}
        icon={UsersIcon}
        percentage={-12.35}
      />
    </div>
  );
};
export default DashboardPage;
