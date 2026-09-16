import { Navbar } from "@/components/sections/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { IntroBanner } from "@/components/intro-banner";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <IntroBanner />
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <Team />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
