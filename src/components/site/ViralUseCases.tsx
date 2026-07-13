const cards = [
  {
    tag: "POV #1",
    title: "The High-Stakes Discovery",
    blurb: "A grandmother's recipe card. Faded ink. One shot to save it before the paper crumbles.",
    scene:
      "VIDEO SCENE — Tight shot on a stack of yellowed handwritten letters being matched together on a dark wooden desk. Warm key light. Phone hovers over the page. ScrawlFix UI taps in.",
  },
  {
    tag: "POV #2",
    title: "The Academic Midnight Panic",
    blurb: "3 a.m. Exam tomorrow. Laptop dead. A semester of lecture notes locked in cursive.",
    scene:
      "VIDEO SCENE — Stressed student under a single warm desk lamp. Dead laptop closed beside a chaotic stack of paper lecture notes. Phone glow on their face. ScrawlFix turns the page into typed study text.",
  },
  {
    tag: "POV #3",
    title: "The Corporate Nightmare",
    blurb: "Manager hands you a coffee-stained napkin of 'urgent ideas'. You have 10 minutes.",
    scene:
      "VIDEO SCENE — Top-down on a coffee-stained café paper napkin covered in frantic startup pitch bullet scribbles. Dropped next to a sleek office keyboard. Phone scans the napkin in one tap.",
  },
];

export function ViralUseCases() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">Real moments</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            When ScrawlFix actually saves you.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three POVs we keep seeing in the wild — and shooting for TikTok.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.tag}
              className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
            >
              {/* 9:16 phone frame placeholder */}
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="aspect-[9/16] rounded-[1.75rem] border-2 border-dashed border-border bg-secondary/60 p-4">
                  <div className="flex h-full flex-col">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-accent-teal">
                      {c.tag} · ASSET PLACEHOLDER
                    </div>
                    <div className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                      {c.scene}
                    </div>
                    <div className="mt-auto flex items-center justify-between text-[10px] text-muted-foreground">
                      <span>9:16 · TikTok native</span>
                      <span>00:14</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
