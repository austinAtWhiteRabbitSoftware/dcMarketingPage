"use client";

import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const LOOP = 150;

/**
 * Slow, looping ambient gradients for the hero backdrop.
 * Background is transparent so the section's own theme-aware background shows
 * through (works in both light and dark mode). The glows use the brand accent
 * at low opacity, which reads correctly against either surface.
 */
export function AmbientGlow() {
  const frame = useCurrentFrame();
  const f = frame % LOOP;
  const drift = interpolate(f, [0, LOOP / 2, LOOP], [0, 1, 0]);
  const drift2 = interpolate(f, [0, LOOP / 3, (LOOP * 2) / 3, LOOP], [0, 0.6, 0.3, 0]);
  const pulse = interpolate(f, [0, LOOP / 2, LOOP], [0.1, 0.2, 0.1]);

  // Tight, product-centered glow — hugs the basket area so it reads as ambient
  // product lighting, not a horizontal band across the hero.
  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle 42% at 50% ${75 + drift * 3}%, rgba(247, 42, 35, 0.18), transparent 55%)`,
        }}
      />
      <AbsoluteFill
        style={{
          opacity: 0.55 + pulse,
          background: `radial-gradient(circle 24% at ${48 + drift2 * 4}% ${80 - drift2 * 4}%, rgba(247, 42, 35, 0.22), transparent 60%)`,
        }}
      />
    </AbsoluteFill>
  );
}
