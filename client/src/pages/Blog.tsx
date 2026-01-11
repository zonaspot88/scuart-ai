/**
 * Blog Page - IAPulse Magazine
 * Design: Professional layout with filterable categories at top and 3-column grid
 */

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, ArrowRight, Calendar, Clock, Filter, Radio, Sparkles, Tag, TrendingUp, User } from "lucide-react";
import { Link } from "wouter";
import { articles } from "@/data/articles";
import { useState, useMemo } from "react";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Research", icon: TrendingUp },
  { name: "Models", icon: Radio },
  { name: "News", icon: Tag },
  { name: "Industry", icon: Filter },
  { name: "Enterprise", icon: User },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter(a => a.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory]);

  const featuredArticle = filteredArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
          </div>

          <div className="container relative z-10">
            {/* Back to Home */}
            <Link href="/" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <Radio className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">IAPulse Magazine</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Latest <span className="gradient-text-cyan-purple">AI News</span>
              </h1>
              <p className="text-lg text-foreground/60">
                Stay updated with the latest developments in artificial intelligence and technology.
              </p>
            </div>

            {/* Elegant Category Filter */}
            <div className="relative max-w-4xl mx-auto">
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl opacity-50 blur-sm" />
              
              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-2 border border-border/50">
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    const count = category.name === "All" 
                      ? articles.length 
                      : articles.filter(a => a.category.toLowerCase() === category.name.toLowerCase()).length;
                    
                    return (
                      <button
                        key={category.name}
                        onClick={() => setActiveCategory(category.name)}
                        className={`
                          group relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300
                          ${activeCategory === category.name 
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25' 
                            : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                          }
                        `}
                      >
                        <Icon className={`w-4 h-4 ${activeCategory === category.name ? 'text-white' : 'text-primary'}`} />
                        <span>{category.name}</span>
                        <span className={`
                          px-2 py-0.5 rounded-full text-xs
                          ${activeCategory === category.name 
                            ? 'bg-white/20 text-white' 
                            : 'bg-foreground/10 text-foreground/50'
                          }
                        `}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-8">
            <div className="container">
              <Link href={`/blog/${featuredArticle.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Glowing Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500" />
                    
                    <div className="relative bg-card rounded-2xl overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <img
                            src={featuredArticle.image}
                            alt={featuredArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent md:hidden" />
                          
                          {/* Live Badge */}
                          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            FEATURED
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                              {featuredArticle.category.toUpperCase()}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-foreground/50">
                              <TrendingUp className="w-3 h-3" />
                              Top Story
                            </span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {featuredArticle.title}
                          </h2>

                          <p className="text-foreground/70 mb-6 line-clamp-3">
                            {featuredArticle.excerpt}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-foreground/50">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {featuredArticle.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {featuredArticle.publishedAt}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {featuredArticle.readTime}
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
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid - 3 Columns */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">
                {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
                <span className="ml-2 text-lg text-foreground/50">({filteredArticles.length})</span>
              </h3>
            </div>

            {gridArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {gridArticles.map((article, index) => (
                  <Link key={article.id} href={`/blog/${article.slug}`}>
                    <article className="group relative h-full cursor-pointer">
                      {/* Glowing Border on Hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
                      
                      <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border/50 group-hover:border-transparent transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 text-xs font-semibold text-white bg-primary/80 backdrop-blur-sm rounded-full">
                              {article.category.toUpperCase()}
                            </span>
                          </div>

                          {/* Live Badge for first item */}
                          {index === 0 && (
                            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 bg-red-500/20 backdrop-blur-sm text-red-400 text-xs font-semibold rounded-full border border-red-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                              NEW
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h4 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>

                          <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-xs text-foreground/50 pt-4 border-t border-border/50">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {article.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Tag className="w-8 h-8 text-foreground/30" />
                </div>
                <h4 className="text-xl font-semibold mb-2">No articles found</h4>
                <p className="text-foreground/60">No articles in this category yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="relative max-w-3xl mx-auto">
              {/* Glowing Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 blur" />
              
              <div className="relative bg-card rounded-2xl p-8 md:p-12 text-center border border-border/50">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Newsletter</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Subscribe to <span className="gradient-text-cyan-purple">Scuart</span>
                </h3>
                <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
                  Get the latest AI news, insights, and exclusive content delivered directly to your inbox every week.
                </p>
                
                <form action="https://formspree.io/f/xpwzgkqr" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input type="hidden" name="_subject" value="New Scuart Newsletter Subscription" />
                  <Button type="submit" className="btn-cyan px-8">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
