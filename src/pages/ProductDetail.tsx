import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PRODUCTS } from "../data/content";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 font-display text-2xl font-bold">Product not found</h2>
          <Link to="/shop" className="text-[var(--color-terracotta)] underline hover:no-underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
  };

  return (
    <main className="px-6 py-28 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <Link to="/shop" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square overflow-hidden rounded-[2rem] bg-[var(--color-sand)]"
          >
            <img
              src={product.seed === 'almonds-kc' ? '/src/assets/almonds-pack.png' : `https://picsum.photos/seed/${product.seed}/800/800`}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="glass-strong absolute left-6 top-6 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide">
                {product.badge}
              </span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center py-6"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-terracotta)]">
              {product.origin}
            </p>
            <h1 className="font-display mb-4 text-4xl font-black md:text-5xl">{product.name}</h1>
            <p className="mb-8 text-lg leading-relaxed text-[var(--muted)]">
              {product.desc}
            </p>

            <div className="mb-8 flex items-center gap-6">
              <span className="font-display text-4xl font-bold">₹{product.price}</span>
              <span className="text-sm font-medium text-[var(--faint)]">per pack</span>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-[var(--glass-edge)] bg-[var(--glass-bg)] p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--glass-bg-strong)] transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-[var(--glass-bg-strong)] transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[var(--color-walnut)] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[var(--color-terracotta)] hover:-translate-y-0.5"
              >
                <ShoppingBag size={20} />
                Add to Cart — ₹{product.price * quantity}
              </button>
            </div>

            <div className="rounded-2xl border border-[var(--glass-edge)] bg-[var(--glass-bg)] p-6">
              <h3 className="font-display mb-2 text-lg font-bold">Precision Packed</h3>
              <p className="text-sm text-[var(--muted)]">
                Orders are freshly packed upon request. Dispatch takes 1-2 business days with premium sealed packaging to ensure zero compromise on quality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
