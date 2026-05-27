"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Pinnacle Leadership Series",
    category: "Executive",
    desc: "An elite program designed to cultivate visionary leadership and strategic thinking for C-suite executives and senior managers. We challenge conventional paradigms to forge resilient leaders capable of steering through profound uncertainty.",
    color: "from-[#0f172a] to-[#1e293b]",
    image: "/programs-bg.png",
  },
  {
    title: "Future Ready Workforce",
    category: "Transformation",
    desc: "Equipping your teams with agility, digital literacy, and adaptive skills required to thrive in tomorrow's workplace. This intensive immersion ensures your organization remains ahead of the technological curve.",
    color: "from-[#1e1b4b] to-[#312e81]",
    image: "/hero-bg.png",
  },
  {
    title: "High-Performance Accelerator",
    category: "Collaborative",
    desc: "Transforming groups into highly cohesive, synergetic units capable of executing complex strategies flawlessly. Through high-stress simulations, we forge unbreakable bonds and ultimate trust.",
    color: "from-[#022c22] to-[#064e3b]",
    image: "/about-bg.png",
  },
];

export default function SignatureProgramsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.program-story-block');
      
      blocks.forEach((block: any, i) => {
        const isEven = i % 2 === 0;
        const image = block.querySelector('.story-image');
        const content = block.querySelector('.story-content');
        
        gsap.fromTo(image,
          { opacity: 0, scale: 0.9, x: isEven ? -50 : 50 },
          {
            opacity: 1, scale: 1, x: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
            }
          }
        );
        
        gsap.fromTo(content,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0,
            duration: 1.2,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="programs" className="py-32 lg:py-48 bg-[#F8F9FA] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="mb-24 md:mb-32 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Exclusive Offerings
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-8 tracking-tight">
            Signature Programs
          </h3>
          <p className="text-primary/60 text-lg leading-relaxed font-medium">
            Our flagship learning journeys are meticulously crafted to deliver profound, lasting transformation across all levels of your organization.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`program-story-block flex flex-col gap-12 lg:gap-24 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Visual Block */}
              <div className="story-image w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-premium group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-40 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-20`} />
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem] z-20 pointer-events-none" />
                </div>
                {/* Decorative floating element */}
                <div className={`absolute -bottom-8 ${index % 2 === 1 ? '-left-8' : '-right-8'} w-32 h-32 bg-grid-slate-100 rounded-full blur-[2px] opacity-60 -z-10`} />
              </div>

              {/* Content Block */}
              <div className="story-content w-full lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-bold tracking-[0.15em] text-accent uppercase">
                    {program.category}
                  </span>
                  <div className="h-px bg-gray-200 flex-grow" />
                </div>
                
                <h4 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6 tracking-tight leading-tight">
                  {program.title}
                </h4>
                
                <p className="text-primary/60 text-lg leading-relaxed mb-10 font-medium">
                  {program.desc}
                </p>
                
                <button className="inline-flex items-center gap-3 text-white bg-primary hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all shadow-soft hover:shadow-lg hover:-translate-y-0.5 w-fit group">
                  Explore Journey
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
