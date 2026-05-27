"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Programs", href: "#programs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-500 pointer-events-none">
      <header
        className={`w-full max-w-6xl pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-white/60 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full py-3 px-6 border border-white/60"
            : "bg-transparent py-4 px-2 md:px-6 border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <div className="relative w-36 h-10 transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/logo.jpeg"
                alt="N-DO'ABLE Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-sm font-heading font-bold tracking-wider uppercase transition-colors py-2 ${
                  isScrolled ? "text-primary/80 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <Button className={`font-medium px-6 h-10 rounded-full shadow-soft transition-all hover:-translate-y-0.5 group ${
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90 hover:shadow-soft-xl" 
                : "bg-white text-primary hover:bg-white/90 hover:shadow-lg"
            }`}>
              Get Started
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden relative z-50 p-2 -mr-2 ${isScrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 mt-4 bg-white shadow-premium rounded-2xl px-6 py-6 flex flex-col gap-4 border border-gray-100"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 w-full my-2" />
              <Button className="w-full h-12 text-base bg-primary text-white hover:bg-primary/90 rounded-full">
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
