import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/scrawlfix-logo.png";
import { AppStoreButton } from "./AppStoreButton";

const navLinkClass =
  "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors";

const navItems: { label: string; href: string; to?: "/" | "/privacy" | "/terms" }[] = [
  { label: "Home", href: "/", to: "/" },
  { label: "Features", href: "/#features" },
  { label: "Comparison", href: "/#comparison" },
  { label: "FAQ", href: "/#faq" },
  { label: "Privacy", href: "/privacy", to: "/privacy" },
  { label: "Terms", href: "/terms", to: "/terms" },
];

export function Logotype({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-extrabold tracking-tight text-xl ${className}`}>
      <img src={logoAsset} alt="" className="h-8 w-auto" />
      <span>
        Scrawl<span className="text-accent-teal">Fix</span>
      </span>
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2" aria-label="ScrawlFix home">
          <img src={logoAsset} alt="ScrawlFix Logo" className="h-9 w-auto" />
          <span className="text-xl font-extrabold tracking-tight text-accent-teal">
            ScrawlFix
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={navLinkClass}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <AppStoreButton size="sm" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium"
                >
                  {item.label}
                </a>
              ),
            )}
            <div className="pt-2">
              <AppStoreButton size="sm" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
