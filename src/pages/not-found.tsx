import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="font-display text-6xl text-foreground mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">Page not found.</p>
      <Link href="/" className="text-primary hover:text-white uppercase tracking-widest font-bold" data-testid="link-back-home">
        ← Back to Blog
      </Link>
    </div>
  );
}
