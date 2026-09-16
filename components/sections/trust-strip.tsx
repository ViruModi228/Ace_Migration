"use client";

import { stats } from "@/lib/site-config";
import { useCountUp } from "@/hooks/use-count-up";

function StatItem({ label, value, suffix }: (typeof stats)[number]) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl md:text-5xl font-semibold text-foreground">
        {current}
        <span className="text-gold-ink">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section aria-label="ACE Migration in numbers" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground pb-6 px-4">
        * Placeholder figures — replace with ACE Migration&rsquo;s verified numbers.
      </p>
    </section>
  );
}
