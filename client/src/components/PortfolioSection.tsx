import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Eva Beauty Studio",
    category: "E-Commerce",
    description: "Premium e-commerce platform for beauty products with AI recommendations.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    title: "Etnia Braids",
    category: "Web App",
    description: "Online booking system for beauty salon with integrated payments.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    title: "Healthy Choice",
    category: "Mobile App",
    description: "Food delivery app with real-time tracking and loyalty program.",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
  },
  {
    title: "TechVenture Dashboard",
    category: "SaaS Platform",
    description: "Analytics dashboard for startups with AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text-cyan-purple">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Showcase of our best work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden glass-effect glass-effect-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {project.description}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
