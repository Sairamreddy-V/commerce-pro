import { 
  BookOpen, 
  FileSpreadsheet, 
  Calculator, 
  FileCheck, 
  Receipt, 
  MessageSquare 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const courses = [
  {
    icon: FileSpreadsheet,
    title: "Accounting Packages",
    description: "Master Tally ERP, QuickBooks, and SAP FI basics"
  },
  {
    icon: Calculator,
    title: "Book Keeping",
    description: "Learn monthly, semi-annual, and annual book closing"
  },
  {
    icon: Receipt,
    title: "Payroll & Returns",
    description: "Handle ESI, PF, PT, TDS filing processes"
  },
  {
    icon: FileCheck,
    title: "Tax Returns",
    description: "File TDS returns and Income Tax Returns (ITR 1-7)"
  },
  {
    icon: BookOpen,
    title: "Tax Audit",
    description: "Understand various types of tax audit reports"
  },
  {
    icon: MessageSquare,
    title: "Soft Skills",
    description: "Corporate communication and interview preparation"
  }
];

export function CourseSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <course.icon className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}