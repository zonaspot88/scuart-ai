import { Clock, Radio } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Era of Refined AI Models: Efficiency Unlocked",
    excerpt: "Smaller, specialized models are outperforming giant LLMs in reasoning and efficiency, marking a new era in artificial intelligence.",
    category: "RESEARCH",
    date: "2 days ago",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1677442d019cecf8d2b7c881a0306d493b30acfd8?w=800",
    isLive: true,
  },
  {
    id: 2,
    title: "Continual Learning: AI That Learns Without Forgetting",
    excerpt: "Google has developed architectures like Titans and Nested Learning that allow AI models to update their internal knowledge without retraining.",
    category: "RESEARCH",
    date: "3 days ago",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442d019cecf8d2b7c881a0306d493b30acfd8?w=800",
    isLive: true,
  },
  {
    id: 3,
    title: "World Models: AI Understanding the Physical World",
    excerpt: "DeepMind, World Labs, and Meta are developing world models that allow AI to understand how the physical world works without labeled data.",
    category: "MODELS",
    date: "4 days ago",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1677442d019cecf8d2b7c881a0306d493b30acfd8?w=800",
    isLive: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
            <Radio className="w-5 h-5 text-accent" />
          </div>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            IAPulse Magazine
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text-cyan-purple">AI News</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Stay updated with the latest developments in artificial intelligence
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group rounded-lg overflow-hidden glass-effect glass-effect-hover transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                {/* Live Badge */}
                {post.isLive && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
