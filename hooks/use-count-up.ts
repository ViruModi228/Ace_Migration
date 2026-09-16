"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      // Effect runs in response to the element entering view — this is the
      // reduced-motion end state, not a render-time side effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration, prefersReducedMotion]);

  return { ref, value };
}
