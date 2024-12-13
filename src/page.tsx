import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CourseSection } from './components/CourseSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CareerSection } from './components/CareerSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';



export const HomePage=()=>{
    return(
        <>
        <HeroSection />
        <AboutSection />
        <CourseSection />
        <WhyChooseUs />
        <CareerSection />
        <TestimonialSection />
        <PricingSection />
        <ContactSection />
        </>
    )
}
