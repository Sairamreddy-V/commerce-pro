import { z } from "zod";

export const enrollmentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  profilePhoto: z.instanceof(File)
    .refine((file) => file.size <= 5000000, "File size must be less than 5MB")
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Only .jpg, .png and .webp formats are supported"
    ),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  dateOfBirth: z.date(),
  gender: z.enum(["male", "female", "other"]),
  qualification: z.enum([
    "high_school",
    "intermediate",
    "bachelors",
    "masters",
    "phd"
  ]),
  collegeName: z.string().min(2, "College name must be at least 2 characters"),
  yearOfStudy: z.string(),
  hasComputer: z.boolean(),
  hasSmartphone: z.boolean(),
  comments: z.string().optional(),
});