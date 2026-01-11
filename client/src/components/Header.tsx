import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "#services", label: "Services", isSection: true },
  { href: "#portfolio", label: "Portfolio", isSection: true },
  { href: "#process", label: "Process", isSection: true },
  { href: "/blog", label: "Blog", isSection: false },
  { href: "/about", label: "About", isSection: false },
  { href: "#contact", label: "Contact", isSection: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const scrollToSection = (href: string) => {
    // If we're not on the home page, navigate there first
    if (location !== "/" && href.startsWith("#")) {
      setLocation("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    if (location !== "/") {
      setLocation("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleNavClick = (link: { href: string; label: string; isSection: boolean }) => {
    if (link.isSection) {
      scrollToSection(link.href);
    } else {
      setLocation(link.href);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo - Always scrolls to top */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="text-2xl font-bold neon-cyan hover:opacity-80 transition-opacity">Scuart</div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link)}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="btn-cyan px-6 py-2"
          >
            Start Project
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card border-border">
            <SheetTitle asChild>
              <VisuallyHidden>Navigation Menu</VisuallyHidden>
            </SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
              <button 
                onClick={scrollToTop}
                className="text-2xl font-bold neon-cyan text-left"
              >
                Scuart
              </button>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link)}
                    className="px-4 py-2 text-left text-lg font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="btn-cyan w-full mt-4"
              >
                Start Project
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
