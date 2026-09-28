import Image from "next/image";
import { cn } from "@/lib/utils";

// public/logo.png (and the icon-only public/logo-mark.png, cropped to just
// the "A" for tight spots like the navbar) is split into two derived layers
// — see the split script this was generated from:
//   - logo-symbol.png / logo-mark-symbol.png: the navy "A" + "ACE" wordmark
//     + tagline, rendered white via `brightness-0 invert` for contrast on
//     the site's near-black background.
//   - logo-arrow.png / logo-mark-arrow.png: just the swoosh + plane,
//     recoloured to the site's --gold token (its original alpha was too
//     faint to read as gold on dark — only looked golden blended over
//     white), kept in its true colour on top, unfiltered.
// `dark` is kept as a no-op prop for call-site compatibility.
export function Logo({
  className,
  iconOnly,
}: {
  className?: string;
  dark?: boolean;
  iconOnly?: boolean;
}) {
  const width = iconOnly ? 1025 : 1071;
  const height = iconOnly ? 1025 : 1109;

  return (
    <span className={cn("relative inline-block h-16 w-auto", className)}>
      <Image
        src={iconOnly ? "/logo-mark-symbol.png" : "/logo-symbol.png"}
        alt="ACE Migration & Visa Solutions"
        width={width}
        height={height}
        priority
        className="h-full w-auto brightness-0 invert"
      />
      <Image
        src={iconOnly ? "/logo-mark-arrow.png" : "/logo-arrow.png"}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        priority
        className="absolute inset-0 h-full w-auto"
      />
    </span>
  );
}
