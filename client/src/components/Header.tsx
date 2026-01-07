import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const blogNavLinks = [
  { href: "#blog", label: "IAPulse" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold neon-cyan">Scuart</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[...navLinks].map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
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
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/" className="text-2xl font-bold neon-cyan">
                Scuart
              </Link>
              <nav className="flex flex-col gap-3">
                {[...navLinks].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
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
