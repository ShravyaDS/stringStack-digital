"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean `isVisible`.
 * When the element enters the viewport (threshold = 0.15 by default),
 * isVisible flips to true and stays true (one-shot).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // one-shot
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
