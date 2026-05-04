"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { PlayerRef } from "@remotion/player";
import { FlyByDisc } from "@/remotion/compositions/FlyByDisc";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const Player = dynamic(
  () => import("@remotion/player").then((m) => m.Player),
  { ssr: false },
);

type DiscFlyByProps = {
  direction?: "ltr" | "rtl";
  /** Total flight length in frames at 30fps. Default ~2.2s. */
  durationInFrames?: number;
  /** Extra delay in ms after the band enters the viewport. */
  delayMs?: number;
  className?: string;
};

export function DiscFlyBy({
  direction = "ltr",
  durationInFrames = 66,
  delayMs = 120,
  className = "",
}: DiscFlyByProps) {
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<PlayerRef | null>(null);
  const [armed, setArmed] = useState(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            hasPlayedRef.current = true;
            setArmed(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!armed) return;
    const player = playerRef.current;
    if (!player) return;

    const timer = window.setTimeout(() => {
      try {
        player.seekTo(0);
        player.play();
      } catch {
        // Player may not be fully initialized yet; next tick will handle it.
      }
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [armed, delayMs]);

  if (reducedMotion) {
    return <div className={`h-16 w-full ${className}`} aria-hidden />;
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none relative h-20 w-full overflow-hidden sm:h-24 ${className}`}
      aria-hidden
    >
      {armed ? (
        <Player
          ref={playerRef}
          component={FlyByDisc}
          inputProps={{ direction }}
          durationInFrames={durationInFrames}
          compositionWidth={1400}
          compositionHeight={200}
          fps={30}
          controls={false}
          autoPlay={false}
          loop={false}
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
}
