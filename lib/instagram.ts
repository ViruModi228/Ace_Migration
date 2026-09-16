import { unstable_cache } from "next/cache";
import { siteConfig } from "@/lib/site-config";

export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export type InstagramFeed = {
  items: InstagramMedia[];
  fallback: boolean;
};

const FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const POST_LIMIT = 9;

// PLACEHOLDER media — shown whenever INSTAGRAM_ACCESS_TOKEN is missing or the
// Graph API call fails, so the section still renders in dev and on first deploy.
const FALLBACK_ITEMS: InstagramMedia[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `placeholder-${i}`,
  caption: "ACE Migration — placeholder Instagram post.",
  media_type: i % 3 === 0 ? "VIDEO" : "IMAGE",
  media_url: `https://images.unsplash.com/photo-${
    [
      "1523240795612-9a054b0db644",
      "1521737604893-d14cc237f11d",
      "1517245386807-bb43f82c33c4",
      "1522202176988-66273c2fd55f",
      "1600880292203-757bb62b4baf",
      "1531482615713-2afd69097998",
    ][i]
  }?q=80&w=800&auto=format&fit=crop`,
  permalink: siteConfig.instagramUrl,
  timestamp: new Date(Date.now() - i * 86_400_000).toISOString(),
}));

async function fetchFromGraphApi(token: string): Promise<InstagramMedia[]> {
  const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=${POST_LIMIT}&access_token=${token}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Instagram API responded with ${res.status}`);
  }

  const data = await res.json();
  return (data.data ?? []) as InstagramMedia[];
}

const getCachedPosts = unstable_cache(
  async (token: string) => fetchFromGraphApi(token),
  ["instagram-feed"],
  { revalidate: 3600 }
);

export async function getInstagramFeed(): Promise<InstagramFeed> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return { items: FALLBACK_ITEMS, fallback: true };
  }

  try {
    const items = await getCachedPosts(token);
    if (items.length === 0) {
      return { items: FALLBACK_ITEMS, fallback: true };
    }
    return { items, fallback: false };
  } catch (error) {
    console.error("Failed to fetch Instagram feed:", error);
    return { items: FALLBACK_ITEMS, fallback: true };
  }
}
