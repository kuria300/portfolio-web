import { ArrowLeft, Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal size={14} className="text-primary-foreground" />
          <span className="font-mono text-sm text-primary-foreground tracking-widest">
            404 — not found
          </span>
        </div>
        <h1 className="font-mono font-bold text-6xl md:text-8xl text-primary-foreground/20 mb-4">
          404
        </h1>
        <p className="font-mono text-sm text-muted-foreground mb-8">
          This page doesn&apos;t exist. Maybe it never did.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground border border-muted-foreground px-5 py-3 hover:border-primary-foreground hover:text-primary-foreground transition-all"
        >
          <ArrowLeft size={13} /> Back to home
        </Link>
      </div>
    </div>
  );
}
