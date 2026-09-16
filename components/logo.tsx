import Image from "next/image";
import { cn } from "@/lib/utils";

// The only logo asset is public/logo.png (transparent bg, navy + gold ink).
// Its navy is only ~1.2:1 against the site's near-black background — nearly
// invisible at true color — so it's always rendered as a white silhouette
// via CSS filter instead. `dark` is kept as a no-op prop for call-site
// compatibility; if a proper reversed/white-ink asset is ever supplied for
// a genuinely light background, branch the `src` on it here.
export function Logo({ className }: { className?: string; dark?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt="ACE Migration & Visa Solutions"
      width={160}
      height={160}
      priority
      className={cn("h-14 w-auto brightness-0 invert", className)}
    />
  );
}