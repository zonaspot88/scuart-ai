import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "wouter";

export default function TermsConditions() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            {/* Back to Home */}
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
                <p className="text-foreground/60 text-sm">Last updated: January 7, 2026</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-foreground/80">
                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p>
                    By accessing or using Scuart's services, you agree to be bound by these Terms and Conditions. 
                    If you disagree with any part of these terms, you may not access our services.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. Services</h2>
                  <p className="mb-4">
                    Scuart provides web development, mobile application development, AI integration, 
                    and digital consulting services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Custom website design and development</li>
                    <li>Mobile application development (iOS & Android)</li>
                    <li>AI and machine learning integration</li>
                    <li>E-commerce solutions</li>
                    <li>Digital strategy consulting</li>
                    <li>Maintenance and support services</li>
                  </ul>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Intellectual Property</h2>
                  <p>
                    Upon full payment, clients receive ownership of the final deliverables created specifically for their project. 
                    Scuart retains the right to use project examples in our portfolio unless otherwise agreed in writing. 
                    All pre-existing tools, frameworks, and proprietary methodologies remain the property of Scuart.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                  <p className="mb-4">
                    Payment terms are outlined in individual project proposals. Standard terms include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>50% deposit required to begin work</li>
                    <li>Remaining balance due upon project completion</li>
                    <li>Monthly retainer for ongoing services</li>
                    <li>Late payments may incur additional fees</li>
                  </ul>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Project Timeline</h2>
                  <p>
                    Project timelines are estimates based on the scope of work defined in the proposal. 
                    Delays caused by client feedback, content provision, or scope changes may extend the timeline. 
                    We will communicate any significant changes to the expected delivery date.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Revisions and Changes</h2>
                  <p>
                    Each project includes a specified number of revision rounds as outlined in the proposal. 
                    Additional revisions or scope changes will be quoted separately. 
                    Major changes to project requirements may require a new proposal.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                  <p>
                    Scuart shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                    resulting from your use of our services. Our total liability shall not exceed the amount paid for the 
                    specific service giving rise to the claim.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">8. Termination</h2>
                  <p>
                    Either party may terminate the agreement with written notice. Upon termination, 
                    the client is responsible for payment of all work completed up to the termination date. 
                    Any deposits paid are non-refundable unless otherwise agreed.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
                    United States, without regard to its conflict of law provisions.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Information</h2>
                  <p>
                    For questions about these Terms & Conditions, please contact us at:
                  </p>
                  <p className="mt-4 text-primary font-semibold">
                    Email: legal@scuart.com
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
