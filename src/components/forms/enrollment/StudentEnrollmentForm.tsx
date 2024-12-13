import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enrollmentSchema } from "@/lib/schemas/enrollment";
import { submitEnrollment } from "@/lib/api/enrollment";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { PersonalInfoFields } from "./fields/PersonalInfoFields";
import { EducationFields } from "./fields/EducationFields";
import { TechnicalAccessFields } from "./fields/TechnicalAccessFields";
import type { z } from "zod";

type FormData = z.infer<typeof enrollmentSchema>;

export function StudentEnrollmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      comments: "",
      hasComputer: false,
      hasSmartphone: false,
    },
  });

  async function onSubmit(data: FormData) {
    try {
      setIsSubmitting(true);
      await submitEnrollment(data);
      toast({
        title: "Success",
        description: "Your enrollment has been submitted successfully!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit enrollment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-8">
          <PersonalInfoFields control={form.control} />
          <EducationFields control={form.control} />
          <TechnicalAccessFields control={form.control} />
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Enrollment"}
        </Button>
      </form>
    </Form>
  );
}