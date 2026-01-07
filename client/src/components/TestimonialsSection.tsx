import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria García",
    role: "CEO, Eva Beauty",
    avatar: "MG",
    content: "Scuart transformó completamente nuestro negocio. El sitio web que crearon es hermoso, rápido y nuestras ventas aumentaron 150%.",
    rating: 5,
  },
  {
    name: "Carlos López",
    role: "Founder, Etnia Braids",
    avatar: "CL",
    content: "Profesionales de verdad. Entendieron nuestra visión y la ejecutaron perfectamente. Recomendamos Scuart sin dudarlo.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Manager, Healthy Choice",
    avatar: "AM",
    content: "El sistema de pedidos que implementaron es intuitivo y nuestros clientes lo aman. Excelente soporte post-lanzamiento.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients <span className="gradient-text-cyan-purple">Say</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Real feedback from satisfied partners
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg glass-effect glass-effect-hover transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-foreground/60">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
