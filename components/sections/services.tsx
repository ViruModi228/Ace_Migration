"use client";

import { motion, type Variants } from "framer-motion";
import { OptimizedTiltCard } from "@/components/ui/optimized-tilt-card";
import { services } from "@/lib/site-config";
import { serviceIcons } from "@/lib/icons";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-gold-ink">
            What we do
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Migration services for every stage of your journey
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.div key={service.slug} variants={item}>
                <OptimizedTiltCard className="h-full rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-gold-ink">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {service.blurb}
                    </p>
                  </div>
                </OptimizedTiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
