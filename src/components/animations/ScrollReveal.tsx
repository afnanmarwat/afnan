"use client";

import { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

if (typeof window !== "undefined") {
  const gsapCore: any = (gsap as any).core;
  const hasScrollTrigger =
    gsapCore && typeof gsapCore.globals === "function" && gsapCore.globals().ScrollTrigger;
  if (!hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={clsx("will-change-transform", className)}>
      {children}
    </div>
  );
}

