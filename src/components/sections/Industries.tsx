"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "IT & Technology", desc: "Future-ready workforce transformation", imageId: "1451187580459-43490279c0fa" },
  { name: "Manufacturing", desc: "Operational leadership & workforce excellence", imageId: "1581091226825-a6a2a5aee158" },
  { name: "Retail", desc: "Customer-centric service and scalable operations", imageId: "1441986300917-64674bd600d8" },
  { name: "Healthcare", desc: "Compassionate care and high-reliability systems", imageId: "1516549655169-df83a0774514" },
  { name: "Education", desc: "Empowering educators and inspiring future leaders", imageId: "1509062522246-3755977927d7" },
  { name: "Banking", desc: "Financial acumen and agile decision making", imageId: "1611162617474-5b21e879e113" },
  { name: "Hospitality", desc: "Excellence in guest experience and operational synergy", imageId: "1566073771259-6a8506099945" },
  { name: "Automobile", desc: "Lean manufacturing and innovative engineering", imageId: "1494976388531-d1058494cdd8" },
  { name: "SMEs", desc: "Scalable growth and resilient business strategies", imageId: "1486406146926-c627a92ad1ab" }
];

export function Industries() {
  return (
    <section id="industries" className="py-32 relative bg-midnight text-ivory z-20 overflow-hidden">
      {/* Deep Section Depth: Spotlight, Texture, Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-royal-light/20 via-midnight to-midnight opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midnight/30 to-midnight/80 pointer-events-none" />
      
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-gold/80 uppercase tracking-[0.2em] text-sm font-medium mb-4 drop-shadow-sm">Industries Served</h2>
          <h3 className="font-serif text-4xl md:text-5xl drop-shadow-lg">Cross-Industry <span className="italic text-ivory/70">Expertise</span></h3>
        </div>

        {/* group/list for dimming siblings */}
        <div className="group/list grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative h-32 md:h-40 flex flex-col justify-end p-3 md:p-6 border border-white/5 border-t-white/10 bg-white/[0.01] transition-all duration-700 rounded-xl overflow-hidden cursor-pointer shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover/list:opacity-40 group-hover/list:scale-[0.98] hover:!opacity-100 hover:!scale-[1.02] hover:shadow-[0_0_30px_rgba(13,44,108,0.4)] hover:z-10 hover:bg-white/[0.03] ${i === industries.length - 1 ? 'col-span-2 w-[calc(50%-6px)] md:w-[calc(50%-12px)] mx-auto lg:col-span-1 lg:w-full lg:mx-0' : ''}`}
            >
              {/* Subtle background image zooming */}
              <div className="absolute inset-0 w-full h-full scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out z-0">
                <Image 
                  src={`https://images.unsplash.com/photo-${industry.imageId}?q=80&w=600&auto=format&fit=crop`}
                  alt={industry.name}
                  fill
                  className="object-cover opacity-[0.03] group-hover:opacity-[0.15] mix-blend-luminosity transition-opacity duration-700"
                />
                {/* Background illumination gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight/20 to-transparent" />
              </div>

              {/* Animated Gold Accent Line */}
              <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 z-10" />
              
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                <h4 className="font-serif text-sm md:text-lg tracking-wide text-ivory/90 group-hover:text-gold transition-colors duration-300 mb-1 line-clamp-1">
                  {industry.name}
                </h4>
                <p className="text-[10px] md:text-xs text-ivory/50 font-sans leading-relaxed transition-colors duration-300 group-hover:text-ivory/80 line-clamp-2 md:line-clamp-none">
                  {industry.desc}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Featured Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: industries.length * 0.05 }}
            className="group relative h-full min-h-[160px] flex flex-col justify-center p-6 md:p-8 border border-gold/20 border-t-gold/40 bg-midnight transition-all duration-700 rounded-xl col-span-full overflow-hidden cursor-pointer shadow-[inset_0_1px_1px_rgba(197,138,43,0.15)] group-hover/list:opacity-40 group-hover/list:scale-[0.98] hover:!opacity-100 hover:!scale-[1.01] hover:shadow-[0_0_40px_rgba(197,138,43,0.2)] hover:z-10 mt-2"
          >
             {/* Premium Background Image */}
             <div className="absolute inset-0 w-full h-full scale-100 group-hover:scale-[1.03] transition-transform duration-1000 ease-out z-0">
               <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop"
                  alt="Partner with us"
                  fill
                  className="object-cover opacity-[0.05] mix-blend-luminosity group-hover:opacity-[0.12] transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
             </div>

             <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-2xl transition-transform duration-700 ease-out group-hover:translate-x-2">
                  <h4 className="font-serif text-3xl md:text-4xl tracking-wide text-ivory mb-2 drop-shadow-md group-hover:text-gold transition-colors duration-500">
                    Partner With Us
                  </h4>
                  <p className="text-sm md:text-base text-ivory/60 font-sans leading-relaxed group-hover:text-ivory/90 transition-colors duration-500">
                    Empowering organizations through transformational learning experiences.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 text-gold font-medium uppercase tracking-widest text-sm shrink-0">
                  <span className="relative overflow-hidden group-hover:text-gold-light transition-colors">
                    <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full absolute">Connect</span>
                    <span className="inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0">Connect</span>
                    <span className="invisible">Connect</span>
                  </span>
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 group-hover:border-gold transition-colors duration-500 bg-gold/5 group-hover:bg-gold/10 overflow-hidden">
                     <span className="absolute transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out text-gold/50">→</span>
                     <span className="absolute transform group-hover:translate-x-full transition-transform duration-500 ease-out">→</span>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
