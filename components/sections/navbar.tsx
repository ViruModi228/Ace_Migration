"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/lib/site-config";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Over the hero, the bar is transparent and needs light text; once
  // scrolled (or the mobile menu is open, which shows a solid white panel
  // below it) it switches to a solid light background with dark text.
  const opaque = scrolled || menuOpen;
  const showLightText = !opaque;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          opaque
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#" aria-label={`${siteConfig.name} home`} className="shrink-0">
            <Logo dark={showLightText} className="h-11 md:h-14" />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors hover:text-gold-ink",
                      isActive
                        ? "text-gold-ink"
                        : showLightText
                          ? "text-white/90"
                          : "text-foreground/80"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gold rounded-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                Book an appointment
              </a>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "lg:hidden inline-flex items-center justify-center size-11 rounded-md transition-colors",
              showLightText ? "text-white" : "text-foreground"
            )}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </header>

      {/* Rendered as a sibling of <header>, not a child — nesting this fixed
          full-screen panel inside a header that can have backdrop-blur
          applied would make the header's box the panel's containing block
          (backdrop-filter creates one, like `transform`/`filter` do),
          collapsing it to the header's own height instead of the viewport. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden fixed inset-0 top-16 md:top-20 bg-background z-40"
          >
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
              }}
              className="flex flex-col items-center justify-center gap-8 h-full"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    closed: { opacity: 0, y: 16 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-heading text-foreground hover:text-gold-ink transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  closed: { opacity: 0, y: 16 },
                  open: { opacity: 1, y: 0 },
                }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 mt-4"
                >
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book an appointment
                  </a>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
