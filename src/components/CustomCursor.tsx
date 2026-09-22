import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion preference
    const mediaFine = window.matchMedia('(pointer: fine)');
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaFine.matches || mediaReduced.matches) {
      return;
    }

    setIsEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const handlePointerMove = (e: PointerEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check for elements with data-cursor attribute or interactive roles
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor');
        setCursorText(text || null);
        setIsHovered(true);
      } else {
        setCursorText(null);
        const isClickable = target.closest('a, button, [role="button"], input, textarea, select');
        setIsHovered(!!isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Smooth Lerp loop for luxury cursor lagging
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      // Direct dot positioning
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Smooth trailing ring
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isVisible]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Lead Dot */}
      <div
        ref={dotRef}
        style={{ opacity: isVisible && !cursorText ? 1 : 0 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#111111] transition-opacity duration-200 pointer-events-none"
      />

      {/* Trailing Responsive Ring / Text Capsule */}
      <div
        ref={ringRef}
        style={{ opacity: isVisible ? 1 : 0 }}
        className="fixed top-0 left-0 transition-opacity duration-200 pointer-events-none flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {cursorText ? (
            /* Contextual Badge Pill */
            <motion.div
              key="badge"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111111]/90 backdrop-blur-xs text-[#F7F7F5] px-3.5 py-1.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap"
            >
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase select-none">
                {cursorText}
              </span>
            </motion.div>
          ) : (
            /* Ambient Ring */
            <motion.div
              key="ring"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: isHovered ? 1.5 : 1,
                opacity: isHovered ? 0.75 : 0.45,
                borderColor: isHovered ? '#0F4C81' : '#111111',
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-8 h-8 rounded-full border border-[#111111]/40"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
