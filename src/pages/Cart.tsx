import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";

export default function Cart() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="px-6 py-28 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--glass-bg)]">
            <ShoppingBagEmptyIcon className="text-[var(--faint)]" />
          </div>
          <h1 className="font-display text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-[var(--muted)] mb-8">
            Looks like you haven't added any premium selections to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-walnut)] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[var(--color-terracotta)] hover:-translate-y-0.5"
          >
            Explore the Shop <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-28 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-4xl font-black mb-12">Your Cart</h1>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Cart Items */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass relative flex items-center gap-6 rounded-[1.5rem] p-4 pr-6 sm:p-6"
              >
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[var(--color-sand)] sm:h-32 sm:w-32">
                  <img
                    src={item.product.seed === 'almonds-kc' ? '/src/assets/almonds-pack.png' : `https://picsum.photos/seed/${item.product.seed}/300/300`}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold sm:text-xl">
                      <Link to={`/product/${item.product.id}`} className="hover:text-[var(--color-terracotta)] transition-colors">
                        {item.product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-[var(--muted)]">{item.product.origin}</p>
                    <p className="mt-2 font-display text-lg font-bold sm:hidden">
                      ₹{item.product.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-8">
                    <div className="flex items-center rounded-full border border-[var(--glass-edge)] bg-[var(--glass-bg)] p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[var(--glass-bg-strong)] transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[var(--glass-bg-strong)] transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <p className="hidden font-display text-lg font-bold sm:block w-20 text-right">
                      ₹{item.product.price * item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[var(--faint)] hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="glass sticky top-32 rounded-[2rem] p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Subtotal</span>
                  <span className="font-bold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Shipping</span>
                  <span className="font-bold">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-[var(--glass-edge)] pt-6 mb-8 flex justify-between items-end">
                <span className="font-display font-bold">Total</span>
                <span className="font-display text-3xl font-black text-[var(--color-terracotta)]">₹{cartTotal}</span>
              </div>

              <Link
                to="/checkout"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-walnut)] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[var(--color-terracotta)] hover:-translate-y-0.5"
              >
                Proceed to Checkout <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ShoppingBagEmptyIcon({ className }: { className?: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
