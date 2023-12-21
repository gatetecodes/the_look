"use server";
import { ICreatePatientParams } from "@/types/patient.types";
import { db } from "../db";
import { revalidatePath } from "next/cache";

export const createPatient = async ({
  name,
  email,
  phone,
  dateOfBirth,
  address,
  leftEye,
  rightEye,
}: ICreatePatientParams) => {
  try {
    await db.patient.create({
      data: {
        name,
        email,
        phone,
        dateOfBirth,
        address,
        leftEye: JSON.stringify(leftEye),
        rightEye: JSON.stringify(rightEye),
      },
    });
    revalidatePath("/dashboard/patients");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPatients = async () => {
  try {
    const patients = await db.patient.findMany();
    return patients;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
