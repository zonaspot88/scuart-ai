import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web development, mobile app development, UI/UX design, e-commerce solutions, hosting, and digital branding services tailored to your business needs.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while custom applications may take 2-3 months. We'll provide a detailed timeline in your proposal.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing: Basic Plan ($1,500), Professional Plan ($3,500), and Custom Enterprise solutions. Hosting and domain are included in all plans. Maintenance starts at $25/month.",
  },
  {
    question: "Do you provide hosting and domain registration?",
    answer:
      "Yes! Hosting and domain registration are included in all our plans. We handle everything from setup to maintenance, so you can focus on your business.",
  },
  {
    question: "What is your support and maintenance process?",
    answer:
      "All projects include 30 days of free support post-launch. After that, we offer monthly maintenance plans starting at $25/month for updates, security patches, and performance optimization.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply fill out the contact form or reach out via email. We'll schedule a free consultation to discuss your project, goals, and timeline before creating a detailed proposal.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text-cyan-purple">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 rounded-lg glass-effect glass-effect-hover border-0"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
