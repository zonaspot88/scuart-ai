/*
 * HEADER COMPONENT - Cyber Noir Style
 * - Sticky navigation with glassmorphism effect
 * - Neon accent on hover states
 * - Mobile responsive with hamburger menu
 */

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#noticias", label: "Noticias IA" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary transition-colors pulse-glow">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Scuart
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:block">
              IA & Desarrollo Web
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("#contacto")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
          >
            Iniciar Proyecto
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background border-border">
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Scuart
                </span>
              </Link>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-4 py-3 text-left text-lg font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4"
              >
                Iniciar Proyecto
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
