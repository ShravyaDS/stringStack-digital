"use client";

import React, { useEffect } from "react";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".scroll-reveal, .scroll-stagger > *").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("revealed");

            // If it's a staggered container, stagger the children
            if (target.classList.contains("scroll-stagger")) {
              const children = target.children;
              Array.from(children).forEach((child, idx) => {
                const childEl = child as HTMLElement;
                childEl.style.transitionDelay = `${idx * 70}ms`;
                childEl.classList.add("revealed");
              });
            }

            obs.unobserve(target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe all targets
    const elements = document.querySelectorAll(".scroll-reveal, .scroll-stagger");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
