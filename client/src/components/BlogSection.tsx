/**
 * BlogSection - Latest AI News from IAPulse
 * Design: Elegant illuminated frames with glowing borders, professional layout
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Radio, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { articles } from "@/data/articles";

export default function BlogSection() {
  // Get the first 3 articles for the homepage section
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 3);

  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />

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
            <Link href={`/blog/${featuredArticle.slug}`}>
              <article className="group relative h-full rounded-2xl overflow-hidden cursor-pointer">
                {/* Glowing Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500" />
                
                <div className="relative h-full bg-card rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-72 lg:h-80 overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        LIVE
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-xs font-semibold rounded-full border border-accent/30">
                        <TrendingUp className="w-3 h-3" />
                        Featured
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                      {featuredArticle.category.toUpperCase()}
                    </span>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-foreground/60 mb-6 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-foreground/50">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </span>
                        <span>{featuredArticle.publishedAt}</span>
                      </div>
                      <span className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* Secondary Posts */}
          {secondaryArticles.map((article, index) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <article className="group relative rounded-2xl overflow-hidden cursor-pointer h-full">
                {/* Glowing Border on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
                
                <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 group-hover:border-transparent transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                    {/* Live Badge */}
                    {index === 0 && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        LIVE
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded mb-3">
                      {article.category.toUpperCase()}
                    </span>

                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-foreground/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
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
