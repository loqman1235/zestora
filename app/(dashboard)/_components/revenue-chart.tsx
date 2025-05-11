"use client";

import { TrendingUp } from "lucide-react";
import {
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

const chartData = [
  { month: "January", revenue: 1860 },
  { month: "February", revenue: 3050 },
  { month: "March", revenue: 2370 },
  { month: "April", revenue: 730 },
  { month: "May", revenue: 2090 },
  { month: "June", revenue: 2140 },
];

export const RevenueChart = () => {
  return (
    <div className="bg-card shadow-primary/5 flex w-full flex-col gap-4 rounded-lg p-4 shadow-sm transition-all hover:shadow-xl sm:p-6">
      <div>
        <h3 className="font-bold">Revenue</h3>
        <p className="text-muted-foreground text-sm">January – June 2025</p>
      </div>

      <div className="min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval="preserveStartEnd"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              formatter={(value) => `$${value}`}
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
              }}
              labelStyle={{ color: "var(--muted-foreground)" }}
            />
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary)"
                  stopOpacity={0.3}
                />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--primary)"
              strokeWidth={1}
              fill="url(#revenueGradient)"
              dot={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 text-sm">
        <div className="flex items-center gap-2 font-medium text-green-600">
          Revenue up by 5.2%
          <TrendingUp className="h-4 w-4" />
        </div>
        <p className="text-muted-foreground">
          Total revenue over the last 6 months
        </p>
      </div>
    </div>
  );
};
