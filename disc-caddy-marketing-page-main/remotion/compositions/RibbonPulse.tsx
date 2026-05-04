"use client";

import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const LOOP = 120;

/**
 * Thin accent ribbon for section dividers / underlines.
 */
export function RibbonPulse() {
  const frame = useCurrentFrame();
  const f = frame % LOOP;
  const travel = interpolate(f, [0, LOOP], [-35, 135]);
  const glow = interpolate(f, [0, LOOP / 2, LOOP], [0.25, 0.55, 0.25]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 2,
          overflow: "hidden",
          borderRadius: 999,
          background: "rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "42%",
            height: "100%",
            left: `${travel}%`,
            background:
              "linear-gradient(90deg, transparent, rgba(247,42,35,0.95), transparent)",
            opacity: glow,
            filter: "blur(0.5px)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
}
