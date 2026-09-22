import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Check if already shown in this tab session
    const hasLoaded = sessionStorage.getItem('aj_loader_shown');
    const displayDuration = hasLoaded ? 800 : 1250;

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('aj_loader_shown', 'true');
      onComplete?.();
    }, displayDuration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cinematic-page-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F7F7F5] pointer-events-none select-none px-6"
        >
          <div className="flex flex-col items-center max-w-md w-full text-center">
            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl font-black tracking-[0.25em] text-[#111111] uppercase mb-3"
            >
              ALEX JOSSE
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#6B6B6B] uppercase max-w-xs leading-relaxed"
            >
              CREATIVE TECHNOLOGIST &amp; VISUAL CONTENT CREATOR
            </motion.p>

            {/* Expanding Horizontal Accent Line */}
            <div className="w-24 sm:w-32 h-[1px] bg-[#DDDDD8] mt-6 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full bg-[#0F4C81] origin-left"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
