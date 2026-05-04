import Image from "next/image";

type Highlight = {
  id: string;
  kicker: string;
  blurb: string;
  image: string;
  alt: string;
  tone?: "dark" | "accent" | "light";
};

const highlights: Highlight[] = [
  {
    id: "smart-caddy",
    kicker: "Smart caddy",
    blurb:
      "A caddy that knows your bag and reads the hole. It tells you which disc, which line, and why.",
    image: "/images/marketing/course-throw.png",
    alt: "Disc golfer setting up a throw through a tree gap",
    tone: "dark",
  },
  {
    id: "recommendations",
    kicker: "Recommendations",
    blurb:
      "Search and compare with flight behavior in view. Pick plastic that fits your arm, not a forum tier list.",
    image: "/images/marketing/hero-discs.png",
    alt: "Two disc golf discs next to a basket",
    tone: "accent",
  },
  {
    id: "bag",
    kicker: "Bag",
    blurb:
      "See what is missing and what is doubled up, described the way you talk about your bag with friends.",
    image: "/images/marketing/basket-hole.png",
    alt: "Disc golf basket in a sunny forest",
    tone: "dark",
  },
  {
    id: "courses",
    kicker: "Courses",
    blurb:
      "Distance, shape, and conditions in one place. You plan the throw, not the hole reconstruction.",
    image: "/images/marketing/tournament-putt.png",
    alt: "Tournament-style disc golf putt",
    tone: "dark",
  },
  {
    id: "together",
    kicker: "Together",
    blurb:
      "Rounds, leagues, and low-stakes bragging rights, all in one chat with your crew.",
    image: "/images/marketing/group-selfie.png",
    alt: "Friends taking a selfie outdoors",
    tone: "light",
  },
  {
    id: "reviews",
    kicker: "Reviews",
    blurb:
      "Takes organized to pick a disc, not to doom-scroll. Decisions, not opinions.",
    image: "/images/marketing/forest-couple.png",
    alt: "Two people hiking a forest trail",
    tone: "dark",
  },
];

export function HighlightsScroll() {
  return (
    <section
      id="highlights"
      className="scroll-mt-28 bg-panel py-20 md:py-24"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-[1068px] px-5">
        <h2
          id="highlights-heading"
          className="headline-lg text-foreground"
        >
          Get the highlights.
        </h2>
      </div>

      <div className="relative mt-8 md:mt-10">
        <ul
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-4 md:gap-5 md:px-[max(1.25rem,calc((100%-1068px)/2))]"
          role="list"
        >
          {highlights.map((h) => (
            <li
              key={h.id}
              className="snap-start shrink-0 basis-[82%] sm:basis-[58%] md:basis-[46%] lg:basis-[32%]"
            >
              <HighlightCard highlight={h} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const tone = highlight.tone ?? "dark";

  return (
    <article className="group relative h-[520px] overflow-hidden rounded-[28px] bg-black md:h-[600px]">
      <Image
        src={highlight.image}
        alt={highlight.alt}
        fill
        sizes="(max-width: 640px) 82vw, (max-width: 768px) 58vw, (max-width: 1024px) 46vw, 32vw"
        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div
        className={`pointer-events-none absolute inset-0 ${
          tone === "light"
            ? "bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            : tone === "accent"
              ? "bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              : "bg-gradient-to-t from-black/85 via-black/30 to-transparent"
        }`}
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8">
        <p className="eyebrow mb-3 text-white/85">{highlight.kicker}</p>
        <p className="text-[22px] font-semibold leading-[1.2] tracking-tight text-white md:text-[26px]">
          {highlight.blurb}
        </p>
      </div>
    </article>
  );
}
