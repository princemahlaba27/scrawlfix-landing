import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactEmail } from "@/components/site/ContactEmail";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ScrawlFix" },
      {
        name: "description",
        content:
          "How ScrawlFix handles your handwritten scans, third-party services, data retention, and your rights. Last updated June 2026.",
      },
      { property: "og:title", content: "Privacy Policy — ScrawlFix" },
      {
        property: "og:description",
        content:
          "ScrawlFix does not store your scanned images. Read the full policy.",
      },
    ],
  }),
  component: PrivacyPage,
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

function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-2 text-sm text-muted-foreground">
            Last updated: June 2026
          </div>

          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              ScrawlFix ("we," "our," or "the app") is a mobile application that
              converts handwritten text into typed digital text using artificial
              intelligence. This Privacy Policy explains what information we
              collect, how we use it, and your rights regarding that information.
            </p>
            <p>
              By using ScrawlFix, you agree to the practices described in this
              policy.
            </p>
          </div>

          <Section n={1} title="Information We Collect">
            <p>
              <strong>Photos you scan.</strong> When you use ScrawlFix to scan a
              handwritten document, the photo you capture or select from your
              gallery is sent to Google's Gemini API for text recognition. We do
              not permanently store these images on our own servers. Images are
              processed solely to generate the typed text result shown to you in
              the app.
            </p>
            <p>
              <strong>Camera and photo library access.</strong> ScrawlFix
              requests permission to access your device camera and photo library
              solely to allow you to capture or select images of handwritten
              documents for digitization. We do not access these permissions for
              any other purpose.
            </p>
            <p>
              <strong>Subscription and purchase information.</strong> If you
              subscribe to ScrawlFix Pro, payment is processed through Google
              Play's billing system and managed via RevenueCat, our subscription
              management provider. We do not directly collect or store your
              payment card details. RevenueCat may collect anonymized purchase
              and device identifiers to manage your subscription status.
            </p>
            <p>
              <strong>Usage data.</strong> We may collect basic, non-identifying
              usage data such as number of scans performed and feature usage, to
              help us understand how the app is used and improve it over time.
            </p>
            <p>
              <strong>We do not require account creation.</strong> ScrawlFix
              does not currently require you to create an account, log in, or
              provide your name, email, or other personal identifiers to use the
              core features of the app.
            </p>
          </Section>

          <Section n={2} title="How We Use Your Information">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                To convert your handwritten images into typed text using
                Google's Gemini AI model
              </li>
              <li>
                To manage and verify your subscription status if you purchase
                ScrawlFix Pro
              </li>
              <li>To understand app performance and improve features over time</li>
              <li>To respond to support requests you send us directly</li>
            </ul>
          </Section>

          <Section n={3} title="Third-Party Services">
            <p>ScrawlFix relies on the following third-party services to operate:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Google Gemini API</strong> — used to process and convert
                handwritten images into typed text. Images sent for processing
                are subject to Google's API data handling practices.
              </li>
              <li>
                <strong>RevenueCat</strong> — used to manage in-app subscriptions
                and purchases.
              </li>
              <li>
                <strong>Google Play Billing</strong> — used to process
                subscription payments. Payment information is handled directly
                by Google and is not accessible to us.
              </li>
            </ul>
          </Section>

          <Section n={4} title="Data Retention">
            <p>
              Images travel over a secure SSL connection and are{" "}
              <strong>deleted immediately after text extraction</strong>. We do
              not store the photos you scan on our own servers beyond the time
              required to process and return the digitized text to your device.
              Scan results you choose to keep are stored locally on your device,
              not on our servers.
            </p>
          </Section>

          <Section n={5} title="Data Sharing">
            <p>
              We do not sell your personal information to third parties. We only
              share data with the third-party service providers listed above as
              necessary to operate the app's core functionality.
            </p>
          </Section>

          <Section n={6} title="Your Rights">
            <p>
              Depending on your location, you may have rights regarding your
              personal information, including the right to request access to,
              correction of, or deletion of your data. Since ScrawlFix does not
              require an account or store personal scan data on our servers,
              most data exists only on your own device and is fully within your
              control through your device settings.
            </p>
            <p>
              If you have questions about your data or wish to make a request,
              contact us using the details below.
            </p>
          </Section>

          <Section n={7} title="Children's Privacy">
            <p>
              ScrawlFix is not directed at children under the age of 13 (or the
              relevant minimum age in your jurisdiction). We do not knowingly
              collect personal information from children. If you believe a child
              has used the app and provided personal information, please contact
              us so we can address it.
            </p>
          </Section>

          <Section n={8} title="International Users">
            <p>
              ScrawlFix is available globally. If you use the app outside South
              Africa, your information may be processed by third-party services
              (such as Google) located in other countries. By using the app, you
              consent to this transfer and processing.
            </p>
          </Section>

          <Section n={9} title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated "Last updated" date.
              Continued use of the app after changes are posted constitutes
              acceptance of the revised policy.
            </p>
          </Section>

          <Section n={10} title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how your
              information is handled, please contact us:
            </p>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5">
              <div className="text-sm">
                <div>
                  <span className="text-muted-foreground">Email: </span>
                  <ContactEmail subject="Privacy question" />
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
