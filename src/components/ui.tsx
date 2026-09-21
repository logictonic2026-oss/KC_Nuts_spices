import type { ReactNode } from "react";

export function SectionHead({
  tag,
  title,
  intro,
  center,
}: {
  tag: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-terracotta)] ${
          center ? "justify-center" : ""
        }`}
      >
        {!center && <span className="h-px w-5 bg-[var(--color-terracotta)]" />}
        {tag}
      </p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">{intro}</p>}
    </div>
  );
}

export function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-terracotta)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CheckList({ points }: { points: string[] }) {
  return (
    <ul className="mb-8 flex flex-col gap-3">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-3 text-sm text-[var(--muted)]">
          <Check />
          {p}
        </li>
      ))}
    </ul>
  );
}

export function Stars() {
  return (
    <div className="mb-3 flex gap-1" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="h-4 w-4 fill-[var(--color-gold)]" viewBox="0 0 24 24">
          <path d="M12 2l3 6.5 7 .6-5.3 4.6 1.6 6.8L12 17l-6.2 3.5 1.6-6.8L2 9.1l7-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35M12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.49-8.42" />
    </svg>
  );
}

export function Arrow() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
