import { Navbar } from "@/components/sections/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
// Instagram feed is temporarily disabled — ACE Migration doesn't have an
// Instagram account live yet. Keep the section and its data logic intact;
// just don't render it until there's a real account to show.
// import { InstagramFeed } from "@/components/sections/instagram-feed";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Testimonials />
        {/* <InstagramFeed /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
