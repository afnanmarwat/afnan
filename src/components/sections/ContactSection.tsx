"use client";

import { contactInfo } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { MagneticButton } from "../ui/MagneticButton";
import { LucideIcon } from "lucide-react"; // ✅ Correct type
import * as Icons from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <SectionHeading eyebrow="Collaborate" title="Get In Touch" />

      <div className="
        mx-auto max-w-6xl w-full
        rounded-[32px]
        border border-white/10
        bg-gradient-to-br from-[#020012]/60 to-[#171a34]/80
        p-8 backdrop-blur-xl
        shadow-2xl
        lg:p-12
      ">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Copy + Button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-lg text-white/80 leading-relaxed">
              Have a project in mind or want to collaborate on a premium web experience?
              I’m open to freelance opportunities, full-time roles, and exciting tech challenges.
            </p>
            <p className="mt-3 mb-7 text-white/60">
              Let’s build something remarkable together.
            </p>

            <MagneticButton
              variant="filled"
              href="mailto:afnanmwt975@gmail.com"
              className="mt-8 px-8 py-3 text-sm"
            >
              Send Message
            </MagneticButton>
          </div>

          {/* Right: Contact Cards — NOW WITH GLASS EFFECT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group block rounded-2xl
                  bg-white/6
                  border border-white/10
                  shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                  backdrop-blur-[5px]
                  p-6
                  transition-all duration-500
                  hover:bg-white/10
                  hover:border-white/10
                  hover:shadow-2xl
                  hover:-translate-y-1
                  relative overflow-hidden
                `}
              >
                {/* ✨ Blue-to-teal gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#43B1FF]/5 via-[#6CFF7B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="
                    mt-0.5 p-3 rounded-xl
                    bg-[#43B1FF]/10
                    border border-[#43B1FF]/20
                    text-[#43B1FF]
                    group-hover:scale-110 transition-transform duration-300
                  ">
                    <DynamicIcon name={item.icon} className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-[#43B1FF]/70 group-hover:text-[#43B1FF] transition-colors">
                      {item.label}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ✅ Type-safe dynamic icon component
const DynamicIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const iconName = name
    .split(/[-_\s]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const LucideComponent = ((Icons as unknown) as Record<string, LucideIcon>)[
    iconName
  ] || (Icons as any).Mail;

  return <LucideComponent className={className} />;
};