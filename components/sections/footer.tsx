import Link from "next/link";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons/social";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-card text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold-ink transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/privacy" className="hover:text-gold-ink transition-colors">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gold-ink transition-colors">
                Terms of service
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/50">{siteConfig.maraNumber}</p>
          <p className="text-xs text-white/40">
            Registered with the Office of the Migration Agents Registration
            Authority (OMARA).
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold mb-4">Follow us</h3>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ACE Migration on Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="ACE Migration on Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="ACE Migration on LinkedIn"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
