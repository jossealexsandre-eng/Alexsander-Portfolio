import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  maxOffset?: number;
  id?: string;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  'data-cursor'?: string;
  title?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  maxOffset = 8,
  id,
  href,
  download,
  target,
  rel,
  'data-cursor': dataCursor,
  title,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsSupported(fine && !reduced);
  }, []);

  const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isSupported || !ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Constrain offset to maxOffset
    const distance = Math.hypot(deltaX, deltaY);
    const angle = Math.atan2(deltaY, deltaX);
    const clampedDist = Math.min(distance * 0.28, maxOffset);

    setPosition({
      x: Math.cos(angle) * clampedDist,
      y: Math.sin(angle) * clampedDist,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.2 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onClick}
        data-cursor={dataCursor}
        title={title}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      data-cursor={dataCursor}
      title={title}
      className={className}
    >
      {content}
    </button>
  );
};
