import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";

export function LegalHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" aria-label="ACE Migration home">
          <Logo className="h-11" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-gold-ink transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </header>
  );
}
