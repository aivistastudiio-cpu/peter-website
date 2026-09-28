'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Showreel } from '@/components/sections/Showreel';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { ToolsMarquee } from '@/components/sections/ToolsMarquee';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { Project } from '@/types';
import { PROJECTS } from '@/data/projects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('commercial');

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleOpenShowreelModal = () => {
    // Scroll smoothly to showreel section
    const showreelElement = document.getElementById('showreel');
    if (showreelElement) {
      showreelElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (category: string) => {
    setSelectedServiceCategory(category);
  };

  return (
    <main className="min-h-screen bg-[#070A0F] text-slate-100 relative">
      {/* Sticky Studio Navigation */}
      <Navbar />

      {/* 1. Hero: Who I am & Studio Positioning */}
      <Hero onOpenShowreel={handleOpenShowreelModal} />

      {/* 2. Showreel: High-impact proof of generative craft */}
      <Showreel />

      {/* 3. Services: How I can help brands, startups & agencies */}
      <Services onSelectService={handleSelectService} />

      {/* 4. Portfolio: Curated catalog of recent commercial, UGC & animation works */}
      <Portfolio onSelectProject={handleOpenProject} />

      {/* 5. Case Studies: Problem -> Process -> Solution -> Result */}
      <CaseStudies onSelectProject={handleOpenProject} />

      {/* 6. AI Tools Marquee: State-of-the-art models (Veo 3, Kling, Runway, Luma, Pika) */}
      <ToolsMarquee />

      {/* 7. Process & Why Work With Me: Directorial approach & production sprint */}
      <Process />

      {/* 8. About: Peter Ayoade biography & directorial philosophy */}
      <About />

      {/* 9. Endorsements & Testimonials */}
      <Testimonials />

      {/* 10. Contact & Project Brief Submission (Form + WhatsApp + Direct Email) */}
      <Contact selectedServiceCategory={selectedServiceCategory} />

      {/* Studio Footer */}
      <Footer />

      {/* Interactive Project Video & Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}

