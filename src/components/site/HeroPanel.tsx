import { GooglePlayButton } from "./GooglePlayButton";
import { Check, Star } from "lucide-react";
import heroMock from "@/assets/hero-mock-combined.png.asset.json";



export function HeroPanel() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="flex min-w-0 flex-col justify-center">
          <h1 className="font-black tracking-[-0.03em] leading-[1.08] text-foreground text-[clamp(1.9rem,4.4vw,3.25rem)]">
            <span className="block whitespace-nowrap">Turn handwriting into</span>
            <span className="block whitespace-nowrap">
              <span className="relative inline-block">
                <span className="relative z-10">clean, editable text</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent-teal/25" />
              </span>
            </span>
            <span className="block whitespace-nowrap">instantly</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-[17px]">
            Stop retyping notes at midnight. Snap a page, get structured text you can paste anywhere — headings, bullets, checkboxes intact.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <GooglePlayButton size="lg" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-teal text-accent-teal" />
                ))}
              </div>
              <span><strong className="text-foreground">4.9</strong> · loved by early users</span>
            </div>
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
            {[
              "5 free scans every month",
              "No watermark on exports",
              "No account, no signup",
              "Images deleted after scan",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent-teal" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: pre-composed Figma hero mockup */}
        <div className="relative flex min-w-0 items-center justify-center overflow-visible">
          <img
            src={heroMock.url}
            alt="ScrawlFix scanning a handwritten grocery list and transforming it into clean digital text"
            width={700}
            height={700}
            className="h-auto w-full max-w-[560px] object-contain"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
