import zod from "zod";

export const patientSchema = zod.object({
  firstName: zod.string().min(1, { message: "Name is required" }),
  lastName: zod.string().min(1, { message: "Name is required" }),
  email: zod.string().email({ message: "Invalid email" }).optional(),
  dateOfBirth: zod.string().min(1, { message: "Date of birth is required" }),
  phone: zod.string().min(1, { message: "Phone is required" }),
  address: zod.string().min(1, { message: "Address is required" }),
  rightEye: zod.object({
    sphere: zod.string(),
    cylinder: zod.string(),
    axis: zod.string(),
    add: zod.string(),
  }),
  leftEye: zod.object({
    sphere: zod.string(),
    cylinder: zod.string(),
    axis: zod.string(),
    add: zod.string(),
  }),
});
