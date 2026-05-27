"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-midnight/95 backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent pt-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 md:w-14 md:h-14 bg-ivory rounded-lg p-1.5 md:p-2 shadow-lg flex items-center justify-center overflow-hidden">
              <Image src="/logo.png" alt="N-DO'ABLE" fill className="object-contain p-1" priority />
            </div>
            <span className="font-serif text-xl md:text-2xl font-medium tracking-wide text-ivory group-hover:text-gold transition-colors duration-300 drop-shadow-md">
              N-DO'ABLE
            </span>
          </Link>

          <nav className={`hidden md:flex items-center gap-1 rounded-full p-1.5 transition-all duration-500 ${
            scrolled ? "bg-white/5 border border-white/10" : "bg-white/5 backdrop-blur-md border border-white/5"
          }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-ivory text-midnight shadow-sm"
                      : "text-ivory/80 hover:text-ivory hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <button 
            className="md:hidden w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-ivory"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[200] bg-midnight/95 flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-ivory"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-3xl font-serif tracking-wider transition-colors duration-300 ${
                    activeSection === link.name ? "text-gold" : "text-ivory/80 hover:text-ivory"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
