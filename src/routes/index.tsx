import { useEffect } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroPanel } from "@/components/site/HeroPanel";
import { ShowdownCompare } from "@/components/site/ShowdownCompare";
import { ViralUseCases } from "@/components/site/ViralUseCases";
import { CompetitiveMatrix } from "@/components/site/CompetitiveMatrix";
import { Reviews } from "@/components/site/Reviews";
import { FaqSection } from "@/components/site/FaqSection";

export function LandingPage() {
  useEffect(() => {
    document.title = "ScrawlFix — Turn Handwriting Into Clean, Editable Text Instantly";
  }, []);

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
