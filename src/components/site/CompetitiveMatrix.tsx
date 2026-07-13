import { Check, X } from "lucide-react";

const rows = [
  { feature: "Free scans every month", scrawl: "5 — full quality", ocr: "1–3 then paywall", gpt: "Limited / metered" },
  { feature: "Watermark on export", scrawl: false, ocr: true, gpt: false },
  { feature: "Hidden paywall traps", scrawl: false, ocr: true, gpt: true },
  { feature: "Cursive accuracy", scrawl: "Tuned for messy", ocr: "Print only", gpt: "General purpose" },
  { feature: "Sign-up required", scrawl: false, ocr: true, gpt: true },
  { feature: "Images deleted after scan", scrawl: true, ocr: false, gpt: false },
];

function Cell({ v, accent = false }: { v: string | boolean; accent?: boolean }) {
  if (typeof v === "boolean") {
    return v ? (
      <Check className={`h-5 w-5 ${accent ? "text-accent-teal" : "text-foreground/60"}`} strokeWidth={3} />
    ) : (
      <X className="h-5 w-5 text-foreground/30" />
    );
  }
  return (
    <span className={accent ? "text-foreground font-semibold" : "text-muted-foreground"}>{v}</span>
  );
}

export function CompetitiveMatrix() {
  return (
    <section id="compare" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">The sweet spot</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Built different. Priced honest.
          </h2>
          <p className="mt-3 text-muted-foreground">
            We checked every competitor that holds notes hostage. Here's what ScrawlFix does differently.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] border-b border-border bg-secondary/60 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div>Feature</div>
            <div className="text-center text-accent-teal">ScrawlFix</div>
            <div className="text-center">Typical OCR app</div>
            <div className="text-center">Generic AI chatbot</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.feature}
              className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center px-5 py-4 text-sm ${
                i !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="font-medium text-foreground">{r.feature}</div>
              <div className="flex justify-center"><Cell v={r.scrawl} accent /></div>
              <div className="flex justify-center"><Cell v={r.ocr} /></div>
              <div className="flex justify-center"><Cell v={r.gpt} /></div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-accent-teal/30 bg-accent-teal/5 p-6 text-center">
          <p className="text-lg font-semibold tracking-tight">
            5 free scan-to-text runs every month —{" "}
            <span className="text-accent-teal">no watermark, no bait-and-switch.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Full text copy + PDF export included on the free tier. Always.
          </p>
        </div>
      </div>
    </section>
  );
}
