"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const geometryRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textWrapperRef.current || !geometryRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax text wrapper (separated from Framer Motion element)
      gsap.to(textWrapperRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Subtle rotation for geometry
      gsap.to(geometryRef.current, {
        rotation: 45,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax for the main cinematic image
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center pt-24 pb-12 overflow-hidden bg-midnight"
    >
      {/* Background Lighting Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-light/20 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Rotating Geometry inspired by logo wheel */}
      <div 
        ref={geometryRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border-[0.5px] border-white/5 rounded-full pointer-events-none opacity-50 flex items-center justify-center"
      >
        <div className="w-[80%] h-[80%] border-[0.5px] border-gold/10 rounded-full border-dashed" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Typography Block */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-gold/80 uppercase tracking-[0.2em] text-sm font-medium mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-gold/50" /> A Pinnacle Consultancy
            </h2>
          </motion.div>

          <div ref={textWrapperRef} className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-ivory drop-shadow-lg"
            >
              Advocating<br />
              Excellence in<br />
              <span className="italic text-ivory/80">Organizational L&D.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-ivory/70 max-w-xl text-lg md:text-xl leading-relaxed mb-10 font-sans"
          >
            We take organizations and professionals through a transformative learning adventure powered by leadership development, AI readiness, and experiential training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-ivory text-midnight font-medium hover:bg-gold hover:text-white transition-colors duration-300 rounded-sm shadow-[0_0_20px_rgba(197,138,43,0.3)] hover:shadow-[0_0_30px_rgba(197,138,43,0.5)]">
              Explore Programs
            </button>
            <button className="px-8 py-4 border border-white/20 text-ivory hover:bg-white/5 transition-colors duration-300 rounded-sm">
              Book Consultation
            </button>
          </motion.div>
        </div>

        {/* Right Cinematic Asymmetrical Image Composition */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 mt-12 lg:mt-0 relative h-[400px] md:h-[500px] lg:h-[700px] w-full z-10"
        >
          {/* Main Editorial Image */}
          <div className="absolute inset-0 rounded-[28px] overflow-hidden shadow-2xl shadow-midnight/50 border border-white/10">
            <div ref={imageRef} className="absolute -inset-y-[15%] inset-x-0">
              <Image 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                alt="Corporate Leadership Workshop"
                fill
                priority
                className="object-cover saturate-[0.85] contrast-125 opacity-90"
              />
              <div className="absolute inset-0 bg-royal/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Floating Glass Panel */}
          <div className="absolute -bottom-6 right-6 lg:-left-16 lg:right-auto backdrop-blur-xl bg-midnight/70 border border-white/10 p-6 lg:p-8 rounded-[24px] shadow-2xl max-w-[280px] lg:max-w-sm overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-serif text-xl lg:text-2xl text-ivory mb-2 lg:mb-3 drop-shadow-md">Future-Focused</h3>
            <p className="text-xs lg:text-sm text-ivory/70 leading-relaxed mb-4 lg:mb-6 font-sans">
              Our methodology blends proven leadership principles with next-generation technological readiness.
            </p>
            <div className="w-full h-[1px] bg-white/10 mb-4 lg:mb-6" />
            <div className="flex items-center justify-between text-xs lg:text-sm text-gold group-hover:text-ivory transition-colors">
              <span className="tracking-widest uppercase font-medium">Discover More</span>
              <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
