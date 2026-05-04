"use client";

import Link from "next/link";
import { AmbientGlow } from "@/remotion/compositions/AmbientGlow";
import { DiscBasket } from "@/remotion/compositions/DiscBasket";
import { RemotionLayer } from "@/components/remotion/remotion-layer";

export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <RemotionLayer
        component={AmbientGlow}
        durationInFrames={150}
        compositionWidth={1920}
        compositionHeight={1080}
        staticFallbackClassName="bg-[radial-gradient(circle_at_50%_78%,rgba(247,42,35,0.2),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-[1068px] flex-col items-center px-5 pt-14 pb-0 text-center md:pt-20">
        <h1
          id="hero-heading"
          className="headline-xl text-foreground"
        >
          Disc Caddy
        </h1>
        <p className="headline-xxl mt-2 text-foreground">
          Personal caddy.
        </p>
        <p className="mt-6 max-w-[720px] text-xl leading-snug text-muted-strong md:text-2xl">
          One app for your bag, your group, and the shot in front of you.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <Link
            href="#download"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-7 text-[15px] font-medium text-white transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ring)]"
          >
            Get the app
          </Link>
          <Link
            href="#highlights"
            className="inline-flex items-center gap-1 text-[15px] font-medium text-accent hover:text-accent-hover"
          >
            See the highlights
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

        {/* Pricing / availability line, Apple sub-hero treatment */}
        <p className="mt-5 text-[13px] text-muted">
          Free to start. Your bag stays yours.
        </p>

        {/* Product art */}
        <div
          className="relative mx-auto mt-6 aspect-[5/4] w-full max-w-[640px] md:mt-8"
          aria-hidden
        >
          <RemotionLayer
            component={DiscBasket}
            durationInFrames={240}
            compositionWidth={1000}
            compositionHeight={800}
            staticFallbackClassName="bg-[radial-gradient(circle_at_50%_55%,rgba(247,42,35,0.28),transparent_60%)]"
          />
        </div>
      </div>
    </section>
  );
}
