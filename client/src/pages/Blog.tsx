import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, ArrowRight, Calendar, Clock, Radio, Tag, TrendingUp, User } from "lucide-react";
import { Link } from "wouter";

const featuredNews = {
  id: 1,
  title: "The Era of Refined AI Models: Efficiency Unlocked",
  excerpt: "Smaller, specialized models are outperforming giant LLMs in reasoning and efficiency. Companies like Anthropic, Google, and OpenAI are now focusing on creating more efficient architectures that deliver better results with less computational power.",
  category: "RESEARCH",
  author: "IAPulse Team",
  date: "January 5, 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
  isLive: true,
};

const latestNews = [
  {
    id: 2,
    title: "Continual Learning: AI That Learns Without Forgetting",
    excerpt: "Google has developed architectures like Titans and Nested Learning that allow AI models to update their internal knowledge without retraining from scratch.",
    category: "RESEARCH",
    author: "IAPulse Team",
    date: "January 4, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    isLive: true,
  },
  {
    id: 3,
    title: "World Models: AI Understanding the Physical World",
    excerpt: "DeepMind, World Labs, and Meta are developing world models that allow AI to understand how the physical world works without labeled data.",
    category: "MODELS",
    author: "IAPulse Team",
    date: "January 3, 2026",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    isLive: false,
  },
  {
    id: 4,
    title: "GPT-5 Rumors: What We Know So Far",
    excerpt: "OpenAI is reportedly working on GPT-5 with significant improvements in reasoning, multimodal capabilities, and reduced hallucinations.",
    category: "NEWS",
    author: "IAPulse Team",
    date: "January 2, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80",
    isLive: false,
  },
  {
    id: 5,
    title: "AI in Healthcare: 2026 Predictions",
    excerpt: "From drug discovery to personalized medicine, AI is set to revolutionize healthcare in ways we've never seen before.",
    category: "INDUSTRY",
    author: "IAPulse Team",
    date: "January 1, 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    isLive: false,
  },
  {
    id: 6,
    title: "The Rise of AI Agents in Enterprise",
    excerpt: "Autonomous AI agents are transforming how businesses operate, from customer service to complex decision-making processes.",
    category: "ENTERPRISE",
    author: "IAPulse Team",
    date: "December 30, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    isLive: false,
  },
];

const categories = [
  { name: "All", count: 24 },
  { name: "Research", count: 8 },
  { name: "Models", count: 6 },
  { name: "News", count: 5 },
  { name: "Industry", count: 3 },
  { name: "Enterprise", count: 2 },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10">
            {/* Back to Home */}
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Radio className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">
                  <span className="gradient-text-cyan-purple">IAPulse</span> Magazine
                </h1>
                <p className="text-foreground/60 text-sm">Latest AI News & Insights</p>
              </div>
            </div>

            {/* Featured Article */}
            <div className="mt-12 group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden">
                {/* Glowing Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500" />
                
                <div className="relative bg-card rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <img
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                      
                      {/* Live Badge */}
                      {featuredNews.isLive && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          LIVE
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                          {featuredNews.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-foreground/50">
                          <TrendingUp className="w-3 h-3" />
                          Featured
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredNews.title}
                      </h2>

                      <p className="text-foreground/70 mb-6 line-clamp-3">
                        {featuredNews.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-foreground/50">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredNews.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredNews.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredNews.readTime}
                        </span>
                      </div>

                      <Button className="btn-cyan mt-6 w-fit">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories & Latest News */}
        <section className="py-16 bg-card/30">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-primary" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs text-foreground/40">{category.count}</span>
                      </button>
                    ))}
                  </div>

                  {/* Newsletter */}
                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <h4 className="font-semibold mb-2">Subscribe to IAPulse</h4>
                    <p className="text-sm text-foreground/60 mb-4">Get the latest AI news delivered to your inbox.</p>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="btn-cyan w-full">Subscribe</Button>
                  </div>
                </div>
              </div>

              {/* News Grid */}
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {latestNews.map((news) => (
                    <article
                      key={news.id}
                      className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                        {/* Live Badge */}
                        {news.isLive && (
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            LIVE
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded">
                            {news.category}
                          </span>
                        </div>

                        <h4 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {news.title}
                        </h4>

                        <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                          {news.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-foreground/50">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {news.readTime}
                          </span>
                          <span>{news.date}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-10">
                  <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                    Load More Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
