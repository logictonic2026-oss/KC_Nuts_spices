import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { RevealItem } from "./Reveal";
import { Arrow, SectionHead, Stars, WaIcon } from "./ui";
import {
  BRAND,
  COMBOS,
  GIFTING,
  PILLARS,
  PRODUCTS,
  REVIEWS,
  TIERS,
  type Product,
} from "../data/content";
import almondsPack from "../assets/almonds-pack.png";
import { Link } from "react-router-dom";

function productImage(p: Product) {
  if (p.seed === "almonds-kc") return almondsPack;
  return `https://picsum.photos/seed/${p.seed}/500/500`;
}

/** Shared card hover spring — physically satisfying bounce-stop */
const CARD_HOVER = {
  whileHover: { y: -8, scale: 1.025 },
  transition: { type: "spring" as const, stiffness: 280, damping: 18 },
};

/* ---------------- Key Pillars ---------------- */
export function Pillars() {
  return (
    <section id="why" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead center tag="Key Pillars" title="How KC is structured." />
        </Reveal>
        {/* Stagger parent drives the card cascade */}
        <Reveal stagger staggerDelay={0.09} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <RevealItem as="article" key={p.kicker}>
              <motion.div
                {...CARD_HOVER}
                className="glass group relative h-full overflow-hidden rounded-[1.5rem] p-6"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-hi)] to-transparent" />
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-terracotta)]">{p.kicker}</p>
                <h3 className="font-display mb-3 text-lg font-bold leading-tight">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Product Architecture (interactive tiers) ---------------- */
export function Tiers() {
  const [active, setActive] = useState(0);
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead
            center
            tag="Product Architecture"
            title={<>Three tiers. <span className="text-[var(--color-terracotta)]">One premium system.</span></>}
            intro="This structure helps KC stay premium while still serving gifting, everyday wellness, and kitchen utility needs."
          />
        </Reveal>
        <Reveal>
          <div className="mt-12 flex flex-col gap-4 md:h-[320px] md:flex-row">
            {TIERS.map((t, i) => (
              <motion.button
                key={t.name}
                layout /* FLIP — Framer Motion handles flex-grow reflow smoothly */
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="glass group relative flex-1 overflow-hidden rounded-[1.5rem] p-7 text-left"
                style={{ flexGrow: active === i ? 2.4 : 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                whileHover={active !== i ? { scale: 1.015 } : {}}
              >
                <motion.span
                  className="absolute inset-0 -z-0"
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(185,83,47,0.16), rgba(201,162,75,0.12))",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <span className="font-display text-5xl font-black text-[var(--color-gold)]">{t.no}</span>
                  <p className="mt-auto text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-terracotta)]">{t.tier}</p>
                  <h3 className="font-display mt-1 text-xl font-bold">{t.name}</h3>
                  {/* AnimatePresence replaces the maxHeight hack — no layout jank */}
                  <AnimatePresence initial={false}>
                    {active === i && (
                      <motion.p
                        key="desc"
                        className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--muted)]"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {t.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Combo Solutions ---------------- */
export function Combos() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead center tag="Combo Solutions" title="Curated outcomes that reduce decision fatigue." />
        </Reveal>
        <Reveal stagger staggerDelay={0.1} className="mt-12 grid gap-5 md:grid-cols-3">
          {COMBOS.map((c) => (
            <RevealItem as="article" key={c.kicker}>
              <motion.div
                {...CARD_HOVER}
                className="glass group h-full rounded-[1.5rem] p-7"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-terracotta)]">{c.kicker}</p>
                <h3 className="font-display mb-3 text-lg font-bold">{c.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{c.desc}</p>
              </motion.div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Products ---------------- */
export function Products() {
  return (
    <section id="products" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHead center tag="What We Craft" title="What we craft." />
        </Reveal>
        <Reveal stagger staggerDelay={0.08} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <RevealItem as="article" key={p.name}>
              <motion.div
                {...CARD_HOVER}
                className="glass group flex h-full flex-col overflow-hidden rounded-[1.5rem]"
              >
                <div className="relative aspect-square overflow-hidden bg-[var(--color-sand)]">
                  <img
                    src={productImage(p)}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                  />
                  {p.badge && (
                    <span className="glass-strong absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.08em] text-[var(--faint)]">{p.origin}</p>
                  <h3 className="font-display mb-3 text-lg font-bold">{p.name}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
                  <Link
                    to={`/product/${p.id}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-terracotta)]"
                  >
                    View Details <Arrow />
                  </Link>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Gifting (re-uses Split externally) ---------------- */
export { GIFTING };

/* ---------------- Reviews — horizontal auto-scroll marquee ---------------- */
export function Reviews() {
  const doubled = [...REVIEWS, ...REVIEWS];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHead center tag="Reviews" title="What customers say." />
        </Reveal>
      </div>
      {/* Full-bleed scroll track, no px-6 constraint */}
      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[review-scroll_36s_linear_infinite] gap-6 group-hover:[animation-play-state:paused]">
          {doubled.map((r, i) => (
            <div
              key={i}
              className="glass w-[320px] shrink-0 rounded-[1.5rem] p-7"
            >
              <Stars />
              <p className="mb-5 text-base italic leading-relaxed text-[var(--text)]">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[rgba(201,162,75,0.18)] font-display font-extrabold">
                  {r.name[0]}
                </span>
                <span className="text-sm font-bold">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */
export function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <Reveal dir="zoom" className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[var(--color-terracotta)] to-[var(--color-terracotta-deep)] px-8 py-14 shadow-[0_30px_60px_rgba(185,83,47,0.3)] md:px-16">
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_-20%,rgba(255,255,255,0.22),transparent_50%)]" />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-black tracking-tight text-white md:text-4xl">
                Need help? Reach out on WhatsApp.
              </h2>
              <p className="mt-3 max-w-md text-white/85">
                Have questions about your order, corporate gifting, or wholesale enquiries? Reach out to our support team instantly on WhatsApp.
              </p>
              <div className="mt-5 flex gap-4">
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/90 underline-offset-4 hover:underline">
                  Instagram →
                </a>
              </div>
            </div>
            {/* Pulsing ring + spring hover on the CTA button */}
            <motion.a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-9 py-4 text-sm font-extrabold text-[var(--color-terracotta)] shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              {/* Pulse ring — inherits bg-white */}
              <span
                className="cta-pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-white"
                aria-hidden="true"
              />
              <WaIcon /> Contact Support
            </motion.a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
