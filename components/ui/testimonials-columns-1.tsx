"use client";
import React from "react";

const SCROLL_KEYFRAMES = `
@keyframes ace-testimonials-scroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
`;

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
  /** Freezes the scroll in place — WCAG requires auto-moving content to be
      pausable, and toggling framer-motion's `animate` prop on an
      already-running `repeat: Infinity` tween does not reliably stop it
      mid-flight, so this drives a native CSS animation instead. */
  paused?: boolean;
}) => {
  return (
    <div className={props.className}>
      <style dangerouslySetInnerHTML={{ __html: SCROLL_KEYFRAMES }} />
      <div
        className="flex flex-col gap-6 pb-6 bg-background"
        style={{
          animationName: "ace-testimonials-scroll",
          animationDuration: `${props.duration || 10}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: props.paused ? "paused" : "running",
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-10 rounded-3xl border border-border bg-card shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={i}
                >
                  <div className="text-sm text-foreground leading-relaxed">{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-foreground">
                        {name}
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight text-foreground">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
};
