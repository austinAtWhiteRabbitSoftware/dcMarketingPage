"use client";

import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type FlyByDiscProps = {
  direction?: "ltr" | "rtl";
};

/**
 * A single disc flyby: enters off one edge, spins across the page with a soft
 * arc, and exits off the other edge. Designed to be played once (no loop)
 * when the band scrolls into view. Background is transparent so the page
 * color shows through in both themes.
 */
export function FlyByDisc({ direction = "ltr" }: FlyByDiscProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = frame / Math.max(1, durationInFrames - 1);

  const xLtr = interpolate(t, [0, 1], [-18, 118]);
  const xRtl = interpolate(t, [0, 1], [118, -18]);
  const xPercent = direction === "ltr" ? xLtr : xRtl;

  const yOffset = interpolate(t, [0, 0.5, 1], [10, -14, 10]);

  const totalSpin = direction === "ltr" ? 720 : -720;
  const spin = interpolate(t, [0, 1], [0, totalSpin]);

  const opacity = interpolate(
    t,
    [0, 0.08, 0.92, 1],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const scale = interpolate(t, [0, 0.5, 1], [0.82, 1, 0.82]);

  const rim = "#f72a23";
  const rimDark = "#a6140f";
  const plate = "#f4ece0";
  const plateEdge = "#d9cfbd";
  const stamp = "#1a1a1d";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        perspective: 1400,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: `${xPercent}%`,
          top: "50%",
          width: "14%",
          aspectRatio: "1 / 1",
          transform: `translate(-50%, calc(-50% + ${yOffset}px)) scale(${scale})`,
          transformStyle: "preserve-3d",
          opacity,
        }}
      >
        {/* Motion streak behind the disc */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: direction === "ltr" ? "-260%" : "60%",
            width: "260%",
            height: "36%",
            transform: "translateY(-50%)",
            background:
              direction === "ltr"
                ? "linear-gradient(to right, rgba(247,42,35,0) 0%, rgba(247,42,35,0.18) 65%, rgba(247,42,35,0.32) 100%)"
                : "linear-gradient(to left, rgba(247,42,35,0) 0%, rgba(247,42,35,0.18) 65%, rgba(247,42,35,0.32) 100%)",
            filter: "blur(10px)",
            borderRadius: "50%",
            opacity: 0.55,
          }}
        />

        {/* Disc: tilted, rotating in-plane so the stamp spins around */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transform: `rotateX(58deg) rotateZ(${spin}deg)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `radial-gradient(circle at 50% 40%, ${rim} 0%, ${rim} 62%, ${rimDark} 100%)`,
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.15) inset, 0 10px 24px rgba(0,0,0,0.3)",
            }}
          />

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
                inset: "22%",
                borderRadius: "50%",
                border: `1px solid ${stamp}`,
                opacity: 0.12,
              }}
            />

            <div
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
                fontWeight: 900,
                fontSize: "44%",
                letterSpacing: "-0.04em",
                color: stamp,
                lineHeight: 1,
                textShadow: "0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              DC
            </div>
          </div>

          {/* Specular sheen on the flight plate */}
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
      </div>
    </AbsoluteFill>
  );
}
