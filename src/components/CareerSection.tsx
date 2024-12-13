import { TrendingUp, Users, Briefcase } from 'lucide-react';

export function CareerSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Career Opportunities
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">90L+</h3>
            <p className="text-gray-600">New Tech Jobs by 2025</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">63%</h3>
            <p className="text-gray-600">Graduates Seeking Jobs</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Briefcase className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-gray-600">Placement Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}