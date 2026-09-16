"use client";

import React, { useRef, useState } from "react";
import { useReducedMotion, useInView } from "framer-motion";

const SPIN_KEYFRAMES = `
@keyframes ace-slider-spin-left { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
@keyframes ace-slider-spin-right { from { transform: rotateY(360deg); } to { transform: rotateY(0deg); } }
`;

const DEFAULT_DATA = [
  "https://images.unsplash.com/photo-1540968221243-29f5d70540bf?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1596135187959-562c650d98bc?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1628944682084-831f35256163?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1590013330451-3946e83e0392?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1590421959604-741d0eec0a2e?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1572613000712-eadc57acbecd?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1570097192570-4b49a6736f9f?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1620789550663-2b10e0080354?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1617775623669-20bff4ffaa5c?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1573824969595-a76d4365a2e6?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1633936929709-59991b5fdd72?w=800&auto=format&fit=crop&q=60",
];

interface Slider3DProps {
  /** Array of image URLs to display */
  images?: string[];
  /**
   * Rendered content per card, used instead of `images` when provided —
   * lets the ring carry more than a bare photo (e.g. a review card with
   * text). Same 3D positioning math applies to each node's wrapper.
   */
  items?: React.ReactNode[];
  /** Duration of one full 360-degree rotation (in seconds) */
  duration?: number;
  /** Width of each card. Can be px, rem, em, etc. */
  cardWidth?: string;
  /** CSS aspect ratio of the cards */
  cardAspectRatio?: string;
  /** CSS perspective value for the 3D container */
  perspective?: string;
  /** Additional classes for the outermost container */
  containerClassName?: string;
  /** Additional classes for the individual image elements */
  imageClassName?: string;
  /** Direction of the rotation */
  rotationDirection?: "left" | "right";
  /** Whether to apply a gradient fade mask on the edges */
  withMask?: boolean;
}

export default function ImageSlider3D({
  images = DEFAULT_DATA,
  items,
  duration = 32,
  cardWidth = "17.5em",
  cardAspectRatio = "7/10",
  perspective = "35em",
  containerClassName = "",
  imageClassName = "",
  rotationDirection = "left",
  withMask = true,
}: Slider3DProps) {
  const cards = items ?? images;
  const n = cards.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const prefersReducedMotion = useReducedMotion();
  // Rendered content (e.g. review text) needs to be readable, and WCAG
  // requires auto-moving content to be pausable — hover/focus pauses the
  // rotation in place rather than spinning it forever unstoppably.
  const [isPaused, setPaused] = useState(false);
  const animationDuration = prefersReducedMotion ? duration * 4 : duration;

  const maskStyles = withMask
    ? {
      WebkitMask:
        "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
      mask: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
    }
    : {};

  return (
    <div
      ref={containerRef}
      className={`grid w-full h-full min-h-[500px] overflow-hidden place-items-center ${containerClassName}`}
      style={{
        perspective: perspective,
        ...maskStyles,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* A native CSS animation (rather than a framer-motion `animate` prop
          toggle) so hover/focus can pause it via `animation-play-state`
          without any jump — toggling framer-motion's `animate` prop on an
          already-running `repeat: Infinity` tween does not reliably freeze
          it in place. */}
      <style dangerouslySetInnerHTML={{ __html: SPIN_KEYFRAMES }} />
      <div
        className="grid place-self-center pointer-events-auto will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          animationName: `ace-slider-spin-${rotationDirection}`,
          animationDuration: `${animationDuration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isInView && !isPaused ? "running" : "paused",
        }}
      >
        {cards.map((card, i) => {
          const cardStyle: React.CSSProperties = {
            width: cardWidth,
            aspectRatio: cardAspectRatio,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(-1 * (0.5 * ${cardWidth} + 0.5em) / tan(0.5 * (1turn / ${n}))))`,
          };

          if (items) {
            return (
              <div
                key={i}
                className={`col-start-1 row-start-1 overflow-hidden rounded-[1.5em] ${imageClassName}`}
                style={cardStyle}
              >
                {card}
              </div>
            );
          }

          return (
            <img
              key={i}
              src={card as string}
              alt={`Slide ${i}`}
              loading="lazy"
              decoding="async"
              className={`col-start-1 row-start-1 object-cover rounded-[1.5em] ${imageClassName}`}
              style={cardStyle}
            />
          );
        })}
      </div>
    </div>
  );
}
