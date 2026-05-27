"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    text: "N-DO'ABLE transformed our leadership culture through highly engaging workshops.",
    role: "L&D Head",
    imageId: "1560250097-0b93528c311a"
  },
  {
    text: "Their AI readiness sessions gave our employees practical insights into future workplace trends.",
    role: "VP of HR",
    imageId: "1573496359142-b8d87734a5a2"
  },
  {
    text: "Excellent trainers, energetic sessions, and measurable impact on team performance.",
    role: "Director of Operations",
    imageId: "1580489944761-15a19d654956"
  },
  {
    text: "An absolute game-changer for our middle management. The outbound learning was phenomenal.",
    role: "CEO",
    imageId: "1507003211169-0a1dd7228f2d"
  },
];

export function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const content = marqueeRef.current?.firstElementChild;
      if (content && marqueeRef.current) {
        marqueeRef.current.appendChild(content.cloneNode(true));
      }

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 30, // Slowed down slightly for premium feel
          repeat: -1,
        });
      }
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 relative bg-midnight text-ivory z-20 overflow-hidden">
      <div className="text-center mb-20 px-6">
        <h2 className="text-gold/80 uppercase tracking-[0.2em] text-sm font-medium mb-4">Client Success</h2>
        <h3 className="font-serif text-4xl md:text-5xl">Impact <span className="italic text-ivory/70">Stories</span></h3>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-midnight to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-midnight to-transparent z-10 pointer-events-none" />

        <div ref={marqueeRef} className="flex gap-8 px-4 w-max">
          <div className="flex gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="group w-[300px] md:w-[500px] shrink-0 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 border border-white/5 rounded-2xl p-6 md:p-10 flex flex-col justify-between cursor-pointer"
              >
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-gold/30 mb-4 md:mb-6 group-hover:text-gold/60 transition-colors duration-500" />
                <p className="font-serif text-lg md:text-2xl leading-relaxed text-ivory/90 mb-6 md:mb-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image 
                      src={`https://images.unsplash.com/photo-${t.imageId}?q=80&w=200&auto=format&fit=crop`}
                      alt={t.role}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ivory">Corporate Client</div>
                    <div className="text-xs text-ivory/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
