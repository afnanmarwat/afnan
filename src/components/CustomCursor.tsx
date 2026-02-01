"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 12);
      cursorY.set(event.clientY - 12);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden h-6 w-6 rounded-full border border-white/70 md:block"
      style={{ translateX: springX, translateY: springY }}
    >
      <div className="h-full w-full rounded-full bg-white/20 blur-xl" />
    </motion.div>
  );
}

