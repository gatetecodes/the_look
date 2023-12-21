import zod from "zod";

export const glassSchema = zod.object({
  glassType: zod.string().min(1, "Glass type is required"),
  glassCategory: zod.string().min(1, "Glass category is required"),
  cylinder: zod.string().min(1, "Cylinder is required"),
  sphere: zod.string().min(1, "Sphere is required"),
  quantity: zod.string().min(1, "Quantity is required"),
  purchaseCostPerGlass: zod.string().min(1, "Purchase cost is required"),
});
