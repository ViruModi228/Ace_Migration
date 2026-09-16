"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Per-character 3D flip-up reveal, staggered — the same technique the
// design-intelligence database recommends for short hero headlines
// (GSAP SplitText: opacity + y + rotateX, expo.out, ~15ms stagger),
// reimplemented with framer-motion so it stays on the one animation
// library already used across the site instead of adding GSAP.
// Real text stays in the DOM via aria-label; character spans are
// aria-hidden so screen readers get the word once, not letter-by-letter.

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.028, delayChildren: 0.05 },
  },
};

const char: Variants = {
  hidden: { opacity: 0, y: 28, rotateX: -60 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, ease: EXPO_OUT },
  },
};

export function SplitTextHeading({
  text,
  className,
  goldWords = [],
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  /** Words (case-insensitive, exact match) rendered in the gold accent color. */
  goldWords?: string[];
  as?: "h1" | "h2" | "p";
}) {
  const words = text.split(" ");

  return (
    <Tag aria-label={text} className={cn("[perspective:800px]", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        aria-hidden="true"
        className="inline"
      >
        {words.map((word, wi) => {
          const isGold = goldWords.some(
            (g) => g.toLowerCase() === word.toLowerCase()
          );
          return (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => (
                <motion.span
                  key={ci}
                  variants={char}
                  className={cn(
                    "inline-block [transform-style:preserve-3d]",
                    isGold ? "text-gold" : undefined
                  )}
                >
                  {ch}
                </motion.span>
              ))}
              {wi < words.length - 1 && " "}
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
