import { APP_STORE_URL } from "@/lib/app-store";
import badge from "@/assets/app-store-badge.png";

export function AppStoreButton({
  size = "md",
  className = "",
}: {
  size?: "lg" | "md" | "sm";
  className?: string;
}) {
  const height = size === "lg" ? "h-14" : size === "md" ? "h-11" : "h-[2.375rem]";
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
        width={787}
        height={317}
        className={`${height} w-auto`}
        decoding="async"
        draggable={false}
      />
    </a>
  );
}
