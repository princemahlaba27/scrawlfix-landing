import { APP_STORE_URL } from "@/lib/app-store";
import badge from "@/assets/app-store-badge.png";

export function AppStoreButton({
  size = "md",
  className = "",
}: {
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const height = size === "lg" ? "h-12" : size === "md" ? "h-10" : "h-8";
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download ScrawlFix on the App Store"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <img
        src={badge}
        alt="Download on the App Store"
        className={`${height} w-auto`}
        decoding="async"
        draggable={false}
      />
    </a>
  );
}
