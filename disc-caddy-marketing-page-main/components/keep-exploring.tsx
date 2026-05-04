import Image from "next/image";
import Link from "next/link";

type Tile = {
  kicker: string;
  title: string;
  blurb: string;
  cta: { href: string; label: string };
  image: string;
  alt: string;
};

const tiles: Tile[] = [
  {
    kicker: "On the course",
    title: "The caddy, in your pocket.",
    blurb:
      "One tap opens the hole you are on, the wind you are fighting, and the discs in your bag that can handle both.",
    cta: { href: "#download", label: "Get the app" },
    image: "/images/marketing/course-throw.png",
    alt: "Disc golfer on a forest course",
  },
  {
    kicker: "For your crew",
    title: "Rounds. Leagues. Bragging rights.",
    blurb:
      "Play with friends, keep the banter where the score lives, and bring a season online when you are ready.",
    cta: { href: "#friends", label: "How it plays" },
    image: "/images/marketing/group-selfie.png",
    alt: "Group of friends on an outdoor course",
  },
];

export function KeepExploring() {
  return (
    <section
      className="bg-panel-soft py-20 md:py-28"
      aria-labelledby="keep-heading"
    >
      <div className="mx-auto max-w-[1068px] px-5">
        <h2
          id="keep-heading"
          className="headline-lg text-foreground"
        >
          Keep exploring Disc Caddy.
        </h2>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {tiles.map((t) => (
            <article
              key={t.title}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-card"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <p className="eyebrow">{t.kicker}</p>
                <h3 className="mt-3 text-[24px] font-semibold leading-[1.15] tracking-tight text-foreground md:text-[28px]">
                  {t.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">
                  {t.blurb}
                </p>
                <div className="mt-8">
                  <Link
                    href={t.cta.href}
                    className="inline-flex items-center gap-1 text-[15px] font-medium text-accent hover:text-accent-hover"
                  >
                    {t.cta.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
