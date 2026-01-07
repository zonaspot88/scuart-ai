/*
 * PORTFOLIO SECTION - Cyber Noir Style
 * - Showcase of featured projects
 * - Hover effects with project details
 * - Asymmetric grid layout
 */

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Eva Beauty Studio",
    category: "E-Commerce",
    description: "Plataforma de comercio electrónico para productos de belleza con integración de IA para recomendaciones personalizadas.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    tags: ["React", "Node.js", "Stripe"],
    stats: "+150% Ventas",
  },
  {
    id: 2,
    title: "Etnia Braids",
    category: "Web App",
    description: "Sistema de reservas online para salón de belleza especializado con gestión de citas y pagos integrados.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    stats: "500+ Reservas/mes",
  },
  {
    id: 3,
    title: "Healthy Choice",
    category: "Mobile App",
    description: "Aplicación móvil para pedidos de comida saludable con seguimiento en tiempo real y programa de fidelización.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
    tags: ["React Native", "Firebase", "AI"],
    stats: "10K+ Descargas",
  },
  {
    id: 4,
    title: "TechVenture Dashboard",
    category: "SaaS Platform",
    description: "Dashboard de análisis para startups con métricas en tiempo real, reportes automatizados y predicciones con IA.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Vue.js", "Python", "OpenAI"],
    stats: "50+ Empresas",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Proyectos que{" "}
            <span className="gradient-text">Transforman Negocios</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a empresas 
            a alcanzar sus objetivos digitales.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-bold">
                  {project.stats}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-secondary text-muted-foreground mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-background/50 border border-border rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Ver Proyecto
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary border border-border hover:border-primary hover:text-primary font-semibold transition-all group">
            Ver Todos los Proyectos
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
