import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold font-serif text-accent-gold">SCUART</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm hover:text-accent-gold transition">Services</a>
            <a href="#approach" className="text-sm hover:text-accent-gold transition">Approach</a>
            <a href="#process" className="text-sm hover:text-accent-gold transition">Process</a>
            <a href="#contact" className="btn-primary text-sm">Start Project</a>
          </div>
          <button className="md:hidden text-accent-gold">Menu</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url('/images/hero-luxury-studio.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>
        
        <div className="container relative z-10 max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              We design digital experiences that drive measurable results.
            </h1>
            <p className="text-lg text-muted mb-8 max-w-2xl">
              Scuart is a boutique digital studio for ambitious brands. We combine strategic thinking, premium design, and AI-powered solutions to create experiences that don't just look exceptional—they convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start Your Project <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-secondary inline-flex items-center gap-2">
                Learn More
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-accent-gold" size={24} />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="bg-card/50 border-t border-border">
        <div className="container">
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">We create three things.</h2>
            <p className="text-lg text-muted max-w-2xl">
              Each project is a strategic partnership designed to move your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 h-64 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/digital-craftsmanship.jpg" 
                  alt="Digital Experiences" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif-alt font-bold mb-3">Digital Experiences</h3>
              <p className="text-muted mb-4">
                Beautiful, fast, conversion-focused web and mobile applications that your customers love.
              </p>
              <a href="#contact" className="btn-text inline-flex items-center gap-2">
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Service 2 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="mb-6 h-64 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/ai-design-process.jpg" 
                  alt="AI Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif-alt font-bold mb-3">AI Integration</h3>
              <p className="text-muted mb-4">
                Intelligent systems that scale with your business. From automation to predictive analytics.
              </p>
              <a href="#contact" className="btn-text inline-flex items-center gap-2">
                Explore <ArrowRight size={16} />
              </a>
            </div>

            {/* Service 3 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6 h-64 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/results-showcase.jpg" 
                  alt="Brand Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif-alt font-bold mb-3">Brand Systems</h3>
              <p className="text-muted mb-4">
                Visual identities and design systems that endure. Consistency across every touchpoint.
              </p>
              <a href="#contact" className="btn-text inline-flex items-center gap-2">
                Explore <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="border-t border-border">
        <div className="container max-w-4xl">
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Strategy first. Design second. Technology third.</h2>
            <p className="text-lg text-muted">
              We don't believe in one-size-fits-all solutions. Every project starts with deep discovery.
            </p>
          </div>

          <div className="space-y-12">
            {/* Principle 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-3xl font-serif-alt font-bold mb-4">Discovery</h3>
                <p className="text-muted text-lg mb-4">
                  We spend time understanding your business, your customers, and your goals. This foundation informs every decision we make.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Market research & competitive analysis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>User research & interviews</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Strategic roadmap & KPIs</span>
                  </li>
                </ul>
              </div>
              <div className="h-80 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg"></div>
            </div>

            {/* Principle 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="h-80 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg order-2 md:order-1"></div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-serif-alt font-bold mb-4">Craft</h3>
                <p className="text-muted text-lg mb-4">
                  Design is in the details. We obsess over typography, spacing, color, and interaction. Every pixel serves a purpose.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Premium design systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Thoughtful interactions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Accessibility & performance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <h3 className="text-3xl font-serif-alt font-bold mb-4">Measurement</h3>
                <p className="text-muted text-lg mb-4">
                  We don't just build beautiful things. We build things that work. Results matter more than awards.
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Conversion rate optimization</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Analytics & reporting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-gold">→</span>
                    <span>Continuous improvement</span>
                  </li>
                </ul>
              </div>
              <div className="h-80 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-card/50 border-t border-border">
        <div className="container">
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Process</h2>
            <p className="text-lg text-muted max-w-2xl">
              Four phases. One outcome: a digital experience that drives your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Discovery', description: 'Research, strategy, and planning' },
              { number: '02', title: 'Design', description: 'Wireframes, design systems, prototypes' },
              { number: '03', title: 'Development', description: 'Engineering, testing, optimization' },
              { number: '04', title: 'Launch', description: 'Deployment, monitoring, support' }
            ].map((phase, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="border border-border rounded-lg p-6 hover:border-accent-gold transition">
                  <div className="text-4xl font-bold text-accent-gold mb-4 font-serif">{phase.number}</div>
                  <h3 className="text-xl font-serif-alt font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted text-sm">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-t border-border">
        <div className="container max-w-4xl">
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Built for ambitious brands.</h2>
            <p className="text-lg text-muted">
              We work with founders, CTOs, and marketing leaders who are serious about digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 text-accent-gold">Ideal Clients</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex gap-3">
                  <span className="text-accent-gold">✓</span>
                  <span>Growth-stage startups</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold">✓</span>
                  <span>E-commerce brands with premium positioning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold">✓</span>
                  <span>Fintech companies building trust</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold">✓</span>
                  <span>Enterprises modernizing digital presence</span>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4 text-accent-gold">Project Scope</h3>
              <ul className="space-y-3 text-muted">
                <li className="flex gap-3">
                  <span className="text-accent-gold">•</span>
                  <span>Budget: $50,000+</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold">•</span>
                  <span>Timeline: 3-6 months</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold">•</span>
                  <span>Commitment: Strategic partnership</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold">•</span>
                  <span>Focus: Measurable results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-card/50 border-t border-border">
        <div className="container max-w-2xl text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to transform your digital presence?</h2>
            <p className="text-lg text-muted mb-8">
              Let's talk about your project. Schedule a consultation with our team.
            </p>

            <form className="space-y-4 mb-8" onSubmit={(e) => {
              e.preventDefault();
              // Form submission logic here
            }}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition"
                required
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition resize-none"
                required
              ></textarea>
              <button type="submit" className="btn-primary w-full">
                Schedule Consultation
              </button>
            </form>

            <p className="text-sm text-muted">
              We'll get back to you within 24 hours. No spam, no nonsense.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted">
            © 2025 Scuart. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted hover:text-accent-gold transition">Privacy</a>
            <a href="#" className="text-muted hover:text-accent-gold transition">Terms</a>
            <a href="#" className="text-muted hover:text-accent-gold transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
