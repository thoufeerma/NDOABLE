import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { Programs } from "@/components/sections/Programs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { TrainingFormats } from "@/components/sections/TrainingFormats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FocusAreas />
      <Programs />
      <WhyChooseUs />
      <Industries />
      <TrainingFormats />
      <Testimonials />
      <Contact />
    </>
  );
}
