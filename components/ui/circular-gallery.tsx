"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  id: string;
  name: string;
  role: string;
  maraNumber?: string;
  photo: string;
  alt?: string;
};

interface CircularGalleryProps {
  items: GalleryItem[];
  radius?: number;
  className?: string;
}

function normalize(deg: number) {
  let d = deg % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

export function CircularGallery({
  items,
  radius = 260,
  className,
}: CircularGalleryProps) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const oscillate = useMotionValue(0);
  const [effectiveRadius, setEffectiveRadius] = React.useState(radius);

  React.useEffect(() => {
    const update = () => {
      const width = sectionRef.current?.clientWidth ?? window.innerWidth;
      setEffectiveRadius(Math.min(radius, width * 0.22));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [radius]);

  useAnimationFrame((t) => {
    oscillate.set(Math.sin(t / 2200) * 18);
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-12, 12]);

  const totalRotate = useTransform([oscillate, scrollRotate], (values) => {
    const [a, b] = values as number[];
    return a + b;
  });

  const totalArc = Math.min(360, items.length * 45);
  const angleStep = items.length > 1 ? totalArc / (items.length - 1) : 0;
  const startAngle = -totalArc / 2;

  return (
    <div ref={sectionRef} className={cn("relative w-full", className)}>
      <div
        className="relative mx-auto h-[360px] sm:h-[420px] md:h-[460px]"
        style={{ perspective: "1600px" }}
      >
        {items.map((item, i) => {
          const angle = items.length > 1 ? startAngle + i * angleStep : 0;
          return (
            <GalleryCard
              key={item.id}
              item={item}
              angle={angle}
              radius={effectiveRadius}
              totalRotate={totalRotate}
            />
          );
        })}
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  angle,
  radius,
  totalRotate,
}: {
  item: GalleryItem;
  angle: number;
  radius: number;
  totalRotate: MotionValue<number>;
}) {
  const transform = useTransform(
    totalRotate,
    (r) => `translate(-50%, -50%) rotateY(${angle + r}deg) translateZ(${radius}px)`
  );
  const highlight = useTransform(totalRotate, (r) => {
    const dist = Math.abs(normalize(angle + r));
    return Math.max(0, 1 - dist / 45);
  });
  const scale = useTransform(highlight, [0, 1], [0.82, 1]);
  const opacity = useTransform(highlight, [0, 1], [0.45, 1]);
  const zIndex = useTransform(highlight, (h) => Math.round(h * 10));

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[150px] sm:w-[220px] md:w-[260px]"
      style={{ transform, backfaceVisibility: "hidden" }}
    >
      <motion.div style={{ scale, opacity, zIndex }} className="relative">
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <Image
            src={item.photo}
            alt={item.alt ?? `Portrait of ${item.name}`}
            fill
            sizes="(max-width: 640px) 150px, (max-width: 768px) 220px, 260px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4 text-white">
            <p className="font-heading text-lg font-semibold">{item.name}</p>
            <p className="text-sm text-white/80">{item.role}</p>
            {item.maraNumber && (
              <span className="mt-2 inline-flex items-center rounded-full bg-gold/90 px-2.5 py-0.5 text-xs font-semibold text-gold-foreground">
                {item.maraNumber}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
