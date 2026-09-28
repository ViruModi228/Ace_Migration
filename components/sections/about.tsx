"use client";

import { motion, type Variants } from "framer-motion";
import { aboutParagraphs, services } from "@/lib/site-config";
import { serviceIcons } from "@/lib/icons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Who We Are
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            {aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-center text-sm font-medium tracking-wide text-gold-ink mb-6">
            Our Services
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <motion.div
                  key={service.slug}
                  variants={item}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/10"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gold/10 text-gold-ink transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {service.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
