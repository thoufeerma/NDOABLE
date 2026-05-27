import HeroSection from "@/components/sections/HeroSection";
import PillarsBanner from "@/components/sections/PillarsBanner";
import CoreFocusSection from "@/components/sections/CoreFocusSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SignatureProgramsSection from "@/components/sections/SignatureProgramsSection";
import TrainingFormatsSection from "@/components/sections/TrainingFormatsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <PillarsBanner />
      <CoreFocusSection />
      <AboutSection />
      <ServicesSection />
      <SignatureProgramsSection />
      <TrainingFormatsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}

