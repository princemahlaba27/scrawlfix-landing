import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactEmail } from "@/components/site/ContactEmail";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — ScrawlFix" },
      {
        name: "description",
        content:
          "The rules for using ScrawlFix: license, acceptable use, subscriptions, disclaimers, and contact. Last updated June 2026.",
      },
      { property: "og:title", content: "Terms of Service — ScrawlFix" },
      {
        property: "og:description",
        content: "Read the ScrawlFix Terms of Service.",
      },
    ],
  }),
  component: TermsPage,
});

function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        <span className="mr-2 text-foreground">{n}.</span>
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/80">
        {children}
      </div>
    </section>
  );
}

function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <div className="mt-2 text-sm text-muted-foreground">
            Last updated: June 2026
          </div>

          <div className="mt-8 text-[15px] leading-relaxed text-foreground/80">
            <p>
              These Terms of Service ("Terms") govern your use of the ScrawlFix
              mobile application and related services (the "Service"), operated
              by Anti Coder Studio ("we," "our," or "us"). By downloading,
              installing, or using ScrawlFix, you agree to these Terms.
            </p>
          </div>

          <Section n={1} title="Acceptance of Terms">
            <p>
              By accessing or using ScrawlFix, you confirm that you have read,
              understood, and agree to be bound by these Terms and our Privacy
              Policy. If you do not agree, do not install or use the app.
            </p>
          </Section>

          <Section n={2} title="The Service">
            <p>
              ScrawlFix uses artificial intelligence (Google's Gemini API) to
              convert images of handwritten text into typed, editable digital
              text. Output may include structured formatting such as headings,
              bullets, and checkboxes. The Service is provided as a tool — you
              are responsible for reviewing and using the output appropriately.
            </p>
          </Section>

          <Section n={3} title="Eligibility">
            <p>
              You must be at least 13 years old (or the minimum age in your
              jurisdiction) to use ScrawlFix. By using the app, you represent
              that you meet this requirement.
            </p>
          </Section>

          <Section n={4} title="License to Use">
            <p>
              We grant you a limited, personal, non-exclusive, non-transferable,
              revocable license to install and use ScrawlFix on devices you own
              or control, for your personal, non-commercial use, subject to
              these Terms.
            </p>
          </Section>

          <Section n={5} title="Acceptable Use">
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use the Service to scan, transcribe, or distribute content you
                do not have the legal right to use
              </li>
              <li>
                Use ScrawlFix for any unlawful, harmful, or fraudulent purpose
              </li>
              <li>
                Attempt to reverse-engineer, decompile, or otherwise extract the
                source code of the app
              </li>
              <li>
                Abuse, overload, or interfere with the Service or its underlying
                infrastructure
              </li>
              <li>
                Resell, sublicense, or otherwise commercialize the Service
                without our written permission
              </li>
            </ul>
          </Section>

          <Section n={6} title="Subscriptions and Billing">
            <p>
              ScrawlFix offers a free tier with{" "}
              <strong>5 full-quality scans every month</strong>, including full
              text copy and PDF export — with no watermark.
            </p>
            <p>
              <strong>ScrawlFix Pro</strong> is an optional paid subscription
              that unlocks higher monthly limits. Subscriptions are sold and
              billed through Google Play Billing and managed via RevenueCat.
              Subscriptions renew automatically until cancelled. You can manage
              or cancel your subscription at any time through your Google Play
              account. Refunds are subject to Google Play's refund policy.
            </p>
          </Section>

          <Section n={7} title="Intellectual Property">
            <p>
              The ScrawlFix app, its design, branding, name, and logo are owned
              by Anti Coder Studio and protected by intellectual property laws.
              These Terms do not grant you any rights to our trademarks or
              branding.
            </p>
            <p>
              <strong>Your content remains yours.</strong> The handwritten
              documents you scan and the resulting transcribed text belong to
              you. We do not claim any ownership over them.
            </p>
          </Section>

          <Section n={8} title="Third-Party Services">
            <p>
              ScrawlFix integrates with third-party services including Google
              Gemini API, RevenueCat, and Google Play Billing. Your use of those
              services through ScrawlFix is also subject to their own terms and
              privacy policies.
            </p>
          </Section>

          <Section n={9} title="Disclaimer of Warranties">
            <p>
              The Service is provided <strong>"as is"</strong> and{" "}
              <strong>"as available"</strong>, without warranties of any kind,
              express or implied. We do not guarantee that handwriting
              recognition will be 100% accurate, error-free, or suitable for any
              specific purpose. You are responsible for verifying critical
              output before relying on it.
            </p>
          </Section>

          <Section n={10} title="Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Anti Coder Studio shall
              not be liable for any indirect, incidental, consequential,
              special, or punitive damages arising from or related to your use
              of the Service, including but not limited to lost data, lost
              profits, or business interruption.
            </p>
          </Section>

          <Section n={11} title="Indemnification">
            <p>
              You agree to indemnify and hold Anti Coder Studio harmless from
              any claims, damages, losses, or expenses arising out of your
              misuse of the Service or violation of these Terms.
            </p>
          </Section>

          <Section n={12} title="Termination">
            <p>
              We may suspend or terminate your access to the Service at any time
              if you violate these Terms or misuse the app. You may stop using
              ScrawlFix at any time by uninstalling it from your device.
            </p>
          </Section>

          <Section n={13} title="Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the Republic of South Africa, without regard to its
              conflict-of-law principles.
            </p>
          </Section>

          <Section n={14} title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. Changes will be
              posted on this page with an updated "Last updated" date. Continued
              use of the app after changes are posted constitutes acceptance of
              the revised Terms.
            </p>
          </Section>

          <Section n={15} title="Contact">
            <p>For questions about these Terms, contact us:</p>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5">
              <div className="text-sm">
                <div>
                  <span className="text-muted-foreground">Email: </span>
                  <ContactEmail subject="Terms question" />
                </div>
                <div className="mt-1">
                  <span className="text-muted-foreground">Developer: </span>
                  <span className="font-medium">Anti Coder Studio</span>
                </div>
                <div className="mt-1">
                  <span className="text-muted-foreground">Website: </span>
                  <span className="font-medium">scrawlfix.com</span>
                </div>
              </div>
            </div>
          </Section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
