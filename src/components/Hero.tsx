import { NUTS, NutGlyph, VIEW } from "./nuts";
import { BRAND, HERO_STATS } from "../data/content";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

/** Static assembled logo. */
function StaticLogo() {
  return (
    <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className="mx-auto w-full max-w-[560px]" aria-label={BRAND.name}>
      {NUTS.map((n) => (
        <g key={n.id} transform={`translate(${n.hx} ${n.hy}) rotate(${n.baseRot}) scale(${n.scale})`}>
          <NutGlyph kind={n.kind} />
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[85vh] flex-col items-center justify-center px-6 pt-28 pb-16 text-center bg-[var(--color-sand)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <StaticLogo />
        
        <p className="font-display mt-6 text-xl font-medium text-[var(--muted)]">{BRAND.tagline}</p>
        
        <h1 className="font-display mt-8 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
          Precision Nutrition, <span className="text-[var(--color-terracotta)]">Personally Delivered.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--muted)] md:text-lg">
          Everyday pantry buying, made smarter and more intentional — curated for households,
          professionals, and businesses who refuse to compromise.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(185,83,47,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-terracotta-deep)]"
          >
            <ShoppingBag size={20} />
            Shop the Collection
          </Link>
          <a
            href="#products"
            className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all hover:-translate-y-0.5 hover:text-[var(--color-terracotta)]"
          >
            View Bestsellers
          </a>
        </div>

        <div className="mx-auto mt-16 flex max-w-md w-full items-stretch justify-center gap-3">
          {HERO_STATS.map((s) => (
            <div
              key={s.label}
              className="glass flex-1 rounded-2xl px-3 py-4 flex flex-col items-center justify-center"
            >
              <div className="font-display text-xl font-extrabold leading-none">{s.num}</div>
              <div className="mt-2 text-xs font-medium leading-tight text-[var(--muted)] text-center">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
