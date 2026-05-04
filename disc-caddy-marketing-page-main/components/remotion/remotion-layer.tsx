"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const Player = dynamic(
  () => import("@remotion/player").then((m) => m.Player),
  { ssr: false },
);

type RemotionLayerProps = {
  component: ComponentType<Record<string, unknown>>;
  durationInFrames: number;
  compositionWidth: number;
  compositionHeight: number;
  fps?: number;
  className?: string;
  /** Shown when motion is reduced or before mount */
  staticFallbackClassName?: string;
};

export function RemotionLayer({
  component,
  durationInFrames,
  compositionWidth,
  compositionHeight,
  fps = 30,
  className = "",
  staticFallbackClassName = "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(247,42,35,0.18),transparent)]",
}: RemotionLayerProps) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 ${staticFallbackClassName} ${className}`}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <Player
        component={component}
        durationInFrames={durationInFrames}
        compositionWidth={compositionWidth}
        compositionHeight={compositionHeight}
        fps={fps}
        controls={false}
        loop
        autoPlay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
