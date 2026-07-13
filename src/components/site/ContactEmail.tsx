const SUPPORT_DISPLAY = "support@scrawlfix.com";
const SUPPORT_MAILTO = "scrawlfixapp@gmail.com";

export function ContactEmail({
  subject,
  className,
}: {
  subject?: string;
  className?: string;
}) {
  const href = `mailto:${SUPPORT_MAILTO}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }`;
  return (
    <a
      href={href}
      className={
        className ??
        "text-accent-teal underline underline-offset-4 decoration-accent-teal/40 hover:decoration-accent-teal transition-colors"
      }
    >
      {SUPPORT_DISPLAY}
    </a>
  );
}
