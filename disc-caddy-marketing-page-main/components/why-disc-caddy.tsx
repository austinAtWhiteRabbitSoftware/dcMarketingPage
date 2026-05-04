type Card = {
  kicker: string;
  title: string;
  body: string;
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    kicker: "Decisions",
    title: "Answers, not just data.",
    body: "Post-round stats are a souvenir. Disc Caddy is a caddy — it tells you what to throw, and why, before you step on the pad.",
    icon: <IconCompass />,
  },
  {
    kicker: "Your bag",
    title: "Built around you.",
    body: "The caddy learns how you throw, not how the internet ranks a mold. Every prompt is tuned to your arm and your plastic.",
    icon: <IconBag />,
  },
  {
    kicker: "Your crew",
    title: "One card for the group.",
    body: "Rounds, banter, and light league structure in one chat. No new accounts, no lost scorecards in a notes app.",
    icon: <IconGroup />,
  },
  {
    kicker: "Privacy",
    title: "Your rounds stay yours.",
    body: "We do not sell your bag, your rounds, or your home course. If we ever monetize, it is a tool you can see and decline.",
    icon: <IconShield />,
  },
];

export function WhyDiscCaddy() {
  return (
    <section
      id="why"
      className="scroll-mt-28 bg-panel py-20 md:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-[1068px] px-5">
        <h2
          id="why-heading"
          className="headline-lg max-w-[720px] text-foreground"
        >
          Why Disc Caddy is worth a slot in your bag.
        </h2>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group relative flex flex-col rounded-[28px] border border-border bg-card p-8 transition hover:border-border-strong md:p-10"
            >
              <p className="eyebrow">{card.kicker}</p>
              <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[30px]">
                {card.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">
                {card.body}
              </p>

              <div
                className="mt-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-accent md:mt-12"
                aria-hidden
              >
                {card.icon}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconCompass() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5.5-5.5 2 2-5.5 5.5-2z" />
    </svg>
  );
}

function IconBag() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 7h14l-1.2 12.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 7z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function IconGroup() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="9" cy="9" r="3" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M15.5 15.5c2.7.4 4.5 2.2 4.5 4.5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l8 3v5c0 4.5-3.4 8.6-8 10-4.6-1.4-8-5.5-8-10V6l8-3z" />
      <path d="M9.5 12.5l2 2 3.5-4" />
    </svg>
  );
}
