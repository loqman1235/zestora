"use client";

import { Brand } from "@/components/global/brand";
import { dashboardMenu, dashboardSettings } from "@/config/navigation";
import { SidebarSection } from "./sidebar-section";
import { SidebarLink } from "./sidebar-link";
import { useSidebar } from "@/providers/sidebar-provider";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const { isOpen } = useSidebar();
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-50 h-screen w-[16rem] bg-[var(--dashboard-sidebar-bg)] px-2.5 text-[var(--dashboard-sidebar-fg)] transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
      aria-label="Sidebar"
    >
      <div className="flex h-16 items-center gap-2 px-2.5 py-5">
        <Brand className="text-primary md:text-2xl" />
      </div>

      <div className="flex h-[calc(100%-4rem)] flex-col pb-5">
        <SidebarSection title="Menu">
          {dashboardMenu.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={<item.icon className="mr-2 size-3 md:size-4" />}
              label={item.label}
            />
          ))}
        </SidebarSection>

        <div className="mt-auto">
          <SidebarSection title="Settings">
            {dashboardSettings.map((item) => (
              <SidebarLink
                key={item.href}
                href={item.href}
                icon={<item.icon className="mr-2 size-3 md:size-4" />}
                label={item.label}
              />
            ))}
          </SidebarSection>
        </div>
      </div>
    </aside>
  );
};
