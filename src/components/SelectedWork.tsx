import React from 'react';
import { ArrowUpRight, Instagram, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import { MagneticButton } from './MagneticButton';

interface SelectedWorkProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="work" className="py-24 md:py-36 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader
          number="06"
          label="SELECTED WORK"
          title="Selected Work"
          description="A collection of digital projects, creative work, and ideas built across technology and visual storytelling."
          align="between"
        />

        {/* Editorial Projects Grid */}
        <div className="space-y-16 md:space-y-24">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="group border border-[#DDDDD8] bg-white/40 hover:bg-white transition-all duration-500 overflow-hidden shadow-xs hover:shadow-md"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } items-stretch w-full`}
                >
                  {/* Visual Image Column with Curtain Clip-Path Reveal */}
                  <motion.div
                    initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                    whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-7/12 shrink-0 relative overflow-hidden bg-[#0F141C] flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] cursor-pointer group/img"
                    onClick={() => onOpenCaseStudy(project)}
                    data-cursor="OPEN ↗"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className={`w-full h-full ${
                        project.id === 'e-tifa'
                          ? 'object-contain p-4 sm:p-6 md:p-8 drop-shadow-2xl'
                          : 'object-cover'
                      } group-hover/img:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient & Overlay with 400-600ms transition */}
                    <div className="absolute inset-0 bg-[#111111]/25 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none" />

                    {/* Corner Tag */}
                    <div className="absolute top-4 left-4 bg-[#111111] text-white px-3 py-1 text-xs font-mono tracking-widest uppercase z-10 shadow-xs">
                      NO. {project.number}
                    </div>

                    {project.statusBadge && (
                      <div className="absolute top-4 right-4 bg-[#0F4C81] text-white px-3 py-1 text-[11px] font-mono tracking-wider uppercase z-10 shadow-xs">
                        {project.statusBadge}
                      </div>
                    )}

                    {project.location && (
                      <div className="absolute bottom-4 left-4 bg-[#F7F7F5]/90 backdrop-blur-xs text-[#111111] px-3 py-1 text-[11px] font-mono tracking-wider uppercase border border-[#DDDDD8] z-10">
                        {project.location}
                      </div>
                    )}
                  </motion.div>

                  {/* Editorial Text Column */}
                  <div
                    className="w-full lg:w-5/12 min-w-0 p-8 md:p-12 flex flex-col justify-between bg-white/60 group-hover:bg-white transition-colors"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-widest text-[#0F4C81] uppercase font-bold">
                          {project.category}
                        </span>
                        {project.year && (
                          <span className="text-xs font-mono text-[#6B6B6B]">
                            {project.year}
                          </span>
                        )}
                      </div>

                      <h3
                        onClick={() => onOpenCaseStudy(project)}
                        data-cursor="OPEN ↗"
                        className="text-2xl sm:text-3xl font-extrabold text-[#111111] uppercase tracking-tight group-hover:text-[#0F4C81] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#6B6B6B] font-mono uppercase tracking-wider">
                        {project.subtitle}
                      </p>

                      <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                        {project.description}
                      </p>

                      {project.highlight && (
                        <div className="p-4 bg-[#F7F7F5] border-l-2 border-[#0F4C81] text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
                          {project.highlight}
                        </div>
                      )}

                      {/* Tech List */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2.5 py-1 bg-[#F7F7F5] text-[#111111] border border-[#DDDDD8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button with Magnetic Hover & Micro-interaction */}
                    <div className="pt-8 mt-6 border-t border-[#DDDDD8] flex flex-wrap items-center justify-between gap-4">
                      <MagneticButton
                        id={`btn-open-case-${project.id}`}
                        onClick={() => onOpenCaseStudy(project)}
                        data-cursor="OPEN ↗"
                      >
                        <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-[0.2em] text-[#111111] hover:text-[#0F4C81] transition-colors py-1 group/btn">
                          <span className="transform group-hover/btn:translate-x-0.5 transition-transform">
                            {project.isInDevelopment ? 'VIEW PROJECT' : 'VIEW CASE STUDY'}
                          </span>
                          <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </div>
                      </MagneticButton>

                      {/* Quick external links */}
                      {(project.instagramUrl || project.mapsUrl) && (
                        <div className="flex items-center gap-2">
                          {project.instagramUrl && (
                            <a
                              href={project.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#6B6B6B] hover:text-[#0F4C81] transition-colors px-2 py-1 bg-[#F7F7F5] hover:bg-[#E8E8E4] border border-[#DDDDD8]"
                              title="Instagram @hello.easteria"
                            >
                              <Instagram className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">@hello.easteria</span>
                            </a>
                          )}
                          {project.mapsUrl && (
                            <a
                              href={project.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#6B6B6B] hover:text-[#0F4C81] transition-colors px-2 py-1 bg-[#F7F7F5] hover:bg-[#E8E8E4] border border-[#DDDDD8]"
                              title="Google Maps"
                            >
                              <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
                              <span className="hidden sm:inline">Maps</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
