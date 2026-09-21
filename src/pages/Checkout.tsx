import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request for placing order
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <main className="px-6 py-28 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md glass p-10 rounded-[2rem]"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="font-display text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-[var(--muted)] mb-8">
            Thank you for choosing KC Nuts & Spices. Your precision-packed order will be dispatched shortly.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-walnut)] px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--color-terracotta)]"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </main>
    );
  }

  if (items.length === 0 && !isSuccess) {
    return (
      <main className="px-6 py-28 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 font-display text-2xl font-bold">Your cart is empty</h2>
          <Link to="/shop" className="text-[var(--color-terracotta)] underline hover:no-underline">
            Go to Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="px-6 py-28 min-h-screen">
      <div className="mx-auto max-w-5xl">
        <Link to="/cart" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors">
          <ArrowLeft size={16} /> Back to Cart
        </Link>

        <h1 className="font-display text-4xl font-black mb-10">Checkout</h1>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Shipping Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-[2rem] p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Shipping Details</h2>
              <form id="checkout-form" onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">First Name</label>
                    <input required type="text" className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Last Name</label>
                    <input required type="text" className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <input required type="email" className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Phone (for WhatsApp updates)</label>
                  <input required type="tel" className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Address</label>
                  <textarea required rows={3} className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]"></textarea>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">City</label>
                    <input required type="text" className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">PIN Code</label>
                    <input required type="text" className="w-full rounded-xl border border-[var(--glass-edge)] bg-[var(--glass-bg-strong)] px-4 py-3 outline-none focus:border-[var(--color-terracotta)]" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary sidebar */}
          <div className="lg:col-span-5">
            <div className="glass sticky top-32 rounded-[2rem] p-8">
              <h2 className="font-display text-xl font-bold mb-6">In Your Bag</h2>
              
              <div className="flex flex-col gap-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[var(--color-sand)]">
                      <img
                        src={item.product.seed === 'almonds-kc' ? '/src/assets/almonds-pack.png' : `https://picsum.photos/seed/${item.product.seed}/150/150`}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-bold text-sm line-clamp-1">{item.product.name}</h4>
                      <p className="text-xs text-[var(--muted)]">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-sm flex items-center">
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[var(--glass-edge)] pt-6 flex flex-col gap-3 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Subtotal</span>
                  <span className="font-bold">₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Shipping</span>
                  <span className="text-green-500 font-bold">Free</span>
                </div>
              </div>

              <div className="border-t border-[var(--glass-edge)] pt-6 mb-8 flex justify-between items-end">
                <span className="font-display font-bold">Total</span>
                <span className="font-display text-3xl font-black text-[var(--color-terracotta)]">₹{cartTotal}</span>
              </div>

              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-full bg-[var(--color-walnut)] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[var(--color-terracotta)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Place Order (Demo)"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
