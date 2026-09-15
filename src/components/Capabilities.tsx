import React from 'react';
import { CAPABILITY_GROUPS, TOOLBOX } from '../data/portfolioData';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="pt-12 md:pt-16 pb-20 md:pb-28 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#DDDDD8]">
          <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-3">
            07 — CAPABILITIES
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase">
            What I Bring
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B6B] mt-3 max-w-xl">
            A balanced interdisciplinary blend across software engineering, visual curation, narrative content, and organizational leadership.
          </p>
        </div>

        {/* Four Large Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {CAPABILITY_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="border-t-2 border-[#111111] pt-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#0F4C81] tracking-widest block">
                  0{idx + 1}
                </span>
                <h3 className="text-2xl font-black text-[#111111] tracking-tight uppercase">
                  {group.title}
                </h3>
              </div>

              <ul className="space-y-3 pt-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-medium text-[#111111] border-b border-[#DDDDD8]/70 pb-2.5 flex items-center justify-between"
                  >
                    <span>{item}</span>
                    <span className="text-xs text-[#6B6B6B] font-mono">↗</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 21 — TOOLBOX: TOOLS & TECHNOLOGY */}
        <div className="mt-24 pt-16 border-t border-[#DDDDD8]">
          <div className="mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-2">
              STACK & INSTRUMENTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] uppercase tracking-tight">
              Tools & Technology
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Development Stack */}
            <div className="p-6 border border-[#DDDDD8] bg-white/40 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0F4C81] uppercase block">
                [ DEVELOPMENT ]
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {TOOLBOX.development.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 bg-[#F7F7F5] border border-[#DDDDD8] text-[#111111]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative Stack */}
            <div className="p-6 border border-[#DDDDD8] bg-white/40 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0F4C81] uppercase block">
                [ CREATIVE ]
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {TOOLBOX.creative.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 bg-[#F7F7F5] border border-[#DDDDD8] text-[#111111]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Stack */}
            <div className="p-6 border border-[#DDDDD8] bg-white/40 space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#0F4C81] uppercase block">
                [ AI INTEGRATION ]
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {TOOLBOX.ai.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 bg-[#F7F7F5] border border-[#DDDDD8] text-[#111111]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
