import {
  GaugeIcon,
  LogOutIcon,
  LucideIcon,
  PackageCheckIcon,
  SettingsIcon,
  ShirtIcon,
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
    icon: GaugeIcon,
    label: "Dashboard",
  },
  {
    href: "/dashboard/products",
    icon: ShirtIcon,
    label: "Products",
  },
  {
    href: "/dashboard/orders",
    icon: PackageCheckIcon,
    label: "Orders",
  },
  {
    href: "/dashboard/tags",
    icon: TagsIcon,
    label: "Tags",
  },
];

export const dashboardSettings: DashboardNavigation[] = [
  {
    href: "/dashboard/settings",
    icon: SettingsIcon,
    label: "Settings",
  },
  {
    href: "/sign-out",
    icon: LogOutIcon,
    label: "Logout",
  },
];
