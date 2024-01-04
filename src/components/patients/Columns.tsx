"use client";

import { IPatient } from "@/types/patient.types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Edit2Icon, DeleteIcon, ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ServiceStatus } from "@prisma/client";

const handleEdit = (row: any) => {
  console.log(row);
};

const handleDelete = (row: any) => {
  console.log(row);
};

const handleOrder = (row: any) => {
  console.log(row);
};

export const columns: ColumnDef<IPatient>[] = [
  {
    accessorKey: "updatedAt",
    header: "Date",
    cell: ({ getValue }) => {
      const value = "" + getValue();
      return format(new Date(value), "dd-MM-yyyy");
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ getValue }) => {
      const value = "" + getValue();
      return <p className="text-primary font-semibold">{value}</p>;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    // cell: ({ getValue }) => {
    //   const value = "" + getValue();
    //   return <p className="text-primary">{value}</p>;
    // },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "rightEye",
    header: "Right Eye",
    cell: ({ getValue }: { getValue: any }) => {
      const value = JSON.parse("" + getValue());
      return Object.keys(value).map((key) => {
        return (
          <div className="flex items-center gap-2 font-semibold" key={key}>
            <p className="capitalize">{key}</p>
            <p className="">{value[key]}</p>
          </div>
        );
      });
    },
  },
  {
    accessorKey: "leftEye",
    header: "Left Eye",
    cell: ({ getValue }: { getValue: any }) => {
      const value = JSON.parse("" + getValue());
      return Object.keys(value).map((key) => {
        return (
          <div className="flex items-center gap-2 font-semibold" key={key}>
            <p className="capitalize">{key}</p>
            <p className="">{value[key]}</p>
          </div>
        );
      });
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const value = ("" + getValue()) as ServiceStatus;
      return (
        <div
          className={`${
            value === "WAITING_FOR_GLASSES"
              ? "bg-orange-100 text-orange-400"
              : value === "GLASSES_READY"
              ? "bg-sky-100 text-sky-500"
              : value === "GLASSES_PICKED_UP"
              ? "bg-green-100 text-green-600"
              : ""
          } rounded py-1 px-3 capitalize text-sm`}
        >
          {value.replaceAll("_", " ").toLowerCase()}
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="p-0"
            onClick={() => handleEdit(row)}
          >
            <Edit2Icon />
          </Button>
          <Button variant="ghost" className="p-0">
            <DeleteIcon className="text-red-500" />
          </Button>
          <Button variant="ghost" className="p-0">
            <ShoppingBagIcon className="text-primary" />
          </Button>
        </div>
      );
    },
  },
];
