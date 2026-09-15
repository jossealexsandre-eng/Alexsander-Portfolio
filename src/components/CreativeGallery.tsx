import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { PhotoItem } from '../types';
import { GALLERY_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-8 border-b border-[#DDDDD8]">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#6B6B6B] uppercase block mb-3">
              03 — CREATIVE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] tracking-tight uppercase">
              Through My Lens
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm md:text-base text-[#6B6B6B] max-w-md">
            Photography and visual stories shaped by people, places, movement, and moments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-photo-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-bold tracking-[0.18em] uppercase px-4 py-2.5 transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#111111] text-[#F7F7F5] border-[#111111]'
                    : 'bg-transparent text-[#6B6B6B] border-[#DDDDD8] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Uniform Grid — perfectly aligned and consistent dimensions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((photo, index) => (
            <div
              key={photo.id}
              id={`gallery-item-${photo.id}`}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative overflow-hidden bg-[#E8E8E4] border border-[#DDDDD8] cursor-pointer aspect-[3/4] w-full"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Editorial Hover Information Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-sm px-2.5 py-1">
                    {photo.category}
                  </span>
                  <Maximize2 className="w-4 h-4 text-white/80" />
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
              <div className="absolute bottom-3 left-3 bg-[#F7F7F5]/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-mono tracking-wider text-[#111111] uppercase border border-[#DDDDD8] group-hover:opacity-0 transition-opacity">
                {photo.category}
              </div>
            </div>
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

          <a
            id="view-photography-portfolio-link"
            href={PERSONAL_INFO.socials.photographyInstagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#111111] text-[#F7F7F5] hover:bg-[#0F4C81] transition-all duration-300 text-xs font-bold tracking-[0.2em] group self-start sm:self-auto"
          >
            <span>VIEW PHOTOGRAPHY PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Fullscreen Editorial Lightbox */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div
          id="photo-lightbox-modal"
          className="fixed inset-0 z-50 bg-[#111111]/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in text-white"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
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
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Content */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Previous Button */}
            <button
              id="lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex(
                  (selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length
                );
              }}
              className="absolute left-2 sm:left-6 z-10 p-3 bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-colors"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="max-w-5xl max-h-[75vh] flex items-center justify-center">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-h-[75vh] w-auto max-w-full object-contain border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Button */}
            <button
              id="lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
              }}
              className="absolute right-2 sm:right-6 z-10 p-3 bg-black/40 hover:bg-black/80 text-white border border-white/20 transition-colors"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
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
          </div>
        </div>
      )}
    </section>
  );
};
