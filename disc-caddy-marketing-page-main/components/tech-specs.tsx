type SpecGroup = {
  heading: string;
  rows: { label: string; value: string }[];
};

const groups: SpecGroup[] = [
  {
    heading: "Platform",
    rows: [
      { label: "iOS", value: "17 and later" },
      { label: "Android", value: "12 and later" },
      { label: "Web", value: "Round view, read-only" },
    ],
  },
  {
    heading: "Smart Caddy",
    rows: [
      { label: "Inputs", value: "Your bag, hole, wind, past attempts" },
      { label: "Output", value: "Disc + line recommendation with a reason" },
      { label: "Learning", value: "On-device, tuned to your arm" },
    ],
  },
  {
    heading: "Courses & rounds",
    rows: [
      { label: "Courses", value: "UDisc-compatible course model" },
      { label: "Rounds", value: "Solo, group, and league" },
      { label: "Sharing", value: "One link — no account to view" },
    ],
  },
  {
    heading: "Privacy",
    rows: [
      { label: "Data ownership", value: "Yours. Export anytime." },
      { label: "Tracking", value: "No third-party ad trackers" },
      { label: "Account", value: "Sign in with Apple or email" },
    ],
  },
];

export function TechSpecs() {
  return (
    <section
      id="specs"
      className="scroll-mt-28 bg-background py-20 md:py-28"
      aria-labelledby="specs-heading"
    >
      <div className="mx-auto max-w-[1068px] px-5">
        <p className="eyebrow">Tech</p>
        <h2
          id="specs-heading"
          className="headline-lg mt-4 max-w-[720px] text-foreground"
        >
          What Disc Caddy actually is.
        </h2>
        <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-muted">
          A small app with a clear job. Here is the shape of it.
        </p>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
          {groups.map((g) => (
            <div key={g.heading}>
              <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground uppercase">
                {g.heading}
              </h3>
              <dl className="mt-4 divide-y divide-border border-t border-border">
                {g.rows.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-baseline gap-6 py-3.5"
                  >
                    <dt className="w-36 shrink-0 text-[13px] font-medium text-muted">
                      {r.label}
                    </dt>
                    <dd className="flex-1 text-[15px] text-foreground">
                      {r.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
