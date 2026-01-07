import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Spectacular Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-accent/50 rounded-full animate-float opacity-30" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium neon-cyan">AI-Powered Digital Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 fade-in delay-100">
            We Transform
            <br />
            <span className="relative inline-block">
              <span className="gradient-text-cyan-purple">Ideas into Digital</span>
              {/* Underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                <path d="M2 10C100 2 300 2 398 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="400" y2="0">
                    <stop offset="0%" stopColor="#00FFFF"/>
                    <stop offset="100%" stopColor="#FF00FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="gradient-text-cyan-purple">Experiences</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto mb-10 fade-in delay-200 leading-relaxed">
            We create stunning web and mobile applications that drive businesses forward. 
            Premium design, robust code, and measurable results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in delay-300">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="group relative overflow-hidden px-10 py-7 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              onClick={() => scrollToSection("#portfolio")}
              variant="outline"
              className="px-10 py-7 text-lg font-semibold rounded-xl border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats with elegant cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto fade-in delay-400">
            <div className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold neon-cyan mb-1">150+</div>
              <div className="text-sm text-foreground/60">Projects Delivered</div>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold neon-purple mb-1">5+</div>
              <div className="text-sm text-foreground/60">Years Experience</div>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold neon-cyan mb-1">100%</div>
              <div className="text-sm text-foreground/60">Client Satisfaction</div>
            </div>
            
            <div className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold neon-purple mb-1">24/7</div>
              <div className="text-sm text-foreground/60">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in delay-500">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
