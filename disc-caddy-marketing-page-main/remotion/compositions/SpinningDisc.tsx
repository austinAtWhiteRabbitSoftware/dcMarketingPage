"use client";

import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const LOOP = 180;

/**
 * A disc golf disc, stamped "DC", rotating around its Y-axis with a subtle
 * tilt and perspective so the rim is visible. Background is transparent so
 * the parent section controls the color in light/dark mode.
 */
export function SpinningDisc() {
  const frame = useCurrentFrame();
  const f = frame % LOOP;
  const rotateY = interpolate(f, [0, LOOP], [0, 360]);
  const bob = interpolate(f, [0, LOOP / 2, LOOP], [-6, 6, -6]);
  const shadowScale = interpolate(f, [0, LOOP / 2, LOOP], [0.9, 1, 0.9]);
  const shadowOpacity = interpolate(f, [0, LOOP / 2, LOOP], [0.22, 0.35, 0.22]);

  const rim = "#f72a23";
  const rimDark = "#a6140f";
  const plate = "#f4ece0";
  const plateEdge = "#d9cfbd";
  const stamp = "#1a1a1d";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        perspective: 1400,
      }}
    >
      {/* Soft ground shadow */}
      <div
        style={{
          position: "absolute",
          bottom: "22%",
          width: "58%",
          height: "5%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.55), rgba(0,0,0,0) 70%)",
          opacity: shadowOpacity,
          transform: `translateY(${-bob * 0.3}px) scaleX(${shadowScale})`,
          filter: "blur(6px)",
        }}
      />

      {/* Disc: tilted and rotating around Y */}
      <div
        style={{
          position: "relative",
          width: "68%",
          aspectRatio: "1 / 1",
          transformStyle: "preserve-3d",
          transform: `translateY(${bob}px) rotateX(62deg) rotateZ(${rotateY}deg)`,
        }}
      >
        {/* Rim (outer red ring) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: `radial-gradient(circle at 50% 40%, ${rim} 0%, ${rim} 62%, ${rimDark} 100%)`,
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.15) inset, 0 18px 40px rgba(0,0,0,0.35)",
          }}
        />

        {/* Rim highlight: thin inner ring to suggest the flight plate edge */}
        <div
          style={{
            position: "absolute",
            inset: "6%",
            borderRadius: "50%",
            background: plateEdge,
            boxShadow:
              "0 0 0 2px rgba(0,0,0,0.08) inset, 0 0 0 1px rgba(255,255,255,0.4) inset",
          }}
        />

        {/* Flight plate */}
        <div
          style={{
            position: "absolute",
            inset: "9%",
            borderRadius: "50%",
            background: `radial-gradient(circle at 38% 30%, #ffffff 0%, ${plate} 55%, ${plateEdge} 100%)`,
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.06) inset, 0 4px 10px rgba(0,0,0,0.08) inset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Decorative stamp ring */}
          <div
            style={{
              position: "absolute",
              inset: "10%",
              borderRadius: "50%",
              border: `1.5px solid ${stamp}`,
              opacity: 0.18,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "18%",
              borderRadius: "50%",
              border: `1px solid ${stamp}`,
              opacity: 0.12,
            }}
          />

          {/* DC stamp: kept upright relative to the disc face */}
          <div
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
              fontWeight: 900,
              fontSize: "42%",
              letterSpacing: "-0.04em",
              color: stamp,
              lineHeight: 1,
              textShadow: "0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            DC
          </div>

          {/* Sub-stamp: tiny wordmark under "DC" */}
          <div
            style={{
              position: "absolute",
              bottom: "24%",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
              fontSize: "6%",
              letterSpacing: "0.35em",
              color: stamp,
              opacity: 0.55,
              textTransform: "uppercase",
            }}
          >
            Disc Caddy
          </div>
        </div>

        {/* Top specular sheen: fixed relative to the disc face, drifts with rotation */}
        <div
          style={{
            position: "absolute",
            inset: "9%",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse 70% 30% at 40% 18%, rgba(255,255,255,0.5), rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </AbsoluteFill>
  );
}
