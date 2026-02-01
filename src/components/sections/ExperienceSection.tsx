"use client";

import { experiences } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <SectionHeading eyebrow="Journey" title="Work Experience" />

      <div className="relative mx-auto max-w-[1200px] pl-6">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#43B1FF]/40 to-transparent" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
           <motion.div
           key={exp.role}
           initial={{ opacity: 0, x: -30, scale: 0.98 }}
           whileInView={{
             opacity: 1,
             x: 0,
             scale: 1,
             transition: {
               duration: 0.5,
               ease: "easeOut",
               delay: index * 0.08,
             }
           }}
           viewport={{ once: true, margin: "-100px" }}
           whileHover={{ y: -8 }}
           className={`
             group relative rounded-2xl
             bg-white/6
             border border-white/10
             shadow-[0_4px_30px_rgba(0,0,0,0.1)]
             backdrop-blur-[5px]
             p-6
             overflow-hidden
             transition-all duration-500
             hover:bg-white/10
             hover:border-white/10
             hover:shadow-2xl
           `}
         >
              {/* ✨ Blue-to-teal gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#43B1FF]/5 via-[#6CFF7B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Timeline dot */}
                <span className="absolute -left-8 top-6 block h-4 w-4 rounded-full border border-white/40 bg-[#43B1FF] shadow-[0_0_25px_rgba(67,177,255,0.5)]" />

                <p className="text-xs uppercase tracking-[0.4em] text-[#43B1FF]/80 font-medium">
                  {exp.period}
                </p>
                <h3 className="mt-2 text-xl font-bold uppercase tracking-[0.2em] text-white">
                  {exp.role}
                </h3>
                <p className="text-sm uppercase tracking-[0.25em] text-white/70 mt-1">
                  {exp.company}
                </p>

                <ul className="mt-4 space-y-2.5 text-white/80">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-1.5 h-[3px] w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-[#43B1FF] to-transparent" />
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}