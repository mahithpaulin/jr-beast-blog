import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { posts } from "@/data/posts";
import { Navbar, Footer } from "@/components/layout";

export default function Post() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[100dvh] flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="font-display text-6xl text-foreground mb-4">NOT FOUND</h1>
          <p className="text-xl text-muted-foreground mb-8">This content does not exist.</p>
          <Link href="/" className="text-primary hover:text-white uppercase tracking-widest font-bold" data-testid="link-back-home">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <header className="mb-16 pb-12 border-b border-border/40 text-center">
              <div className="text-primary font-bold tracking-widest uppercase mb-6" data-testid="text-post-meta">
                {post.date} | BY {post.author}
              </div>
              <h1 className="font-display text-5xl md:text-7xl leading-tight text-foreground" data-testid="text-post-title">
                {post.title}
              </h1>
            </header>

            <div className="prose prose-invert prose-lg md:prose-xl mx-auto prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide prose-a:text-primary hover:prose-a:text-primary/80" data-testid="text-post-content">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-3xl mt-12 mb-6 text-foreground">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 mb-8">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-8">
                    {paragraph.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < paragraph.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
            
            <div className="mt-24 pt-12 border-t border-border/40 text-center">
              <Link href="/" className="inline-flex items-center text-foreground font-bold tracking-widest uppercase hover:text-primary transition-colors" data-testid="link-back-bottom">
                <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back to all posts
              </Link>
            </div>
          </motion.div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
