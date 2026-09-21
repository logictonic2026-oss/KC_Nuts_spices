// ============================================================
// Hand-drawn SVG nut / spice / seed set + a layout that forms "KC".
// Each piece is an independent element so the hero can scatter them
// individually (true explode) and reassemble them on scroll-up.
// ============================================================
import type { JSX } from "react";

const OUTLINE = "#3b2c1e"; // walnut outline, matches the logo's inked look

type Palette = { fill: string; dark: string };

const PALETTES: Record<string, Palette> = {
  almond: { fill: "#dea566", dark: "#b97c3c" },
  cashew: { fill: "#eccd8e", dark: "#d2a857" },
  coffee: { fill: "#4a2c1a", dark: "#2c1709" },
  pistachio: { fill: "#bcc77f", dark: "#8c9a4f" },
  raisin: { fill: "#5e3a22", dark: "#3c2414" },
  walnut: { fill: "#cda06d", dark: "#a3733f" },
  starAnise: { fill: "#854f2a", dark: "#5c3318" },
  cinnamon: { fill: "#a55f2c", dark: "#7c4019" },
  cardamom: { fill: "#c2c98f", dark: "#97a05e" },
  seed: { fill: "#d4bd80", dark: "#ad9450" },
  date: { fill: "#7a4a28", dark: "#4f2d15" },
};
PALETTES.coffee = { fill: "#4a2c1a", dark: "#2c1709" };

export type NutKind = keyof typeof PALETTES;

/** A single nut/spice glyph drawn around local origin (0,0), ~radius 12. */
export function NutGlyph({ kind }: { kind: NutKind }): JSX.Element {
  const c = PALETTES[kind];
  const s = { stroke: OUTLINE, strokeWidth: 1, strokeLinejoin: "round" as const };
  switch (kind) {
    case "almond":
      return (
        <g {...s}>
          <path d="M0 -13 C7 -8 8 8 0 13 C-8 8 -7 -8 0 -13 Z" fill={c.fill} />
          <path d="M0 -9 L0 9" stroke={c.dark} strokeWidth={0.9} fill="none" />
        </g>
      );
    case "cashew":
      return (
        <g {...s}>
          <path
            d="M-10 -7 C-2 -12 9 -9 10 0 C11 9 -1 13 -8 9 C-3 7 2 5 3 0 C4 -5 -4 -6 -10 -3 Z"
            fill={c.fill}
          />
        </g>
      );
    case "coffee":
      return (
        <g {...s}>
          <ellipse rx="8" ry="12" fill={c.fill} />
          <path d="M0 -10 C-3 -4 -3 4 0 10" stroke={c.dark} strokeWidth={1} fill="none" />
        </g>
      );
    case "pistachio":
      return (
        <g {...s}>
          <path d="M0 -12 C8 -9 9 8 0 12 C-9 8 -8 -9 0 -12 Z" fill={c.fill} />
          <path d="M-3 -8 C-1 0 -1 6 1 10" stroke={c.dark} strokeWidth={0.9} fill="none" />
        </g>
      );
    case "raisin":
      return (
        <g {...s}>
          <path
            d="M-8 -4 C-9 -9 -2 -10 3 -8 C9 -6 9 2 6 6 C2 10 -6 9 -8 4 C-10 1 -7 0 -8 -4 Z"
            fill={c.fill}
          />
        </g>
      );
    case "walnut":
      return (
        <g {...s}>
          <circle r="12" fill={c.fill} />
          <path
            d="M0 -11 L0 11 M-6 -9 C-2 -4 -2 4 -6 9 M6 -9 C2 -4 2 4 6 9"
            stroke={c.dark}
            strokeWidth={0.9}
            fill="none"
          />
        </g>
      );
    case "starAnise":
      return (
        <g {...s}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <path
              key={i}
              transform={`rotate(${i * 45})`}
              d="M0 0 L2.6 -7 C1.4 -10 -1.4 -10 -2.6 -7 Z"
              fill={c.fill}
            />
          ))}
          <circle r="2.4" fill={c.dark} />
        </g>
      );
    case "cinnamon":
      return (
        <g {...s}>
          <rect x="-4.5" y="-13" width="9" height="26" rx="3" fill={c.fill} />
          <path d="M-1.5 -12 L-1.5 12 M1.8 -12 L1.8 12" stroke={c.dark} strokeWidth={0.8} />
        </g>
      );
    case "cardamom":
      return (
        <g {...s}>
          <path d="M0 -12 C6 -7 6 7 0 12 C-6 7 -6 -7 0 -12 Z" fill={c.fill} />
          <path d="M0 -12 L0 12" stroke={c.dark} strokeWidth={0.8} />
        </g>
      );
    case "seed":
      return (
        <g {...s}>
          <path d="M0 -11 C5 -7 5 7 0 11 C-5 7 -5 -7 0 -11 Z" fill={c.fill} />
        </g>
      );
    case "date":
      return (
        <g {...s}>
          <ellipse rx="7.5" ry="12.5" fill={c.fill} />
          <path d="M0 -11 C3 -4 3 4 0 11" stroke={c.dark} strokeWidth={0.9} fill="none" />
        </g>
      );
    default:
      return <circle r="11" fill={c.fill} {...s} />;
  }
}

// ---------- deterministic pseudo-random (stable across renders) ----------
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const VIEW = { w: 460, h: 260, cx: 225, cy: 128 };

export type NutNode = {
  id: number;
  kind: NutKind;
  /** home position — forms the KC */
  hx: number;
  hy: number;
  scale: number;
  baseRot: number;
  /** scatter offset (explosion target, relative to home) */
  dx: number;
  dy: number;
  spin: number;
  depth: number; // 0..1, for parallax/stagger
};

const KINDS: NutKind[] = [
  "almond", "cashew", "coffee", "pistachio", "raisin",
  "walnut", "starAnise", "cinnamon", "cardamom", "seed", "date",
];

function buildLayout(): NutNode[] {
  const rand = mulberry32(20240601);
  const pts: { x: number; y: number }[] = [];

  // ----- letter K -----
  const stemX = 78;
  const top = 44;
  const bot = 214;
  // vertical stem
  for (let i = 0; i <= 8; i++) pts.push({ x: stemX, y: top + ((bot - top) * i) / 8 });
  const mid = (top + bot) / 2;
  // upper arm  (stem-mid -> up-right)
  for (let i = 1; i <= 5; i++) {
    const t = i / 5;
    pts.push({ x: stemX + (110 * t), y: mid - (mid - top) * t });
  }
  // lower leg (stem-mid -> down-right)
  for (let i = 1; i <= 6; i++) {
    const t = i / 6;
    pts.push({ x: stemX + (118 * t), y: mid + (bot - mid) * t });
  }

  // ----- letter C -----
  const ccx = 330, ccy = 129, rx = 86, ry = 92;
  const count = 13;
  // open to the right: sweep from ~58° round the top/left/bottom to ~302°
  const a0 = (58 * Math.PI) / 180;
  const a1 = (302 * Math.PI) / 180;
  for (let i = 0; i <= count; i++) {
    const a = a0 + ((a1 - a0) * i) / count;
    pts.push({ x: ccx + Math.cos(a) * rx, y: ccy - Math.sin(a) * ry });
  }

  return pts.map((p, id) => {
    const ang = Math.atan2(p.y - VIEW.cy, p.x - VIEW.cx);
    const jitter = 0.6 + rand() * 0.9;
    const dist = 360 + rand() * 520; // explosion travel
    return {
      id,
      kind: KINDS[Math.floor(rand() * KINDS.length)],
      hx: p.x + (rand() - 0.5) * 6,
      hy: p.y + (rand() - 0.5) * 6,
      scale: 0.82 + rand() * 0.5,
      baseRot: rand() * 360,
      dx: Math.cos(ang + (rand() - 0.5) * 1.1) * dist * jitter,
      dy: Math.sin(ang + (rand() - 0.5) * 1.1) * dist * jitter - 120 * rand(),
      spin: (rand() - 0.5) * 540,
      depth: rand(),
    };
  });
}

export const NUTS: NutNode[] = buildLayout();
