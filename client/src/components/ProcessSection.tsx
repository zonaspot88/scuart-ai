import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We understand your business, goals, and target audience.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We create wireframes, prototypes, and detailed project plans.",
  },
  {
    number: "03",
    title: "Development",
    description: "Our team builds your project using best practices and modern technologies.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy, test, and provide ongoing support and maintenance.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text-cyan-purple">Process</span>
          </h2>
          <p className="text-lg text-foreground/70">
            How we bring your vision to life
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg glass-effect glass-effect-hover transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-5xl font-bold neon-cyan mb-4 opacity-20">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative -mt-12">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
