/**
 * TestimonialsSection - Client Reviews
 * Design: Elegant illuminated frames with glowing borders, professional layout
 * Language: English
 */

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Garcia",
    role: "CEO, Eva Beauty",
    avatar: "MG",
    content: "Scuart completely transformed our business. The website they created is beautiful, lightning-fast, and our sales increased by 150%. Their attention to detail and understanding of our brand was exceptional.",
    rating: 5,
  },
  {
    name: "Carlos Lopez",
    role: "Founder, Etnia Braids",
    avatar: "CL",
    content: "True professionals in every sense. They understood our vision from day one and executed it flawlessly. The final result exceeded all our expectations. We recommend Scuart without hesitation.",
    rating: 5,
  },
  {
    name: "Ana Martinez",
    role: "Manager, Healthy Choice",
    avatar: "AM",
    content: "The ordering system they implemented is incredibly intuitive and our customers absolutely love it. Their post-launch support has been outstanding. A truly world-class development team.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our Clients <span className="gradient-text-cyan-purple">Say</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Real feedback from satisfied partners who trusted us with their digital presence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 group-hover:opacity-60 blur transition-all duration-500" />
              
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 group-hover:border-transparent transition-all h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-8 leading-relaxed flex-1 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-foreground/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-2">50+</div>
              <div className="text-foreground/60">Projects Delivered</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-2">100%</div>
              <div className="text-foreground/60">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-2">5★</div>
              <div className="text-foreground/60">Average Rating</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-2">24/7</div>
              <div className="text-foreground/60">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
