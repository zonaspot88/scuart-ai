/*
 * HOME PAGE - Scuart + IAPulse Fusion
 * DESIGN: "Cyber Noir" - Neo-futuristic dark aesthetic
 * - Deep blacks with neon cyan and magenta accents
 * - Space Grotesk for display, Inter for body
 * - Glassmorphism and neon glow effects
 */

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section - Full screen with animated background */}
        <HeroSection />

        {/* Services Section - What we offer */}
        <ServicesSection />

        {/* News Section - IAPulse Magazine */}
        <NewsSection />

        {/* Portfolio Section - Featured projects */}
        <PortfolioSection />

        {/* Testimonials Section - Client reviews */}
        <TestimonialsSection />

        {/* Contact Section - Get in touch */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
