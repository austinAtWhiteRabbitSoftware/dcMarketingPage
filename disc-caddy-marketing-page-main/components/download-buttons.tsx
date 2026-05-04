import Link from "next/link";

type DownloadButtonsProps = {
  variant?: "hero" | "header";
  /** When false, only the primary “Get the app” control is shown (for nav). */
  showSecondary?: boolean;
};

const baseBtn =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]";

export function DownloadButtons({
  variant = "hero",
  showSecondary = true,
}: DownloadButtonsProps) {
  const isHero = variant === "hero";

  const primary = isHero
    ? `${baseBtn} rounded-full bg-accent px-8 py-3 text-base text-white hover:bg-accent-hover sm:px-10 sm:py-3.5 sm:text-lg`
    : `${baseBtn} rounded-full bg-accent px-5 py-2 text-sm text-white hover:bg-accent-hover`;

  const secondary = `${baseBtn} rounded-full border border-border bg-surface/80 px-6 py-3 text-sm text-foreground hover:bg-surface-elevated sm:px-8 sm:py-3.5`;

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center ${isHero ? "sm:gap-4" : "sm:gap-3"}`}
    >
      <Link className={primary} href="#download">
        Get the app
      </Link>
      {showSecondary ? (
        <Link className={secondary} href="#highlights">
          See highlights
        </Link>
      ) : null}
    </div>
  );
}
