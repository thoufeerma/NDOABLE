"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const points = [
  { title: "Industry-Relevant Modules", desc: "Curriculums designed to meet the specific demands of modern industries." },
  { title: "Customized Solutions", desc: "Bespoke programs tailored to your organization's unique challenges." },
  { title: "Experienced Facilitators", desc: "Learn from veterans who have led teams at top global firms." },
  { title: "Practical Learning", desc: "Hands-on, experiential methodologies that guarantee retention." },
  { title: "AI-Integrated Training", desc: "Future-proofing your workforce with the latest technological tools." },
  { title: "Measurable Business Impact", desc: "Clear KPIs and ROI tracking for every developmental program." },
];

export function WhyChooseUs() {
  const containerRef = useRef(null);

  return (
    <section className="py-32 relative bg-ivory text-midnight z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="relative lg:sticky top-32 h-auto mb-24 lg:mb-0 pb-8 lg:pb-0 z-10">
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4">The N-DO'ABLE Advantage</h2>
          <h3 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            Why partner with <span className="italic text-midnight/70">Us?</span>
          </h3>
          <p className="text-midnight/60 text-lg leading-relaxed max-w-md">
            We don't just deliver training; we architect transformations. 
            Our methodology ensures that every hour spent learning translates into measurable organizational success.
          </p>
        </div>

        <div className="flex flex-col gap-12" ref={containerRef}>
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-1 w-[2px] h-full bg-midnight/5">
                <motion.div 
                  className="w-full bg-gold"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>
              <div className="absolute left-[-11px] top-0 bg-ivory py-1">
                <CheckCircle2 className="w-6 h-6 text-gold bg-ivory" />
              </div>
              
              <h4 className="text-2xl font-serif mb-3">{point.title}</h4>
              <p className="text-midnight/70 font-sans leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
