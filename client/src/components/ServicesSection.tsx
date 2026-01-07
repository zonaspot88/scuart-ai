import { ArrowRight, Bot, Code2, Globe, Palette, Rocket, Shield, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js. Fast, secure, and scalable solutions.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences with React Native and Flutter.",
    features: ["iOS & Android", "Push Notifications", "Offline Support"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "Integrate artificial intelligence into your business. Chatbots, automation, machine learning, and custom AI solutions.",
    features: ["ChatGPT Integration", "Custom Models", "Automation"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that engage your audience. User research, wireframing, and high-fidelity prototypes.",
    features: ["User Research", "Prototyping", "Design Systems"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "E-Commerce",
    description: "Complete online stores with payment processing, inventory management, and marketing automation. Shopify, WooCommerce, and custom solutions.",
    features: ["Payment Gateway", "Inventory", "Analytics"],
    gradient: "from-cyan-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Digital Branding",
    description: "Comprehensive branding strategies and digital presence development. Logo design, brand guidelines, and marketing materials.",
    features: ["Logo Design", "Brand Strategy", "Social Media"],
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gradient-text-cyan-purple">Services</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Comprehensive digital solutions tailored to transform your business and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glowing Border on Hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500`} />
              
              {/* Card Content */}
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 group-hover:border-transparent transition-all duration-500">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-foreground/70 bg-background/50 rounded-full border border-border/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-foreground/60 mb-4">Need something custom?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Let's discuss your project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
