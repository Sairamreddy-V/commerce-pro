import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const features = [
  "Complete course material access",
  "Real-world project experience",
  "Industry expert mentorship",
  "Placement assistance",
  "Certification on completion"
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Affordable Pricing
        </h2>
        <div className="max-w-lg mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader className="text-center">
              <h3 className="text-2xl font-bold">Complete Course Package</h3>
              <p className="text-4xl font-bold mt-4">₹5,000</p>
              <p className="text-gray-600 mt-2">Split into two easy payments</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" size="lg">
                Enroll Now
              </Button>
              <p className="text-sm text-center text-gray-600">
                ₹3,000 on registration + ₹2,000 within 2 months
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}