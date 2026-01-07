/*
 * TESTIMONIALS SECTION - Cyber Noir Style
 * - Client testimonials with avatar and rating
 * - Glassmorphism card design
 * - Animated entrance
 */

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "CEO, Eva Beauty",
    avatar: "MG",
    content: "Scuart transformó completamente nuestro negocio. El sitio web que crearon es hermoso, rápido y nuestras ventas aumentaron un 150%. Su conocimiento en IA nos dio una ventaja competitiva increíble.",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos López",
    role: "Founder, Etnia Braids",
    avatar: "CL",
    content: "Profesionales de verdad. Entendieron nuestra visión y la ejecutaron perfectamente. El sistema de reservas que implementaron ha revolucionado cómo gestionamos nuestro salón.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Manager, Healthy Choice",
    avatar: "AM",
    content: "El sistema de pedidos que implementaron es intuitivo y nuestros clientes lo aman. Excelente soporte post-lanzamiento y siempre disponibles para ayudarnos a mejorar.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-card/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Lo que Dicen{" "}
            <span className="neon-text-magenta">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Estas son algunas de sus experiencias trabajando con nosotros.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
