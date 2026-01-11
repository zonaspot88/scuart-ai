import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$1,500",
    description: "Perfect for startups and small projects",
    features: [
      "Responsive Website",
      "Basic SEO Optimization",
      "SSL Certificate Included",
      "Free Domain (1 year)",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Ideal for growing businesses",
    features: [
      "Custom Web Application",
      "Advanced SEO & Analytics",
      "E-Commerce Integration",
      "Free Domain (1 year)",
      "Monthly Maintenance",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex, scalable projects",
    features: [
      "Custom Development",
      "Advanced Features & APIs",
      "Dedicated Support",
      "Performance Optimization",
      "Priority Maintenance",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pricing <span className="gradient-text-cyan-purple">Plans</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Flexible packages for every budget
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glass-effect glow-cyan border-2 border-primary md:scale-105"
                  : "glass-effect glass-effect-hover"
              }`}
            >
              {/* Highlight Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold neon-cyan">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-foreground/60 text-sm ml-2">one-time</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection("#contact")}
                className={`w-full ${
                  plan.highlighted
                    ? "btn-cyan"
                    : "btn-outline-cyan"
                }`}
              >
                {plan.price === "Custom" ? "Contact Us" : "Start Project"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
