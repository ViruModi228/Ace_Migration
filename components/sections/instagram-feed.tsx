import { InstagramIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import { InstagramGrid } from "@/components/instagram-grid";
import { getInstagramFeed } from "@/lib/instagram";
import { siteConfig } from "@/lib/site-config";

export async function InstagramFeed() {
  const feed = await getInstagramFeed();

  return (
    <section id="instagram" className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-sm font-medium tracking-wide uppercase text-gold-ink">
            Follow along
          </span>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl font-semibold text-foreground">
            Latest from Instagram
          </h2>
          {feed.fallback && (
            <p className="mt-3 text-xs text-muted-foreground">
              Showing placeholder posts — connect INSTAGRAM_ACCESS_TOKEN to
              display the real feed (see README).
            </p>
          )}
        </div>

        <InstagramGrid items={feed.items} />

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="border-gold text-foreground hover:bg-gold hover:text-gold-foreground"
          >
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="mr-2 size-4" />
              Follow {siteConfig.instagramHandle}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
