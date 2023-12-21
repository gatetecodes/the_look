"use client";

import { IPatient } from "@/types/patient.types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

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
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ getValue }) => {
      const value = "" + getValue();
      return <p className="text-primary">{value}</p>;
    },
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
    // cell: ({ getValue }) => {
    //   const value = "" + getValue();
    //   return JSON.parse(value);
    // ?.map((item: any) => (
    // <p key={item.name} className="text-primary">
    //   {item.name} : {item.value}
    // </p>
    // ));
    // },
  },
  {
    accessorKey: "leftEye",
    header: "Left Eye",
  },
];
