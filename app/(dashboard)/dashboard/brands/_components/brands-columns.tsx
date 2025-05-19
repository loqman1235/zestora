"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BrandColumnType } from "@/types/brand";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export const brandsColumns: ColumnDef<BrandColumnType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "website",
    header: "Website",
    cell: ({ row }) => {
      const href = row.original.website;

      if (href) {
        return (
          <a
            className="underline"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {href}
          </a>
        );
      } else {
        return <span>-</span>;
      }
    },
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
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/dashboard/brands/${row.original.id}/edit`}>
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
