"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#landing"
      aria-label="Back to top"
      className="fixed right-5 bottom-5 z-40 inline-flex size-11 items-center justify-center border border-theme-border bg-theme-surface text-theme-text-primary shadow-sm transition-colors hover:border-theme-accent hover:text-theme-accent"
    >
      <ArrowUp size={18} />
    </a>
  );
}
