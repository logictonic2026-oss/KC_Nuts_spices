import { MARQUEE } from "../data/content";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="group overflow-hidden bg-[var(--color-walnut)] py-4 text-[var(--color-cream)] [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-[kc-marquee_28s_linear_infinite] gap-8 group-hover:[animation-play-state:paused]">
        {items.map((m, i) => (
          <span key={i} className="flex shrink-0 items-center gap-3 text-sm font-medium tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
