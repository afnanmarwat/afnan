"use client";

import { services } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react"; // ✅ Correct type
import * as Icons from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24">
      <SectionHeading eyebrow="What I Do" title="Services I Offer" />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: index * 0.15 }}
            whileHover={{ y: -12 }}
            className={`
              group relative h-full overflow-hidden
              rounded-2xl
              bg-white/6
              border border-white/10
              shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              backdrop-blur-[5px]
              p-6
              transition-all duration-500
              hover:bg-white/10
              hover:border-white/10
              hover:shadow-2xl
            `}
          >
            {/* Subtle blue gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#43B1FF]/5 to-[#6CFF7B]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

            <div className="relative z-10">
              <DynamicIcon
                name={service.icon}
                className="mb-5 h-10 w-10 rounded-xl border border-white/10 bg-white/5 p-2.5 text-[#43B1FF]"
              />
              <h3 className="text-base font-bold uppercase tracking-widest text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-white/70">
                    <span className="mt-1.5 h-[2px] w-4 flex-shrink-0 bg-gradient-to-r from-[#43B1FF] to-transparent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ✅ Type-safe dynamic icon
const DynamicIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  // Convert "monitor" → "Monitor", "server" → "Server", etc.
  const iconName = name
    .split(/[-_\s]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const LucideComponent = ((Icons as unknown) as Record<string, LucideIcon>)[
    iconName
  ] || (Icons as any).Grid;

  return <LucideComponent className={className} />;
};