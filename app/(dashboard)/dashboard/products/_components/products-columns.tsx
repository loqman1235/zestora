"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getProductHref } from "@/lib/utils";
import { ProductColumnType } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, ExternalLink, TrashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const productsColumns: ColumnDef<ProductColumnType>[] = [
  {
    accessorKey: "thumbnail",
    header: "Thumbnail",
    cell: ({ row }) => {
      const href = getProductHref(row.original);
      return (
        <Link href={href}>
          <Image
            src={row.getValue("thumbnail")}
            alt="product image"
            width={50}
            height={50}
          />
        </Link>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => `$${row.getValue("price")}`,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (row.getValue("category") as { name: string }).name,
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => (row.getValue("brand") as { name: string }).name,
  },
  {
    accessorKey: "inventory",
    header: "Inventory",
    cell: ({ row }) => row.getValue("inventory"),
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => {
      return (
        <Switch
          checked={row.original.isActive}
          onCheckedChange={() => console.log("toggle", row.original.id)}
        />
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const href = getProductHref(row.original);

      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link rel="canonical" href={href} target="_blank">
              <ExternalLink className="text-primary size-3" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/products/${row.original.id}/edit`}>
              <EditIcon className="text-primary size-3" />
            </Link>
          </Button>
          <Button
            type="button"
            onClick={() => console.log("delete", row.original.id)}
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

// const href=  getProductHref(row.original)
