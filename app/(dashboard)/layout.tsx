import { Metadata } from "next";
import { Sidebar } from "./_components/sidebar";
import { MainSection } from "./_components/main-section";
import SidebarProvider from "@/providers/sidebar-provider";
import { Toaster } from "sonner";

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
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
    </div>
  );
};
export default DashboardLayout;
