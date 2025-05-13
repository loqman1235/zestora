"use client";

import { Badge } from "@/components/ui/badge";
import { formatStripePrice, getOrderStatusStyle } from "@/lib/utils";
import { LatestOrderColumnType } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";

export const latestOrdersColumns: ColumnDef<LatestOrderColumnType>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => formatStripePrice(row.getValue("amount") as number),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const { label, variant, className } = getOrderStatusStyle(status);

      return (
        <Badge variant={variant} className={className}>
          {label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) =>
      new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(row.getValue("date"))),
  },
];
