import { Metadata } from "next";
import { Sidebar } from "./_components/sidebar";
import { MainSection } from "./_components/main-section";
import SidebarProvider from "@/providers/sidebar-provider";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | Dashboard`,
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted relative flex min-h-screen w-full">
      <SidebarProvider>
        <Sidebar />
        <MainSection>{children}</MainSection>
      </SidebarProvider>
    </div>
  );
};
export default DashboardLayout;
