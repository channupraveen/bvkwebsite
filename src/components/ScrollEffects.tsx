"use client";

import { useEffect } from "react";

/**
 * Professional scroll animations.
 * - Elements with data-reveal fade/slide in once as they enter the screen.
 *   data-reveal="up" (default) | "left" | "right" | "zoom"; data-delay="150" (ms) for staggering.
 * - The header gets a compact, shadowed state after the page scrolls.
 * Content stays fully visible without JavaScript and for visitors who prefer reduced motion.
 */
export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>("header.site");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Header state, reading progress and parallax offset, updated once per frame.
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      header?.classList.toggle("scrolled", y > 24);
      if (header) root.style.setProperty("--hdr", `${Math.round(header.getBoundingClientRect().bottom)}px`);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--sp", String(max > 0 ? Math.min(1, y / max) : 0));
      if (!reduce) root.style.setProperty("--sy", String(y));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const stop = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
    if (reduce || !("IntersectionObserver" in window)) return stop;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    els.forEach((el) => {
      const d = el.dataset.delay;
      if (d) el.style.setProperty("--reveal-delay", `${d}ms`);
    });
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      stop();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
