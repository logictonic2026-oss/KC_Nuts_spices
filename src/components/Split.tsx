import Reveal from "./Reveal";
import { CheckList, SectionHead, WaIcon } from "./ui";
import { motion } from "framer-motion";

export default function Split({
  id,
  tag,
  title,
  paragraphs,
  points,
  image,
  imageAlt,
  imageSide = "left",
  badge,
  cta,
}: {
  id?: string;
  tag: string;
  title: string;
  paragraphs: string[];
  points: string[];
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
  badge?: { num: string; txt: string };
  cta?: { label: string; href: string; primary?: boolean };
}) {
  const media = (
    /* Image leads — delay 0 */
    <Reveal dir={imageSide === "left" ? "left" : "right"} delay={0} className="relative">
      <motion.div
        className="gold-frame group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--glass-border)] shadow-[var(--shadow-glass)]"
        whileHover={{ scale: 1.025 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </motion.div>
      {badge && (
        <div className="glass-strong absolute -bottom-5 right-6 flex h-24 w-24 flex-col items-center justify-center rounded-full text-center">
          <span className="font-display text-lg font-black leading-none">{badge.num}</span>
          <span className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">{badge.txt}</span>
        </div>
      )}
    </Reveal>
  );

  const text = (
    /* Text follows — delay 0.12 so stagger is visible */
    <Reveal dir={imageSide === "left" ? "right" : "left"} delay={0.12}>
      <SectionHead tag={tag} title={title} />
      <div className="mt-5 flex flex-col gap-4">
        {paragraphs.map((p) => (
          <p key={p} className="max-w-[54ch] leading-relaxed text-[var(--muted)]">
            {p}
          </p>
        ))}
      </div>
      <div className="mt-6">
        <CheckList points={points} />
      </div>
      {cta && (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            cta.primary
              ? "inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(185,83,47,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-terracotta-deep)]"
              : "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:text-[var(--color-terracotta)]"
          }
        >
          <WaIcon /> {cta.label}
        </a>
      )}
    </Reveal>
  );

  return (
    <section id={id} className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {imageSide === "left" ? (
          <>
            {media}
            {text}
          </>
        ) : (
          <>
            <div className="md:order-2">{media}</div>
            <div className="md:order-1">{text}</div>
          </>
        )}
      </div>
    </section>
  );
}
