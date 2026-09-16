"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonials } from "@/lib/site-config";

const columnData = testimonials.map((t) => ({
  text: t.quote,
  image: t.avatar,
  name: t.name,
  role: t.visaType,
}));

const firstColumn = columnData.slice(0, 2);
const secondColumn = columnData.slice(2, 4);
const thirdColumn = columnData.slice(4, 6);

export function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="bg-background text-white py-24 relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto text-center"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-gold-ink">
            Client stories
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold">
            What our clients say
          </h2>
          <p className="mt-3 text-sm text-white/60">
            * Placeholder testimonials — to be replaced with real, consented
            client feedback.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} paused={paused} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
            paused={paused}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
            paused={paused}
          />
        </div>
      </div>
    </section>
  );
}
