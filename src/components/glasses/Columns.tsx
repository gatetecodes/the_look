"use client";

import { IGlass } from "@/types/glass.types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

export const columns: ColumnDef<IGlass>[] = [
  {
    accessorKey: "purchaseDate",
    header: "Entry Date",
    cell: ({ getValue }) => {
      const value = "" + getValue();
      return format(new Date(value), "dd-MM-yyyy");
    },
  },
  {
    accessorKey: "type",
    header: "Lens Type",
  },
  {
    accessorKey: "category",
    header: "Lens Category",
  },
  {
    accessorKey: "cylinder",
    header: "Cylinder",
  },
  {
    accessorKey: "sphere",
    header: "Sphere",
  },
  // {
  //   accessorKey: "axis",
  //   header: "Axis",
  // },
  // {
  //   accessorKey: "add",
  //   header: "Add",
  // },
  // {
  //   accessorKey: "pd",
  //   header: "PD",
  // },
  {
    accessorKey: "purchaseCost",
    header: "Item Cost (RWF)",
    cell: ({ getValue }) => {
      const value = "" + getValue();
      return (+value).toLocaleString();
    },
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
  },

  {
    accessorKey: "",
    header: "Total Cost (RWF)",
    cell: ({ row }) => {
      const quantity = row.original.quantity;
      const purchaseCost = row.original.purchaseCost;
      return (quantity * purchaseCost).toLocaleString();
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
  },
];
