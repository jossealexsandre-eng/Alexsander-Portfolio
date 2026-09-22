import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import actionPlanSolo from '../assets/action-plan-solo.jpg';
import actionPlanTeam from '../assets/action-plan-team.jpg';
import badmintonAction from '../assets/badminton-action.jpg';
import badmintonCert from '../assets/badminton-cert.jpg';

const achievements = [
  {
    number: '01',
    badge: 'National Academic & Strategic Recognition',
    place: '1st Place',
    title: 'Action Plan Competition',
    org: 'Representing Maranatha Christian University',
    venue: 'Universitas Kristen Duta Wacana (UKDW) — Yogyakarta',
    year: '2025',
    description:
      'Won 1st Place in an Action Plan Competition while representing Maranatha Christian University at UKDW. Contributed as the team\'s content planner and website developer — responsible for crafting the content strategy, structuring the action plan narrative, and building the project\'s website.',
    tags: ['Content Planning', 'Website Development', 'Visual Communication', 'Team Collaboration', 'Strategic Action Plan', 'Creative Direction'],
    photos: [
      { src: actionPlanSolo, alt: '1st Best Action Plan — Solo', label: 'BK2PTKI Student Camp 2025', caption: '1st Best Action Plan', sub: 'Kelompok 1 — Pemberdayaan Perempuan Wantrabat', aspect: 'aspect-[3/4]' },
      { src: actionPlanTeam, alt: 'Team Photo — Action Plan', label: 'Team', caption: 'Team Kelompok 1 & 3 — UK Team On 2024', sub: '', aspect: 'aspect-[16/9]' },
    ],
    accentColor: '#0F4C81',
  },
  {
    number: '02',
    badge: 'University Sports Championship',
    place: '3rd Place',
    title: "Men's Doubles Badminton",
    org: 'POM Maranatha 2025',
    venue: 'Universitas Kristen Maranatha — Bandung',
    year: '2025',
    description:
      "Achieved 3rd Place (Bronze) in the Men's Doubles Badminton category at POM Maranatha 2025, an inter-faculty sports competition at Maranatha Christian University. Competed with dedication, representing the faculty on court.",
    tags: ['Badminton', 'Doubles Category', 'POM Maranatha', 'University Sports', 'Athletics', 'Competition'],
    photos: [
      { src: badmintonAction, alt: 'Badminton — in action', label: 'POM Maranatha 2025', caption: "Men's Doubles — In Action", sub: 'POM Maranatha 2025', aspect: 'aspect-[3/4]' },
      { src: badmintonCert, alt: 'Badminton Certificate', label: 'Certificate of Achievement', caption: '2nd Runner Up Certificate', sub: 'Badminton League', aspect: 'aspect-[3/4]' },
    ],
    accentColor: '#B45309',
  },
];

export const Achievement: React.FC = () => {
  return (
    <section id="achievement" className="py-24 md:py-32 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader number="05" label="ACHIEVEMENT" title="Achievement" />

        {/* Achievement Cards with Prestigious Typography Entrance */}
        <div className="space-y-20 md:space-y-28">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
            >
              {/* Left: Info Card */}
              <div className="lg:col-span-6 border border-[#DDDDD8] bg-white/40 hover:bg-white/70 transition-colors p-8 sm:p-10 relative overflow-hidden shadow-2xs">
                {/* Watermark number */}
                <div className="absolute right-2 -bottom-6 text-[140px] sm:text-[180px] font-black text-[#DDDDD8]/20 select-none pointer-events-none leading-none">
                  {ach.number}
                </div>

                <div className="relative z-10 space-y-5">
                  {/* Badge */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xs font-mono tracking-widest uppercase font-bold block"
                    style={{ color: ach.accentColor }}
                  >
                    {ach.badge}
                  </motion.span>

                  {/* Place: Powerful Typography Reveal */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="text-5xl sm:text-6xl md:text-7xl font-black text-[#111111] tracking-tighter uppercase leading-[0.95]"
                  >
                    {ach.place}
                  </motion.h2>

                  {/* Expanding Underline Rule */}
                  <div className="w-full h-[1px] bg-[#DDDDD8] overflow-hidden my-3">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ backgroundColor: ach.accentColor }}
                      className="w-full h-full origin-left"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] uppercase tracking-tight">
                    {ach.title}
                  </h3>

                  {/* Org + Venue */}
                  <div className="pt-2 border-t border-[#DDDDD8] flex flex-col gap-1 text-xs sm:text-sm font-mono text-[#6B6B6B]">
                    <span className="text-[#111111] font-semibold">{ach.org}</span>
                    <span>{ach.venue}</span>
                    <span className="font-bold" style={{ color: ach.accentColor }}>{ach.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                    {ach.description}
                  </p>

                  {/* Tags */}
                  <div className="pt-2 border-t border-[#DDDDD8] space-y-3">
                    <span className="text-xs font-mono tracking-widest text-[#666666] uppercase block">
                      {idx === 0 ? 'My Contributions' : 'Categories'}
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {ach.tags.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-[#111111] py-1 border-b border-[#EEEEEA]">
                          <span className="w-1.5 h-1.5 shrink-0" style={{ backgroundColor: ach.accentColor }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Photos with Editorial Reveals & Custom Cursor */}
              <div className="lg:col-span-6">
                {idx === 0 ? (
                  /* Action Plan: tall + wide stack */
                  <div className="space-y-4">
                    <div
                      data-cursor="VIEW"
                      className="relative overflow-hidden aspect-[3/4] bg-[#E8E8E4] border border-[#DDDDD8] group shadow-2xs"
                    >
                      <img
                        src={actionPlanSolo}
                        alt="Alexsander Josse — 1st Best Action Plan"
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                        <span className="text-[10px] font-mono tracking-widest text-[#93C5FD] uppercase">
                          BK2PTKI Student Camp 2025
                        </span>
                        <p className="text-sm font-bold text-white mt-1">1st Best Action Plan</p>
                        <p className="text-[11px] text-white/70">Kelompok 1 — Pemberdayaan Perempuan Wantrabat</p>
                      </div>
                    </div>
                    <div
                      data-cursor="VIEW"
                      className="relative overflow-hidden aspect-[16/9] bg-[#E8E8E4] border border-[#DDDDD8] group shadow-2xs"
                    >
                      <img
                        src={actionPlanTeam}
                        alt="Team photo — Action Plan"
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <p className="text-[11px] font-mono text-white/80">Team Kelompok 1 &amp; 3 — UK Team On 2024</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Badminton: 2-col uniform grid */
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      data-cursor="VIEW"
                      className="relative overflow-hidden aspect-[3/4] bg-[#E8E8E4] border border-[#DDDDD8] group shadow-2xs"
                    >
                      <img
                        src={badmintonAction}
                        alt="Badminton — in action"
                        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <p className="text-[10px] font-mono text-white/90 font-bold uppercase tracking-wider">In Action</p>
                        <p className="text-[9px] text-white/70">POM Maranatha 2025</p>
                      </div>
                    </div>
                    <div
                      data-cursor="VIEW"
                      className="relative overflow-hidden aspect-[3/4] bg-[#E8E8E4] border border-[#DDDDD8] group shadow-2xs"
                    >
                      <img
                        src={badmintonCert}
                        alt="Certificate of Achievement"
                        className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <p className="text-[10px] font-mono text-white/90 font-bold uppercase tracking-wider">Certificate</p>
                        <p className="text-[9px] text-white/70">Badminton League — 2nd Runner Up</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
