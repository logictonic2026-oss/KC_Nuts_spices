import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import LogoMark from "./LogoMark";
import { BRAND } from "../data/content";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";
const LINKS = [
  { label: "Bestsellers", href: "/#products" },
  { label: "Our Story", href: "/about" },
  { label: "Corporate Gifting", href: "/gifting" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { cartCount } = useCart();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 60));

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-[100] flex justify-center px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        style={{ paddingTop: scrolled ? 10 : 18 }}
      >
        <div
          className="glass flex w-full max-w-[1200px] items-center justify-between gap-6 rounded-full px-3 py-2 pl-5 transition-all duration-300"
          style={{
            height: scrolled ? 56 : 64,
            background: scrolled ? "var(--glass-bg-strong)" : "var(--glass-bg)",
          }}
        >
          {/* logo — fades/slides in once the hero logo has scattered */}
          <a href="#top" className="flex items-center gap-3" aria-label={`${BRAND.name} home`}>
            <motion.span
              animate={{
                opacity: scrolled ? 1 : 0,
                scale: scrolled ? 1 : 0.5,
                rotate: scrolled ? 0 : -24,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <LogoMark size={34} />
            </motion.span>
            <motion.span
              className="font-display text-lg font-extrabold tracking-tight whitespace-nowrap"
              animate={{
                opacity: scrolled ? 1 : 0,
                x: scrolled ? 0 : -16,
                scale: scrolled ? 1 : 0.88,
              }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 22,
              }}
            >
              KC Nuts &amp; Spices
            </motion.span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <Link
              to="/shop"
              className="group relative py-1 text-sm font-bold text-[var(--color-terracotta)] transition-colors hover:text-[var(--text)]"
            >
              Shop All
              <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded bg-[var(--color-terracotta)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            </Link>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="group relative py-1 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                {l.label}
                <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded bg-[var(--color-terracotta)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={toggle}
              aria-label="Toggle colour theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-edge)] transition-colors hover:bg-[var(--glass-bg-strong)]"
            >
              {theme === "dark" ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
              )}
            </button>

            <Link
              to="/cart"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-edge)] transition-colors hover:bg-[var(--glass-bg-strong)] text-[var(--text)]"
              aria-label="View Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-terracotta)] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="hidden flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-edge)] transition-colors hover:bg-[var(--glass-bg-strong)] text-[var(--text)] md:flex"
              aria-label="User Account"
            >
              <User size={18} />
            </Link>

            <Link
              to="/shop"
              className="hidden rounded-full bg-[var(--color-walnut)] px-5 py-2 text-sm font-bold text-[var(--color-cream)] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-terracotta)] md:inline-block"
            >
              Shop Now
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--glass-edge)] md:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="glass-strong fixed inset-x-4 top-[84px] z-[99] flex flex-col gap-1 rounded-2xl p-5 md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--glass-edge)] py-3 text-base font-semibold text-[var(--muted)] last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
