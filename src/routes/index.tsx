import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroPanel } from "@/components/site/HeroPanel";
import { ShowdownCompare } from "@/components/site/ShowdownCompare";
import { ViralUseCases } from "@/components/site/ViralUseCases";
import { CompetitiveMatrix } from "@/components/site/CompetitiveMatrix";
import { Reviews } from "@/components/site/Reviews";
import { FaqSection } from "@/components/site/FaqSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScrawlFix — Turn Handwriting into Clean, Editable Text" },
      {
        name: "description",
        content:
          "Snap a page of handwriting, get clean editable text in seconds. 5 free scans every month — no watermark, no bait-and-switch. On Google Play.",
      },
      { property: "og:title", content: "ScrawlFix — Handwriting to Text" },
      {
        property: "og:description",
        content:
          "Stop retyping notes at midnight. ScrawlFix turns messy handwriting into structured, copy-paste text instantly.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <HeroPanel />
        <ShowdownCompare />
        <ViralUseCases />
        <CompetitiveMatrix />
        <Reviews />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
