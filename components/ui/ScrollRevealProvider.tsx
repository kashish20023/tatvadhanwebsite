"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Select candidate elements to reveal on scroll
    const selectors = [
      "main > section",
      "main > div > section",
      "article",
      ".scroll-reveal",
      ".animate__animated:not(.animate-on-load)",
      "section h2",
      "section h1",
      ".look-pair-row",
      ".editorial-grid",
      ".journal-card",
      ".faq-item",
      ".media-gallery-item",
    ];

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selectors.join(", "))
    );

    if (elements.length === 0) return;

    const windowHeight = window.innerHeight;

    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            target.querySelectorAll<HTMLElement>(".animate__animated").forEach((child) => {
              child.classList.add("is-visible");
            });
            observer.unobserve(target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px", // Trigger when 40px into viewport
        threshold: 0.05,
      }
    );

    elements.forEach((el) => {
      // Don't re-observe if already revealed
      if (el.classList.contains("is-visible")) return;

      const rect = el.getBoundingClientRect();

      // If already in the upper viewport on load, reveal immediately
      if (rect.top < windowHeight * 0.95 && rect.bottom > 0) {
        el.classList.add("scroll-reveal", "is-visible");
        el.querySelectorAll<HTMLElement>(".animate__animated").forEach((child) => {
          child.classList.add("is-visible");
        });
      } else {
        // Tag as scroll-reveal and calculate stagger if in a grid/list
        el.classList.add("scroll-reveal");

        // Stagger sibling elements gently
        const siblingIndex = Array.from(
          el.parentElement?.children || []
        ).indexOf(el);
        if (siblingIndex > 0 && siblingIndex <= 5) {
          el.style.transitionDelay = `${siblingIndex * 80}ms`;
        }

        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
