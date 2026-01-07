/*
 * NEWS SECTION - IAPulse Magazine
 * - Grid of news cards with featured article
 * - Live indicator for breaking news
 * - Category badges with neon styling
 */

import { Button } from "@/components/ui/button";
import { categories, newsArticles } from "@/data/news";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ExternalLink, Radio } from "lucide-react";

export default function NewsSection() {
  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <section id="noticias" className="relative py-24 md:py-32 bg-card/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.3 0.02 260) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center">
                <Radio className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                IAPulse Magazine
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Últimas Noticias de{" "}
              <span className="neon-text-magenta">Inteligencia Artificial</span>
            </h2>
          </div>
          <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 self-start md:self-auto">
            Ver Todas las Noticias
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-secondary border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              {/* Badges */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
                  {featuredArticle.category}
                </span>
                {featuredArticle.isLive && (
                  <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    LIVE
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                {featuredArticle.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                  <span>{featuredArticle.date}</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Leer más
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* Other Articles */}
          <div className="flex flex-col gap-6">
            {otherArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="group flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded bg-secondary text-muted-foreground">
                        {article.category}
                      </span>
                      {article.isLive && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold text-red-400">
                          <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                          LIVE
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm md:text-base font-bold line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                      {article.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
