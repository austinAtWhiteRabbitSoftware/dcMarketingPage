"use client";

import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const LOOP = 180;

/**
 * Floating soft orb for media placeholders. Keeps focus on layout, adds life.
 */
export function SoftOrb() {
  const frame = useCurrentFrame();
  const f = frame % LOOP;
  const y = interpolate(f, [0, LOOP / 2, LOOP], [0, -12, 0]);
  const s = interpolate(f, [0, LOOP / 2, LOOP], [1, 1.03, 1]);
  const opacity = interpolate(f, [0, LOOP / 2, LOOP], [0.35, 0.5, 0.35]);

  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0c0c0f",
      }}
    >
      <div
        style={{
          width: "58%",
          aspectRatio: "1",
          borderRadius: "50%",
          transform: `translateY(${y}px) scale(${s})`,
          opacity,
          background:
            "radial-gradient(circle at 35% 35%, rgba(247,42,35,0.45), rgba(247,42,35,0.08) 45%, transparent 70%)",
          boxShadow: "0 0 80px rgba(247, 42, 35, 0.12)",
        }}
      />
    </AbsoluteFill>
  );
}
