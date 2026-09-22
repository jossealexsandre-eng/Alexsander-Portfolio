import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PhotoItem } from '../types';
import { GALLERY_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import { MagneticButton } from './MagneticButton';

export const CreativeGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Nature', 'Portrait', 'Personal'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedPhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhotoIndex, filteredItems.length]);

  const currentPhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  return (
    <section id="creative" className="py-24 md:py-36 bg-[#F7F7F5] border-b border-[#DDDDD8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <SectionHeader
          number="03"
          label="CREATIVE"
          title="Through My Lens"
          description="Photography and visual stories shaped by people, places, movement, and moments."
          align="between"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-photo-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold tracking-[0.18em] uppercase px-4 py-2.5 transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-[#F7F7F5] border-[#111111] shadow-2xs'
                    : 'bg-transparent text-[#6B6B6B] border-[#DDDDD8] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Uniform Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((photo, index) => (
            <motion.div
              key={photo.id}
              id={`gallery-item-${photo.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedPhotoIndex(index)}
              data-cursor="EXPLORE"
              className="group relative overflow-hidden bg-[#E8E8E4] border border-[#DDDDD8] cursor-pointer aspect-[3/4] w-full shadow-2xs"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                loading="lazy"
              />

              {/* Editorial Hover Information Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-1">
                    {photo.category}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/90" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight">
                    {photo.title}
                  </h3>
                  {photo.location && (
                    <p className="text-xs text-white/70 font-mono">
                      {photo.location} {photo.year && `• ${photo.year}`}
                    </p>
                  )}
                  {photo.cameraInfo && (
                    <p className="text-[10px] text-white/50 font-mono tracking-widest italic">
                      {photo.cameraInfo}
                    </p>
                  )}
                </div>
              </div>

              {/* Subtle persistent category tag */}
              <div className="absolute bottom-3 left-3 bg-[#F7F7F5]/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-mono tracking-wider text-[#111111] uppercase border border-[#DDDDD8] group-hover:opacity-0 transition-opacity">
                {photo.category}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 15 — Photography Portfolio Link */}
        <div className="mt-20 pt-16 border-t border-[#DDDDD8] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-1">
              Visual Archive
            </span>
            <p className="text-xl sm:text-2xl font-black tracking-tight text-[#111111] uppercase">
              MORE VISUAL STORIES
            </p>
          </div>

          <MagneticButton
            id="view-photography-portfolio-link"
            href={PERSONAL_INFO.socials.photographyInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN ↗"
            className="self-start sm:self-auto"
          >
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-[#111111] text-[#F7F7F5] hover:bg-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] group shadow-sm">
              <span>VIEW PHOTOGRAPHY PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </MagneticButton>
        </div>
      </div>

      {/* Fullscreen Cinematic Editorial Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && currentPhoto && (
          <motion.div
            id="photo-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8 text-white select-none"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Lightbox Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between pb-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono tracking-widest text-[#0F4C81] uppercase font-bold bg-white/10 px-2.5 py-1">
                  {currentPhoto.category}
                </span>
                <span className="text-xs font-mono text-white/60">
                  {selectedPhotoIndex + 1} / {filteredItems.length}
                </span>
              </div>

              <button
                id="lightbox-close-btn"
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Lightbox Center Content with Graceful Image Expansion */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex(
                    (selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length
                  );
                }}
                className="absolute left-2 sm:left-6 z-10 p-3 bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Previous photograph"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-5xl max-h-[75vh] flex items-center justify-center p-2"
              >
                <img
                  src={currentPhoto.imageUrl}
                  alt={currentPhoto.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
                }}
                className="absolute right-2 sm:right-6 z-10 p-3 bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Next photograph"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="text-base font-bold tracking-tight text-white mb-0.5">
                  {currentPhoto.title}
                </h4>
                <p className="text-white/70 max-w-2xl leading-relaxed">
                  {currentPhoto.caption}
                </p>
              </div>

              <div className="flex items-center space-x-4 font-mono text-white/50 text-[11px]">
                {currentPhoto.location && <span>{currentPhoto.location}</span>}
                {currentPhoto.cameraInfo && <span>• {currentPhoto.cameraInfo}</span>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
