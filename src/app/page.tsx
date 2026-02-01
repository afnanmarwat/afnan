import { HeroSection } from "@/components/sections/HeroSection";

import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialSection";
import { SkillsSection } from "@/components/sections/SkillSection";
import { CertificationsSection } from "@/components/sections/Certification";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <PageTransition>
        <main className="relative mx-auto max-w-[1200px]">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ServicesSection />
          {/* <CertificationsSection/> */}
          <TestimonialsSection />
          <ContactSection />
          <footer className="px-6 pb-20 text-center text-xs uppercase tracking-[0.4em] text-white/40">
            © {new Date().getFullYear()} Muhammad Afnan — All Rights Reserved.
          </footer>
        </main>
      </PageTransition>
    </>
  );
}

