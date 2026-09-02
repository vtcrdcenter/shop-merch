"use client";

import { useEffect } from "react";

/**
 * Vinext's client router does not consistently change pages after a static
 * export on GitHub Pages. Keep internal links as normal document navigations
 * so every menu item and card always opens its exported HTML page.
 */
export default function StaticNavigation() {
  useEffect(() => {
    function navigate(event: MouseEvent) {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        const target = event.target;
        if (!(target instanceof Element)) return;

        const link = target.closest<HTMLAnchorElement>("a[href]");
        if (!link || link.target || link.hasAttribute("download")) return;

        const destination = new URL(link.href, window.location.href);
        const current = new URL(window.location.href);

        if (
          destination.origin !== current.origin ||
          destination.pathname === current.pathname
        ) {
          return;
        }

        event.preventDefault();
        window.location.assign(destination.href);
    }

    document.addEventListener("click", navigate, true);
    return () => document.removeEventListener("click", navigate, true);
  }, []);

  return null;
}
