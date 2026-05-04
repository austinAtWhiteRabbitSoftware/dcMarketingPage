"use client";

import { AbsoluteFill, Easing, useCurrentFrame } from "remotion";

/**
 * A disc golf basket rendered with layered SVG for realism:
 * wire-mesh cage (back + front wires), interlocking chain links, a top deflector
 * with visible rim depth, and a metal pole. Two throws per loop arc in, rattle
 * the chains on impact, and drop into the cage. Background is transparent so
 * the hero section controls the color in light and dark mode.
 */
const LOOP = 240;

type ThrowSpec = {
  start: number;
  fromLeft: boolean;
};

const THROWS: ThrowSpec[] = [
  { start: 20, fromLeft: true },
  { start: 140, fromLeft: false },
];

const FLIGHT = 45;
const DROP = 20;
const PER_THROW = FLIGHT + DROP;

const ACCENT = "#f72a23";
const ACCENT_DARK = "#8e140f";

const CAGE_CX = 500;
const CAGE_TOP_Y = 690;
const CAGE_BOT_Y = 835;
const CAGE_TOP_RX = 220;
const CAGE_BOT_RX = 190;
const CAGE_RY_TOP = 38;
const CAGE_RY_BOT = 30;

const DEFLECTOR_CY = 400;
const DEFLECTOR_RX = 240;
const DEFLECTOR_RY = 44;
const CHAIN_ANCHOR_RX = 175;
const CHAIN_ANCHOR_RY = 32;

export function DiscBasket() {
  const frame = useCurrentFrame();
  const f = frame % LOOP;

  const ambientSway = Math.sin(f / 14) * 0.9;

  const impactBurst = THROWS.reduce((acc, tr) => {
    const dt = f - (tr.start + FLIGHT);
    if (dt < 0 || dt > 28) return acc;
    const decay = Math.max(0, 1 - dt / 28);
    return acc + Math.sin(dt / 1.9) * decay * 6;
  }, 0);

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      <GroundShadow />
      <BasketSvg ambientSway={ambientSway} impactBurst={impactBurst} />
      {THROWS.map((spec, i) => (
        <DiscInFlight key={i} f={f} spec={spec} />
      ))}
    </AbsoluteFill>
  );
}

function GroundShadow() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "93%",
        width: "46%",
        height: "4%",
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background:
          "radial-gradient(ellipse at center, rgba(0,0,0,0.6), rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 75%)",
        filter: "blur(8px)",
      }}
    />
  );
}

/**
 * The whole basket drawn as one SVG so depth ordering, anti-aliasing, and
 * gradients stay consistent. viewBox is 1000x1000 so coordinates read like
 * permille / percent-ish.
 */
function BasketSvg({
  ambientSway,
  impactBurst,
}: {
  ambientSway: number;
  impactBurst: number;
}) {
  return (
    <svg
      viewBox="0 200 1000 800"
      preserveAspectRatio="xMidYMid meet"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "visible",
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="metal-h" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2c2c30" />
          <stop offset="35%" stopColor="#a8a8ae" />
          <stop offset="50%" stopColor="#ededf1" />
          <stop offset="65%" stopColor="#a8a8ae" />
          <stop offset="100%" stopColor="#2c2c30" />
        </linearGradient>
        <linearGradient id="metal-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4d4d9" />
          <stop offset="50%" stopColor="#7a7a80" />
          <stop offset="100%" stopColor="#2f2f33" />
        </linearGradient>
        <linearGradient id="pole-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#303034" />
          <stop offset="45%" stopColor="#b4b4ba" />
          <stop offset="55%" stopColor="#e6e6ea" />
          <stop offset="100%" stopColor="#303034" />
        </linearGradient>
        <radialGradient id="deflector-top" cx="0.5" cy="0.3" r="0.8">
          <stop offset="0%" stopColor={ACCENT} />
          <stop offset="55%" stopColor="#c91d16" />
          <stop offset="100%" stopColor={ACCENT_DARK} />
        </radialGradient>
        <linearGradient id="deflector-rim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6a62" />
          <stop offset="40%" stopColor={ACCENT} />
          <stop offset="100%" stopColor="#4e0906" />
        </linearGradient>
        <radialGradient id="deflector-hole" cx="0.5" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="#0a0a0c" />
          <stop offset="70%" stopColor="#050507" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="cage-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0c0e" />
          <stop offset="100%" stopColor="#1a1a1d" />
        </linearGradient>

        <pattern
          id="chain-link"
          x="0"
          y="0"
          width="8"
          height="11"
          patternUnits="userSpaceOnUse"
        >
          <ellipse
            cx="4"
            cy="2.7"
            rx="2.1"
            ry="2.8"
            fill="none"
            stroke="#2b2b30"
            strokeWidth="1.5"
          />
          <ellipse
            cx="4"
            cy="2.7"
            rx="2.1"
            ry="2.8"
            fill="none"
            stroke="#e4e4e8"
            strokeWidth="0.55"
          />
          <ellipse
            cx="4"
            cy="8.2"
            rx="2.9"
            ry="2.1"
            fill="none"
            stroke="#2b2b30"
            strokeWidth="1.5"
          />
          <ellipse
            cx="4"
            cy="8.2"
            rx="2.9"
            ry="2.1"
            fill="none"
            stroke="#e4e4e8"
            strokeWidth="0.55"
          />
        </pattern>
      </defs>

      {/* Lower pole (below basket, going into the ground) */}
      <rect
        x={CAGE_CX - 9}
        y={CAGE_BOT_Y - 5}
        width={18}
        height={150}
        fill="url(#pole-g)"
      />
      <ellipse
        cx={CAGE_CX}
        cy={CAGE_BOT_Y + 140}
        rx={22}
        ry={6}
        fill="#1a1a1d"
        opacity={0.8}
      />

      {/* --- Cage: back half (drawn first so front overlaps) --- */}
      <CageWires half="back" />

      {/* Cage bottom floor (dark interior) */}
      <ellipse
        cx={CAGE_CX}
        cy={CAGE_BOT_Y + 2}
        rx={CAGE_BOT_RX - 4}
        ry={CAGE_RY_BOT - 3}
        fill="url(#cage-floor)"
      />

      {/* Short stub of pole visible inside the cage above the floor */}
      <rect
        x={CAGE_CX - 7}
        y={CAGE_TOP_Y - 8}
        width={14}
        height={CAGE_BOT_Y - CAGE_TOP_Y + 12}
        fill="url(#pole-g)"
        opacity={0.95}
      />

      {/* --- Cage: front half (in front of the back half, behind the chains) --- */}
      <CageWires half="front" />

      {/* Cage top rim (full ring) — drawn before the chains so chains layer
          on top for the tight "chains in front of the rim" depth read. */}
      <ellipse
        cx={CAGE_CX}
        cy={CAGE_TOP_Y}
        rx={CAGE_TOP_RX}
        ry={CAGE_RY_TOP}
        fill="none"
        stroke="url(#metal-h)"
        strokeWidth={9}
      />
      <ellipse
        cx={CAGE_CX}
        cy={CAGE_TOP_Y - 3}
        rx={CAGE_TOP_RX}
        ry={CAGE_RY_TOP}
        fill="none"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth={2}
      />

      {/* --- Chains (hang from deflector underside, draping over the rim) --- */}
      <ChainCurtain ambientSway={ambientSway} impactBurst={impactBurst} />

      {/* --- Top deflector --- */}
      {/* underside rim (visible lip beneath the top plate) */}
      <ellipse
        cx={CAGE_CX}
        cy={DEFLECTOR_CY + 18}
        rx={DEFLECTOR_RX - 6}
        ry={DEFLECTOR_RY - 4}
        fill="#5e0f0b"
      />
      {/* side wall of the deflector ring */}
      <path
        d={`
          M ${CAGE_CX - DEFLECTOR_RX} ${DEFLECTOR_CY}
          A ${DEFLECTOR_RX} ${DEFLECTOR_RY} 0 0 0 ${CAGE_CX + DEFLECTOR_RX} ${DEFLECTOR_CY}
          L ${CAGE_CX + DEFLECTOR_RX - 6} ${DEFLECTOR_CY + 20}
          A ${DEFLECTOR_RX - 6} ${DEFLECTOR_RY - 4} 0 0 1 ${CAGE_CX - DEFLECTOR_RX + 6} ${DEFLECTOR_CY + 20}
          Z
        `}
        fill="url(#deflector-rim)"
      />
      {/* top plate */}
      <ellipse
        cx={CAGE_CX}
        cy={DEFLECTOR_CY}
        rx={DEFLECTOR_RX}
        ry={DEFLECTOR_RY}
        fill="url(#deflector-top)"
      />
      {/* inner opening (where chains enter) */}
      <ellipse
        cx={CAGE_CX}
        cy={DEFLECTOR_CY + 4}
        rx={CHAIN_ANCHOR_RX}
        ry={CHAIN_ANCHOR_RY}
        fill="url(#deflector-hole)"
      />
      {/* specular highlight on top */}
      <ellipse
        cx={CAGE_CX - 30}
        cy={DEFLECTOR_CY - 20}
        rx={DEFLECTOR_RX * 0.55}
        ry={DEFLECTOR_RY * 0.4}
        fill="rgba(255,255,255,0.32)"
      />
      {/* Tiny brand mark in the center-top of the deflector */}
      <text
        x={CAGE_CX}
        y={DEFLECTOR_CY - 10}
        textAnchor="middle"
        fontFamily='ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif'
        fontWeight={800}
        fontSize={18}
        fill="rgba(255,255,255,0.75)"
        letterSpacing="0.08em"
      >
        DC
      </text>
    </svg>
  );
}

/**
 * Draws the vertical wires plus a couple of horizontal reinforcement rings that
 * form the basket's cage. Rendered in two passes (back then front) so chains
 * sit between them with correct occlusion.
 */
function CageWires({ half }: { half: "back" | "front" }) {
  const WIRE_COUNT = 30;
  const isBack = half === "back";
  const wireColor = isBack ? "#3d3d42" : "#8a8a90";
  const wireHighlight = isBack ? "#55555b" : "#cfcfd4";

  const verticals: React.ReactNode[] = [];
  for (let i = 0; i < WIRE_COUNT; i++) {
    const angle = (i / WIRE_COUNT) * Math.PI * 2 - Math.PI / 2;
    const s = Math.sin(angle);
    // front = wires on the viewer's side (sin > 0 using our ellipse projection)
    const inHalf = isBack ? s <= 0 : s > 0;
    if (!inHalf) continue;

    const topX = CAGE_CX + Math.cos(angle) * CAGE_TOP_RX;
    const topY = CAGE_TOP_Y + s * CAGE_RY_TOP;
    const midX = CAGE_CX + Math.cos(angle) * (CAGE_TOP_RX + 8);
    const midY = (CAGE_TOP_Y + CAGE_BOT_Y) / 2 + s * ((CAGE_RY_TOP + CAGE_RY_BOT) / 2);
    const botX = CAGE_CX + Math.cos(angle) * CAGE_BOT_RX;
    const botY = CAGE_BOT_Y + s * CAGE_RY_BOT;

    // Curved wire: bulges outward slightly then tucks in at the bottom.
    verticals.push(
      <path
        key={`${half}-v-${i}`}
        d={`M ${topX} ${topY} Q ${midX} ${midY} ${botX} ${botY}`}
        fill="none"
        stroke={wireColor}
        strokeWidth={2.2}
        strokeLinecap="round"
      />,
    );
    // Thin highlight stroke on top to catch light
    verticals.push(
      <path
        key={`${half}-v-hl-${i}`}
        d={`M ${topX} ${topY} Q ${midX} ${midY} ${botX} ${botY}`}
        fill="none"
        stroke={wireHighlight}
        strokeWidth={0.8}
        strokeLinecap="round"
        opacity={0.7}
      />,
    );
  }

  // A couple of horizontal reinforcement rings at the bottom of the cage.
  const rings = [
    { y: CAGE_TOP_Y + 45, rx: CAGE_TOP_RX - 4, ry: CAGE_RY_TOP - 2 },
    { y: CAGE_TOP_Y + 90, rx: CAGE_TOP_RX - 14, ry: CAGE_RY_TOP - 5 },
    { y: CAGE_BOT_Y - 2, rx: CAGE_BOT_RX + 2, ry: CAGE_RY_BOT },
  ];

  return (
    <g>
      {verticals}
      {rings.map((r, idx) => (
        <ellipse
          key={`${half}-ring-${idx}`}
          cx={CAGE_CX}
          cy={r.y}
          rx={r.rx}
          ry={r.ry}
          fill="none"
          stroke={wireColor}
          strokeWidth={2.4}
          // Draw only the back or front half using dasharray trickery:
          // we render full ellipse but clip visually by opacity for depth cues.
          opacity={isBack ? 0.55 : 0.9}
          strokeDasharray={isBack ? "2 4" : undefined}
        />
      ))}
    </g>
  );
}

/**
 * 24 chains in two concentric rings (inner + outer), hanging from the deflector
 * underside to the cage rim. Each chain is a thin rect filled with an
 * SVG chain-link pattern, rotated to align with its hang line, and swayed by
 * ambient motion + impact bursts.
 */
function ChainCurtain({
  ambientSway,
  impactBurst,
}: {
  ambientSway: number;
  impactBurst: number;
}) {
  const chains: React.ReactNode[] = [];

  // Chains terminate just above the cage rim so the rim reads as a separate,
  // nearer plane in front of the chain curtain (proper depth ordering).
  const rings = [
    {
      count: 14,
      topRx: CHAIN_ANCHOR_RX - 10,
      topRy: CHAIN_ANCHOR_RY - 8,
      botRx: 30,
      botRy: 10,
      bottomY: CAGE_TOP_Y - 20,
      chainWidth: 12,
      offset: 0,
      depthBias: 0.85,
    },
    {
      count: 12,
      topRx: CHAIN_ANCHOR_RX - 60,
      topRy: CHAIN_ANCHOR_RY - 18,
      botRx: 16,
      botRy: 6,
      bottomY: CAGE_TOP_Y - 35,
      chainWidth: 10,
      offset: Math.PI / 12,
      depthBias: 1.0,
    },
  ];

  rings.forEach((ring, rIdx) => {
    for (let i = 0; i < ring.count; i++) {
      const angle = (i / ring.count) * Math.PI * 2 + ring.offset;
      const s = Math.sin(angle);
      const c = Math.cos(angle);

      const topX = CAGE_CX + c * ring.topRx;
      const topY = DEFLECTOR_CY + 22 + s * ring.topRy;
      const botX = CAGE_CX + c * ring.botRx;
      const botY = ring.bottomY + s * ring.botRy;

      const dx = botX - topX;
      const dy = botY - topY;
      const len = Math.sqrt(dx * dx + dy * dy);
      const chainAngleDeg = (Math.atan2(dy, dx) * 180) / Math.PI - 90;

      // Chains at the viewer's edge of the ring (s ~ 1, front) get the biggest
      // impact reaction. Back chains (s < 0) are rendered darker and slightly
      // transparent for depth.
      const front = s >= -0.1;
      const centerBias = Math.max(0, s + 0.3) * ring.depthBias;
      const phase = i * 0.7 + rIdx * 0.4;
      const sway =
        ambientSway * (0.35 + 0.65 * Math.sin(phase)) +
        impactBurst * (0.2 + 0.8 * centerBias);

      // Shadow / back-half chains render darker.
      const backOpacity = front ? 1 : 0.35;
      const backFilter = front ? undefined : "blur(0.5px)";

      chains.push(
        <g
          key={`ring-${rIdx}-chain-${i}`}
          transform={`rotate(${sway} ${topX} ${topY})`}
          opacity={backOpacity}
          style={{ filter: backFilter }}
        >
          <rect
            x={topX - ring.chainWidth / 2}
            y={topY}
            width={ring.chainWidth}
            height={len}
            fill="url(#chain-link)"
            transform={`rotate(${chainAngleDeg} ${topX} ${topY})`}
          />
          {/* soft shadow behind chain (very subtle, for depth) */}
          <rect
            x={topX - ring.chainWidth / 2 + 1}
            y={topY + 1}
            width={ring.chainWidth}
            height={len}
            fill="rgba(0,0,0,0.18)"
            transform={`rotate(${chainAngleDeg} ${topX} ${topY})`}
            style={{ mixBlendMode: "multiply" as const }}
          />
        </g>,
      );
    }
  });

  return <g>{chains}</g>;
}

function DiscInFlight({ f, spec }: { f: number; spec: ThrowSpec }) {
  const t = f - spec.start;
  if (t < 0 || t > PER_THROW) return null;

  const startXPct = spec.fromLeft ? -18 : 118;
  // Disc hits the side of the chain curtain (not the deflector top).
  // Chain curtain spans roughly x=33%..67% at its widest in the viewBox.
  const sideHitX = spec.fromLeft ? 38 : 62;
  const centerX = 50;

  let xPct = centerX;
  let yPct = 50;
  let scale = 0.5;
  let rotate = 0;
  let tilt = 25;
  let opacity = 1;

  if (t <= FLIGHT) {
    const p = t / FLIGHT;
    const xEase = Easing.out(Easing.quad)(p);
    xPct = startXPct + (sideHitX - startXPct) * xEase;

    // Flat, mostly horizontal flight path that enters at chain-mid height
    // with a gentle arc — the disc skims in from the side and smacks the chains.
    // yPct is a fraction of the (5/4) container; viewBox is y=200..1000.
    const yStart = 37;
    const yEnd = 47;
    const arcAbove = 4;
    yPct = yStart + (yEnd - yStart) * p - Math.sin(Math.PI * p) * arcAbove;

    scale = 0.45 + 0.5 * p;
    rotate = p * 720;
    // Disc flies edge-on / sideways — high rotateX so we see a narrow
    // ellipse rather than a frisbee floating flat toward the camera.
    tilt = 72 + p * 3;
    opacity = p < 0.06 ? p / 0.06 : 1;
  } else {
    const p = (t - FLIGHT) / DROP;
    const pe = Easing.in(Easing.quad)(p);
    // Chains catch the disc and drag it toward the center as it drops
    // into the cage. As it falls, it tumbles toward a flatter angle.
    const wobble = Math.sin(p * Math.PI * 3) * 1.2 * (1 - p);
    xPct = sideHitX + (centerX - sideHitX) * pe + wobble;
    yPct = 47 + pe * 32;
    scale = 0.95 - p * 0.45;
    rotate = 720 + p * 320;
    tilt = 75 - p * 30;
    opacity = p < 0.5 ? 1 : 1 - (p - 0.5) / 0.5;
  }

  const size = 14 * scale;

  return (
    <div
      style={{
        position: "absolute",
        left: `${xPct}%`,
        top: `${yPct}%`,
        width: `${size}%`,
        height: `${size}%`,
        transform: "translate(-50%, -50%)",
        opacity,
        perspective: 900,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt}deg) rotateZ(${rotate}deg)`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: `radial-gradient(circle at 50% 40%, ${ACCENT} 0%, ${ACCENT} 62%, ${ACCENT_DARK} 100%)`,
            boxShadow:
              "inset 0 0 0 1px rgba(0,0,0,0.2), 0 10px 22px rgba(0,0,0,0.4)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "11%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 40% 32%, #ffffff 0%, #f4ece0 55%, #d9cfbd 100%)",
            boxShadow: "inset 0 2px 6px rgba(0,0,0,0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
            fontWeight: 900,
            fontSize: "30%",
            letterSpacing: "-0.04em",
            color: "#1a1a1d",
            textShadow: "0 1px 0 rgba(255,255,255,0.55)",
          }}
        >
          DC
        </div>
        <div
          style={{
            position: "absolute",
            inset: "11%",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse 70% 30% at 40% 18%, rgba(255,255,255,0.55), rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}
