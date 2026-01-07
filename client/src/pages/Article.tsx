/**
 * Article Page - Professional design with elegant illuminated frames
 * Design: Dark theme with cyan/purple gradients, glassmorphism cards, glowing borders
 */

import { Button } from "@/components/ui/button";
import { getArticleBySlug, articles } from "@/data/articles";
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook, Tag, User, ChevronRight } from "lucide-react";
import { Link, useParams } from "wouter";
import { useEffect } from "react";
import { Streamdown } from "streamdown";

export default function Article() {
  const params = useParams<{ slug: string }>();
  const article = getArticleBySlug(params.slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-foreground/60 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = article.title;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Article Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Content */}
        <div className="container relative z-10 h-full flex flex-col justify-end pb-16">
          {/* Back Button */}
          <Link href="/blog" className="absolute top-8 left-4 md:left-0">
            <Button variant="outline" className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary bg-primary/20 backdrop-blur-sm rounded-full w-fit mb-6 border border-primary/30">
            <Tag className="w-4 h-4" />
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-foreground/70">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{article.author}</div>
                <div className="text-sm">{article.authorRole}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16 md:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Content Card with Glowing Border */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur transition-all duration-500" />
                
                <div className="relative p-8 md:p-12 rounded-2xl bg-card border border-border/50">
                  {/* Excerpt */}
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 pb-8 border-b border-border/50">
                    {article.excerpt}
                  </p>

                  {/* Article Body */}
                  <div className="prose prose-lg prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:gradient-text-cyan-purple
                    prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-ul:my-6 prose-li:text-foreground/80
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  ">
                    <Streamdown>{article.content}</Streamdown>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-border/50">
                    <h4 className="text-sm font-semibold text-foreground/60 mb-4">TAGS</h4>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Share Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-30 blur transition-all duration-500" />
                
                <div className="relative p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-primary" />
                    Share Article
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1DA1F2]/10 flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors border border-[#1DA1F2]/30"
                    >
                      <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center hover:bg-[#0A66C2]/20 transition-colors border border-[#0A66C2]/30"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center hover:bg-[#1877F2]/20 transition-colors border border-[#1877F2]/30"
                    >
                      <Facebook className="w-5 h-5 text-[#1877F2]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-30 blur transition-all duration-500" />
                
                <div className="relative p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="text-lg font-bold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{article.author}</div>
                      <div className="text-foreground/60">{article.authorRole}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-30 blur transition-all duration-500" />
                
                <div className="relative p-6 rounded-xl bg-card border border-border/50">
                  <h3 className="text-lg font-bold mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="block group/item"
                      >
                        <div className="flex gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors -mx-3">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm line-clamp-2 group-hover/item:text-primary transition-colors">
                              {related.title}
                            </h4>
                            <span className="text-xs text-foreground/50 mt-1 block">
                              {related.readTime}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-foreground/30 group-hover/item:text-primary transition-colors flex-shrink-0 self-center" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl opacity-50 blur transition-all duration-500 group-hover:opacity-75" />
                
                <div className="relative p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                  <h3 className="text-lg font-bold mb-2">Need AI Solutions?</h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Let us help you implement cutting-edge AI technology for your business.
                  </p>
                  <Link href="/#contact">
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="relative py-16 md:py-24 border-t border-border/50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="container relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              More <span className="gradient-text-cyan-purple">Articles</span>
            </h2>
            <Link href="/blog">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                View All
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
                  
                  <div className="relative rounded-xl overflow-hidden bg-card border border-border/50 group-hover:border-transparent transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-primary bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-foreground/60 text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-foreground/50">
                        <span>{article.publishedAt}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
