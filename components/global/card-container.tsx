import { cn } from "@/lib/utils";
import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <div
      className={cn(
        "bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
};
