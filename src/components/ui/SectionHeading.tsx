"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
      className={clsx(
        "mx-auto mb-8 flex flex-col items-center text-center text-balance",
        className
      )}
    >
      {eyebrow && (
        <span className="text-[0.75rem] uppercase tracking-[0.4em] text-[#45b2ff]">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </motion.div>
  );
}

