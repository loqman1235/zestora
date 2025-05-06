"use client";

import { ColumnDef } from "@tanstack/react-table";

type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  createdAt: string;
};

export const ordersColumns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "isPaid",
    header: "Paid",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
