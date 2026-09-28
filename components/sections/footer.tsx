"use client";

import { Footer as FooterUi } from "@/components/ui/footer-1";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons/social";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <FooterUi
      logoAlt={`${siteConfig.name} home`}
      description={siteConfig.description}
      copyright={`© ${new Date().getFullYear()} ${siteConfig.companyLegalName}. All rights reserved.`}
      note={
        <div className="space-y-1.5">
          <p>
            {siteConfig.maraNumber} — Registered with the Office of the
            Migration Agents Registration Authority (OMARA).{" "}
            <a
              href={siteConfig.omaraRegisterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-ink underline underline-offset-2"
            >
              View our OMARA registration
            </a>
            .
          </p>
          <p>
            {siteConfig.companyLegalName} — ABN: {siteConfig.abn}
          </p>
          <p>
            <a
              href={siteConfig.consumerGuideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-ink underline underline-offset-2"
            >
              OMARA Consumer Guide
            </a>{" "}
            ·{" "}
            <a
              href={siteConfig.codeOfConductUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-ink underline underline-offset-2"
            >
              Code of Conduct
            </a>
          </p>
        </div>
      }
      legalLinks={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ]}
      socialLinks={[
        { icon: InstagramIcon, href: siteConfig.instagramUrl, label: "Instagram" },
        { icon: FacebookIcon, href: "#", label: "Facebook" },
        { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
      ]}
      columns={[
        {
          title: "Quick links",
          links: navLinks.map((link) => ({ label: link.label, href: link.href })),
        },
        {
          title: "Get in touch",
          links: [
            { label: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
            { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { label: siteConfig.address, href: "#contact" },
          ],
        },
      ]}
    />
  );
}
