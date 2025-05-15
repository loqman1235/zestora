"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatStripePrice, getOrderStatusStyle } from "@/lib/utils";
import { OrderColumnType } from "@/types/order";
import { ColumnDef } from "@tanstack/react-table";
import { DownloadIcon, EditIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export const ordersColumns: ColumnDef<OrderColumnType>[] = [
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
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const address =
        row.original.shippingAddress &&
        row.original.shippingAddress.addressLine1;
      return address || "N/A";
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    // create download order button, delete order , edit order
    cell: ({ row }) => {
      const orderId = row.original.orderId;
      const handleDownload = () => {
        const downloadUrl = `/api/orders/${orderId}/download`;
        window.location.href = downloadUrl;
      };

      return (
        <div className="flex gap-2">
          <Button onClick={handleDownload} variant="outline" size="sm">
            <DownloadIcon className="text-primary size-3" />
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/products/${row.original.orderId}/edit`}>
              <EditIcon className="text-primary size-3" />
            </Link>
          </Button>
          <Button
            type="button"
            onClick={() => console.log("delete", row.original.orderId)}
            variant="destructive"
            size="sm"
          >
            <TrashIcon className="size-3" />
          </Button>
        </div>
      );
    },
  },
];
