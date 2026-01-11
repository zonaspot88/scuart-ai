import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

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
            <a href="#why-us" className="text-sm hover:text-accent-gold transition">Why Us</a>
            <a href="#process" className="text-sm hover:text-accent-gold transition">Process</a>
            <a href="#contact" className="btn-primary text-sm">Book a Call</a>
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
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              We design modern websites that turn visitors into customers
            </h1>
            <p className="text-lg text-muted mb-8 max-w-2xl">
              Strategic, fast, and clean web design built to help brands look professional and convert better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Book a Call <ArrowRight size={18} />
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
            <h2 className="text-4xl md:text-5xl font-serif mb-4">What We Do</h2>
            <p className="text-lg text-muted max-w-2xl">
              We design and develop websites focused on clarity, trust, and conversion. Our goal is not just to make sites look good, but to make them work as a real business tool.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 h-64 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/digital-craftsmanship.jpg" 
                  alt="Website Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif-alt font-bold mb-3">Website Design</h3>
              <p className="text-muted mb-4">
                Custom websites built for clarity and conversion. Clean design that builds trust with your audience.
              </p>
              <a href="#contact" className="btn-text inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Service 2 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="mb-6 h-64 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/ai-design-process.jpg" 
                  alt="Website Redesign" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif-alt font-bold mb-3">Website Redesign</h3>
              <p className="text-muted mb-4">
                Modernize your existing site. Improve user experience, speed, and conversion rates.
              </p>
              <a href="#contact" className="btn-text inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>

            {/* Service 3 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6 h-64 bg-gradient-to-br from-accent-gold/10 to-accent-silver/5 rounded-lg overflow-hidden">
                <img 
                  src="/images/results-showcase.jpg" 
                  alt="High-Conversion Landing Pages" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif-alt font-bold mb-3">High-Conversion Landing Pages</h3>
              <p className="text-muted mb-4">
                Targeted landing pages designed to capture leads and drive sales. Tested and optimized.
              </p>
              <a href="#contact" className="btn-text inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section id="why-us" className="border-t border-border">
        <div className="container max-w-4xl">
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted">
              We're not just another digital agency. Here's what sets us apart.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif-alt font-bold mb-2">Direct Communication, No Intermediaries</h3>
                <p className="text-muted">You work directly with the team building your project. No account managers, no delays.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif-alt font-bold mb-2">Design Focused on Business Results</h3>
                <p className="text-muted">We don't follow templates. Every design decision is made to improve your conversion rates and user experience.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif-alt font-bold mb-2">Clean Process and Professional Delivery</h3>
                <p className="text-muted">Clear timelines, transparent communication, and deliverables you can count on.</p>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <CheckCircle2 className="w-6 h-6 text-accent-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-serif-alt font-bold mb-2">Experience with Digital Brands and Entrepreneurs</h3>
                <p className="text-muted">We've worked with startups, e-commerce brands, and digital entrepreneurs. We understand your challenges.</p>
              </div>
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
              Four phases. One outcome: a website that works for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'Discovery', description: 'We understand your business, goals, and target audience.' },
              { number: '02', title: 'Design', description: 'We create wireframes, prototypes, and detailed project plans.' },
              { number: '03', title: 'Development', description: 'Our team builds your project using best practices and modern technologies.' },
              { number: '04', title: 'Launch', description: 'We deploy, test, and provide ongoing support and maintenance.' }
            ].map((phase, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="text-5xl font-serif font-bold text-accent-gold/30 mb-4">{phase.number}</div>
                <h3 className="text-xl font-serif-alt font-bold mb-3">{phase.title}</h3>
                <p className="text-muted text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-t border-border">
        <div className="container max-w-3xl py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 animate-fade-in-up">
            Ready to improve your website?
          </h2>
          <p className="text-lg text-muted mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Book a call and let's see if we're the right fit for your project.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Book a Call <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-card/50 border-t border-border">
        <div className="container max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Get In Touch</h2>
            <p className="text-lg text-muted">
              Let's discuss how we can help you build a website that converts.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent-gold transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent-gold transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 000-0000" 
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent-gold transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent-gold transition">
                <option>Select a service</option>
                <option>Website Design</option>
                <option>Website Redesign</option>
                <option>Landing Page</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Budget Range</label>
              <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent-gold transition">
                <option>Select your budget</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Details</label>
              <textarea 
                placeholder="Tell us about your project, goals, and timeline..."
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-accent-gold transition resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          <p className="text-xs text-muted text-center mt-6">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </section>
    </div>
  );
}
