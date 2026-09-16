"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface FooterLink {
  label: string;
  href: string;
  badge?: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: FC<{ className?: string }>;
  href: string;
  label: string;
}

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  description: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
  copyright?: string;
  /** Rendered as a small line under the columns, above the bottom bar —
      used here for the MARA/OMARA registration note. */
  note?: ReactNode;
  legalLinks?: FooterLink[];
}

export const Footer: FC<FooterProps> = ({
  logoSrc,
  logoAlt,
  description,
  columns,
  socialLinks,
  copyright = `© ${new Date().getFullYear()}. All Rights Reserved.`,
  note,
  legalLinks = [],
}) => {
  return (
    <footer className="w-full bg-card border-t border-border">
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-8">
          {/* Logo + Description + Social */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link href="/" aria-label={logoAlt}>
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={866}
                height={1061}
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs">{description}</p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-background/60 text-muted-foreground hover:bg-gold hover:text-gold-foreground transition-colors"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-10 md:gap-8 md:w-2/3">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2.5 min-w-[140px]">
                <h4 className="text-foreground font-heading font-semibold tracking-wide text-sm uppercase">
                  {col.title}
                </h4>
                {col.links.map(({ label, href, badge }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-muted-foreground hover:text-gold-ink transition-colors flex items-center gap-1.5 text-sm"
                  >
                    {label}
                    {badge && (
                      <span className="bg-gold text-gold-foreground text-[10px] font-medium px-1.5 py-0.5 rounded">
                        {badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {note && <div className="mt-10 text-xs text-muted-foreground max-w-md">{note}</div>}

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>{copyright}</p>
          {legalLinks.length > 0 && (
            <div className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="hover:text-gold-ink hover:underline transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
