/*
 * FOOTER COMPONENT - Cyber Noir Style
 * - Multi-column layout with links
 * - Newsletter subscription
 * - Social media links
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter, Youtube, Zap } from "lucide-react";
import { Link } from "wouter";

const footerLinks = {
  services: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Integración de IA", href: "#servicios" },
    { label: "Diseño UI/UX", href: "#servicios" },
  ],
  company: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Blog / Noticias", href: "#noticias" },
    { label: "Contacto", href: "#contacto" },
  ],
  resources: [
    { label: "IAPulse Magazine", href: "#noticias" },
    { label: "Guías y Tutoriales", href: "#" },
    { label: "Casos de Éxito", href: "#portafolio" },
    { label: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                  Scuart
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                  IA & Desarrollo Web
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transformamos ideas en experiencias digitales extraordinarias. 
              Desarrollo web, apps móviles e inteligencia artificial para empresas que buscan crecer.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-semibold">Suscríbete a nuestro newsletter</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-background border-border focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Recursos
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-border" />

      {/* Bottom Footer */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Scuart. Todos los derechos reservados. 
            Potenciado por{" "}
            <span className="text-primary font-medium">IAPulse</span>.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
