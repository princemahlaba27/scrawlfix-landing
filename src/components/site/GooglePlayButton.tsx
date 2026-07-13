export function GooglePlayButton({
  size = "md",
  className = "",
}: {
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const sizing =
    size === "lg"
      ? "px-5 py-3 gap-3"
      : size === "md"
      ? "px-4 py-2.5 gap-2.5"
      : "px-3 py-1.5 gap-2";
  const iconSize = size === "lg" ? 22 : size === "md" ? 18 : 16;
  const topText = size === "sm" ? "text-[8px]" : "text-[10px]";
  const mainText =
    size === "lg" ? "text-lg" : size === "md" ? "text-base" : "text-sm";
  return (
    <a
      href="#"
      aria-label="Get ScrawlFix on Google Play"
      className={`inline-flex items-center rounded-lg bg-black text-white ${sizing} font-medium hover:bg-neutral-800 transition-colors ${className}`}
    >
      <svg width={iconSize} height={iconSize * (24 / 22)} viewBox="0 0 22 24" fill="none" aria-hidden>
        <path d="M.5 1.5v21c0 .55.31 1.02.76 1.25L13.5 12 1.26.25C.81.48.5.95.5 1.5z" fill="#34A853"/>
        <path d="M17.04 8.3L14.4 9.86 11.95 12l2.45 2.45 2.66 1.55 3.69-2.12c1.07-.62 1.07-2.16 0-2.78L17.04 8.3z" fill="#FBBC04"/>
        <path d="M1.26.25L13.5 12l3.54-3.7L2.27.04C1.92-.06 1.58.04 1.26.25z" fill="#EA4335"/>
        <path d="M13.5 12L1.26 23.75c.32.21.66.31 1.01.21L17.04 15.7 13.5 12z" fill="#4285F4"/>
      </svg>
      <span className="flex flex-col leading-tight text-left">
        <span className={`${topText} uppercase tracking-wider opacity-80`}>Get it on</span>
        <span className={`${mainText} font-semibold tracking-tight`}>Google Play</span>
      </span>
    </a>
  );
}
