import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center bg-background text-white">
      <Logo dark className="h-20" />
      <Compass className="size-12 text-gold-ink" aria-hidden="true" />
      <div>
        <h1 className="font-heading text-4xl font-semibold">404</h1>
        <p className="mt-2 text-white/70 max-w-md">
          This page seems to have taken a wrong turn. Let&rsquo;s get you back
          on the right path.
        </p>
      </div>
      <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
