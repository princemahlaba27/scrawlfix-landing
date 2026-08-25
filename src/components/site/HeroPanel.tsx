import { AppStoreButton } from "./AppStoreButton";
import { Check } from "lucide-react";
import heroMock from "@/assets/hero-mock-combined.png";

export function HeroPanel() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-8">
        <div className="flex min-w-0 flex-col justify-center">
          <div className="inline-flex w-fit items-center rounded-full border border-brand-border bg-soft-pill px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-accent-sub">
            ⚡ iOS 1.0 NOW LIVE ON APP STORE
          </div>
          <h1 className="mt-4 font-black tracking-[-0.03em] leading-[1.08] text-foreground text-[clamp(1.9rem,4.4vw,3.25rem)]">
            Turn Messy Lecture Notes into Clean AI Study Sets
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-[17px]">
            Stop retyping scribbled notes at midnight. Snap a photo of your handwritten pages or whiteboard to get structured Markdown notes, instant active-recall flashcards, and study quizzes in seconds.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <AppStoreButton size="lg" />
          </div>
          <ul className="mt-8 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
            {[
              "5 Free Scans Every Month",
              "Instant Flashcards & Quizzes",
              "Clean PDF & Markdown Export",
              "No Mandatory Account Signup",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent-teal" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex min-w-0 items-center justify-center overflow-visible">
          <img
            src={heroMock}
            alt="ScrawlFix scanning handwritten lecture notes and turning them into a structured study deck"
            width={4094}
            height={3309}
            className="h-auto w-full max-w-[640px] object-contain lg:max-w-none"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
