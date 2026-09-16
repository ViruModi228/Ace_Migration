"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-card via-card to-background text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent" />

      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="px-4"
          >
            <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-medium tracking-wide uppercase text-gold-ink mb-6">
              Registered Migration Agents · Melbourne
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight text-white">
              Your future in Australia,
              <span className="text-gold"> guided with confidence.</span>
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl mx-auto">
              ACE Migration helps students, skilled workers, families and
              businesses navigate every step of the Australian visa system —
              clearly, honestly, and on time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                  Book an appointment
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
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1600&auto=format&fit=crop"
          alt="Princes Bridge over the Yarra River with the Melbourne CBD skyline, home of ACE Migration"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </ContainerScroll>
    </section>
  );
}
