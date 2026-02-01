"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  variant?: "filled" | "outline";
  className?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "filled",
  className,
}: Props) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const baseClasses = clsx(
    "relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition-all duration-300",
    "backdrop-blur-xl",
    className
  );

  const filledClasses = clsx(
    baseClasses,
    "bg-[#43B1FF] text-slate-950 border border-[#43B1FF]/30",
    "shadow-[0_10px_30px_rgba(67,177,255,0.3)]",
    "hover:bg-[#5ab8ff] hover:border-[#43B1FF]/50"
  );

  const outlineClasses = clsx(
    baseClasses,
    "bg-transparent text-[#43B1FF] border border-[#43B1FF]/50",
    "hover:bg-[#43B1FF]/10 hover:border-[#43B1FF]/70"
  );

  const styles = variant === "filled" ? filledClasses : outlineClasses;

  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.3);
    y.set(relY * 0.3);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  // If `href` is provided → render as <a>
  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        <motion.button
          ref={ref}
          style={{ x: springX, y: springY }}
          className={styles}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
        >
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
      </a>
    );
  }

  // Otherwise, render as <button> with onClick
  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      className={styles}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}