import Image from "next/image";
import type { ReactNode } from "react";

type Feature = {
  title: string;
  body: string;
};

type FeatureBandProps = {
  id: string;
  eyebrow: string;
  headline: ReactNode;
  sub: string;
  hero: {
    src: string;
    alt: string;
    aspectClassName?: string;
  };
  features: Feature[];
  tone?: "dark" | "light";
};

/**
 * Big Apple / Peloton-style feature section:
 *   eyebrow -> giant statement -> sub -> full-bleed image -> feature grid.
 */
export function FeatureBand({
  id,
  eyebrow,
  headline,
  sub,
  hero,
  features,
  tone = "dark",
}: FeatureBandProps) {
  const isLight = tone === "light";

  return (
    <section
      id={id}
      className={`scroll-mt-28 ${isLight ? "bg-panel" : "bg-background"}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-[1068px] px-5 pt-20 md:pt-28">
        <p className="eyebrow">{eyebrow}</p>
        <h2
          id={`${id}-heading`}
          className="headline-xl mt-4 text-foreground"
        >
          {headline}
        </h2>
        <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-[color:var(--muted-strong)] md:text-xl">
          {sub}
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-[1440px] px-5 md:mt-16">
        <div
          className={`relative overflow-hidden rounded-[32px] border border-border/60 ${
            hero.aspectClassName ?? "aspect-[16/9] md:aspect-[2.2/1]"
          }`}
        >
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(max-width: 1068px) 100vw, 1440px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1068px] px-5 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-[20px] font-semibold leading-snug tracking-tight text-foreground md:text-[22px]">
                {f.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted md:text-base">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
