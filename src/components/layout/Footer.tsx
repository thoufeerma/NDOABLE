import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] text-primary pt-24 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-8 pr-8">
            <div className="relative w-48 h-14 bg-white rounded-xl p-2 shadow-sm border border-gray-100 flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt="N-DO'ABLE Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-primary/60 text-sm leading-relaxed font-medium">
              Advocating Excellence in Organizational L&D. We empower organizations and professionals through transformational learning and leadership development.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-accent hover:border-accent hover:shadow-sm transition-all duration-300">
                <FaLinkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-accent hover:border-accent hover:shadow-sm transition-all duration-300">
                <FaTwitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-accent hover:border-accent hover:shadow-sm transition-all duration-300">
                <FaFacebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary/60 hover:text-accent hover:border-accent hover:shadow-sm transition-all duration-300">
                <FaInstagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Programs", "Resources", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-primary/60 hover:text-accent font-medium text-sm transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-6">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Leadership Development",
                "Soft Skills Training",
                "Sales & Customer Service",
                "AI & Future-Tech Readiness",
                "Team Building",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-primary/60 hover:text-accent font-medium text-sm transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 mr-2 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-primary/60 text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-accent" />
                </div>
                <span>
                  123 Corporate Blvd, Suite 500<br />
                  Business District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-4 text-primary/60 text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-accent" />
                </div>
                <span>+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center gap-4 text-primary/60 text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-accent" />
                </div>
                <span>hello@ndoable.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-primary/40 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} N-DO'ABLE – A Pinnacle Consultancy. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-primary/40">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
