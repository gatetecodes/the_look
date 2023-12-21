import Patients from "@/components/patients/Patients";
import { getPatients } from "@/lib/actions/patient.action";
import React from "react";

const page = async () => {
  const patients = await getPatients();
  return (
    <div className="container mx-auto py-10">
      <Patients patients={patients} />
    </div>
  );
};

export default page;
