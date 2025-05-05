import { Brand } from "@/components/global/brand";
import { dashboardMenu, dashboardSettings } from "@/config/navigation";
import { SidebarSection } from "./sidebar-section";
import { SidebarLink } from "./sidebar-link";

export const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar-bg h-screen w-[16rem] bg-[var(--dashboard-sidebar-bg)] px-2.5 text-[var(--dashboard-sidebar-fg)]">
      <div className="flex h-16 items-center gap-2 px-2.5 py-5">
        <Brand className="md:text-2xl" />
      </div>

      <div className="flex h-[calc(100%-4rem)] flex-col pb-5">
        <SidebarSection title="Menu">
          {dashboardMenu.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={<item.icon className="mr-2 size-5" />}
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
                icon={<item.icon className="mr-2 size-5" />}
                label={item.label}
              />
            ))}
          </SidebarSection>
        </div>
      </div>
    </aside>
  );
};
