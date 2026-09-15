import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CreativeGallery } from './components/CreativeGallery';
import { SportsCreative } from './components/SportsCreative';
import { Experience } from './components/Experience';
import { Achievement } from './components/Achievement';
import { AboutMe } from './components/AboutMe';
import { Capabilities } from './components/Capabilities';
import { EasteriaFeature } from './components/EasteriaFeature';
import { PersonalSection } from './components/PersonalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] selection:bg-[#0F4C81] selection:text-white">
      {/* Sticky Editorial Navigation */}
      <Navbar onContactClick={scrollToContact} />

      <main>
        {/* Hero Section (07) */}
        <Hero onContactClick={scrollToContact} />

        {/* 01 — Introduction (08) */}
        <Introduction />

        {/* 02 — About Me & Education */}
        <AboutMe />

        {/* 03 — Creative Portfolio: Through My Lens (14, 15) */}
        <CreativeGallery />

        {/* Sports / Visual Media: PS. Victor Waang (16) */}
        <SportsCreative />

        {/* 04 — Experience (17) */}
        <Experience />

        {/* 05 — Achievement (18) */}
        <Achievement />

        {/* 06 — Selected Work */}
        <SelectedWork onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* 07 — Capabilities & Toolbox (20, 21) */}
        <Capabilities />

        {/* From Idea to Reality — Building Easteria (23) */}
        <EasteriaFeature />

        {/* Beyond Work & Currently (24, 25) */}
        <PersonalSection />

        {/* Contact & Socials (26, 27) */}
        <ContactSection onOpenMessageModal={scrollToContact} />
      </main>

      {/* Footer (28) */}
      <Footer />

      {/* Case Study Detail Modal Overlay */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectAnother={(proj) => setSelectedProject(proj)}
        allProjects={PROJECTS}
      />
    </div>
  );
}
