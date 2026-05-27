"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "N-DO'ABLE completely transformed our leadership approach. The Pinnacle Leadership Series was exactly what our executive team needed to navigate our recent merger successfully.",
    author: "Sarah Jenkins",
    role: "CHRO, TechGlobal Inc.",
  },
  {
    quote: "The Future Ready Workforce program helped us upskill our entire middle management within 6 months. Their experiential approach ensures that concepts actually stick.",
    author: "David Chen",
    role: "VP of Operations, Nexus Manufacturing",
  },
  {
    quote: "We've worked with many L&D consultancies, but N-DO'ABLE brings a level of strategic depth and premium facilitation that is truly unmatched in the industry.",
    author: "Elena Rodriguez",
    role: "Head of Talent, Horizon Financial",
  },
  {
    quote: "Our Outbound Leadership Camp was a turning point for our sales division. The team returned more cohesive, motivated, and aligned than ever before.",
    author: "Marcus Thorne",
    role: "Director of Sales, Apex Retail",
  },
];

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-32 lg:py-48 bg-gradient-to-tr from-white via-blue-50/50 to-amber-50/30 relative border-b border-gray-100 overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Client Success
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel 
            setApi={setApi} 
            opts={{ loop: true, align: "center" }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 md:p-8">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="text-accent/20 mb-12" size={80} strokeWidth={1} />
                      <p className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium text-primary leading-[1.3] mb-16 max-w-4xl tracking-tight text-balance">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-[2px] bg-accent/40 mb-6" />
                        <h4 className="font-heading font-extrabold text-xl text-primary tracking-tight mb-1">
                          {testimonial.author}
                        </h4>
                        <p className="text-primary/50 text-sm font-semibold tracking-wider uppercase">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-3 mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                  current === index ? "bg-accent w-10" : "bg-primary/10 hover:bg-primary/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
