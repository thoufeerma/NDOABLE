"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-midnight pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-royal-light/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-sm">
            <h3 className="font-serif text-2xl text-ivory mb-6">N-DO'ABLE</h3>
            <p className="text-ivory/60 text-sm leading-relaxed mb-8">
              Advocating Excellence in Organizational L&D. We transform professionals through leadership development and experiential training.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-ivory/80 hover:text-gold transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="text-gold font-medium text-sm mb-6 uppercase tracking-wider">Explore</h4>
              <ul className="space-y-4">
                {["Programs", "Industries", "Testimonials", "About Us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-ivory/70 hover:text-ivory transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-medium text-sm mb-6 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4">
                <li className="text-ivory/70 text-sm">+91 9751133577</li>
                <li className="text-ivory/70 text-sm">info@ndoableconsultancy.com</li>
                <li className="text-ivory/70 text-sm">Coimbatore, Tamil Nadu</li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/40 text-xs">
            © {new Date().getFullYear()} N-DO'ABLE Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-ivory/40">
            <Link href="#" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-ivory transition-colors">Terms of Service</Link>
          </div>
        </div>

        {/* Large Brand Watermark */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-5">
          <h1 className="font-serif text-[15vw] leading-none whitespace-nowrap text-white">
            N-DO'ABLE
          </h1>
        </div>
      </div>
    </footer>
  );
}
