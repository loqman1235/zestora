"use client";

import { useSidebar } from "@/providers/sidebar-provider";

export const SidebarToggle = () => {
  const { toggle } = useSidebar();
  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:text-primary cursor-pointer transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
        />
      </svg>
    </button>
  );
};
