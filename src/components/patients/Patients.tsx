"use client";
import React from "react";
import { IPatient } from "@/types/patient.types";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DataTable } from "../glasses/DataTable";
import { columns } from "./Columns";
import AddNew from "./AddNew";

const Patients = ({ patients }: { patients: any }) => {
  const [showNewPatientDialog, setShowNewPatientDialog] = React.useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-3xl text-gray-600 font-bold mb-10">Patients</h3>
        <Button
          onClick={() => setShowNewPatientDialog(true)}
          className="bg-primary text-white !h-12 px-6 flex items-center justify-center gap-2"
        >
          <PlusIcon size={18} />
          <p className="">Add New</p>
        </Button>
      </div>
      <DataTable columns={columns} data={patients} />
      <AddNew
        showNewPatientDialog={showNewPatientDialog}
        setShowNewPatientDialog={setShowNewPatientDialog}
      />
    </>
  );
};

export default Patients;
