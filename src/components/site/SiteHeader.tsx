import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/scrawlfix-feather.png";
import { GooglePlayButton } from "./GooglePlayButton";

export function Logotype({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight text-xl ${className}`}>
      Scrawl<span className="text-accent-teal">Fix</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls =
    "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Left: Logo + wordmark */}
        <Link to="/" className="flex items-center gap-2" aria-label="ScrawlFix home">
          <img src={logoAsset} alt="ScrawlFix Logo" className="h-9 w-auto" />
          <span className="text-xl font-extrabold tracking-tight text-accent-teal">
            ScrawlFix
          </span>
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={linkCls} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>
            Home
          </Link>
          <a href="/#faq" className={linkCls}>FAQ</a>
          <Link to="/privacy" className={linkCls} activeProps={{ className: "text-foreground" }}>
            Privacy
          </Link>
          <Link to="/terms" className={linkCls} activeProps={{ className: "text-foreground" }}>
            Terms
          </Link>
        </nav>

        {/* Right: Google Play button */}
        <div className="hidden md:block">
          <GooglePlayButton size="sm" />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-base font-medium">Home</Link>
            <a href="/#faq" onClick={() => setOpen(false)} className="py-2 text-base font-medium">FAQ</a>
            <Link to="/privacy" onClick={() => setOpen(false)} className="py-2 text-base font-medium">Privacy</Link>
            <Link to="/terms" onClick={() => setOpen(false)} className="py-2 text-base font-medium">Terms</Link>
            <div className="pt-2">
              <GooglePlayButton size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
