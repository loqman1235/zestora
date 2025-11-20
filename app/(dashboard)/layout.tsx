import { Metadata } from "next";
import { Sidebar } from "./_components/sidebar";
import { MainSection } from "./_components/main-section";
import SidebarProvider from "@/providers/sidebar-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | Dashboard`,
  },
};

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/sign-in");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <div className="bg-muted relative flex min-h-screen w-full">
      <SessionProvider>
        <SidebarProvider>
          <Sidebar />
          <MainSection>{children}</MainSection>
        </SidebarProvider>
      </SessionProvider>
      <Toaster position="top-center" toastOptions={{ duration: 5000 }} />
    </div>
  );
};
export default DashboardLayout;
