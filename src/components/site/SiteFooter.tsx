import { Link } from "@tanstack/react-router";
import { Logotype } from "./SiteHeader";
import { GooglePlayButton } from "./GooglePlayButton";
import { ContactEmail } from "./ContactEmail";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logotype />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Turn messy handwriting into clean, editable text — instantly. Built by Anti Coder Studio.
            </p>
            <div className="mt-5">
              <GooglePlayButton size="md" />
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><a href="/#faq" className="hover:text-foreground">FAQ</a></li>
              <li><a href="/#compare" className="hover:text-foreground">How it compares</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Legal &amp; Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li>
                Support: <ContactEmail />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 Anti Coder Studio. ScrawlFix and its logo are trademarks of Anti Coder Studio.</div>
          <div>Made for handwriting that deserves better.</div>
        </div>
      </div>
    </footer>
  );
}
