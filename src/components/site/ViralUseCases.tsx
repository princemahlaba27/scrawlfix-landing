import {
  Camera,
  FileDown,
  FileText,
  Layers,
  ListChecks,
  Unlock,
  type LucideIcon,
} from "lucide-react";

const cards: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: "Snap or Upload",
    description: "Lecture binders • Whiteboard photos • Notebooks • Study sheets • Formulas",
    Icon: Camera,
  },
  {
    title: "Structured Markdown Notes",
    description: "Transcribe messy cursive, symbols, and rushed scrawls into formatted outlines instantly.",
    Icon: FileText,
  },
  {
    title: "Active-Recall Flashcards",
    description: "Auto-generate study decks directly from handwritten definitions and concepts.",
    Icon: Layers,
  },
  {
    title: "Instant Practice Quizzes",
    description: "Test your retention with custom multi-choice and short-answer questions created on the fly.",
    Icon: ListChecks,
  },
  {
    title: "Crisp PDF & Markdown Export",
    description: "One-tap export directly into Notion, Obsidian, GoodNotes, or clean printable A4 PDFs.",
    Icon: FileDown,
  },
  {
    title: "Zero Account Barrier",
    description: "Download on iPhone and start scanning immediately with no mandatory email signups.",
    Icon: Unlock,
  },
];

export function ViralUseCases() {
  return (
    <section id="features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Capture, organize, and study 10x faster
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to turn chaotic lecture handwriting into exam-ready retention materials.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col items-center rounded-3xl border border-slate-200/80 bg-slate-50 p-6 text-center"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <c.Icon className="h-6 w-6 text-accent-teal" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{c.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
