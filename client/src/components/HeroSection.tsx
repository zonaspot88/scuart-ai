import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 fade-in">
            <span className="text-sm font-medium neon-cyan">Ideas into Digital Experiences</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 fade-in delay-100">
            We Transform
            <br />
            <span className="gradient-text-cyan-purple">Ideas into Digital</span>
            <br />
            <span className="gradient-text-cyan-purple">Experiences</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 fade-in delay-200">
            We create web and mobile applications that drive businesses. Premium design, robust code, and measurable results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in delay-300">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="btn-cyan px-8 py-6 text-lg"
            >
              Start Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("#portfolio")}
              className="btn-outline-cyan px-8 py-6 text-lg"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto fade-in delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold neon-cyan mb-2">150+</div>
              <div className="text-sm text-foreground/60">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-cyan mb-2">5+</div>
              <div className="text-sm text-foreground/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-cyan mb-2">100%</div>
              <div className="text-sm text-foreground/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
