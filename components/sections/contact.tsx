"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-14"
        >
          <span className="text-sm font-medium tracking-wide uppercase text-gold-ink">
            Get in touch
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Let&rsquo;s talk about your visa options
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-10"
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="rounded-2xl bg-card text-white p-6 md:p-8">
              <h3 className="font-heading text-xl font-semibold">
                Prefer to talk?
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Book a free initial consultation with one of our registered
                migration agents.
              </p>
              <Button
                asChild
                className="mt-5 w-full bg-gold text-gold-foreground hover:bg-gold/90 group"
              >
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book an appointment
                  <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <ul className="mt-6 space-y-3 text-sm text-white/85">
                <li className="flex items-center gap-3">
                  <Phone className="size-4 text-gold-ink shrink-0" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 text-gold-ink shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="size-4 text-gold-ink shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="size-4 text-gold-ink shrink-0 mt-0.5" />
                  <div>
                    {siteConfig.hours.map((h) => (
                      <div key={h.days}>
                        <span className="text-white/60">{h.days}: </span>
                        {h.time}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64 lg:flex-1">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title="ACE Migration office location"
                loading="lazy"
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
