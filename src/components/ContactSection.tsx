import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <p className="text-gray-600">
                Jhansi Enclave, 103, 1st Floor, Bhagyanagar Colony, Hyderabad 500072
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <a href="mailto:contactus@commercepro.in.net" className="text-gray-600 hover:text-primary">
                contactus@commercepro.in.net
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <a href="tel:+917981232106" className="text-gray-600 hover:text-primary">
                +91 7981232106
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Email Address" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" className="min-h-[120px]" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}