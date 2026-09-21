import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "up" | "left" | "right" | "zoom";

const VARIANTS: Record<Dir, Variants> = {
  up: {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -52, scale: 0.97 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  right: {
    hidden: { opacity: 0, x: 52, scale: 0.97 },
    visible: { opacity: 1, x: 0, scale: 1 },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * Scroll-into-view reveal.
 *
 * Props:
 *  - `dir`        — animation direction / style (default "up")
 *  - `delay`      — stagger delay in seconds
 *  - `stagger`    — when true, acts as a parent container that staggers
 *                   its children via variants; use <RevealItem> for children
 *  - `staggerDelay` — seconds between each staggered child (default 0.08)
 */
export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
  amount = 0.15,
  as = "div",
  stagger = false,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  className?: string;
  amount?: number;
  as?: "div" | "li" | "section" | "article" | "ul";
  stagger?: boolean;
  staggerDelay?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const v = VARIANTS[dir];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  if (stagger) {
    /* Parent orchestrates children; renders as plain visible wrapper */
    return (
      <MotionTag
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount, margin: "0px 0px -4% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -4% 0px" }}
      variants={v}
      transition={{ duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * A child item for use inside a `stagger=true` Reveal parent.
 * Inherits the parent "hidden" / "visible" variant names automatically.
 */
export function RevealItem({
  children,
  dir = "up",
  className,
  as = "div",
}: {
  children: ReactNode;
  dir?: Dir;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const v = VARIANTS[dir];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={v}
      transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
