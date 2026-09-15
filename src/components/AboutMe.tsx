import React from 'react';
import { GraduationCap, MapPin, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import alexAboutPortrait from '../assets/alex-about-portrait.jpg';
import cvThumbnail from '../assets/cv-alexsander-josse.jpg';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="pt-16 md:pt-24 pb-10 md:pb-14 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#DDDDD8]">
          <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-3">
            02 — ABOUT
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase">
            A little about me.
          </h2>
        </div>

        {/* Two Column Layout: Portrait on Left, Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Photo & Geographic Roots */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden border border-[#DDDDD8] bg-[#E8E8E4] group shadow-sm">
              <img
                src={alexAboutPortrait}
                alt="Alexsander Josse Sulistio"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white font-mono">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold text-sm sm:text-base tracking-wider">{PERSONAL_INFO.fullName}</p>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-white/20 backdrop-blur-xs border border-white/30">
                    Creator
                  </span>
                </div>
                <p className="text-white/80 text-[11px] sm:text-xs">
                  {PERSONAL_INFO.origin} • {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            {/* Geographic Roots Card */}
            <div className="p-5 border border-[#DDDDD8] bg-white/60 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] uppercase font-bold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Geographic Roots</span>
              </div>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">
                Biak, Papua represents cultural roots, raw ocean horizons, and coastal community vitality. Bandung, Indonesia serves as the creative and academic epicenter for Informatics Engineering and digital collaboration.
              </p>
            </div>

            {/* Curriculum Vitae Card */}
            <div className="p-5 border border-[#DDDDD8] bg-white/80 space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#0F4C81] uppercase font-bold">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#0F4C81]/10 text-[#0F4C81] font-bold border border-[#0F4C81]/20">
                  OFFICIAL PDF
                </span>
              </div>

              <div className="flex items-center gap-3 py-1">
                <div className="w-14 h-18 shrink-0 overflow-hidden border border-[#DDDDD8] bg-[#E8E8E4] shadow-2xs">
                  <img
                    src={cvThumbnail}
                    alt="CV Alexsander Josse Thumbnail"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#111111] uppercase tracking-wide truncate">
                    Alexsander Josse Sulistio
                  </p>
                  <p className="text-[11px] text-[#6B6B6B] font-mono leading-tight mt-0.5">
                    Project Management · Operations · Digital Marketing
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  id="about-download-cv-btn"
                  href="/CV_Alexsander_Josse_Sulistio.pdf"
                  download="CV_Alexsander_Josse_Sulistio.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#111111] hover:bg-[#0F4C81] text-white text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
                <a
                  href="/CV_Alexsander_Josse_Sulistio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 border border-[#DDDDD8] hover:border-[#111111] bg-white text-[#111111] text-xs transition-colors"
                  title="Open CV in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Narrative Story */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
            {/* 08 — EDUCATION Component */}
            <div className="space-y-3 pb-6 border-b border-[#DDDDD8]">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#0F4C81] uppercase font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>08 — EDUCATION</span>
              </div>

              <div className="p-6 border border-[#DDDDD8] bg-white/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-bold text-[#111111] tracking-tight uppercase">
                    Maranatha Christian University
                  </h4>
                  <p className="text-sm font-semibold text-[#0F4C81]">
                    Informatics Engineering
                  </p>
                  <p className="text-xs text-[#6B6B6B] mt-1 font-mono">
                    Bandung, Indonesia
                  </p>
                </div>
                <div className="text-xs font-mono font-bold px-3 py-1.5 bg-[#E8E8E4] text-[#111111] self-start sm:self-center border border-[#DDDDD8]">
                  PRESENT
                </div>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-[#111111] font-medium leading-relaxed">
              Hi, I'm <strong className="font-bold text-[#111111]">Alexsander Josse</strong>, an Informatics Engineering student at Maranatha Christian University, currently based in Bandung, Indonesia.
            </p>

            <p>
              Originally from Biak, Papua, I have always been interested in combining technology with creativity.
            </p>

            <p>
              My background in Informatics Engineering has given me experience in web development, digital systems, databases, and software development.
            </p>

            <p>
              At the same time, my passion for photography and videography has led me to explore visual storytelling, event documentation, sports media, nature, portraits, and creative content.
            </p>

            <p>
              I enjoy working across different disciplines because I believe technology and creativity can complement each other.
            </p>

            <p>
              Whether I am building a website, capturing a moment, creating content, or leading a team, I enjoy turning ideas into something real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
