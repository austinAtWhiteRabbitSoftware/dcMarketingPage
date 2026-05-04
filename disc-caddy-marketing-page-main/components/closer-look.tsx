"use client";

import Image from "next/image";
import { useState } from "react";

type Facet = {
  id: string;
  tab: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const facets: Facet[] = [
  {
    id: "caddy",
    tab: "Caddy",
    title: "A caddy for the teepad.",
    body: "Feedback timed to the shot you are about to take, not the drive home. Conditions, line, and plastic — all in view when the card is open.",
    image: "/images/marketing/course-throw.png",
    alt: "Player lining up a throw on a forest course",
  },
  {
    id: "bag",
    tab: "Bag",
    title: "Your bag, translated.",
    body: "The gaps you can feel and the overlaps you keep throwing the same. Described the way you talk with friends, not in spreadsheets.",
    image: "/images/marketing/hero-discs.png",
    alt: "Two discs leaning next to a basket",
  },
  {
    id: "courses",
    tab: "Courses",
    title: "Hole-by-hole context.",
    body: "Distance, shape, wind, and your past attempts — one glance before you walk up. You plan the line instead of reconstructing the hole from memory.",
    image: "/images/marketing/basket-hole.png",
    alt: "Disc golf basket showing hole marker",
  },
  {
    id: "reviews",
    tab: "Reviews",
    title: "Reviews that end in a pick.",
    body: "Community takes organized around a decision: what is this disc good for, who is it good for, and what it stops doing when it beats in.",
    image: "/images/marketing/tournament-putt.png",
    alt: "Tournament-style putt at a disc golf basket",
  },
  {
    id: "friends",
    tab: "Friends",
    title: "Your crew, in one place.",
    body: "Rounds, leagues, and shared cards with the people you actually play with. Light structure when your group wants a season.",
    image: "/images/marketing/group-selfie.png",
    alt: "Group of friends taking a selfie outdoors",
  },
];

export function CloserLook() {
  const [active, setActive] = useState(facets[0].id);
  const facet = facets.find((f) => f.id === active) ?? facets[0];

  return (
    <section
      className="scroll-mt-28 bg-panel-soft py-20 md:py-28"
      aria-labelledby="closer-heading"
    >
      <div className="mx-auto max-w-[1068px] px-5">
        <h2 id="closer-heading" className="headline-lg text-foreground">
          Take a closer look.
        </h2>

        <div
          role="tablist"
          aria-label="Feature areas"
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto md:flex-wrap md:gap-3"
        >
          {facets.map((f) => {
            const isActive = f.id === active;
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`facet-${f.id}`}
                onClick={() => setActive(f.id)}
                className={`snap-start shrink-0 rounded-full border px-5 py-2.5 text-[13px] font-medium transition ${
                  isActive
                    ? "border-transparent bg-foreground text-background"
                    : "border-border bg-surface/70 text-foreground/80 hover:border-border-strong hover:text-foreground"
                }`}
              >
                {f.tab}
              </button>
            );
          })}
        </div>

        <div
          id={`facet-${facet.id}`}
          role="tabpanel"
          className="mt-10 grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14"
        >
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-black">
              <Image
                src={facet.image}
                alt={facet.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="eyebrow">{facet.tab}</p>
            <h3 className="mt-3 text-[30px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[36px]">
              {facet.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {facet.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
