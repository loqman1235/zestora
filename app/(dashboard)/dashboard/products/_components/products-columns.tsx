"use client";

import { Button } from "@/components/ui/button";
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
      return (
        <Image
          src={row.getValue("thumbnail")}
          alt="product image"
          width={50}
          height={50}
        />
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
    header: "inventory",
    cell: ({ row }) => row.getValue("inventory"),
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => {
      const isActive = row.getValue("isActive") as boolean;
      return isActive ? "Yes" : "No";
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link
            href={`/shop/${row.original.category.slug}/${row.original.category.children.length > 0 ? row.original.category.children[0].slug : ""}/${row.original.slug}`}
            target="_blank"
          >
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
          onClick={() => console.log("delete", row.getValue("id"))}
          variant="destructive"
          size="sm"
        >
          <TrashIcon className="size-3" />
        </Button>
      </div>
    ),
  },
];
