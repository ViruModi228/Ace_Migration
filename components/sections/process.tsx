"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-config";

export function Process() {
  return (
    <section id="process" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-gold-ink">
            How it works
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground">
            A clear process, from first call to final decision
          </h2>
        </motion.div>

        <div className="relative pl-5">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-5 top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex items-start gap-6 pl-4"
              >
                <span className="absolute left-0 top-0 -translate-x-1/2 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-heading font-semibold">
                  {index + 1}
                </span>
                <div className="pl-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
