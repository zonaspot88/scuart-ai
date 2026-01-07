import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Spectacular Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Let's Work Together
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text-cyan-purple">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Ready to transform your ideas into digital reality? Let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Card */}
            <div className="relative group">
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500" />
              
              <div className="relative p-8 rounded-2xl bg-card border border-border/50">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                {/* WhatsApp - Highlighted */}
                <a
                  href="https://wa.me/13478489720"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 hover:border-green-500/50 transition-all duration-300 mb-6 group/wa"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 group-hover/wa:scale-110 transition-transform">
                    <MessageCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-green-400 mb-1">WhatsApp</div>
                    <div className="text-foreground/80 text-lg font-medium">+1 (347) 848-9720</div>
                    <div className="text-xs text-foreground/50 mt-1">Click to chat now</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-green-400 ml-auto opacity-0 group-hover/wa:opacity-100 transition-opacity" />
                </a>

                {/* Other Contact Info */}
                <div className="space-y-5">
                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:hello@scuart.com"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        hello@scuart.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a
                        href="tel:+13478489720"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        +1 (347) 848-9720
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-foreground/70 text-sm">
                        8401 Mayland Dr, Suite V
                        <br />
                        Richmond, VA 23294
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-card/50 border border-border/50 text-center">
                <div className="text-3xl font-bold neon-cyan mb-1">24h</div>
                <div className="text-xs text-foreground/60">Response Time</div>
              </div>
              <div className="p-5 rounded-xl bg-card/50 border border-border/50 text-center">
                <div className="text-3xl font-bold neon-purple mb-1">100%</div>
                <div className="text-xs text-foreground/60">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="relative group">
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 group-hover:opacity-50 blur transition-all duration-500" />
              
              <form onSubmit={handleSubmit} className="relative p-8 md:p-10 rounded-2xl bg-card border border-border/50 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Send us a message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground/80">Project Type</Label>
                    <Select name="service" required>
                      <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        <SelectItem value="ai">AI Integration</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-foreground/80">Budget Range</Label>
                  <Select name="budget">
                    <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary h-12 rounded-xl">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k">$50,000+</SelectItem>
                      <SelectItem value="discuss">Let's Discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/80">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-foreground/50">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
