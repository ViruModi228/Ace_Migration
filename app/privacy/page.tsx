import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal-header";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-invert">
        <h1 className="font-heading text-3xl font-semibold text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: [DATE] — placeholder content, to be reviewed by ACE
          Migration and a qualified advisor before publishing.
        </p>

        <h2>1. Introduction</h2>
        <p>
          {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;) respects your privacy and is committed to
          protecting your personal information in accordance with the
          Australian Privacy Principles under the Privacy Act 1988 (Cth).
        </p>

        <h2>2. Information we collect</h2>
        <p>
          We may collect your name, email address, phone number, and details
          you provide about your migration or visa enquiry when you submit a
          form on this website, book an appointment, or otherwise contact us.
        </p>

        <h2>3. How we use your information</h2>
        <p>
          We use your information to respond to your enquiry, provide
          migration advice and services, and comply with our obligations as
          a registered migration agent under the Migration Act 1958 (Cth).
        </p>

        <h2>4. Sharing your information</h2>
        <p>
          We do not sell your personal information. We may share it with the
          Department of Home Affairs, education providers, or other bodies
          where required to process your visa application, or where required
          by law.
        </p>

        <h2>5. Data security</h2>
        <p>
          We take reasonable steps to protect your personal information from
          misuse, loss, and unauthorised access.
        </p>

        <h2>6. Your rights</h2>
        <p>
          You may request access to, or correction of, your personal
          information by contacting us at {siteConfig.email}.
        </p>

        <h2>7. Contact us</h2>
        <p>
          If you have questions about this policy, contact us at{" "}
          {siteConfig.email} or {siteConfig.phoneDisplay}.
        </p>
      </main>
      <Footer />
    </>
  );
}
