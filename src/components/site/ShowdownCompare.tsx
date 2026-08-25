import { ArrowRight } from "lucide-react";
import noteImg from "@/assets/raw-handwriting-lecture.jpg";

function Fraction({ num, den }: { num: string; den: string }) {
  return (
    <span className="mx-0.5 inline-flex flex-col items-center align-middle text-[11px] leading-none">
      <span className="border-b border-foreground/70 px-0.5 pb-0.5">{num}</span>
      <span className="px-0.5 pt-0.5">{den}</span>
    </span>
  );
}

export function ShowdownCompare() {
  return (
    <section id="comparison" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">The Showdown</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            From chaotic scribble to structured study notes.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real economics lecture notes, processed live. Equations, conditions, and core rules perfectly structured.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col rounded-2xl border border-border bg-[#fdfaf3] p-5 sm:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Raw Handwriting Input (Lecture Note)
              </span>
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-medium text-foreground/70">PHOTO</span>
            </div>
            <div className="flex flex-1 min-h-[300px] items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-slate-50 p-4 shadow-inner">
              <img
                src={noteImg}
                alt="Handwritten economics lecture notes on price elasticity and market structure"
                className="max-h-[340px] w-auto max-w-full rounded-lg object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-accent-teal shadow-sm lg:h-14 lg:w-14">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ScrawlFix AI Output</span>
              <span className="rounded-full bg-accent-teal/10 px-2 py-0.5 text-[10px] font-semibold text-accent-teal">MARKDOWN</span>
            </div>
            <div className="flex flex-1 flex-col font-mono text-[13px] leading-relaxed text-foreground">
              <div className="text-base font-bold"># Topic: Price Elasticity &amp; Market Structure</div>

              <div className="mt-4 font-bold">### 1. Price Elasticity of Demand (PED)</div>
              <ul className="mt-1 space-y-1 text-foreground/90">
                <li>
                  * <strong>Formula:</strong> PED ={" "}
                  <Fraction num="%ΔQd" den="%ΔP" />
                </li>
                <li>
                  * <strong>|PED| &gt; 1 → Elastic:</strong> Luxuries, goods with many substitutes.
                </li>
                <li>
                  * <strong>|PED| &lt; 1 → Inelastic:</strong> Necessities (e.g., insulin, electricity).
                </li>
              </ul>

              <hr className="my-4 border-border" />

              <div className="font-bold">### 2. Marginal Revenue &amp; Cost Dynamics</div>
              <ul className="mt-1 space-y-1 text-foreground/90">
                <li>
                  * <strong>Profit Maximization Rule:</strong> MR = MC
                </li>
                <li>
                  * <strong>If MR &gt; MC → Increase Output</strong>
                </li>
                <li>
                  * <strong>If MR &lt; MC → Decrease Output</strong>
                </li>
              </ul>

              <hr className="my-4 border-border" />

              <div className="font-bold">### 3. Market Structures: Perfect Competition vs. Monopoly</div>
              <ul className="mt-1 space-y-1 text-foreground/90">
                <li>
                  * <strong>Perfect Competition:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>* Price Taker (P = MR = MC)</li>
                    <li>* Zero economic profit in the long run</li>
                  </ul>
                </li>
                <li>
                  * <strong>Monopoly:</strong>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>* Price Maker</li>
                    <li>* High barriers to entry</li>
                    <li>* Creates deadweight loss to society</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
