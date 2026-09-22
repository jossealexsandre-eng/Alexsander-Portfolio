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
import { PageLoader } from './components/PageLoader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
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
      {/* ─── Global: Cinematic Page Loader (first visit only) ─── */}
      <PageLoader />

      {/* ─── Global: Custom Cursor (desktop pointer only) ─── */}
      <CustomCursor />

      {/* ─── Global: Scroll Progress Bar ─── */}
      <ScrollProgress />

      {/* ─── Sticky Editorial Navigation ─── */}
      <Navbar onContactClick={scrollToContact} />

      <main>
        {/* Hero Section */}
        <Hero onContactClick={scrollToContact} />

        {/* 01 — Introduction */}
        <Introduction />

        {/* 02 — About Me & Education */}
        <AboutMe />

        {/* 03 — Creative Portfolio: Through My Lens */}
        <CreativeGallery />

        {/* Sports / Visual Media: PS. Victor Waang */}
        <SportsCreative />

        {/* 04 — Experience */}
        <Experience />

        {/* 05 — Achievement */}
        <Achievement />

        {/* 06 — Selected Work */}
        <SelectedWork onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* 07 — Capabilities & Toolbox */}
        <Capabilities />

        {/* From Idea to Reality — Building Easteria */}
        <EasteriaFeature />

        {/* Beyond Work & Currently */}
        <PersonalSection />

        {/* Contact & Socials */}
        <ContactSection onOpenMessageModal={scrollToContact} />
      </main>

      {/* Footer */}
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
