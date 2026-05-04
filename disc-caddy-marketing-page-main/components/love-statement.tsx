import Image from "next/image";

export function LoveStatement() {
  return (
    <section className="bg-background py-24 md:py-32" aria-labelledby="love-heading">
      <div className="mx-auto max-w-[1068px] px-5 text-center">
        <h2
          id="love-heading"
          className="headline-xl text-foreground"
        >
          Hello, caddy.
        </h2>
        <p className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-[color:var(--muted-strong)] md:text-xl">
          Meet Disc Caddy, a pocket-sized second opinion for every shot. Built
          by players who argued about plastic in the group chat and wanted one
          place for the round, the recommendations, and the rivalry.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-[1440px] px-5 md:mt-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-border/60 md:aspect-[2.4/1]">
          <Image
            src="/images/marketing/forest-couple.png"
            alt="Two friends on a forest trail, phone in hand"
            fill
            sizes="(max-width: 1068px) 100vw, 1440px"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      </div>
    </section>
  );
}
