import { Check, Target, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "Industry-Focused Training",
    description: "Curriculum designed with real-world applications in mind"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from experienced professionals in the field"
  },
  {
    icon: Award,
    title: "Recognized Certification",
    description: "Get certified and stand out in the job market"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Commerce Pro Academy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}