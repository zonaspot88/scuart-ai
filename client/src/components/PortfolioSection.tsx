import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Aurea Finance",
    category: "Fintech App",
    description: "Premium mobile banking application with elegant dark mode design, real-time transaction tracking, investment portfolio management, and secure payment processing.",
    image: "/images/project-fintech.jpg",
    url: "#",
    isFeatured: true,
  },
  {
    title: "EduLearn Platform",
    category: "E-Learning",
    description: "Modern online education platform featuring video courses, interactive lessons, progress tracking, certificates, and a comprehensive learning management system.",
    image: "/images/project-education.jpg",
    url: "#",
    isFeatured: true,
  },
  {
    title: "Etnia Braids",
    category: "Beauty & Lifestyle",
    description: "Vibrant website for African braiding salon featuring online booking, gallery showcase, and cultural-inspired design with colorful ethnic patterns.",
    image: "/images/project-etniabraids.jpg",
    url: "https://etniabraids.com/",
    isFeatured: false,
  },
  {
    title: "Eva Beauty Unisex",
    category: "Beauty Salon",
    description: "Elegant dark-themed website for luxury unisex salon with appointment booking, service gallery, and premium spa aesthetics.",
    image: "/images/project-evabeauty.jpg",
    url: "https://evabeautyunisex.com/",
    isFeatured: false,
  },
  {
    title: "Arriba Gold",
    category: "E-Commerce",
    description: "Artisanal chocolate brand website showcasing premium Ecuadorian cacao products with elegant product photography and brand storytelling.",
    image: "/images/project-arribagold.jpg",
    url: "https://arribagold.com/",
    isFeatured: false,
  },
  {
    title: "Healthy Choice NY",
    category: "Restaurant",
    description: "Fresh and vibrant website for healthy food restaurant with online ordering, catering services, and location finder across New York.",
    image: "/images/project-healthychoice.jpg",
    url: "https://healthychoicenewyork.com/",
    isFeatured: false,
  },
];

export default function PortfolioSection() {
  const handleProjectClick = (url: string) => {
    if (url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text-cyan-purple">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Real projects we've built for our clients. Click to visit each live website.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project.url)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-500 ${
                project.isFeatured ? "md:col-span-1 lg:col-span-1" : ""
              }`}
            >
              {/* Glowing Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${
                project.isFeatured 
                  ? "from-amber-500 via-orange-500 to-amber-500" 
                  : "from-primary via-accent to-primary"
              } rounded-2xl opacity-0 group-hover:opacity-75 blur transition-all duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 group-hover:border-transparent transition-all">
                {/* Image */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.isFeatured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                    project.isFeatured 
                      ? "text-amber-400 bg-amber-500/10" 
                      : "text-primary bg-primary/10"
                  }`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                    project.isFeatured ? "text-amber-400" : "text-primary"
                  }`}>
                    {project.url === "#" ? "Coming Soon" : "Visit Website"}
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/60 mb-4">Want to see your project here?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Let's build something amazing together
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
