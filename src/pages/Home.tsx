import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { Navbar, Footer } from "@/components/layout";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-40 px-4 overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.1),transparent_50%)]" />
          
          <div className="container mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-none text-foreground mb-6" data-testid="text-hero-title">
                JR BEAST
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-primary tracking-[0.2em] font-medium uppercase max-w-2xl mx-auto" data-testid="text-hero-tagline">
                Raw. Direct. Impossible to ignore.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-16">
            {posts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
                data-testid={`card-post-${post.id}`}
              >
                <div className="absolute -inset-x-8 -inset-y-8 bg-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-sm" />
                
                <div className="flex flex-col gap-4">
                  <div className="text-sm font-medium text-primary tracking-widest uppercase">
                    {post.date}
                  </div>
                  
                  <Link href={`/post/${post.id}`} className="block">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mt-2">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/post/${post.id}`} className="inline-flex items-center text-foreground font-bold tracking-widest uppercase mt-4 group-hover:text-primary transition-colors" data-testid={`link-readmore-${post.id}`}>
                    Read More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
