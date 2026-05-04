"use client";

import dynamic from "next/dynamic";
import { RibbonPulse } from "@/remotion/compositions/RibbonPulse";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const Player = dynamic(
  () => import("@remotion/player").then((m) => m.Player),
  { ssr: false },
);

type RemotionStripProps = {
  durationInFrames?: number;
  className?: string;
};

export function RemotionStrip({
  durationInFrames = 120,
  className = "",
}: RemotionStripProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <div className={`relative h-3 w-full ${className}`} aria-hidden>
      <Player
        component={RibbonPulse}
        durationInFrames={durationInFrames}
        compositionWidth={1200}
        compositionHeight={48}
        fps={30}
        controls={false}
        loop
        autoPlay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
