"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    number: "01",
    title: "Pinnacle Leadership Series",
    desc: "Transform managers into visionary leaders capable of navigating complexity.",
    imageId: "1552664730-d307ca884978"
  },
  {
    number: "02",
    title: "Future Ready Workforce",
    desc: "Equipping employees with AI literacy and technological foresight.",
    imageId: "1519389950473-47ba0277781c"
  },
  {
    number: "03",
    title: "Life Skills Academy",
    desc: "Cultivating emotional intelligence, resilience, and adaptability.",
    imageId: "1507537297725-24a1c029d3ca"
  },
  {
    number: "04",
    title: "High-Performance Accelerator",
    desc: "Creating seamless synergy within cross-functional teams.",
    imageId: "1522071820081-009f0129c71c"
  },
  {
    number: "05",
    title: "Outbound Leadership Camp",
    desc: "Experiential outdoor learning that builds trust and character.",
    imageId: "1517048676732-d65bc937f952"
  },
  {
    number: "06",
    title: "Women Empowerment",
    desc: "Fostering inclusive leadership and breaking organizational barriers.",
    imageId: "1573164713988-8665fc963095"
  },
];

export function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;

    const sections = gsap.utils.toArray(".program-panel");
    const backgrounds = gsap.utils.toArray(".program-bg");

    const ctx = gsap.context(() => {
      if (!scrollWrapperRef.current) return;

      const getScrollAmount = () => window.innerWidth * (programs.length - 1);

      // Horizontal Scroll
      const scrollTween = gsap.to(scrollWrapperRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + getScrollAmount(),
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Subtle Background Scale effect during horizontal scroll
      backgrounds.forEach((bg: any) => {
        gsap.fromTo(bg, 
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              containerAnimation: scrollTween,
              start: "left center",
              end: "right center",
              scrub: true,
            }
          }
        );
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="programs" 
      ref={containerRef} 
      className="relative bg-midnight text-ivory" 
      style={{ height: `calc(100vh + ${(programs.length - 1) * 100}vw)` }}
    >
      <div className="sticky top-0 h-[100dvh] min-h-[600px] overflow-hidden flex items-center w-full">
        <div className="absolute top-12 md:top-24 left-6 md:left-12 z-50 mix-blend-difference pointer-events-none">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 drop-shadow-md">Signature Programs</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-white drop-shadow-lg">Immersive <span className="italic text-white/80">Learning</span></h3>
        </div>

        <div 
          ref={scrollWrapperRef} 
          className="flex h-full w-[600vw]"
        >
        {programs.map((program) => (
          <div 
            key={program.number} 
            className="program-panel w-screen shrink-0 h-full flex items-center justify-center relative p-6 md:p-12 overflow-hidden"
          >
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
              <div className="program-bg absolute inset-0 w-full h-full scale-110">
                <Image 
                  src={`https://images.unsplash.com/photo-${program.imageId}?q=80&w=1920&auto=format&fit=crop`}
                  alt={program.title}
                  fill
                  className="object-cover mix-blend-luminosity saturate-[0.8] contrast-125"
                />
              </div>
              {/* Dark dramatic overlays */}
              <div className="absolute inset-0 bg-royal/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-transparent w-full md:w-2/3" />
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16 relative z-10 px-6 mt-16 md:mt-0">
              <div className="font-serif text-[6rem] md:text-[8rem] lg:text-[10rem] text-white/10 font-bold leading-none select-none tracking-tighter shrink-0">
                {program.number}
              </div>
              <div className="max-w-xl">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6 text-ivory drop-shadow-lg">{program.title}</h4>
                <p className="text-base md:text-lg lg:text-xl text-ivory/80 font-sans leading-relaxed mb-8 md:mb-10 drop-shadow-md">
                  {program.desc}
                </p>
                <button className="flex items-center gap-4 text-sm tracking-widest uppercase text-gold hover:text-ivory transition-colors duration-300 group">
                  <span className="w-12 h-[1px] bg-gold group-hover:bg-ivory transition-colors duration-300" />
                  Discover Details
                  <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
