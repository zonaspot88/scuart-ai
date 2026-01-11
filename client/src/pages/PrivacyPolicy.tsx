import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                <p className="text-foreground/60 text-sm">Last updated: January 7, 2026</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8 text-foreground/80">
                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                  <p className="mb-4">
                    At Scuart, we collect information you provide directly to us, such as when you create an account, 
                    make a purchase, subscribe to our newsletter, or contact us for support.
                  </p>
                  <p>
                    This information may include your name, email address, phone number, company name, 
                    and any other information you choose to provide.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send promotional communications (with your consent)</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. 
                    This does not include trusted third parties who assist us in operating our website, conducting our business, 
                    or servicing you, so long as those parties agree to keep this information confidential.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                  <p>
                    We implement a variety of security measures to maintain the safety of your personal information. 
                    Your personal information is contained behind secured networks and is only accessible by a limited 
                    number of persons who have special access rights to such systems.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">5. Cookies</h2>
                  <p>
                    We use cookies to understand and save your preferences for future visits and compile aggregate data 
                    about site traffic and site interaction so that we can offer better site experiences and tools in the future.
                  </p>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </section>

                <section className="p-6 rounded-xl bg-card/50 border border-border/50">
                  <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="mt-4 text-primary font-semibold">
                    Email: privacy@scuart.com
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
