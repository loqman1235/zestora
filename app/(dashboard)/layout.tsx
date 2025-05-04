import { Metadata } from "next";
import React from "react";
import { Sidebar } from "./_components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | Dashboard`,
  },
};

// TODO: Create dashboard layout
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
};
export default DashboardLayout;
