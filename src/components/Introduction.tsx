import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

export const Introduction: React.FC = () => {
  return (
    <section
      id="introduction"
      className="py-24 md:py-36 bg-[#F7F7F5] border-b border-[#DDDDD8]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header with expanding line */}
        <SectionHeader number="01" label="INTRODUCTION" />

        {/* Large Statement with Layered Reveal */}
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-[1.15] mb-12"
          >
            I work at the intersection of technology, creativity, and visual storytelling.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-base sm:text-lg text-[#6B6B6B] leading-relaxed"
          >
            <p>
              With a background in Informatics Engineering and years of experience in photography, videography, and content creation, I enjoy combining technical thinking with visual creativity.
            </p>
            <p>
              From building digital systems to capturing moments through a camera, I am interested in turning ideas into something people can see, experience, and remember.
            </p>
          </motion.div>
        </div>

        {/* The Three Dimensions: CREATE, CAPTURE, BUILD */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-[#DDDDD8]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Dimension 1: CREATE */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 group p-4 -m-4 transition-colors duration-300 hover:bg-white/60 border border-transparent hover:border-[#DDDDD8]"
            >
              <span className="text-[11px] font-mono tracking-widest text-[#0F4C81] uppercase block font-bold">
                [ 01 / CREATE ]
              </span>
              <h3 className="text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#0F4C81] transition-colors">
                Visual Content &amp; Direction
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Visual content, photography, videography, editing, social media, and creative direction turning concepts into resonant narratives.
              </p>
            </motion.div>

            {/* Dimension 2: CAPTURE */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 group p-4 -m-4 transition-colors duration-300 hover:bg-white/60 border border-transparent hover:border-[#DDDDD8]"
            >
              <span className="text-[11px] font-mono tracking-widest text-[#0F4C81] uppercase block font-bold">
                [ 02 / CAPTURE ]
              </span>
              <h3 className="text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#0F4C81] transition-colors">
                Moments &amp; Storytelling
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Photography, videography, event documentation, sports media, nature, portraits, weddings, and visual storytelling shaped by human movement.
              </p>
            </motion.div>

            {/* Dimension 3: BUILD */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 group p-4 -m-4 transition-colors duration-300 hover:bg-white/60 border border-transparent hover:border-[#DDDDD8]"
            >
              <span className="text-[11px] font-mono tracking-widest text-[#0F4C81] uppercase block font-bold">
                [ 03 / BUILD ]
              </span>
              <h3 className="text-2xl font-bold text-[#111111] tracking-tight group-hover:text-[#0F4C81] transition-colors">
                Systems &amp; Architecture
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                Web development, digital experiences, business ideas, robust information systems, and technology engineered to endure.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-[#DDDDD8]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold tracking-wider text-[#111111]"
          >
            <div className="flex items-center space-x-4 uppercase">
              <span>Build it.</span>
              <span className="text-[#DDDDD8]">•</span>
              <span>Capture it.</span>
              <span className="text-[#DDDDD8]">•</span>
              <span>Create it.</span>
              <span className="text-[#DDDDD8]">•</span>
              <span>Lead it.</span>
            </div>
            <span className="text-[11px] text-[#6B6B6B] font-mono">
              Bandung × Biak
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
