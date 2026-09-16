import type { Metadata } from "next";
import { LegalHeader } from "@/components/legal-header";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing use of the ${siteConfig.name} website.`,
};

export default function TermsPage() {
  return (
    <>
      <LegalHeader />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-invert">
        <h1 className="font-heading text-3xl font-semibold text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: [DATE] — placeholder content, to be reviewed by ACE
          Migration and a qualified advisor before publishing.
        </p>

        <h2>1. Use of this website</h2>
        <p>
          This website is provided for general information about{" "}
          {siteConfig.name}&rsquo;s migration and visa services. It does not
          constitute personalised migration advice. Migration advice is only
          provided under a formal client agreement with a registered
          migration agent.
        </p>

        <h2>2. No guarantee of outcome</h2>
        <p>
          Visa and migration outcomes are determined by the Department of
          Home Affairs and relevant government bodies. {siteConfig.name}{" "}
          cannot guarantee the approval of any visa or migration application.
        </p>

        <h2>3. Intellectual property</h2>
        <p>
          All content on this website, including text, graphics, and logos,
          is the property of {siteConfig.name} unless otherwise stated, and
          may not be reproduced without permission.
        </p>

        <h2>4. Limitation of liability</h2>
        <p>
          To the extent permitted by law, {siteConfig.name} is not liable for
          any loss or damage arising from your use of this website.
        </p>

        <h2>5. Governing law</h2>
        <p>
          These terms are governed by the laws of Victoria, Australia.
        </p>

        <h2>6. Contact us</h2>
        <p>
          Questions about these terms can be sent to {siteConfig.email}.
        </p>
      </main>
      <Footer />
    </>
  );
}
