import { CourseIllustration } from '../illustrations/CourseIllustration';
import { CourseCard } from '../ui/card/CourseCard';
import { courses } from '@/lib/constants/courses';

export function CourseSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 md:w-1/4 opacity-10 pointer-events-none">
        <CourseIllustration />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What You Will Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}