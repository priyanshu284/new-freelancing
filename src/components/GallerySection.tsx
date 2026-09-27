import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'ALL SPACES' },
    { id: 'weight-training', label: 'WEIGHT TRAINING' },
    { id: 'cardio', label: 'CARDIO DECK' },
    { id: 'equipment', label: 'EQUIPMENT' },
    { id: 'interior', label: 'FACILITY INTERIOR' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#09090c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-neutral-500" />
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="font-athletic text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              THE TWS EXPERIENCE.
            </h2>
            <p className="mt-4 text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              An architectural marriage of raw industrial steel, competition-spec barbell stations, and performance conditioning technology.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900 border border-white/10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-2 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-white text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            const isSpanTwo = item.aspect === 'wide' && (index === 0 || index === 3);

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer ${
                  isSpanTwo ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3] sm:aspect-square'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-90 contrast-115"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Maximize Button */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Category Badge & Caption */}
                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-athletic text-2xl font-bold text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-8">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 bg-neutral-900 border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-20 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black transition-colors z-20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain border border-white/20 shadow-2xl"
            />
            <div className="text-center mt-4">
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                {filteredItems[lightboxIndex].categoryLabel} · {lightboxIndex + 1} OF {filteredItems.length}
              </span>
              <h4 className="font-athletic text-3xl font-bold text-white uppercase mt-0.5">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-sm text-neutral-300 max-w-lg mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
