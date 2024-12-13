import { Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { z } from "zod";
import { enrollmentSchema } from "@/lib/schemas/enrollment";

type FormData = z.infer<typeof enrollmentSchema>;

interface EducationFieldsProps {
  control: Control<FormData>;
}

const qualifications = [
  { value: "high_school", label: "High School" },
  { value: "intermediate", label: "Intermediate" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD" },
];

export function EducationFields({ control }: EducationFieldsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Educational Information</h3>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          control={control}
          name="qualification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Highest Qualification</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {qualifications.map((qual) => (
                    <SelectItem key={qual.value} value={qual.value}>
                      {qual.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="yearOfStudy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year of Study</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2023" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="collegeName"
          render={({ field }) => (
            <FormItem className="sm:col-span-2">
              <FormLabel>College Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your college name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}