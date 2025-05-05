"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";
import { DashboardNavbar } from "./dashboard-navbar";

export const MainSection = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSidebar();
  return (
    <main
      className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        isOpen ? "ml-[var(--dashboard-sidebar-width)]" : "ml-0",
      )}
    >
      <DashboardNavbar />

      <div className="p-5">{children}</div>
    </main>
  );
};
