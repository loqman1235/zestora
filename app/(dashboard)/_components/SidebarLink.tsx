"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const SidebarLink = ({
  href,
  icon,
  label,
  className,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={cn(
          "text-muted-foreground flex items-center px-5 py-2 transition hover:bg-[var(--dashboard-sidebar-hover-bg)] hover:text-[var(--dashboard-sidebar-fg)]",
          isActive &&
            "!bg-[var(--dashboard-sidebar-hover-bg)] text-[var(--dashboard-sidebar-fg)]",
          className,
        )}
        href={href}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};
