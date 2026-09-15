import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import ukorSocial from '../assets/ukor-social.jpg';
import ukorSpeech from '../assets/ukor-speech.jpg';
import ukorEvent from '../assets/ukor-event.jpg';
import ukorTeam from '../assets/ukor-team.jpg';
import ukorPodium from '../assets/ukor-podium.jpg';
import ukorSportsSpeech from '../assets/ukor-sports-speech.jpg';
import ukorCoaching from '../assets/ukor-coaching.jpg';
import ukorCampTeam from '../assets/ukor-camp-team.jpg';
import ukorTeamSelfie from '../assets/ukor-team-selfie.jpg';
import ukorLogo from '../assets/ukor-logo.png';
import etifaLogo from '../assets/etifa-logo.png';

const UKOR_MOMENTS = [
  {
    src: ukorPodium,
    label: 'Presidential Address',
    caption: 'Official University Podium & Inauguration Address — Universitas Kristen Maranatha',
    objectPosition: 'center 55%',
  },
  {
    src: ukorSportsSpeech,
    label: 'Tournament Leadership',
    caption: 'Opening Remarks & Leadership Speech at UKOR Sports Championship',
    objectPosition: 'center 20%',
  },
  {
    src: ukorCoaching,
    label: 'ICONIC 2K25 Coaching',
    caption: 'Orientation, Coaching & Mentoring New Student Organization Members',
    objectPosition: 'center 22%',
  },
  {
    src: ukorCampTeam,
    label: 'ICONIC 2K25 Assembly',
    caption: 'Together as Champion — Full UKOR Committee & Organization Camp Delegation',
    objectPosition: 'center center',
  },
  {
    src: ukorTeam,
    label: 'UKOR United',
    caption: 'Official UKOR Core Committee Studio Team Portrait',
    objectPosition: 'center center',
  },
  {
    src: ukorTeamSelfie,
    label: 'Committee Synergy',
    caption: 'UKOR Core Committee & Leadership Team Bonding',
    objectPosition: 'center 35%',
  },
  {
    src: ukorSpeech,
    label: 'Official Representation',
    caption: 'Representing UKOR Maranatha at Institutional Forum',
    objectPosition: 'center 60%',
  },
  {
    src: ukorEvent,
    label: 'Sport & Kindness',
    caption: 'My Body, My Power — Community Sports Outreach, 28 Juni 2025',
    objectPosition: 'center center',
  },
  {
    src: ukorSocial,
    label: 'Community Engagement',
    caption: 'Social Action & Youth Empowerment Outreach',
    objectPosition: 'center 18%',
  },
];

export const Experience: React.FC = () => {
  const [activeUkorIndex, setActiveUkorIndex] = useState<number | null>(null);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeUkorIndex === null) return;
      if (e.key === 'Escape') {
        setActiveUkorIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveUkorIndex((prev) =>
          prev !== null ? (prev + 1) % UKOR_MOMENTS.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveUkorIndex((prev) =>
          prev !== null ? (prev - 1 + UKOR_MOMENTS.length) % UKOR_MOMENTS.length : null
        );
      }
    };

    if (activeUkorIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeUkorIndex]);

  const activePhoto = activeUkorIndex !== null ? UKOR_MOMENTS[activeUkorIndex] : null;

  return (
    <section id="experience" className="py-24 md:py-36 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 pb-8 border-b border-[#DDDDD8]">
          <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-3">
            04 — EXPERIENCE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase">
            Experience
          </h2>
        </div>

        {/* Refined Vertical Timeline */}
        <div className="relative border-l border-[#DDDDD8] ml-2 md:ml-6 pl-6 md:pl-12 space-y-16 md:space-y-20">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-3.5 h-3.5 bg-[#F7F7F5] border-2 border-[#111111] group-hover:border-[#0F4C81] group-hover:bg-[#0F4C81] transition-colors rounded-none" />

              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#6B6B6B]">
                  <span className="font-bold text-[#0F4C81]">{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  {exp.type && (
                    <>
                      <span>•</span>
                      <span className="bg-[#E8E8E4] px-2 py-0.5 text-[#111111]">{exp.type}</span>
                    </>
                  )}
                </div>

                {/* Role and Organization */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight uppercase">
                    {exp.role}
                  </h3>
                  <h4 className="text-base sm:text-lg font-semibold text-[#0F4C81] mt-1">
                    {exp.organization}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#6B6B6B] max-w-2xl leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities list */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-mono text-[#111111] font-bold tracking-wider uppercase block mb-2">
                      Key Responsibilities & Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.responsibilities.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs text-[#111111] bg-white/70 border border-[#DDDDD8] px-3 py-1 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* UKOR Maranatha: Photo Gallery */}
                {exp.id === 'ukor-maranatha' && (
                  <div className="pt-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#111111] font-bold tracking-wider uppercase block">
                        Moments at UKOR Maranatha
                      </span>
                      <span className="text-[11px] font-mono text-[#6B6B6B]">
                        9 Curated Moments • Click to expand
                      </span>
                    </div>

                    {/* Uniform 3x3 Photo Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {UKOR_MOMENTS.map((m, i) => (
                        <div
                          key={i}
                          onClick={() => setActiveUkorIndex(i)}
                          className="relative overflow-hidden aspect-[4/3] bg-[#E8E8E4] border border-[#DDDDD8] group/photo cursor-pointer"
                        >
                          <img
                            src={m.src}
                            alt={m.label}
                            style={{ objectPosition: m.objectPosition || 'center center' }}
                            className="w-full h-full object-cover group-hover/photo:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 pointer-events-none" />
                          <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                            <div>
                              <p className="text-[11px] font-mono text-white font-bold uppercase tracking-wider">{m.label}</p>
                              <p className="text-[9px] text-white/75 leading-tight mt-0.5">{m.caption}</p>
                            </div>
                            <Maximize2 className="w-3.5 h-3.5 text-white/80 flex-shrink-0 ml-2 mb-0.5" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Logo + Identity bar */}
                    <div className="flex items-center gap-4 pt-2 border-t border-[#DDDDD8]">
                      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white border border-[#DDDDD8] p-1.5">
                        <img
                          src={ukorLogo}
                          alt="UKOR Maranatha Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#111111] uppercase tracking-wide">UKOR Maranatha</p>
                        <p className="text-xs text-[#6B6B6B] font-mono">Unit Kegiatan Olahraga — Universitas Kristen Maranatha</p>
                        <p className="text-[10px] text-[#0F4C81] font-mono mt-0.5">President · 2025</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* E-TIFA: Official Platform Logo */}
                {exp.id === 'fisheries-biak' && (
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-4 p-3 bg-white border border-[#DDDDD8] max-w-md shadow-xs">
                      <div className="h-12 w-28 flex-shrink-0 flex items-center justify-center p-1 bg-white">
                        <img
                          src={etifaLogo}
                          alt="E-TIFA Logo"
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="border-l border-[#DDDDD8] pl-3">
                        <p className="text-xs font-bold text-[#111111] uppercase tracking-wide">E-TIFA Platform</p>
                        <p className="text-[11px] text-[#6B6B6B] font-mono">Electronic Tracking & Information Fisheries Application</p>
                        <p className="text-[10px] text-[#0F4C81] font-mono mt-0.5">Biak, Papua · 2022 — 2023</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen UKOR Moments Lightbox Modal */}
      {activeUkorIndex !== null && activePhoto && (
        <div
          id="ukor-photo-lightbox"
          className="fixed inset-0 z-50 bg-[#111111]/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in text-white"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center space-x-4">
              <span className="text-xs font-mono tracking-widest text-[#0F4C81] uppercase font-bold bg-white/10 px-2.5 py-1">
                UKOR MARANATHA MOMENTS
              </span>
              <span className="text-xs font-mono text-white/60">
                {activeUkorIndex + 1} / {UKOR_MOMENTS.length}
              </span>
            </div>

            <button
              id="ukor-lightbox-close-btn"
              onClick={() => setActiveUkorIndex(null)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Content */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Previous Button */}
            <button
              id="ukor-lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                setActiveUkorIndex(
                  (activeUkorIndex - 1 + UKOR_MOMENTS.length) % UKOR_MOMENTS.length
                );
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="max-w-5xl max-h-[75vh] flex items-center justify-center">
              <img
                src={activePhoto.src}
                alt={activePhoto.label}
                className="max-h-[75vh] w-auto max-w-full object-contain border border-white/10 shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              id="ukor-lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                setActiveUkorIndex((activeUkorIndex + 1) % UKOR_MOMENTS.length);
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <h4 className="text-base font-bold tracking-tight text-white mb-0.5">
                {activePhoto.label}
              </h4>
              <p className="text-white/70 max-w-2xl leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
            <div className="text-[11px] font-mono text-white/50">
              Unit Kegiatan Olahraga — Universitas Kristen Maranatha
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
