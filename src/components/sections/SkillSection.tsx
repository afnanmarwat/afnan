"use client";

import { skillCategories } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../animations/ScrollReveal";
import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import NeonBorder from "./NeonBorder";

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <SectionHeading eyebrow="Capabilities" title="Technical Skills" />

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <ScrollReveal key={category.title}>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`
                group relative overflow-hidden
                rounded-2xl
                bg-white/5
                border border-white/10
                shadow-xl
                backdrop-blur-[6px]
                p-6
                transition-all duration-500
                hover:bg-white/8
                hover:border-white/20
                hover:shadow-2xl
              `}
            >
              {/* Inner luminous glow (subtle) */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#43B1FF]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#43B1FF]/10 backdrop-blur-sm">
                    <CategoryIcon iconName={category.icon} />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-widest text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <NeonBorder color="#45B2FF" bgColor="#061E31" key={skill}>
                      <span className="rounded-full px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-white/80 transition-colors duration-300 group-hover:text-white">
                        {skill}
                      </span>
                    </NeonBorder>
                  ))}
                </div>
              </div>

              {/* Outer soft glow on hover */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#43B1FF]/0 via-[#43B1FF]/20 to-[#6CFF7B]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-xl pointer-events-none" />
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function CategoryIcon({ iconName }: { iconName: keyof typeof Icons }) {
  const IconComponent = Icons[iconName] as LucideIcon | undefined;
  const LucideIcon = IconComponent || Icons.Star;
  return <LucideIcon className="h-4 w-4 text-[#43B1FF]" aria-hidden="true" />;
}