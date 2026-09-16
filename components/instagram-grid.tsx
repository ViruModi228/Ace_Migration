"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { InstagramMedia } from "@/lib/instagram";

function InstagramTile({ item }: { item: InstagramMedia }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const isVideo = item.media_type === "VIDEO";
  const poster = item.thumbnail_url ?? item.media_url;

  return (
    <motion.a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => {
        setHovering(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHovering(false);
        videoRef.current?.pause();
      }}
      className="relative group aspect-square overflow-hidden rounded-xl bg-muted block"
    >
      {isVideo ? (
        <video
          ref={videoRef}
          src={item.media_url}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.media_url}
          alt={item.caption?.slice(0, 120) ?? "ACE Migration Instagram post"}
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />

      {isVideo && !hovering && (
        <span className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full bg-black/60 text-white">
          <Play className="size-4 fill-white" />
        </span>
      )}
    </motion.a>
  );
}

export function InstagramGrid({ items }: { items: InstagramMedia[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
      {items.map((item) => (
        <InstagramTile key={item.id} item={item} />
      ))}
    </div>
  );
}
