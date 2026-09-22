import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownRight, ArrowUpRight, MapPin, Download } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import heroPortrait from '../assets/hero-portrait.jpg';
import createPeekImg from '../assets/action-plan-solo.jpg';
import capturePeekImg from '../assets/ps-victor-run-in-god.jpg';
import buildPeekImg from '../assets/etifa-preview.png';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [hoveredLine, setHoveredLine] = useState<'CREATE' | 'CAPTURE' | 'BUILD' | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const portraitContainerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  // Subtle scroll parallax for the hero image
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Subtle interactive portrait depth on desktop mouse movement
  useEffect(() => {
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!portraitContainerRef.current) return;
      const rect = portraitContainerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = (e.clientX - centerX) / (window.innerWidth / 2);
      const distY = (e.clientY - centerY) / (window.innerHeight / 2);

      // Subtle 6px translation
      setMouseOffset({
        x: Math.max(-6, Math.min(6, distX * 6)),
        y: Math.max(-6, Math.min(6, distY * 6)),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToWork = () => {
    const el = document.querySelector('#work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#DDDDD8]"
    >
      {/* Interactive Statement Background Peek Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-700">
        <AnimatePresence>
          {hoveredLine === 'CREATE' && (
            <motion.div
              key="peek-create"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.14, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center grayscale mix-blend-multiply"
              style={{ backgroundImage: `url(${createPeekImg})` }}
            />
          )}

          {hoveredLine === 'CAPTURE' && (
            <motion.div
              key="peek-capture"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.16, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center grayscale contrast-125 mix-blend-multiply"
              style={{ backgroundImage: `url(${capturePeekImg})` }}
            />
          )}

          {hoveredLine === 'BUILD' && (
            <motion.div
              key="peek-build"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-80"
              style={{ backgroundImage: `url(${buildPeekImg})` }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Interactive Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            {/* Small Tracking Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center space-x-2"
            >
              <span className="w-2 h-2 bg-[#0F4C81]"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.24em] text-[#0F4C81] uppercase">
                {PERSONAL_INFO.positioning}
              </span>
            </motion.div>

            {/* Large Statement Headline with Line-by-Line Reveal & Hover Peek */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-[-0.03em] leading-[0.95] text-[#111111] uppercase select-none">
              {/* Line 1: I CREATE. */}
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredLine('CREATE')}
                onMouseLeave={() => setHoveredLine(null)}
                className="block cursor-pointer transition-all duration-300 hover:translate-x-3 hover:text-[#0F4C81]"
                data-cursor="CREATE"
              >
                I CREATE.
              </motion.span>

              {/* Line 2: I CAPTURE. */}
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 0.85, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredLine('CAPTURE')}
                onMouseLeave={() => setHoveredLine(null)}
                className="block cursor-pointer transition-all duration-300 hover:translate-x-3 hover:text-[#0F4C81]"
                data-cursor="CAPTURE"
              >
                I CAPTURE.
              </motion.span>

              {/* Line 3: I BUILD. */}
              <motion.span
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredLine('BUILD')}
                onMouseLeave={() => setHoveredLine(null)}
                className="block cursor-pointer transition-all duration-300 hover:translate-x-3 hover:text-[#0F4C81]"
                data-cursor="BUILD"
              >
                I BUILD.
              </motion.span>
            </h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#6B6B6B] font-normal leading-relaxed max-w-xl"
            >
              I combine technology, visual storytelling, and creative content to turn ideas into meaningful digital experiences.
            </motion.p>

            {/* Location & Origin Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs tracking-wider border-t border-[#DDDDD8] pt-6 max-w-lg"
            >
              <div className="flex items-center space-x-2 text-[#111111] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#0F4C81]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="hidden sm:inline text-[#DDDDD8]">•</span>
              <div className="text-[#6B6B6B]">
                {PERSONAL_INFO.origin}
              </div>
            </motion.div>

            {/* CTAs with Magnetic Effect & Micro-interactions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton
                id="hero-view-work-btn"
                onClick={scrollToWork}
                data-cursor="OPEN ↗"
                className="inline-block"
              >
                <div className="inline-flex items-center space-x-3 px-6 py-4 bg-[#111111] text-[#F7F7F5] hover:bg-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] group shadow-sm">
                  <span className="transform group-hover:translate-x-0.5 transition-transform">
                    VIEW SELECTED WORK
                  </span>
                  <ArrowDownRight className="w-4 h-4 transform group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton
                id="hero-get-in-touch-btn"
                onClick={onContactClick}
                data-cursor="LET'S TALK"
                className="inline-block"
              >
                <div className="inline-flex items-center space-x-3 px-6 py-4 border border-[#DDDDD8] hover:border-[#111111] text-[#111111] bg-white/40 hover:bg-white transition-all duration-300 text-xs font-bold tracking-[0.2em] group shadow-2xs">
                  <span className="transform group-hover:translate-x-0.5 transition-transform">
                    GET IN TOUCH
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton
                id="hero-download-cv-btn"
                href="/CV_Alexsander_Josse_Sulistio.pdf"
                download="CV_Alexsander_Josse_Sulistio.pdf"
                data-cursor="DOWNLOAD"
                className="inline-block"
              >
                <div className="inline-flex items-center space-x-2.5 px-6 py-4 bg-[#0F4C81]/10 hover:bg-[#0F4C81] text-[#0F4C81] hover:text-white border border-[#0F4C81]/30 hover:border-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] group shadow-2xs">
                  <Download className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD CV</span>
                </div>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait with Masked Curtain Reveal & Subtle Depth */}
          <div ref={portraitContainerRef} className="lg:col-span-5 relative">
            <motion.div
              style={{
                y: imageParallaxY,
                x: mouseOffset.x,
                rotateX: -mouseOffset.y * 0.4,
                rotateY: mouseOffset.x * 0.4,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative group will-change-transform"
            >
              {/* Outer Editorial Framing with Curtain Clip-Path Reveal */}
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)', scale: 1.05, opacity: 0 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden bg-[#E8E8E4] border border-[#DDDDD8] aspect-[4/5] shadow-md"
                data-cursor="VIEW"
              >
                <img
                  src={heroPortrait}
                  alt="Alexsander Josse — Creative Technologist"
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:scale-104 transition-all duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle vignette / tonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 pointer-events-none" />

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
              </motion.div>

              {/* Minimal Accent line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#0F4C81] -z-10 pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
