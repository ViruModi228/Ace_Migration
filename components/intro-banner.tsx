"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

const tagline = "Your trusted migration partner";

const taglineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
};

const taglineWord: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function IntroBanner() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section
        aria-label={`${siteConfig.name} banner`}
        className="bg-background py-20 text-center"
      >
        <Logo className="h-32 md:h-44 mx-auto" />
        <p className="mt-6 text-lg md:text-2xl text-muted-foreground">{tagline}</p>
      </section>
    );
  }

  return (
    <section
      aria-label={`${siteConfig.name} banner`}
      className="relative bg-background py-28 md:py-40 overflow-hidden text-center"
    >
      {/* Ambient glow — slow drift, decorative only */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 size-[32rem] rounded-full bg-gold/15 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 right-1/4 size-[32rem] rounded-full bg-primary/40 blur-[120px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-4 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.4, y: -50, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 190, damping: 14, mass: 0.8 }}
        >
          <Logo className="h-32 md:h-44" />
        </motion.div>

        <motion.p
          variants={taglineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-lg md:text-2xl text-muted-foreground"
        >
          {tagline.split(" ").map((word, i) => (
            <motion.span key={i} variants={taglineWord} className="inline-block mr-[0.3em]">
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 bg-gold origin-center"
        />
      </div>
    </section>
  );
}
