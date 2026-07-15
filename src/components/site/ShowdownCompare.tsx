import { ArrowRight, Check } from "lucide-react";
import noteImg from "@/assets/raw-handwriting-note.jpg";

export function ShowdownCompare() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">The Showdown</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            From chaotic scribble to copy-paste clean.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real meeting notes, processed live. No reformatting. No retyping.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <div className="flex flex-col rounded-2xl border border-border bg-[#fdfaf3] p-5 sm:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Raw Handwriting Input</span>
              <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-medium text-foreground/70">PHOTO</span>
            </div>
            <div className="flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white p-3 shadow-inner">
              <img
                src={noteImg}
                alt="Handwritten Marketing Sync Q3 notes with scribbles and cross-outs"
                className="h-auto max-w-[70%] w-full rounded-lg object-contain"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background text-accent-teal shadow-sm lg:h-14 lg:w-14">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ScrawlFix AI Output</span>
              <span className="rounded-full bg-accent-teal/10 px-2 py-0.5 text-[10px] font-semibold text-accent-teal">MARKDOWN</span>
            </div>
            <div className="flex flex-1 flex-col justify-between font-mono text-sm leading-relaxed text-foreground">
              <div>
                <div className="text-base font-bold"># Marketing Sync Q3 (Urgent!)</div>
                <div className="mt-1 text-muted-foreground">Attendees: Sarah, David, Mike</div>
              </div>

              <div>
                <div className="font-bold text-foreground">Launch campaign by next Friday</div>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border border-border">
                      <span className="h-2 w-2 rounded-[1px] bg-muted-foreground/30" />
                    </span>
                    <span className="text-muted-foreground line-through decoration-2">Run radio ads</span>
                  </li>
                  {[
                    "Focus entirely on TikTok / IG Reels instead (cheaper!)",
                    "Allocate 40% budget to UGC creators",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border border-border text-accent-teal">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4 text-foreground/80">
                <strong>Follow-ups:</strong> Design team re: new assets · Reschedule client pitch to Monday morning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
