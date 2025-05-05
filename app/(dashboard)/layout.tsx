import { Metadata } from "next";
import { Sidebar } from "./_components/sidebar";
import { DashboardNavbar } from "./_components/dashboard-navbar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | Dashboard`,
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <DashboardNavbar />

        <div className="p-5">{children}</div>
      </main>
    </div>
  );
};
export default DashboardLayout;
