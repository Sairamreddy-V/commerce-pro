import { enrollmentSchema } from "../schemas/enrollment";
import type { z } from "zod";

type EnrollmentData = z.infer<typeof enrollmentSchema>;

export async function submitEnrollment(data: EnrollmentData) {
  try {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof Date) {
        formData.append(key, value.toISOString());
      } else if (typeof value === "boolean") {
        formData.append(key, value.toString());
      } else {
        formData.append(key, value);
      }
    });

    const response = await fetch("/api/student-enrollment", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit enrollment");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}