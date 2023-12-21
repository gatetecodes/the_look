"use client";
import React from "react";
import { DataTable } from "./DataTable";
import { Button } from "../ui/button";
import { columns } from "./Columns";
import AddNew from "./AddNew";
import { IGlass } from "@/types/glass.types";
import { PlusIcon } from "lucide-react";

const Glasses = ({ glasses }: { glasses: IGlass[] }) => {
  const [showNewGlassDialog, setShowNewGlassDialog] = React.useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-3xl text-gray-600 font-bold mb-10">Glasses</h3>
        <Button
          onClick={() => setShowNewGlassDialog(true)}
          className="bg-primary text-white !h-12 px-6 flex items-center justify-center gap-2"
        >
          <PlusIcon size={18} />
          <p className="">Add New</p>
        </Button>
      </div>
      <DataTable columns={columns} data={glasses} />
      <AddNew
        showNewGlassDialog={showNewGlassDialog}
        setShowNewGlassDialog={setShowNewGlassDialog}
      />
    </>
  );
};

export default Glasses;
