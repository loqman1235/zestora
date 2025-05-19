"use client";

// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CategoryColumnType } from "@/types/category";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export const categoriesColumns: ColumnDef<CategoryColumnType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.original.description;
      return description || "N/A";
    },
  },

  {
    accessorKey: "parent",
    header: "Parent",
    cell: ({ row }) => {
      const parent = row.original.parent;
      return parent ? parent.name : "N/A";
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
            <Link href={`/dashboard/categories/${row.original.id}/edit`}>
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
