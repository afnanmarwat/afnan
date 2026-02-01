"use client";

import { testimonials } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <SectionHeading eyebrow="Voices" title="Client Testimonials" />

      <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: index * 0.15 }}
            whileHover={{ y: -8 }}
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
            {/* ✨ Blue gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#43B1FF]/5 via-[#6CFF7B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              {/* Quote mark accent */}
              <div className="mb-4 flex items-start gap-3">
                <span className="text-3xl text-[#43B1FF]/40">“</span>
                <p className="text-sm leading-relaxed text-white/85">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                {/* Initials badge */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#43B1FF]/30 bg-[#43B1FF]/10 text-sm font-bold uppercase tracking-widest text-[#43B1FF]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}