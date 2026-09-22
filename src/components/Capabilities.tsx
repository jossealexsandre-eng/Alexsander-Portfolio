import React from 'react';
import { motion } from 'motion/react';
import { CAPABILITY_GROUPS, TOOLBOX } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="pt-16 md:pt-24 pb-20 md:pb-28 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader
          number="07"
          label="CAPABILITIES"
          title="What I Bring"
          description="A balanced interdisciplinary blend across software engineering, visual curation, narrative content, and organizational leadership."
          align="between"
        />

        {/* Four Large Editorial Columns with Staggered Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {CAPABILITY_GROUPS.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t-2 border-[#111111] pt-6 flex flex-col justify-between space-y-6 group hover:border-[#0F4C81] transition-colors"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#0F4C81] tracking-widest block font-bold">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-black text-[#111111] tracking-tight uppercase group-hover:text-[#0F4C81] transition-colors">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-3 pt-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium text-[#111111] border-b border-[#DDDDD8]/70 pb-2.5 flex items-center justify-between group/item hover:text-[#0F4C81] transition-colors"
                  >
                    <span>{item}</span>
                    <span className="text-xs text-[#6B6B6B] font-mono transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 21 — TOOLBOX: TOOLS & TECHNOLOGY */}
        <div className="mt-24 pt-16 border-t border-[#DDDDD8]">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-2">
              STACK &amp; INSTRUMENTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] uppercase tracking-tight">
              Tools &amp; Technology
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Development Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 border border-[#DDDDD8] bg-white/40 space-y-4 hover:border-[#111111] hover:bg-white transition-all duration-300 shadow-2xs"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-[#0F4C81] uppercase block">
                [ DEVELOPMENT ]
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {TOOLBOX.development.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 bg-[#F7F7F5] border border-[#DDDDD8] text-[#111111] hover:border-[#0F4C81] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Creative Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="p-6 border border-[#DDDDD8] bg-white/40 space-y-4 hover:border-[#111111] hover:bg-white transition-all duration-300 shadow-2xs"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-[#0F4C81] uppercase block">
                [ CREATIVE ]
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {TOOLBOX.creative.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 bg-[#F7F7F5] border border-[#DDDDD8] text-[#111111] hover:border-[#0F4C81] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* AI Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="p-6 border border-[#DDDDD8] bg-white/40 space-y-4 hover:border-[#111111] hover:bg-white transition-all duration-300 shadow-2xs"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-[#0F4C81] uppercase block">
                [ AI INTEGRATION ]
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {TOOLBOX.ai.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 bg-[#F7F7F5] border border-[#DDDDD8] text-[#111111] hover:border-[#0F4C81] transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
