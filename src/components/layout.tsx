import React, { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home">
          <span className="font-display text-2xl tracking-widest text-primary font-bold">JR BEAST</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors tracking-widest uppercase" data-testid="link-nav-blog">
            Blog
          </Link>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase" data-testid="link-nav-about">
            About
          </a>
        </nav>

        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-border/40 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium text-foreground hover:text-primary transition-colors tracking-widest uppercase" onClick={() => setIsOpen(false)} data-testid="link-mobile-blog">
              Blog
            </Link>
            <a href="#" className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase" onClick={() => setIsOpen(false)} data-testid="link-mobile-about">
              About
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 mt-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl text-foreground mb-4 opacity-50">JR BEAST</h2>
        <p className="text-sm text-muted-foreground tracking-widest uppercase">
          &copy; {new Date().getFullYear()} JR BEAST. NO EXCUSES.
        </p>
      </div>
    </footer>
  );
}
