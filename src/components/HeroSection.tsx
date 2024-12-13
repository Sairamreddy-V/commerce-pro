import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { gradients } from '@/lib/constants/colors';

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')",
        }}
      >
        <div 
          className="absolute inset-0" 
          // style={{ background: gradients.overlay }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Commerce Pro Academy: Practical Training for Commerce Graduates
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Unlock Your Career Potential with Industry-Ready Courses in Accounting, Audits & Filing
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white"
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}