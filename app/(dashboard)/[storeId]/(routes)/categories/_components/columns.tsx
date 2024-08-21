"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "@/app/(dashboard)/[storeId]/(routes)/categories/_components/cell-actions";

export type CategoryColumn = {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "billboardLabel", header: "Billboard" },
  { accessorKey: "createdAt", header: "Date" },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
