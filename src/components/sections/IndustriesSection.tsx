"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Factory, 
  ShoppingBag, 
  Stethoscope, 
  BookOpen, 
  Landmark, 
  UtensilsCrossed, 
  Car, 
  Rocket 
} from "lucide-react";

const industries = [
  { name: "IT & Technology", icon: Laptop },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: ShoppingBag },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: BookOpen },
  { name: "Banking & Finance", icon: Landmark },
  { name: "Hospitality", icon: UtensilsCrossed },
  { name: "Automobile", icon: Car },
  { name: "Startups & SMEs", icon: Rocket },
];

export default function IndustriesSection() {
  return (
    <section className="py-32 bg-[#F8F9FA] relative border-b border-gray-100">
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-8">
            Industries We Serve
          </div>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 tracking-tight">
            Tailored Excellence Across Sectors
          </h3>
          <p className="text-primary/60 text-lg leading-relaxed font-medium">
            We adapt our methodologies to address the unique challenges and nuances of your specific industry.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200/60 hover:border-transparent transition-all duration-500 cursor-pointer text-center flex flex-col items-center justify-center gap-5 shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-premium"
            >
              {/* Linear-style Hover Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-transparent group-hover:from-accent/20 group-hover:to-primary/5 -z-10 transition-all duration-500 blur-sm opacity-0 group-hover:opacity-100" />
              <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-b from-transparent to-transparent group-hover:from-accent/40 group-hover:to-primary/10 z-0 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="absolute inset-[1px] bg-white rounded-[calc(1.5rem-1px)] z-10" />

              <industry.icon 
                size={32} 
                strokeWidth={1.5} 
                className="text-primary/40 group-hover:text-primary transition-colors duration-500 relative z-20 group-hover:scale-110 transform" 
              />
              <span className="font-heading font-bold text-sm text-primary relative z-20 tracking-tight">
                {industry.name}
              </span>
            </motion.div>
          ))}
          
          {/* CTA Box to fill 10th spot in 5-col grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: industries.length * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative p-8 rounded-3xl bg-primary text-white transition-all duration-500 cursor-pointer text-center flex flex-col items-center justify-center gap-2 lg:col-span-1 md:col-span-3 col-span-2 shadow-premium hover:-translate-y-1"
          >
            <span className="font-heading font-bold text-lg leading-tight">
              Don't see your industry?
            </span>
            <span className="text-sm font-medium text-accent hover:text-white transition-colors uppercase tracking-wider mt-2">Let's talk →</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
