import React from 'react';
import { Camera, MapPin, Compass, Flame, Gamepad2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_FACTS } from '../data/portfolioData';

export const PersonalSection: React.FC = () => {
  const getIcon = (label: string) => {
    switch (label) {
      case 'PHOTOGRAPHY':
        return <Camera className="w-4 h-4 text-[#0F4C81]" />;
      case 'ORIGIN':
        return <MapPin className="w-4 h-4 text-[#0F4C81]" />;
      case 'BASE':
        return <Compass className="w-4 h-4 text-[#0F4C81]" />;
      case 'SPORT':
        return <Flame className="w-4 h-4 text-[#0F4C81]" />;
      case 'GAMING':
        return <Gamepad2 className="w-4 h-4 text-[#0F4C81]" />;
      default:
        return null;
    }
  };

  return (
    <section id="beyond-work" className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* 24 — BEYOND WORK */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-3">
                BEYOND WORK
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase"
              >
                Outside the screen.
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PERSONAL_FACTS.map((fact, idx) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 border border-[#DDDDD8] bg-white/40 space-y-2 hover:border-[#111111] hover:bg-white transition-all duration-300 shadow-2xs"
                >
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#111111] uppercase tracking-wider">
                    {getIcon(fact.label)}
                    <span>{fact.label}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {fact.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 25 — CURRENTLY */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 border-l border-[#DDDDD8] lg:pl-12 pt-8 lg:pt-0 space-y-6"
          >
            <span className="text-xs font-mono tracking-[0.25em] text-[#0F4C81] uppercase block font-bold">
              CURRENTLY
            </span>

            <div className="p-8 border border-[#DDDDD8] bg-[#F2F1ED] space-y-6 shadow-2xs">
              <p className="text-base sm:text-lg text-[#111111] font-medium leading-relaxed">
                Currently developing my skills across technology, visual content creation, photography, videography, and digital experiences.
              </p>

              <div className="pt-4 border-t border-[#DDDDD8] text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                Open to opportunities where I can learn, collaborate, create, and contribute.
              </div>

              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#0F4C81]">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Active &amp; Inquiring • 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
