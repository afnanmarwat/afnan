"use client";

import Image from "next/image";
import { projects } from "@/data/content";
import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import { MagneticButton } from "../ui/MagneticButton";
import NeonBorder from "./NeonBorder";

const PROJECTS_TO_SHOW = 4;

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const visibleProjects = showAll ? projects : projects.slice(0, PROJECTS_TO_SHOW);

  return (
    <section id="projects" className="px-6 py-24">
      <SectionHeading eyebrow="Selected work" title="Featured Projects" />

      <div className="grid gap-8 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: showAll ? index * 0.1 : 0 }}
            whileHover={{ y: -12 }}
            className={`
              group relative overflow-hidden
              rounded-2xl
              bg-white/6
              border border-white/10
              shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              backdrop-blur-[5px]
              transition-all duration-500
              hover:bg-white/8
              hover:border-white/10
              hover:shadow-2xl
            `}
          >
            {/* Blue gradient overlay on hover (subtle) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#43B1FF]/10 via-[#6CFF7B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Image */}
            <div className="relative h-80 overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                {project.title}
              </h3>
              <p className="text-sm text-white/80">{project.description}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech) => (
                  <NeonBorder color="#45B2FF" bgColor="#061E31" key={tech}>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[0.65rem] uppercase tracking-widest text-white/70">
                      {tech}
                    </span>
                  </NeonBorder>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.live && (
                  <MagneticButton
                    variant="filled"
                    href={project.live}
                    className="flex-1 min-w-[120px] px-4 py-2.5 text-xs rounded-lg justify-center"
                  >
                    Live Demo
                  </MagneticButton>
                )}
                <MagneticButton
                  variant="outline"
                  onClick={() => openModal(project)}
                  className="flex-1 min-w-[120px] px-4 py-2.5 text-xs rounded-lg justify-center"
                >
                  More Details
                </MagneticButton>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View More Button */}
      {projects.length > PROJECTS_TO_SHOW && !showAll && (
        <div className="mt-12 flex justify-center">
          <MagneticButton
            variant="outline"
            onClick={() => setShowAll(true)}
            className="px-8 py-3 text-sm rounded-lg"
          >
            View More Projects
          </MagneticButton>
        </div>
      )}

      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}