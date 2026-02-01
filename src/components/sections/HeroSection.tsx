"use client";

import { heroContent } from "@/data/content";
import { MagneticButton } from "../ui/MagneticButton";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import { ArrowUpRight, Download } from "lucide-react";
import NeonBorder  from "./NeonBorder";
import logo from "@/../public/projectImages/logo.png";
import Image from "next/image";
function useTypewriter(words: string[], speed = 150) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed]);

  return text;
}
// Define fixed positions around the edges
const iconPositions = [
  { x: "30%", y: "15%" },   // top-left
  { x: "70%", y: "10%" },  // top-right
  { x: "10%", y: "20%" },  // left-mid
  { x: "80%", y: "20%" },  // right-mid
  { x: "5%", y: "60%" },   // left-bottom
  { x: "95%", y: "70%" },  // right-bottom
  { x: "30%", y: "90%" },  // bottom-left
  { x: "80%", y: "90%" },  // bottom-right
  { x: "60%", y: "90%" },  // bottom-right
  { x: "10%", y: "90%" },   // left-bottom
  { x: "90%", y: "45%" },  // right-mid
];

export function HeroSection() {
  const letters = heroContent.title.split("");
  const typedRole = useTypewriter([
    "Node.js ",
    "React.Js",
    "Next.Js",
    "MongoDB",
    "Zustand",
    "Redux TK",


  ]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // Merge existing skills + add GitHub + JavaScript if missing
  const allIcons = useMemo(() => {
    const baseIcons = heroContent.skills.map(s => ({ name: s.name, icon: s.icon }));
    const additional = [
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
      { name: "redux", icon: "https://skillicons.dev/icons?i=redux" },
    ];

    // Avoid duplicates by name
    const names = new Set(baseIcons.map(i => i.name));
    const extra = additional.filter(i => !names.has(i.name));
    return [...baseIcons, ...extra].slice(0, iconPositions.length); // match position count
  }, []);

  return (
    <section
      id="home"
      className="relative hero-section overflow-hidden px-6 pb-24 pt-32 sm:pt-40 w-full"
    >

      <div className="relative pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,163,255,0.2),_transparent_70%)]" />
 <div className="absolute inset-0 bg-[linear-gradient(rgba(248, 245, 245, 1)_1px,transparent_1px),linear-gradient(90deg,rgba(248, 245, 245, 1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      {/* Corner Floating Icons – Static positions, subtle float */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {allIcons.map((skill, i) => {
            const pos = iconPositions[i] || iconPositions[i % iconPositions.length];
            return (
              <motion.div
                key={`${skill.name}-${i}`}
                className="absolute  flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)", // center on position
                }}
                animate={{
                  y: [0, -8, 0, 8, 0],
                  scale: [1, 1.05, 1, 0.95, 1],
                  opacity: [0.7, 0.9, 0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 6 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-6 h-6 opacity-70"
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
<NeonBorder color="#45B2FF" bgColor="#061E31">
  <span className="px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#45B2FF]">
    {heroContent.greeting}
  </span>
</NeonBorder>
        {/* <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.3em] text-white sm:text-6xl">
          {"MUHAMMAD AFNAN"}
        </h1> */}
        <p className="mt-3 sm:mt-4 text-4xl sm:text-6xl font-extrabold uppercase text-white ">
          {"MUHAMMAD AFNAN"}
        </p>
        <div className="flex item-center justify-center w-full">
        <p className="hero-role mt-3 sm:mt-4 font-bold text-xl sm:text-3xl  uppercase  text-[#FFBE53]">
          {heroContent.role}{":"}{" "}
        </p>
        <span className="hero-role mt-3 sm:mt-4 pl-3 font-bold text-xl sm:text-3xl  uppercase  text-[#6CFF7B]">  {typedRole}
        </span>
        </div>

        <p className="hero-description mx-auto mt-2 sm:mt-4 max-w-3xl text-lg text-[#d0d0d0]">
          {heroContent.description}
        </p>
        {heroContent.secondary && (
          <p className="hero-description mx-auto mt-3 max-w-3xl text-base text-white/70">
            {heroContent.secondary}
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={heroContent.ctas[0].href} className="hero-cta rounded-lg">
            <ArrowUpRight className="h-4 w-4" />
            {heroContent.ctas[0].label}
          </MagneticButton>
          <MagneticButton
            href={heroContent.ctas[1].href}
            variant="outline"
            className="hero-cta text-white rounded-lg"
          >
            <Download className="h-4 w-4" />
            {heroContent.ctas[1].label}
          </MagneticButton>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}