"use client";

import { motion } from "framer-motion";
import {
  CalendlyCarousel,
  type CarouselItem,
} from "@/components/ui/connected-carousel";
import { team } from "@/lib/site-config";

const items: CarouselItem[] = team.map((member) => ({
  id: member.slug,
  stat: member.role,
  quote: member.bio,
  author: member.name,
  role: member.maraNumber,
  defaultImage: member.photo,
  selectedImage: member.photo,
  alt: `Portrait of ${member.name}`,
}));

export function Team() {
  return (
    <section id="team" className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-gold-ink">
            Meet our team
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Registered migration agents you can trust
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            * Placeholder team and photos — real agent profiles and MARA
            numbers to be supplied by ACE Migration.
          </p>
        </motion.div>

        <CalendlyCarousel items={items} autoPlayInterval={6000} pauseOnHover />
      </div>
    </section>
  );
}
