import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactEmail } from "./ContactEmail";

const faqs = [
  {
    q: "How accurate is the cursive engine?",
    a: "ScrawlFix is tuned specifically for messy, slanted, real-world cursive — not just printed text. We run pages through Google's Gemini vision model with handwriting-specific instructions, then post-process the output for clean structure (headings, bullets, checkboxes). Most users see usable transcripts on the first try; very faded ink or extreme abbreviations may need a second pass.",
  },
  {
    q: "How is document privacy handled?",
    a: "Every image is sent over an encrypted SSL connection, processed only long enough to extract text, and then deleted. We do not keep your photos on our servers. Anything you choose to keep lives locally on your device.",
  },
  {
    q: "Are my images saved on your servers?",
    a: "No. Scans are transient — used for text extraction and then dropped. There is no cloud library, no account, and nothing for us to leak. You can read the full breakdown in our Privacy Policy.",
  },
  {
    q: "What does the free tier actually include?",
    a: "5 full-quality scans every month, full text copy, and PDF export. No watermark, no forced sign-up, no hidden upsell on basic features. ScrawlFix Pro is optional and unlocks higher monthly limits.",
  },
  {
    q: "What languages does it support?",
    a: "ScrawlFix works best with handwritten English today. Other Latin-alphabet languages (Spanish, French, German, Portuguese, etc.) generally transcribe well. We're expanding to more scripts as the model improves.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-border bg-background">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-24">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-teal">FAQ</div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Questions, answered straight.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Still curious? Email <ContactEmail subject="ScrawlFix question" /> — we read everything.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              to="/privacy"
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:border-foreground/30"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:border-foreground/30"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
