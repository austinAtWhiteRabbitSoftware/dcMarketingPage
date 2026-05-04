import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const globalNav = [
  { href: "#overview", label: "Overview" },
  { href: "#highlights", label: "Highlights" },
  { href: "#caddy", label: "Smart Caddy" },
  { href: "#insights", label: "Insights" },
  { href: "#friends", label: "Friends" },
  { href: "#specs", label: "Tech" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-12 max-w-[1068px] items-center justify-between gap-4 px-5">
        <Link
          href="#overview"
          className="flex items-center gap-2 text-foreground"
        >
          <span
            className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-accent text-[9px] font-bold text-white shadow-[0_0_12px_rgba(247,42,35,0.35)]"
            aria-hidden
          >
            DC
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Disc Caddy
          </span>
        </Link>

        <nav
          className="hidden flex-1 items-center justify-center gap-7 text-[12px] font-medium text-muted lg:flex"
          aria-label="Product sections"
        >
          {globalNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#download"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-accent px-4 py-1.5 text-[13px] font-medium text-white transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]"
          >
            Get the app
          </Link>

          <details className="group relative lg:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex cursor-pointer items-center justify-center rounded-full border border-border bg-surface/70 px-3 py-1.5 text-[12px] font-medium text-foreground">
                Menu
              </span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-panel/95 py-2 shadow-2xl backdrop-blur-md">
              {globalNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-border px-3 pt-3 pb-2">
                <Link
                  href="#download"
                  className="block rounded-full bg-accent px-4 py-2 text-center text-[13px] font-medium text-white hover:bg-accent-hover"
                >
                  Get the app
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
