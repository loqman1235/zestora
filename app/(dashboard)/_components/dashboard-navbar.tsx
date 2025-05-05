import { BellIcon, MailIcon } from "lucide-react";
import { UserAvatar } from "@/components/global/user-avatar";
import { SidebarToggle } from "./sidebar-toggle";

export const DashboardNavbar = () => {
  return (
    <nav className="shadow-primary/5 flex h-[var(--dashboard-nav-height)] w-full items-center justify-between bg-[var(--dashboard-nav-bg)] px-5 shadow-md">
      {/* TOGGLE SIDEBAR BTN */}
      <SidebarToggle />

      <div className="flex items-center gap-5">
        <button className="text-muted-foreground hover:text-primary cursor-pointer">
          <BellIcon className="size-6" />
        </button>

        <button className="text-muted-foreground hover:text-primary cursor-pointer">
          <MailIcon className="size-6" />
        </button>

        {/* USER PROFILE */}
        <UserAvatar user={{ name: "John Doe", email: "5mY3b@example.com" }} />
      </div>
    </nav>
  );
};
