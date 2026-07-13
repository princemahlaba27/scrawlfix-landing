import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Finally a scanner app that doesn't hold my own notes hostage behind a hidden paywall. Read my chaotic lecture scrawls in under 3 seconds.",
    name: "Sarah M.",
    role: "University Student",
    initials: "SM",
  },
  {
    quote:
      "My manager hands me scribbled ideas on coffee napkins daily. This app turned a 20-minute retyping chore into a literal 2-second copy-paste job.",
    name: "David K.",
    role: "Operations Lead",
    initials: "DK",
  },
  {
    quote:
      "The accuracy on old cursive journals is mind-blowing. It saved my grandmother's recipe card text perfectly before the ink faded to dust.",
    name: "Elena R.",
    role: "Archivist",
    initials: "ER",
  },
];

export function Reviews() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">Loved by users</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            People who stopped retyping.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-teal text-accent-teal" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-teal/10 text-sm font-bold text-accent-teal">
                  {r.initials}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-foreground">{r.name}</span>
                  <span className="block text-muted-foreground">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
