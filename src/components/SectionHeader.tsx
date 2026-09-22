import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface SectionHeaderProps {
  number: string;
  label: string;
  title?: string;
  description?: string;
  className?: string;
  align?: 'left' | 'between';
  extraRight?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  label,
  title,
  description,
  className = '',
  align = 'left',
  extraRight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle typography parallax for large titles
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <div ref={containerRef} className={`mb-12 md:mb-16 ${className}`}>
      {/* Editorial Number & Label with Expanding Line */}
      <div className="flex items-center space-x-4 mb-4">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase shrink-0"
        >
          {number} — {label}
        </motion.span>

        {/* Thin expanding accent line */}
        <div className="flex-1 h-[1px] bg-[#DDDDD8]/60 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full bg-[#DDDDD8] origin-left"
          />
        </div>
      </div>

      {/* Main Heading & Description */}
      {title && (
        <div
          className={`flex flex-col ${
            align === 'between'
              ? 'md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DDDDD8]'
              : 'space-y-4'
          }`}
        >
          <motion.h2
            style={{ y: headingY }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase"
          >
            {title}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base text-[#6B6B6B] max-w-md leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {extraRight && (
            <div className="mt-4 md:mt-0">{extraRight}</div>
          )}
        </div>
      )}
    </div>
  );
};
