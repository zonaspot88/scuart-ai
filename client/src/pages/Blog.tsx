/**
 * Blog Page - IAPulse Magazine
 * Design: Professional layout with elegant illuminated frames
 */

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, ArrowRight, Calendar, Clock, Radio, Tag, TrendingUp, User } from "lucide-react";
import { Link } from "wouter";
import { articles } from "@/data/articles";

const categories = [
  { name: "All", count: articles.length },
  { name: "Research", count: articles.filter(a => a.category.toLowerCase() === "research").length },
  { name: "Models", count: articles.filter(a => a.category.toLowerCase() === "models").length },
  { name: "News", count: articles.filter(a => a.category.toLowerCase() === "news").length },
  { name: "Industry", count: articles.filter(a => a.category.toLowerCase() === "industry").length },
  { name: "Enterprise", count: articles.filter(a => a.category.toLowerCase() === "enterprise").length },
];

export default function Blog() {
  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

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
            <Link href={`/blog/${featuredArticle.slug}`}>
              <div className="mt-12 group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden">
                  {/* Glowing Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur transition-all duration-500" />
                  
                  <div className="relative bg-card rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-96 overflow-hidden">
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
                          LIVE
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
                            Featured
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
                  {latestArticles.map((article, index) => (
                    <Link key={article.id} href={`/blog/${article.slug}`}>
                      <article className="group rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
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
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded">
                              {article.category.toUpperCase()}
                            </span>
                          </div>

                          <h4 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>

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
                      </article>
                    </Link>
                  ))}
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
