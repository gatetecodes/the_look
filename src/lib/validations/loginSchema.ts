import zod from "zod";

export const loginSchema = zod.object({
  email: zod.string().email().min(1, "Email is required"),
  password: zod
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
