import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function CourseCard({ icon: Icon, title, description }: CourseCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow group">
      <CardHeader>
        <div className="mb-4 text-[#00BFFF] group-hover:text-[#87CEEB] transition-colors">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="group-hover:text-[#00BFFF] transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}