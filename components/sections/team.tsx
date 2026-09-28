"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/lib/site-config";

export function Team() {
  return (
    <section id="team" className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-gold">
            The ACE Advantage
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col"
            >
              <div className="p-5 pb-4">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                {member.credentials && member.credentials.length > 0 && (
                  <div className="mt-3 flex flex-nowrap gap-2">
                    {member.credentials.map((credential) => (
                      <span
                        key={credential}
                        className="whitespace-nowrap rounded-full bg-gold text-gold-foreground text-xs font-semibold px-3 py-1"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={member.photo}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-5">
                <p className="italic font-bold text-foreground leading-snug">
                  {member.tagline[0]}
                </p>
                <p className="mt-1 italic font-bold text-gold-ink leading-snug">
                  {member.tagline[1]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
