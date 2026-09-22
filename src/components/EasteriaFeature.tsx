import React from 'react';
import { Instagram, MapPin, ExternalLink, Utensils, Calendar, Store, Sparkles, Camera, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { MagneticButton } from './MagneticButton';
import easteriaLogo from '../assets/easteria-logo.png';
import easteriaKedai from '../assets/easteria-kedai.jpg';

const STORY_STEPS = [
  {
    step: '01',
    label: 'IDEA',
    title: 'The Concept of "Nongs & Chill"',
    desc: 'Conceived as a warm sanctuary in Biak, Papua, offering artisanal morning breakfast and brunch where conversation and comfort come first.',
    icon: Sparkles,
  },
  {
    step: '02',
    label: 'IDENTITY',
    title: 'Warm Smile & Organic Character',
    desc: 'Crafted with a signature emerald-green smile and leaf motif, reflecting genuine island hospitality, freshness, and culinary care.',
    icon: Store,
  },
  {
    step: '03',
    label: 'SPACE',
    title: 'Atmospheric Biak Kedai',
    desc: 'Indoor comfort paired with airy outdoor seating, welcoming remote workers, families, and morning travelers alike.',
    icon: MapPin,
  },
  {
    step: '04',
    label: 'CONTENT',
    title: 'Digital Marketing & Food Storytelling',
    desc: 'Leading social media direction at @hello.easteria with daily reels, appetizing photography, and community engagement.',
    icon: Camera,
  },
  {
    step: '05',
    label: 'EXPERIENCE',
    title: 'Community & Lasting Moments',
    desc: 'More than a cafe—a living gathering ground shaping contemporary food culture and youth connection in Biak.',
    icon: Users,
  },
];

export const EasteriaFeature: React.FC = () => {
  return (
    <section id="easteria-story" className="py-24 md:py-36 bg-[#F2F1ED] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] text-[#0F4C81] uppercase font-bold">
              FROM IDEA TO REALITY — NONGS &amp; CHILL
            </span>
            <span className="hidden sm:inline text-xs text-[#6B6B6B] font-mono">•</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 bg-[#0F4C81]/10 text-[#0F4C81] border border-[#0F4C81]/20 uppercase">
              <Calendar className="w-3 h-3" />
              Est. 22 Juli 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 bg-[#111111] text-white uppercase">
              <MapPin className="w-3 h-3" />
              Biak, Papua
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase mb-6"
          >
            Building Easteria
          </motion.h2>

          <p className="text-lg sm:text-xl text-[#111111] font-medium leading-relaxed mb-4">
            Easteria — Nongs and Chill adalah sebuah rumah makan brunch yang berdiri pada <strong className="text-[#0F4C81]">22 Juli 2026</strong> di Biak, Papua.
          </p>

          <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed mb-6">
            Menyediakan sajian sarapan dan brunch sebagai menu paling utama dalam nuansa santai untuk berkumpul, makan nikmat, dan menikmati atmosfer ramah. Berperan aktif sebagai <strong className="text-[#111111]">Digital Marketing Officer</strong>, saya memimpin strategi komunikasi visual, pengelolaan akun media sosial resmi, fotografi sajian kuliner, dan brand experience.
          </p>

          {/* Quick Action Links: Instagram & Google Maps with Magnetic Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <MagneticButton
              href="https://instagram.com/hello.easteria"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-[#0F4C81] text-white text-xs font-mono tracking-wider uppercase transition-colors shadow-2xs group">
                <Instagram className="w-4 h-4" />
                <span>Instagram: @hello.easteria</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </MagneticButton>

            <MagneticButton
              href="https://maps.app.goo.gl/brWnwfLNgLNS7QAe7"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN ↗"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#E8E8E4] text-[#111111] border border-[#DDDDD8] text-xs font-mono tracking-wider uppercase transition-colors shadow-2xs group">
                <MapPin className="w-4 h-4 text-[#0F4C81]" />
                <span>Lokasi di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </MagneticButton>
          </div>
        </div>

        {/* Visual Showcase: Real Storefront & Official Logo with Curtain Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Main Storefront Visual Card with Curtain Reveal */}
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            data-cursor="VIEW"
            className="lg:col-span-7 relative overflow-hidden border border-[#DDDDD8] bg-[#E8E8E4] flex flex-col group min-h-[420px] shadow-sm cursor-pointer"
          >
            <div className="relative flex-1 overflow-hidden">
              <img
                src={easteriaKedai}
                alt="Tampak Depan Kedai Easteria, Biak, Papua"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-[#111111] text-white px-3 py-1 text-xs font-mono tracking-widest uppercase">
                KEDAI EASTERIA
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-[#111111] px-3 py-1 text-xs font-mono tracking-wider uppercase">
                Biak, Papua
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 px-2.5 py-1 backdrop-blur-xs">
                  Physical Storefront &amp; Atmosphere
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-2">
                  Kedai Easteria — Biak, Papua
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-mono mt-1">
                  Area outdoor dan indoor nyaman • Pilihan utama santap pagi &amp; brunch di Biak
                </p>
              </div>
            </div>
          </motion.div>

          {/* Logo & Core Identity Showcase Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Logo Presentation Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#DDDDD8] bg-[#F7F7F5] p-6 sm:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xs"
            >
              <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B]">
                OFFICIAL IDENTITY
              </div>
              
              <div className="w-48 sm:w-56 py-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img
                  src={easteriaLogo}
                  alt="Logo Resmi Easteria — Nongs and Chill"
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>

              <div className="border-t border-[#DDDDD8] w-full pt-4 mt-2 text-left">
                <span className="text-[11px] font-mono font-bold text-[#0F4C81] uppercase block mb-1">
                  Logo &amp; Visual Character
                </span>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  Sentuhan warna hijau alami dengan lekukan senyuman hangat dan aksen daun organik, melambangkan keramahan pelayanan dan kesegaran sarapan.
                </p>
              </div>
            </motion.div>

            {/* Quick Metrics & Role Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border border-[#DDDDD8] bg-white p-6 flex-1 flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div>
                <span className="text-xs font-mono text-[#0F4C81] uppercase font-bold tracking-wider block mb-2">
                  DIGITAL MARKETING &amp; BRAND PILLARS
                </span>
                <ul className="space-y-2.5 text-xs text-[#111111]">
                  <li className="flex items-start gap-2">
                    <Utensils className="w-3.5 h-3.5 text-[#0F4C81] mt-0.5 shrink-0" />
                    <span><strong>Menu Utama:</strong> Sarapan pagi &amp; brunch spesial, kopi segar, dan camilan santai.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Store className="w-3.5 h-3.5 text-[#0F4C81] mt-0.5 shrink-0" />
                    <span><strong>Konsep:</strong> "Nongs and Chill" — tempat berkumpul yang hangat di Biak, Papua.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Instagram className="w-3.5 h-3.5 text-[#0F4C81] mt-0.5 shrink-0" />
                    <span><strong>Digital Marketing:</strong> Konten kreatif harian, reels, dan aktivasi media sosial di @hello.easteria.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0F4C81] mt-0.5 shrink-0" />
                    <span><strong>Lokasi:</strong> Biak, Papua — mudah diakses lewat Google Maps.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-[#DDDDD8] flex items-center justify-between text-xs font-mono text-[#6B6B6B]">
                <span>TANGGAL BERDIRI</span>
                <span className="font-bold text-[#111111]">22 JULI 2026</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 19 — Vertical Storytelling Sequence: IDEA -> IDENTITY -> SPACE -> CONTENT -> EXPERIENCE */}
        <div className="pt-12 border-t border-[#DDDDD8]">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-[#0F4C81] uppercase font-bold block mb-2">
              THE STORY ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] uppercase tracking-tight">
              A Five-Stage Visual Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {STORY_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 border border-[#DDDDD8] bg-white/70 hover:bg-white hover:border-[#111111] transition-all duration-300 space-y-3 shadow-2xs group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#0F4C81]">
                        {s.step} // {s.label}
                      </span>
                      <Icon className="w-4 h-4 text-[#6B6B6B] group-hover:text-[#0F4C81] transition-colors" />
                    </div>
                    <h4 className="text-sm font-bold text-[#111111] uppercase tracking-tight">
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#DDDDD8]/60 flex items-center justify-between text-[10px] font-mono text-[#6B6B6B]">
                    <span>Stage {idx + 1} of 5</span>
                    <span className="text-[#0F4C81]">Active</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
