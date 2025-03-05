import { z } from "zod";


export const registerSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    userName: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    address: z.string().min(5, "Address is required"),
    street: z.string().min(3, "Street is required"),
    zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z
  .object({
    identifier: z.string().min(3, "Email or Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.identifier.trim().length > 0, {
    message: "Email or Username cannot be empty",
    path: ["identifier"],
  });
