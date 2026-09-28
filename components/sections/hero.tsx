"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-card via-card to-background text-white overflow-hidden py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -30, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ type: "spring", stiffness: 170, damping: 15, mass: 0.8 }}
          className="flex flex-col items-center md:items-start gap-5"
        >
          <Logo className="h-48 sm:h-56 md:h-72" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl md:text-2xl font-medium tracking-wide text-white/80"
          >
            Your trusted migration partner
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left"
        >
          <span className="inline-flex max-w-md items-center justify-center rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-medium tracking-wide uppercase text-gold-ink mb-6 text-center leading-relaxed">
            Registered Migration Agents · Education Consultants ·
            NZ Licensed Immigration Adviser
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight text-white">
            Your future in Australia,
            <span className="text-gold"> guided with confidence.</span>
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto md:mx-0">
            ACE Migration helps students, skilled workers, families and
            businesses navigate every step of the Australian visa system —
            clearly, honestly, and on time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-gold-foreground hover:bg-gold/90 group"
            >
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book An Appointment
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <a href="#contact">
                <MessageSquare className="mr-1 size-4" />
                Send a query
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
