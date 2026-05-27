"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate left side content
      if (leftContentRef.current) {
        tl.fromTo(
          leftContentRef.current.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }
        );
      }

      // Animate right side visual
      if (rightContentRef.current) {
        tl.fromTo(
          rightContentRef.current,
          { opacity: 0, scale: 0.95, x: 40 },
          { opacity: 1, scale: 1, x: 0, duration: 1.5, ease: "power3.out" },
          "-=1"
        );

        // Floating animation for badges inside the right visual
        const floatingElements = rightContentRef.current.querySelectorAll(".float-el");
        floatingElements.forEach((el, i) => {
          gsap.to(el, {
            y: "+=15",
            duration: 3 + i * 0.5,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#012555]"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KPC9zdmc+')] [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div ref={leftContentRef} className="max-w-2xl pt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Pinnacle Consultancy
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-8">
              Advocating Excellence in <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent drop-shadow-sm">
                Corporate L&D
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-xl font-medium">
              We empower global organizations through transformational learning, AI readiness, and experiential training solutions that drive measurable impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button className="bg-accent hover:bg-accent/90 text-[#012555] font-bold h-14 px-8 text-base rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all group">
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border border-white/20 bg-white/5 hover:bg-white/10 text-white h-14 px-8 text-base font-bold rounded-2xl shadow-sm transition-all flex items-center gap-2 group backdrop-blur-md">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play size={10} className="text-white ml-0.5" fill="currentColor" />
                </div>
                Watch Showreel
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#012555] bg-white/20 backdrop-blur-sm shadow-sm" />
                ))}
              </div>
              <div className="text-sm font-medium text-white/60">
                Trusted by <span className="font-bold text-white">200+</span> industry leaders
              </div>
            </div>
          </div>

          {/* Right: Rich Visual */}
          <div ref={rightContentRef} className="relative h-[600px] w-full hidden lg:block perspective-1000">
            {/* Main Image Card */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[85%] bg-white/5 backdrop-blur-sm rounded-[2rem] shadow-2xl p-3 border border-white/20 z-10 rotate-y-[-5deg] rotate-x-[2deg] hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <img 
                  src="/hero-bg.png" 
                  alt="Corporate Excellence"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#012555]/80 via-transparent to-transparent mix-blend-multiply" />
              </div>
            </div>
            
            {/* Floating UI Element 1: Top Left */}
            <div className="absolute left-0 top-20 bg-[#012555]/60 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20 float-el z-20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 shadow-sm flex items-center justify-center shrink-0 border border-accent/30">
                <span className="text-xl font-bold text-accent">98%</span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-white tracking-tight text-sm">Satisfaction Rate</h4>
                <p className="text-xs font-medium text-white/60">Across all programs</p>
              </div>
            </div>

            {/* Floating UI Element 2: Bottom Right */}
            <div className="absolute -right-8 bottom-24 bg-[#012555]/60 backdrop-blur-xl px-6 py-5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] border border-white/20 float-el z-20" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                <div className="text-sm font-bold text-white tracking-tight">Active Transformation</div>
              </div>
              <p className="text-xs font-medium text-white/70">50,000+ Professionals Trained</p>
            </div>
            
            {/* Decorative background blur behind the card */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-accent/20 to-blue-500/20 rounded-full blur-[80px] -z-10" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
