"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Counter({ end, label, duration = 2 }: { end: number, label: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="border-l border-gold/30 pl-6 py-2">
      <div className="font-serif text-4xl md:text-5xl text-gold mb-2 drop-shadow-md">
        {count}
        <span className="text-ivory">+</span>
      </div>
      <div className="text-xs tracking-widest text-ivory/60 uppercase">{label}</div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  return (
    <section id="about" ref={sectionRef} className="py-32 relative bg-midnight z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Editorial Text & Stats */}
          <div className="flex flex-col relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-serif text-4xl md:text-6xl text-ivory leading-[1.15] mb-8">
                Transforming the <span className="italic text-ivory/70">future</span> of corporate leadership.
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 text-ivory/70 leading-relaxed font-sans text-lg mb-16"
            >
              <p>
                At N-DO'ABLE, we believe that true organizational growth is rooted in the 
                continuous evolution of its people. Our approach transcends traditional 
                training paradigms by integrating experiential learning with AI readiness.
              </p>
              <p>
                We bridge the gap between potential and performance, equipping teams 
                with the life skills, strategic foresight, and technological adaptability 
                needed to thrive in tomorrow's business landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-2 gap-x-8 gap-y-12"
            >
              <Counter end={5000} label="Professionals Trained" />
              <Counter end={250} label="Workshops Conducted" />
              <Counter end={50} label="Corporate Partnerships" />
              <Counter end={10000} label="Learning Hours" />
            </motion.div>
          </div>

          {/* Right: Overlapping Editorial Images */}
          <div className="relative h-[600px] lg:h-[800px] w-full">
            <motion.div 
              className="absolute top-0 right-0 w-[80%] h-[70%] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Leadership Speaking"
                fill
                className="object-cover saturate-[0.8] contrast-[1.1] mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-royal/30 mix-blend-multiply" />
            </motion.div>

            <motion.div 
              className="absolute bottom-0 left-0 w-[70%] h-[60%] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl z-20"
              initial={{ opacity: 0, scale: 0.9, y: -50 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: -50 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                alt="Corporate Mentoring"
                fill
                className="object-cover saturate-[0.8] contrast-[1.1] mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-royal/40 mix-blend-multiply" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
