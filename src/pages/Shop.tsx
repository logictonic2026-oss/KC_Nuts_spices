import { motion } from "framer-motion";
import { PRODUCTS } from "../data/content";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <main className="px-6 py-28 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center md:text-left">
          <h1 className="font-display text-4xl md:text-5xl font-black mb-4">Shop the Range</h1>
          <p className="text-[var(--muted)] max-w-2xl text-lg">
            Precision nutrition, personally delivered. Choose from our curated selection of premium nuts, seeds, and blends.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-[1.5rem]"
            >
              <Link to={`/product/${p.id}`} className="relative aspect-square overflow-hidden bg-[var(--color-sand)] block">
                <img
                  src={p.seed === 'almonds-kc' ? '/src/assets/almonds-pack.png' : `https://picsum.photos/seed/${p.seed}/500/500`}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                />
                {p.badge && (
                  <span className="glass-strong absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide">
                    {p.badge}
                  </span>
                )}
              </Link>
              
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.08em] text-[var(--faint)]">{p.origin}</p>
                <Link to={`/product/${p.id}`}>
                  <h3 className="font-display mb-2 text-xl font-bold group-hover:text-[var(--color-terracotta)] transition-colors">{p.name}</h3>
                </Link>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display text-lg font-bold">₹{p.price}</span>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="flex items-center gap-2 rounded-full bg-[var(--glass-bg-strong)] px-4 py-2 text-sm font-semibold transition-colors hover:bg-[var(--color-terracotta)] hover:text-white"
                  >
                    <ShoppingCart size={16} />
                    Add
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
