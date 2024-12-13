import { StudentEnrollmentForm } from "../forms/enrollment/StudentEnrollmentForm";

export function EnrollmentSection() {
  return (
    <section className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Student Enrollment</h2>
              <p className="text-gray-600">
                Fill out the form below to enroll in our courses
              </p>
            </div>
            
            <StudentEnrollmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}