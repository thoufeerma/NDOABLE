import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "N-DO'ABLE | A Pinnacle Consultancy",
  description: "Advocating Excellence in Organizational L&D. Transformative learning powered by leadership development, AI readiness, and future-focused skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased bg-background text-foreground`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-gold/30 selection:text-gold">
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow relative z-10 block">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
