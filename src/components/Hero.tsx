import React from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import heroPortrait from '../assets/hero-portrait.jpg';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#DDDDD8]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Small Tracking Label */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#0F4C81]"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.24em] text-[#0F4C81] uppercase">
                {PERSONAL_INFO.positioning}
              </span>
            </div>

            {/* Large Statement Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-[-0.03em] leading-[0.95] text-[#111111] uppercase">
              <span className="block hover:translate-x-2 transition-transform duration-300">
                I CREATE.
              </span>
              <span className="block text-[#111111]/80 hover:translate-x-2 transition-transform duration-300">
                I CAPTURE.
              </span>
              <span className="block text-[#111111] hover:translate-x-2 transition-transform duration-300">
                I BUILD.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] font-normal leading-relaxed max-w-xl">
              I combine technology, visual storytelling, and creative content to turn ideas into meaningful digital experiences.
            </p>

            {/* Location & Origin Details */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs tracking-wider border-t border-[#DDDDD8] pt-6 max-w-lg">
              <div className="flex items-center space-x-2 text-[#111111] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="hidden sm:inline text-[#DDDDD8]">•</span>
              <div className="text-[#6B6B6B]">
                {PERSONAL_INFO.origin}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-view-work-btn"
                onClick={scrollToWork}
                className="inline-flex items-center space-x-3 px-6 py-4 bg-[#111111] text-[#F7F7F5] hover:bg-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] group"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-get-in-touch-btn"
                onClick={onContactClick}
                className="inline-flex items-center space-x-3 px-6 py-4 border border-[#DDDDD8] hover:border-[#111111] text-[#111111] transition-all duration-300 text-xs font-bold tracking-[0.2em] group"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                id="hero-download-cv-btn"
                href="/CV_Alexsander_Josse_Sulistio.pdf"
                download="CV_Alexsander_Josse_Sulistio.pdf"
                className="inline-flex items-center space-x-2.5 px-6 py-4 bg-[#0F4C81]/10 hover:bg-[#0F4C81] text-[#0F4C81] hover:text-white border border-[#0F4C81]/30 hover:border-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] group"
              >
                <Download className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer Editorial Framing */}
              <div className="relative overflow-hidden bg-[#E8E8E4] border border-[#DDDDD8] aspect-[4/5] shadow-xs">
                <img
                  src={heroPortrait}
                  alt="Alexsander Josse — Creative Technologist"
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:scale-103 transition-all duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle vignette / tonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Editorial Corner Mark */}
                <div className="absolute top-4 right-4 bg-[#F7F7F5]/90 backdrop-blur-xs px-3 py-1 text-[10px] font-mono tracking-widest text-[#111111] border border-[#DDDDD8]">
                  ID: AJ-2026
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-bold tracking-widest uppercase">
                    Alexsander Josse
                  </p>
                  <p className="text-[11px] text-white/80 tracking-wider">
                    {PERSONAL_INFO.secondaryPositioning}
                  </p>
                </div>
              </div>

              {/* Minimal Accent line */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#0F4C81] -z-10 pointer-events-none opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
