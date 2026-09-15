import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Compass, BookOpen, Instagram, MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectAnother: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectAnother,
  allProjects
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#111111]/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="case-study-modal-content"
        className="bg-[#F7F7F5] text-[#111111] w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-[#DDDDD8] shadow-2xl relative flex flex-col my-auto"
      >
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-20 bg-[#F7F7F5]/95 backdrop-blur-xs px-6 md:px-10 py-5 border-b border-[#DDDDD8] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono tracking-widest text-[#0F4C81] uppercase font-bold">
              CASE STUDY // {project.number}
            </span>
            {project.statusBadge && (
              <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-[#0F4C81]/10 text-[#0F4C81] border border-[#0F4C81]/20 uppercase">
                {project.statusBadge}
              </span>
            )}
          </div>

          <button
            id="modal-close-button"
            onClick={onClose}
            className="p-2 text-[#111111] hover:text-[#0F4C81] hover:bg-[#E8E8E4] transition-colors rounded-none"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Section of Case Study */}
        <div className="px-6 md:px-10 pt-8 pb-10 border-b border-[#DDDDD8]">
          <div className="text-xs font-mono text-[#6B6B6B] tracking-wider uppercase mb-2">
            {project.category} {project.location && `• ${project.location}`}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#111111] uppercase mb-4">
            {project.title}
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Main Visual Banner */}
          <div className={`mt-8 relative overflow-hidden border border-[#DDDDD8] aspect-[16/9] max-h-[460px] ${
            project.id === 'e-tifa' ? 'bg-[#0F141C] p-4 sm:p-6 flex items-center justify-center' : 'bg-[#E8E8E4]'
          }`}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={`w-full h-full ${
                project.id === 'e-tifa' ? 'object-contain drop-shadow-2xl' : 'object-cover'
              }`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white text-xs pointer-events-none">
              <span className="bg-[#111111]/80 backdrop-blur-xs px-3 py-1 font-mono">
                {project.title} • Editorial Archive
              </span>
              <span className="bg-[#111111]/80 backdrop-blur-xs px-3 py-1 font-mono">
                {project.location || 'Indonesia'}
              </span>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-[#6B6B6B] mr-2">TECH / DOMAIN:</span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 bg-[#E8E8E4] text-[#111111] border border-[#DDDDD8]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Quick External Links (Instagram, Google Maps) */}
          {(project.instagramUrl || project.mapsUrl) && (
            <div className="mt-6 pt-6 border-t border-[#DDDDD8] flex flex-wrap gap-3 items-center">
              {project.instagramUrl && (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] hover:bg-[#0F4C81] text-white text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram: {project.instagramHandle || '@hello.easteria'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
              {project.mapsUrl && (
                <a
                  href={project.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#E8E8E4] text-[#111111] border border-[#DDDDD8] text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#0F4C81]" />
                  <span>Lokasi di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Body Content */}
        <div className="px-6 md:px-10 py-10 space-y-12">
          {/* Overview & Core Context */}
          {caseStudy?.overview && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] tracking-widest uppercase">
                <BookOpen className="w-4 h-4" />
                <span>01. Project Overview</span>
              </div>
              <p className="text-base sm:text-lg text-[#111111] leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          )}

          {/* Problem & Objective Grid */}
          {(caseStudy?.problem || caseStudy?.objective) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#DDDDD8]">
              {caseStudy.problem && (
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#6B6B6B] tracking-widest uppercase block">
                    The Challenge & Problem
                  </span>
                  <p className="text-sm sm:text-base text-[#111111]/90 leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {caseStudy.objective && (
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#6B6B6B] tracking-widest uppercase block">
                    Objective & Direction
                  </span>
                  <p className="text-sm sm:text-base text-[#111111]/90 leading-relaxed">
                    {caseStudy.objective}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Methodology Note if in development */}
          {caseStudy?.methodologyNote && (
            <div className="p-6 bg-[#E8E8E4] border border-[#0F4C81]/30">
              <span className="text-xs font-mono text-[#0F4C81] font-bold tracking-widest uppercase block mb-2">
                Thesis Methodology Status
              </span>
              <p className="text-sm text-[#111111] leading-relaxed">
                {caseStudy.methodologyNote}
              </p>
            </div>
          )}

          {/* Features Breakdown */}
          {caseStudy?.features && caseStudy.features.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-[#DDDDD8]">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] tracking-widest uppercase">
                <Layers className="w-4 h-4" />
                <span>02. Core Architecture & Features</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caseStudy.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 border border-[#DDDDD8] bg-white/60 space-y-2 hover:border-[#111111] transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono text-[#0F4C81]">0{idx + 1}</span>
                      <h4 className="text-sm font-bold text-[#111111] uppercase tracking-wide">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Development Process Steps */}
          {caseStudy?.process && caseStudy.process.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-[#DDDDD8]">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] tracking-widest uppercase">
                <Cpu className="w-4 h-4" />
                <span>03. Development & Engineering Workflow</span>
              </div>

              <div className="space-y-3">
                {caseStudy.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-4 border border-[#DDDDD8]/80 bg-white/40"
                  >
                    <span className="text-xs font-mono font-bold text-[#0F4C81] pt-0.5">
                      STEP 0{idx + 1}
                    </span>
                    <p className="text-sm text-[#111111] leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Images / Visual Documentation */}
          {caseStudy?.galleryImages && caseStudy.galleryImages.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-[#DDDDD8]">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] tracking-widest uppercase">
                <ImageIcon className="w-4 h-4" />
                <span>Visual Identity & Brand Assets</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {caseStudy.galleryImages.map((img, idx) => (
                  <div key={idx} className="border border-[#DDDDD8] bg-white overflow-hidden group">
                    <div className="relative aspect-[4/3] bg-[#F7F7F5] flex items-center justify-center p-4">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {img.caption && (
                      <div className="p-3 bg-[#F7F7F5] border-t border-[#DDDDD8] text-xs font-mono text-[#6B6B6B]">
                        {img.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome & Reflection */}
          {(caseStudy?.outcome || caseStudy?.reflection) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#DDDDD8]">
              {caseStudy.outcome && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] tracking-widest uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Outcome & Impact</span>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {caseStudy.outcome}
                  </p>
                </div>
              )}

              {caseStudy.reflection && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] tracking-widest uppercase">
                    <Compass className="w-4 h-4" />
                    <span>Technologist's Reflection</span>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">
                    {caseStudy.reflection}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Navigation */}
        <div className="sticky bottom-0 bg-[#F7F7F5] px-6 md:px-10 py-5 border-t border-[#DDDDD8] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-bold tracking-widest uppercase text-[#6B6B6B] hover:text-[#111111] transition-colors"
          >
            ← BACK TO SELECTED WORK
          </button>

          <button
            onClick={() => onSelectAnother(nextProject)}
            className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-[#0F4C81] hover:text-[#111111] transition-colors"
          >
            <span>NEXT PROJECT: {nextProject.title}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
