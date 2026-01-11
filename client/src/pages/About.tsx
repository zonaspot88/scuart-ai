/**
 * About Us Page - Scuart Agency
 * Design: Professional layout with team showcase and company story
 */

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { 
  ArrowLeft, 
  ArrowRight, 
  Award, 
  Brain, 
  Building2, 
  CheckCircle2, 
  Code2, 
  Globe, 
  Heart, 
  Linkedin, 
  Mail, 
  Rocket, 
  Sparkles, 
  Target, 
  Twitter, 
  Users, 
  Zap 
} from "lucide-react";
import { Link } from "wouter";

const teamMembers = [
  {
    name: "William Perez",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in digital transformation. Passionate about leveraging AI to solve real-world business challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "william@scuart.com"
  },
  {
    name: "Sarah Chen",
    role: "Head of AI Development",
    bio: "Former Google AI researcher specializing in machine learning and natural language processing. PhD from MIT.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "sarah@scuart.com"
  },
  {
    name: "Marcus Johnson",
    role: "Lead Designer",
    bio: "Award-winning UI/UX designer with a passion for creating beautiful, functional interfaces that users love.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "marcus@scuart.com"
  },
  {
    name: "Elena Rodriguez",
    role: "Full-Stack Developer",
    bio: "Expert in React, Node.js, and cloud architecture. Building scalable solutions for enterprise clients.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
    email: "elena@scuart.com"
  }
];

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We stay at the forefront of technology, constantly exploring new ways to solve problems and create value."
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering results that exceed expectations."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork, both within our team and with our clients."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we do, from code to communication."
  }
];

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" }
];

const milestones = [
  { year: "2019", title: "Company Founded", description: "Started with a vision to democratize AI for businesses of all sizes." },
  { year: "2020", title: "First Major Client", description: "Partnered with Fortune 500 companies to deliver AI-powered solutions." },
  { year: "2021", title: "Team Expansion", description: "Grew to 15+ talented professionals across design, development, and AI." },
  { year: "2022", title: "IAPulse Launch", description: "Launched our AI news platform to share insights with the community." },
  { year: "2023", title: "Global Reach", description: "Expanded services to clients across North America, Europe, and Asia." },
  { year: "2024", title: "AI Innovation Award", description: "Recognized for excellence in AI implementation and digital transformation." }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
          </div>

          <div className="container relative z-10">
            {/* Back to Home */}
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">About Scuart</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  We Build the <span className="gradient-text-cyan-purple">Future</span> of Digital
                </h1>
                
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Scuart is a premium AI-powered digital agency dedicated to transforming businesses through 
                  innovative technology solutions. We combine cutting-edge artificial intelligence with 
                  stunning design to create digital experiences that drive real results.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/#contact">
                    <Button className="btn-cyan">
                      Start a Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/#portfolio">
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="relative group">
                    {/* Glowing Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500" />
                    
                    <div className="relative bg-card rounded-2xl p-6 text-center border border-border/50">
                      <div className="text-4xl md:text-5xl font-bold gradient-text-cyan-purple mb-2">
                        {stat.number}
                      </div>
                      <div className="text-foreground/60 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-card/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500" />
                
                <div className="relative bg-card rounded-2xl p-8 md:p-10 h-full border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    To empower businesses of all sizes with cutting-edge AI technology and exceptional 
                    digital experiences. We believe that every company deserves access to the transformative 
                    power of artificial intelligence, and we're committed to making that vision a reality.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500" />
                
                <div className="relative bg-card rounded-2xl p-8 md:p-10 h-full border border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    To become the world's most trusted partner for AI-driven digital transformation. 
                    We envision a future where technology enhances human potential, and we're building 
                    the tools and experiences that will make that future possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Our Values</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What <span className="gradient-text-cyan-purple">Drives</span> Us
              </h2>
              <p className="text-foreground/60">
                Our core values guide everything we do, from how we work with clients to how we build our team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
                    
                    <div className="relative bg-card rounded-2xl p-6 h-full border border-border/50 group-hover:border-transparent transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                      <p className="text-foreground/60 text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>



        {/* Timeline / Journey */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Building the <span className="gradient-text-cyan-purple">Future</span>
              </h2>
              <p className="text-foreground/60">
                From a small startup to a leading AI agency, here's how we've grown over the years.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="relative group inline-block w-full">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-30 group-hover:opacity-50 blur transition-all duration-500" />
                        
                        <div className="relative bg-card rounded-xl p-6 border border-border/50">
                          <span className="text-primary font-bold text-lg">{milestone.year}</span>
                          <h4 className="text-xl font-semibold mt-2 mb-2">{milestone.title}</h4>
                          <p className="text-foreground/60 text-sm">{milestone.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0 z-10" />

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-card/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Why Scuart</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="gradient-text-cyan-purple">Us</span>?
                </h2>
                
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  We're not just another digital agency. We're your strategic partner in navigating the 
                  rapidly evolving landscape of AI and technology. Here's what sets us apart:
                </p>

                <div className="space-y-4">
                  {[
                    "AI-first approach to every project",
                    "Award-winning design team",
                    "Transparent communication & pricing",
                    "Ongoing support & maintenance",
                    "Proven track record of success",
                    "Cutting-edge technology stack"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/#contact">
                  <Button className="btn-cyan mt-8">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur" />
                
                <div className="relative bg-card rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-primary" />
                    Our Tech Stack
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "React", icon: "⚛️" },
                      { name: "Next.js", icon: "▲" },
                      { name: "TypeScript", icon: "📘" },
                      { name: "Node.js", icon: "🟢" },
                      { name: "Python", icon: "🐍" },
                      { name: "TensorFlow", icon: "🧠" },
                      { name: "OpenAI", icon: "🤖" },
                      { name: "AWS", icon: "☁️" },
                      { name: "Figma", icon: "🎨" }
                    ].map((tech, index) => (
                      <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/50 hover:bg-primary/10 transition-colors">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="relative max-w-4xl mx-auto text-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 blur" />
              
              <div className="relative bg-card rounded-2xl p-12 border border-border/50">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="gradient-text-cyan-purple">Transform</span> Your Business?
                </h2>
                <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help you leverage AI and cutting-edge technology to achieve your goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/#contact">
                    <Button className="btn-cyan">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/#portfolio">
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
