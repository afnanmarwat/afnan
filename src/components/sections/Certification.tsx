// components/sections/CertificationsSection.tsx
"use client";

import { certifications } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../animations/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 py-24">
      <SectionHeading eyebrow="Credentials" title="Certifications" />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <ScrollReveal key={cert.id}>
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`
                group relative overflow-hidden
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
              {/* ✨ Blue-to-teal gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#45B2FF]/5 via-[#6CFF7B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Optional Certificate Image */}
              {cert.image && (
                <div className="mb-4 flex h-24 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/6">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    width={120}
                    height={60}
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-1 text-sm text-[#45B2FF]">{cert.issuer}</p>
                <p className="mt-2 text-xs text-white/60">{cert.date}</p>

                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-medium text-[#45B2FF] underline-offset-2 transition-all hover:text-[#6CFF7B] hover:underline"
                >
                  View Credential →
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}