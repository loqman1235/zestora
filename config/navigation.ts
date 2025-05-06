import {
  BoxIcon,
  CircleHelp,
  LayersIcon,
  LayoutDashboard,
  LogOutIcon,
  LucideIcon,
  PackageIcon,
  SettingsIcon,
  TagsIcon,
} from "lucide-react";

export type MainNavigation = {
  name: string;
  href: string;
};

export type DashboardNavigation = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export const mainNavigation: MainNavigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "On Sale",
    href: "/on-sale",
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    name: "Brands",
    href: "/brands",
  },
];

export const dashboardMenu: DashboardNavigation[] = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/dashboard/products",
    icon: BoxIcon,
    label: "Products",
  },
  {
    href: "/dashboard/orders",
    icon: PackageIcon,
    label: "Orders",
  },
  {
    href: "/dashboard/categories",
    icon: TagsIcon,
    label: "Categories",
  },
  {
    href: "/dashboard/brands",
    icon: LayersIcon,
    label: "Brands",
  },
];

export const dashboardSettings: DashboardNavigation[] = [
  {
    href: "/dashboard/settings",
    icon: SettingsIcon,
    label: "Settings",
  },
  {
    href: "/dashboard/help",
    icon: CircleHelp,
    label: "Help & Support",
  },
  {
    href: "/sign-out",
    icon: LogOutIcon,
    label: "Logout",
  },
];
