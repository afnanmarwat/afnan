// components/modals/ProjectModal.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import NeonBorder from "./NeonBorder";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: (typeof import("@/data/content").projects)[0] | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#020012] to-[#171a34] backdrop-blur-3xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/30 p-2 text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content */}
            <div className="max-h-[80vh] overflow-y-auto p-6 lg:p-8">
              {/* Image */}
              <div className="relative mb-6 h-100 rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white">
                {project.title}
              </h2>
              <div
                className="mt-4 text-white/80 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.details }}
              />

              {/* Tech Stack */}
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-widest text-[#43B1FF]/80">
                  Tech Stack
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <NeonBorder color="#45B2FF" bgColor="#061E31" key={tech}>
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-widest text-white/70"
                    >
                      {tech}
                    </span>
                    </NeonBorder>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}