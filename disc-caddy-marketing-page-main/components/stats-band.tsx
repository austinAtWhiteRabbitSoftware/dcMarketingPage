type Stat = {
  value: string;
  unit?: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: "18",
    unit: "holes",
    label: "tracked in a single shared card with your group, without juggling tabs.",
  },
  {
    value: "1",
    unit: "tap",
    label: "to log the throw and move on. Stats happen in the background.",
  },
  {
    value: "0",
    unit: "logins",
    label: "for friends to follow along. Send a card, they open and play.",
  },
  {
    value: "100%",
    label: "yours. Your bag, rounds, and course notes never get sold.",
  },
];

export function StatsBand() {
  return (
    <section
      className="border-y border-border bg-background py-20 md:py-28"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-[1068px] px-5">
        <h2
          id="stats-heading"
          className="headline-lg max-w-[720px] text-foreground"
        >
          A round, kept simple.
        </h2>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="flex items-baseline gap-1.5 font-semibold tracking-tight text-foreground">
                <span className="text-[56px] leading-none md:text-[72px]">
                  {s.value}
                </span>
                {s.unit ? (
                  <span className="text-xl font-medium text-muted md:text-2xl">
                    {s.unit}
                  </span>
                ) : null}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
