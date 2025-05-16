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
          "text-muted-foreground hover:text-primary flex items-center rounded-md px-2.5 py-2 transition hover:bg-[var(--dashboard-sidebar-hover-bg)]",
          isActive && "text-primary !bg-[var(--dashboard-sidebar-hover-bg)]",
          className,
        )}
        href={href}
      >
        {icon}
        <span className="text-sm font-semibold tracking-wide md:text-[15px]">
          {label}
        </span>
      </Link>
    </li>
  );
};
