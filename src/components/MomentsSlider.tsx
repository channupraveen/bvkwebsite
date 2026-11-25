"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Moment = { src: string; width: number; height: number; caption: string; detail?: string };

/**
 * Photo slider: crossfades between photos, auto-advances every 6 seconds
 * (paused while hovered, focused or when the visitor prefers reduced motion),
 * with arrows, dots, keyboard arrows and swipe on phones.
 */
export function MomentsSlider({ items }: { items: Moment[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = items.length;

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => go(index + 1), 6000);
    return () => clearTimeout(id);
  }, [index, paused, count, go]);

  if (!count) return null;

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Moments from the Chambers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
      data-reveal="up"
    >
      <div className="slides">
        {items.map((m, i) => (
          <figure
            key={m.src}
            className={`slide${i === index ? " is-active" : ""}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <div className="slide-frame">
              <Image className="slide-bg" src={m.src} alt="" width={m.width} height={m.height} sizes="400px" aria-hidden="true" />
              <Image
                className="slide-img"
                src={m.src}
                alt={`${m.caption}${m.detail ? `, ${m.detail}` : ""}`}
                width={m.width}
                height={m.height}
                sizes="(max-width: 980px) 100vw, 860px"
                priority={i === 0}
              />
            </div>
            <figcaption>
              <b>{m.caption}</b>
              {m.detail && <span className="role">{m.detail}</span>}
            </figcaption>
          </figure>
        ))}
      </div>

      {count > 1 && (
        <div className="slider-controls">
          <button type="button" className="arrow" aria-label="Previous photo" onClick={() => go(index - 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="dots">
            {items.map((m, i) => (
              <button
                key={m.src}
                type="button"
                className={`dot${i === index ? " is-active" : ""}`}
                aria-label={`Show photo ${i + 1}: ${m.caption}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button type="button" className="arrow" aria-label="Next photo" onClick={() => go(index + 1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
