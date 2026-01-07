/*
 * HERO SECTION - Cyber Noir Style
 * - Full-screen hero with animated background
 * - Gradient text and neon accents
 * - Animated statistics counter
 * - News ticker at the top
 */

import { Button } from "@/components/ui/button";
import { newsArticles } from "@/data/news";
import { stats } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Futuristic technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* News Ticker */}
      <div className="relative z-10 mt-16 md:mt-20 bg-primary/10 border-y border-primary/20 py-2 overflow-hidden">
        <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
          <span className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Últimas Noticias
          </span>
          {[...newsArticles, ...newsArticles].map((article, index) => (
            <span key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
              <ChevronRight className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">{article.title}</span>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container py-16 md:py-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Agencia de IA & Desarrollo Web</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Construimos el{" "}
              <span className="gradient-text">Futuro Digital</span>
              <br />
              de tu Empresa
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              Somos expertos en desarrollo web y aplicaciones potenciadas por inteligencia artificial. 
              Transformamos ideas en experiencias digitales extraordinarias que impulsan el crecimiento de tu negocio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
              >
                Iniciar Proyecto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#portafolio")}
                className="border-border hover:border-primary hover:bg-primary/5 font-semibold px-8 py-6 text-lg"
              >
                Ver Portafolio
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold neon-text-cyan" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
