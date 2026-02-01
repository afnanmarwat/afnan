"use client";

import { ScrollReveal } from "../animations/ScrollReveal";
import { stats } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 w-full">
      <SectionHeading eyebrow="Introduction" title="About Me" />

      <div className="
        mx-auto w-full max-w-[1200px] rounded-[32px]
        border border-white/10
        bg-gradient-to-br from-[#020012]/60 to-[#171a34]/80
        p-8 backdrop-blur-xl lg:p-12
        shadow-2xl
      ">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* Bio Content */}
          <div className="lg:w-1/2">
            <ScrollReveal delay={0.1}>
              <p className="mt-0 text-white/80 leading-relaxed text-lg">
                I’m Muhammad Afnan, a MERN Stack Developer with 2+ years of experience building
                scalable, high-performance applications using React.js, Next.js, Node.js,
                Express, and MongoDB. I love turning ideas into functional, elegant, and
                maintainable products.
              </p>

              <p className="mt-5 text-white/80 leading-relaxed text-lg">
                I’ve worked across both frontend and backend — from crafting smooth, responsive
                UIs to designing secure APIs, authentication systems, dashboards, automation
                tools, and complete booking engines. I enjoy solving real problems with clean
                architecture, reusable components, and modern development practices.
              </p>
            </ScrollReveal>
          </div>

          {/* Stats Cards */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <ScrollReveal
                  key={stat.label}
                  className={`
                    group relative overflow-hidden
                    rounded-2xl
                    bg-white/6
                    border border-white/10
                    shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                    backdrop-blur-[2.7px]
                    p-6
                    transition-all duration-500
                    hover:bg-white/8
                    hover:border-white/10
                    hover:shadow-2xl
                  `}
                >
                  {/* Subtle inner glow on hover */}
                     <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#43B1FF]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6CFF7B]">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}