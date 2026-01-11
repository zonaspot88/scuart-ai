import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function EtniaBraids() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const collections = [
    {
      title: 'Ancestral Braids',
      description: 'Intricate patterns woven with intention. Gold accents. Timeless elegance.',
      image: '/images/etniabraids_category_trensas.png',
      alt: 'Luxury braids with gold accents'
    },
    {
      title: 'Face Artistry',
      description: 'Geometric patterns in gold and earth tones. Wearable art. Cultural expression.',
      image: '/images/etniabraids_category_pintucaritas.png',
      alt: 'Artistic face paint design'
    },
    {
      title: 'Modern Cuts',
      description: 'Clean lines. Contemporary design. Professional excellence.',
      image: '/images/etniabraids_category_corte_hombre.png',
      alt: 'Professional haircut'
    },
    {
      title: 'Color Transformation',
      description: 'Rich jewel tones. Professional artistry. Luxurious results.',
      image: '/images/etniabraids_tintura_v2.png',
      alt: 'Professional hair coloring'
    }
  ];

  const philosophy = [
    {
      title: 'Discovery',
      description: 'We listen. We understand your vision, your heritage, your story. This foundation informs every decision.'
    },
    {
      title: 'Artistry',
      description: 'Our team are artists, not just technicians. Every detail matters. Every braid, every stroke, every cut is intentional.'
    },
    {
      title: 'Empowerment',
      description: 'You leave our studio not just transformed, but empowered. Confident. Seen.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-accent-gold">ETNIA</div>
          <div className="hidden md:flex gap-8">
            <a href="#story" className="text-sm hover:text-accent-gold transition">Heritage</a>
            <a href="#collections" className="text-sm hover:text-accent-gold transition">Collections</a>
            <a href="#philosophy" className="text-sm hover:text-accent-gold transition">Philosophy</a>
            <a href="#contact" className="text-sm hover:text-accent-gold transition">Contact</a>
          </div>
          <button className="md:hidden text-accent-gold">Menu</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/etniabraids_hero_lifestyle.png)',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Braids Are Not a Trend.
            <br />
            <span className="text-accent-gold">They Are a Legacy.</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent-silver mb-8 font-serif-alt">
            We craft identity. We honor tradition. We celebrate power.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent-gold text-background font-semibold hover:bg-accent-silver transition-all duration-300 transform hover:-translate-y-1">
            Book Your Experience
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Brand Story */}
      <section id="story" className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-accent-gold">
              Our Heritage
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                At Etnia Braids, we believe that hair is more than aesthetics. It's a statement. A legacy. A revolution.
              </p>
              <p>
                For generations, braids have been symbols of resistance, beauty, and cultural pride. Today, we honor that history while creating something entirely new. Our studio is a sanctuary where tradition meets luxury, where every client becomes a collaborator in their own transformation.
              </p>
              <p className="text-2xl font-serif-alt font-semibold text-accent-gold">
                We don't do hair. We craft identity.
              </p>
            </div>
          </div>

          {/* Group Image */}
          <div className="mt-16 animate-scale-in">
            <img 
              src="/images/etniabraids_girl_group.png" 
              alt="Etnia Braids community" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 md:py-32 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-center text-accent-gold animate-fade-in-up">
            Our Collections
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {collections.map((collection, idx) => (
              <div 
                key={idx} 
                className="group animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 h-80">
                  <img 
                    src={collection.image} 
                    alt={collection.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-serif-alt font-semibold mb-3 text-accent-gold">
                  {collection.title}
                </h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                <button className="text-accent-gold hover:text-accent-silver transition flex items-center gap-2 text-sm font-semibold">
                  Explore <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-16 text-center text-accent-gold animate-fade-in-up">
            Our Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {philosophy.map((item, idx) => (
              <div 
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-serif-alt font-semibold mb-4 text-accent-gold">
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 md:py-32 bg-card">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-center text-accent-gold animate-fade-in-up">
            Book Your Transformation
          </h2>
          <p className="text-center text-foreground mb-12 text-lg animate-fade-in-up">
            Ready to join our community of empowered individuals? Let's create something beautiful together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-6 py-4 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-6 py-4 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-background border border-border px-6 py-4 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-6 py-4 text-foreground focus:outline-none focus:border-accent-gold transition"
              >
                <option value="">Select a Collection</option>
                <option value="braids">Ancestral Braids</option>
                <option value="faceArt">Face Artistry</option>
                <option value="cuts">Modern Cuts</option>
                <option value="color">Color Transformation</option>
              </select>
            </div>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-background border border-border px-6 py-4 text-foreground focus:outline-none focus:border-accent-gold transition"
            />

            <textarea
              name="message"
              placeholder="Tell us about your vision"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-background border border-border px-6 py-4 text-foreground placeholder-muted focus:outline-none focus:border-accent-gold transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-accent-gold text-background font-semibold py-4 hover:bg-accent-silver transition-all duration-300 transform hover:-translate-y-1"
            >
              {submitted ? 'Thank You! We\'ll Be In Touch' : 'Schedule Consultation'}
            </button>
          </form>

          <p className="text-center text-muted text-sm mt-8">
            We'll get back to you within 24 hours. No spam. Only genuine connection.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-accent-gold font-serif font-bold text-lg mb-4">ETNIA BRAIDS</h3>
              <p className="text-muted text-sm leading-relaxed">
                Where tradition meets luxury. We craft identity, honor heritage, and celebrate power.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>hello@etniabraids.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Location</h4>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>123 Heritage Street<br />Cultural District<br />Your City, State 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Hours</h4>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon - Fri: 10am - 7pm</p>
                    <p>Sat: 11am - 6pm</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
            <p>&copy; 2026 Etnia Braids. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent-gold transition">Privacy</a>
              <a href="#" className="hover:text-accent-gold transition">Terms</a>
              <a href="#" className="hover:text-accent-gold transition">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
