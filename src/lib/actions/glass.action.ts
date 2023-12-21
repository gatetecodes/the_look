"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db";
import { CreateGlassParams } from "@/types/glass.types";

export const createGlass = async ({
  glassType,
  glassCategory,
  cylinder,
  sphere,
  quantity,
  purchaseCostPerGlass,
}: CreateGlassParams) => {
  try {
    await db.glass.create({
      data: {
        type: glassType,
        category: glassCategory,
        cylinder: +cylinder,
        sphere: +sphere,
        quantity: +quantity,
        purchaseCost: +purchaseCostPerGlass,
        purchaseDate: new Date(),
      },
    });
    revalidatePath("/dashboard/glasses");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getGlasses = async () => {
  try {
    const glasses = (await db.glass.findMany()).sort((a, b) =>
      a.purchaseDate > b.purchaseDate ? -1 : 1
    );
    return glasses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
