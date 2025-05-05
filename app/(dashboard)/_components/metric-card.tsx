import { cn, formatPrice } from "@/lib/utils";
import { LucideIcon, TrendingUpIcon } from "lucide-react";
import { createElement } from "react";

type Props = {
  total: number;
  title: string;
  icon: LucideIcon;
  color: string;
  percentage?: number;
  isRevenue?: boolean;
};

export const MetricCard = ({
  title,
  icon,
  total,
  percentage,
  color,
  isRevenue = false,
}: Props) => {
  return (
    <div className="bg-card flex w-full flex-col gap-4 rounded-lg p-4 shadow sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold">Total {title}</h3>
          <p className="text-muted-foreground text-sm">Last 30 days</p>
        </div>
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-full",
          )}
          style={{ backgroundColor: `${color}1A`, color }}
        >
          {icon && createElement(icon, { className: "size-5" })}
        </span>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold">
          {isRevenue ? `${formatPrice(total)}` : `${total}`}
        </p>
        <div className="flex items-center gap-1">
          <TrendingUpIcon className="size-4 text-green-500" />
          <p className="text-xs font-semibold text-green-500">{percentage}%</p>
        </div>
      </div>
    </div>
  );
};
