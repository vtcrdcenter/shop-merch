"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ShopProduct } from "../../data/products";

export type CartLine = { product: ShopProduct; quantity: number };
type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (product: ShopProduct, quantity?: number) => void;
  update: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "museum-shop-demo-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) queueMicrotask(() => setLines(JSON.parse(saved)));
    } catch { /* localStorage may be unavailable */ }
  }, []);

  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines)); } catch { /* noop */ }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => ({
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: lines.reduce((sum, line) => sum + (line.product.price.amount ?? 0) * line.quantity, 0),
    add(product, quantity = 1) {
      setLines((current) => {
        const found = current.find((line) => line.product.slug === product.slug);
        if (!found) return [...current, { product, quantity: Math.min(quantity, product.stock) }];
        return current.map((line) => line.product.slug === product.slug
          ? { ...line, quantity: Math.min(line.quantity + quantity, product.stock) }
          : line);
      });
    },
    update(slug, quantity) {
      setLines((current) => current
        .map((line) => line.product.slug === slug
          ? { ...line, quantity: Math.max(0, Math.min(quantity, line.product.stock)) }
          : line)
        .filter((line) => line.quantity > 0));
    },
    remove(slug) { setLines((current) => current.filter((line) => line.product.slug !== slug)); },
    clear() { setLines([]); },
  }), [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
