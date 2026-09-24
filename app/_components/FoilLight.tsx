"use client";

import { useEffect } from "react";

/**
 * Moves the foil highlight (--sx) with the pointer, or with scroll on touch
 * screens, so every stamped surface catches the same light.
 */
export function FoilLight() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const fine = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    let target = 38;
    let current = 38;

    const tick = () => {
      current += (target - current) * 0.12;
      root.style.setProperty("--sx", current.toFixed(2));
      frame = Math.abs(target - current) > 0.1 ? requestAnimationFrame(tick) : 0;
    };
    const aim = (value: number) => {
      target = value;
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onPointer = (e: PointerEvent) => aim(8 + (e.clientX / window.innerWidth) * 84);
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      // Several sweeps over the page so the light keeps moving while scrolling.
      const t = (window.scrollY / max) * 6;
      aim(10 + Math.abs(((t % 2) + 2) % 2 - 1) * 80);
    };

    if (fine) window.addEventListener("pointermove", onPointer, { passive: true });
    else window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
