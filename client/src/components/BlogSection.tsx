import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Radio, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "The Era of Refined AI Models: Efficiency Unlocked",
    excerpt: "Smaller, specialized models are outperforming giant LLMs in reasoning and efficiency, marking a new era in artificial intelligence.",
    category: "RESEARCH",
    date: "2 days ago",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    isLive: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Continual Learning: AI That Learns Without Forgetting",
    excerpt: "Google has developed architectures like Titans and Nested Learning that allow AI models to update their internal knowledge without retraining.",
    category: "RESEARCH",
    date: "3 days ago",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    isLive: true,
    isFeatured: false,
  },
  {
    id: 3,
    title: "World Models: AI Understanding the Physical World",
    excerpt: "DeepMind, World Labs, and Meta are developing world models that allow AI to understand how the physical world works without labeled data.",
    category: "MODELS",
    date: "4 days ago",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    isLive: false,
    isFeatured: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-6">
            <Radio className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">IAPulse Magazine</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Latest <span className="gradient-text-cyan-purple">AI News</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Stay updated with the latest developments in artificial intelligence and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured Post - Large */}
          <div className="lg:col-span-2 lg:row-span-2">
            <article className="group relative h-full rounded-2xl overflow-hidden cursor-pointer">
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500" />
              
              <div className="relative h-full bg-card rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    {blogPosts[0].isLive && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        LIVE
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-xs font-semibold rounded-full border border-accent/30">
                      <TrendingUp className="w-3 h-3" />
                      Featured
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                    {blogPosts[0].category}
                  </span>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-foreground/60 mb-6 line-clamp-3">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-foreground/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </span>
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary Posts */}
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Glowing Border on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
              
              <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 group-hover:border-transparent transition-all">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                  {/* Live Badge */}
                  {post.isLive && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      LIVE
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-foreground/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <Button className="group px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 hover:border-accent/50 text-foreground hover:text-primary transition-all">
              <Sparkles className="w-5 h-5 mr-2" />
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
