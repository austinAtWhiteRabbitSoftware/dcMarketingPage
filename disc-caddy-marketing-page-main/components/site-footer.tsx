import Link from "next/link";
import { EmailSignupPlaceholder } from "./email-signup-placeholder";

const columns: { heading: string; links: { label: string; href?: string }[] }[] = [
  {
    heading: "Disc Caddy",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Highlights", href: "#highlights" },
      { label: "Smart Caddy", href: "#caddy" },
      { label: "Insights", href: "#insights" },
      { label: "Friends", href: "#friends" },
      { label: "Tech", href: "#specs" },
    ],
  },
  {
    heading: "Get it",
    links: [
      { label: "App Store (soon)" },
      { label: "Google Play (soon)" },
      { label: "TestFlight (soon)" },
      { label: "Request features" },
    ],
  },
  {
    heading: "For players",
    links: [
      { label: "Import your bag" },
      { label: "Sync a course" },
      { label: "Start a league" },
      { label: "Help & support" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why we built it" },
      { label: "Privacy (soon)" },
      { label: "Terms (soon)" },
      { label: "Contact" },
    ],
  },
];

function StorePlaceholderPill({ label }: { label: string }) {
  return (
    <div
      className="inline-flex min-h-11 min-w-[180px] items-center justify-center rounded-full border border-dashed border-border bg-surface/70 px-5 text-[13px] font-medium text-muted"
      role="img"
      aria-label={`${label} badge placeholder`}
    >
      {label}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-panel">
      {/* Download / CTA band */}
      <div
        id="download"
        className="scroll-mt-28 border-b border-border"
      >
        <div className="mx-auto grid max-w-[1068px] gap-12 px-5 py-20 md:py-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Ready when you are</p>
            <h2
              id="download-heading"
              className="headline-xl mt-4 text-foreground"
            >
              Download Disc Caddy.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Store links ship with launch. Drop your email and we will send one
              note the week the app goes live — no promo blasts in between.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StorePlaceholderPill label="App Store (soon)" />
              <StorePlaceholderPill label="Google Play (soon)" />
            </div>
          </div>
          <div className="lg:pt-10">
            <EmailSignupPlaceholder />
          </div>
        </div>
      </div>

      {/* Legal fine print (Apple-like small-text band) */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1068px] px-5 py-8 text-[12px] leading-relaxed text-muted">
          <p>
            Disc Caddy is an independent project for disc golf players. Course
            data, disc flight numbers, and player records shown in marketing
            views are illustrative. Your bag, rounds, and course notes stay on
            your device unless you explicitly share them.
          </p>
        </div>
      </div>

      {/* Column nav */}
      <div className="mx-auto max-w-[1068px] px-5 py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-[12px] font-semibold tracking-[0.18em] text-foreground uppercase">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5 text-[13px] text-muted">
                {col.links.map((link) =>
                  link.href ? (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <span className="cursor-default">{link.label}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright &copy; {new Date().getFullYear()} Disc Caddy. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Privacy (soon)</span>
            <span>Terms (soon)</span>
            <span>Legal</span>
            <span>Sitemap</span>
            <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
