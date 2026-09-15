import React from 'react';
import { Sparkles, Video, Film, Heart } from 'lucide-react';
import psVictorPortrait from '../assets/ps-victor-portrait.jpg';
import psVictorForeverYoung from '../assets/ps-victor-forever-young.jpg';
import psVictorRunInGod from '../assets/ps-victor-run-in-god.jpg';

export const SportsCreative: React.FC = () => {
  const responsibilities = [
    "Sermon video editing",
    "Spiritual content curation",
    "Social media reels & stories",
    "Creative typography & posters",
    "Visual storytelling",
    "Faith-based messaging",
    "Digital ministry distribution"
  ];

  return (
    <section id="spiritual-creative" className="py-24 md:py-36 bg-[#111111] text-[#F7F7F5] border-b border-[#222222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#0F4C81] uppercase block mb-3">
            CREATIVE MINISTRY & SPIRITUAL MEDIA
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
            Faith. Message. Story.
          </h2>
        </div>

        {/* Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Portrait Card */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A] border border-[#333333] group">
              <img
                src={psVictorPortrait}
                alt="Ps. Victor Waang — Spiritual Ministry & Sermon Media"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                style={{ objectPosition: '50% 20%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#0F4C81] uppercase bg-white/10 px-2.5 py-1">
                    Spiritual Content & Sermon Media
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-2">
                    Ps. Victor Waang
                  </h3>
                  <p className="text-xs text-white/70 font-mono">
                    Sermon Video Editing • Social Media Content • Faith Visuals
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-grid of supporting creative sermon moments */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Forever Young Editorial Poster */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden border border-[#333333] group bg-[#1A1A1A]">
                <img
                  src={psVictorForeverYoung}
                  alt="Forever Young Ps. Victor Waang"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/75 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono text-white/90 border border-white/10 flex items-center justify-between">
                  <span>Forever Young</span>
                  <span className="text-[#0F4C81] font-bold">EDITORIAL</span>
                </div>
              </div>

              {/* Run in God Sermon Graphic */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden border border-[#333333] group bg-[#1A1A1A]">
                <img
                  src={psVictorRunInGod}
                  alt="Run in God Sermon Visual"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/75 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono text-white/90 border border-white/10 flex items-center justify-between">
                  <span>Run in God</span>
                  <span className="text-[#0F4C81] font-bold">REEL MEDIA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Responsibilities */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#0F4C81] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#0F4C81]" />
                <span>Feature: Ps. Victor Waang</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                Spiritual Content Editor
              </h3>

              <p className="text-sm sm:text-base text-[#999999] leading-relaxed">
                Worked as a spiritual content editor for Ps. Victor Waang, transforming sermon messages into impactful short-form video reels, inspiring quotes, and faith-driven social media content to reach and bless a broader audience.
              </p>
            </div>

            {/* Key Pillars */}
            <div className="pt-6 border-t border-[#333333] space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#666666] uppercase block">
                Scope & Responsibilities
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2.5 text-xs text-white/90 py-1.5 border-b border-[#222222]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#0F4C81]"></span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="p-6 bg-[#181818] border-l-2 border-[#0F4C81] space-y-2">
              <p className="text-xs text-white/80 italic leading-relaxed">
                "Editing spiritual content isn't just about assembling video clips — it's about capturing the heart of the message, preserving biblical truth, and presenting it with creative clarity that resonates with today's generation."
              </p>
              <span className="text-[10px] font-mono text-[#666666] uppercase block">
                — Alexsander Josse Sulistio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
