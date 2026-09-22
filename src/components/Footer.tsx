import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="bg-[#111111] text-[#F7F7F5] py-20 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Top Tier: Brand & Locations */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-[#222222] pb-16">
          <div className="space-y-3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-white">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-sm sm:text-base text-[#999999] tracking-wider uppercase font-medium">
              {PERSONAL_INFO.positioning}
            </p>
            <div className="pt-2 text-xs font-mono text-[#666666] space-y-1">
              <p>Based in {PERSONAL_INFO.location}</p>
              <p>{PERSONAL_INFO.origin}</p>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-8 lg:gap-16 justify-between lg:justify-end">
            <div className="space-y-3 text-xs font-mono">
              <span className="text-[#666666] uppercase block tracking-widest">
                Network
              </span>
              <div className="flex flex-col space-y-2">
                <a
                  href={PERSONAL_INFO.socials.personalInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN ↗"
                  className="text-white hover:text-[#0F4C81] transition-colors inline-block w-fit"
                >
                  Instagram — @bangpenom ↗
                </a>
                <a
                  href={PERSONAL_INFO.socials.photographyInstagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN ↗"
                  className="text-white hover:text-[#0F4C81] transition-colors inline-block w-fit"
                >
                  Photography — @alxv.films ↗
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="OPEN ↗"
                  className="text-white hover:text-[#0F4C81] transition-colors inline-block w-fit"
                >
                  LinkedIn — Alexsander Josse ↗
                </a>
              </div>
            </div>

            <MagneticButton
              onClick={scrollToTop}
              className="self-start sm:self-auto"
            >
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#999999] hover:text-white border border-[#333333] hover:border-white/50 px-4 py-2.5 transition-colors cursor-pointer group">
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Tier: Statement & Copyright */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 text-xs">
          <div className="font-extrabold tracking-[0.25em] text-white uppercase">
            {PERSONAL_INFO.statement}
          </div>

          <div className="text-[#666666] font-mono">
            © 2026 Alexsander Josse. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
