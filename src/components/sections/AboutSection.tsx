"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Professionals Trained", value: 50, suffix: "k+" },
  { label: "Enterprise Clients", value: 200, suffix: "+" },
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      }

      // Elegant image reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: "inset(10% 10% 10% 10% round 2rem)", scale: 0.95 },
          {
            clipPath: "inset(0% 0% 0% 0% round 2rem)",
            scale: 1,
            duration: 1.8,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
            }
          }
        );
        
        // Inner image subtle parallax
        gsap.fromTo(
          imageRef.current.querySelector('.inner-img'),
          { scale: 1.15, y: -20 },
          {
            scale: 1,
            y: 0,
            duration: 1.8,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Stats reveal
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll('.stat-item');
        gsap.fromTo(
          statItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            }
          }
        );

        const counters = statsRef.current.querySelectorAll('.counter-val');
        counters.forEach((counter) => {
          const target = parseFloat(counter.getAttribute('data-target') || '0');
          const obj = { val: 0 };
          
          gsap.to(obj, {
            val: target,
            duration: 2.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
            onUpdate: () => {
              counter.innerHTML = Math.floor(obj.val).toString();
            }
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 lg:py-48 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content (Spans 5 cols) */}
          <div ref={textRef} className="lg:col-span-5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
              About Us
            </div>
            
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-8 leading-[1.1] tracking-tight">
              Building Capability <br/> & Cultivating Culture.
            </h3>
            
            <div className="w-12 h-1 bg-primary/10 rounded-full mb-8" />
            
            <p className="text-primary/60 text-lg leading-relaxed mb-6 font-medium">
              N-DO'ABLE is a premium consulting firm dedicated to unlocking organizational potential through strategic capability building.
            </p>
            <p className="text-primary/60 text-lg leading-relaxed mb-10 font-medium">
              We blend proven methodologies with experiential learning to create meaningful transformation, ensuring your workforce is future-ready.
            </p>
            
            <button className="group inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              Our Methodology 
              <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 group-hover:translate-x-1 transition-all">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* Right: Premium Image (Spans 7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[600px] lg:h-[800px] w-full rounded-[2rem] overflow-hidden shadow-premium" ref={imageRef}>
              <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-overlay" />
              
              <div className="inner-img w-full h-full bg-[url('/about-bg.png')] bg-cover bg-center" />
              
              {/* Floating Stat Badge on Image */}
              <div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 z-20 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-w-sm border border-white/60">
                <h4 className="text-2xl font-heading font-bold text-primary mb-2">Global Impact</h4>
                <p className="text-primary/70 text-sm font-medium leading-relaxed">
                  Partnering with industry leaders to redefine excellence in corporate development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid below */}
        <div ref={statsRef} className="mt-32 pt-16 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item flex flex-col">
              <div className="text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-4 flex items-baseline tracking-tighter">
                <span className="counter-val" data-target={stat.value}>0</span>
                <span className="text-accent ml-1 text-4xl lg:text-5xl">{stat.suffix}</span>
              </div>
              <div className="text-sm font-bold text-primary/50 uppercase tracking-[0.1em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
