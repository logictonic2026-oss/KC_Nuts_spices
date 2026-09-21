import Reveal from "./Reveal";
import LogoMark from "./LogoMark";
import { BRAND } from "../data/content";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Our Story", href: "#story" },
      { label: "Products", href: "#products" },
      { label: "Why KC", href: "#why" },
      { label: "Corporate Gifting", href: "#gifting" },
    ],
  },
  {
    title: "Ranges",
    links: [
      { label: "Heritage Selection", href: "#products" },
      { label: "Daily Vitality", href: "#products" },
      { label: "Culinary Blend", href: "#products" },
      { label: "Combo Solutions", href: "#products" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "WhatsApp", href: BRAND.whatsapp, ext: true },
      { label: "Instagram", href: BRAND.instagram, ext: true },
      { label: "Order Now", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16 md:pt-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="glass rounded-[1.75rem] p-8 md:p-14">
          <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <LogoMark size={40} />
                <span className="font-display text-lg font-extrabold tracking-tight">KC Nuts &amp; Spices</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
                {BRAND.tagline} Premium dry fruits, nuts, seeds, spices, combos, and corporate
                gifting — rooted in {BRAND.location}.
              </p>
            </div>
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display mb-5 text-sm font-bold tracking-wide">{col.title}</h4>
                <div className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      {...("ext" in l && l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="w-fit text-sm text-[var(--muted)] transition-all hover:translate-x-0.5 hover:text-[var(--color-terracotta)]"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--glass-edge)] pt-8">
            <p className="text-xs text-[var(--faint)]">© {BRAND.est}–2026 KC Nuts &amp; Spices · {BRAND.location}. All rights reserved.</p>
            <div className="flex gap-5">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--color-terracotta)]">Instagram</a>
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--color-terracotta)]">WhatsApp</a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
