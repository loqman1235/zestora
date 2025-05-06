import { cn, formatPrice } from "@/lib/utils";
import { LucideIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { createElement } from "react";

type Props = {
  total: number;
  title: string;
  icon: LucideIcon;
  percentage?: number;
  isRevenue?: boolean;
};

export const MetricCard = ({
  title,
  icon,
  total,
  percentage,
  isRevenue = false,
}: Props) => {
  const isPositive = percentage && percentage > 0;

  return (
    <div className="bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold">Total {title}</h3>
          <p className="text-muted-foreground text-sm">Last 30 days</p>
        </div>
        <span
          className={cn(
            "bg-muted text-muted-foreground flex size-10 items-center justify-center rounded-full",
          )}
        >
          {icon && createElement(icon, { className: "size-5" })}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold tracking-tight">
          {isRevenue ? `${formatPrice(total)}` : `${total}`}
        </p>
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUpIcon className="size-4 text-green-500" />
          ) : (
            <TrendingDownIcon className="text-destructive size-4" />
          )}
          <p
            className={`text-xs font-bold ${isPositive ? "text-green-500" : "text-destructive"}`}
          >
            {isPositive && "+"}
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};
