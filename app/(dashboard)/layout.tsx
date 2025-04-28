import { Metadata } from "next";
import React from "react";
import { Sidebar } from "./_components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s | Dashboard`,
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};
export default DashboardLayout;
