import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
}

interface Card3DProps {
  program: Program;
  onExplore: () => void;
}

const TiltCard: React.FC<Card3DProps> = ({ program, onExplore }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
    const rotateY = ((x - centerX) / centerX) * 9;  // Max 9 deg

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="group relative flex flex-col justify-between overflow-hidden bg-[#0e0e13] border border-white/10 hover:border-white/30 transition-colors duration-300 will-change-transform shadow-lg cursor-pointer"
      onClick={onExplore}
    >
      {/* Background Photography */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-85 contrast-120"
          loading="lazy"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/40 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-white/15">
            {program.duration} · {program.intensity} INTENSITY
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            {program.category}
          </div>
          <h3 className="font-athletic text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase mt-1 group-hover:text-neutral-100 transition-colors">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mt-2.5 line-clamp-3">
            {program.description}
          </p>
        </div>

        {/* Footer with Explore Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
            View Training Protocol
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExplore();
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-white group-hover:text-black group-hover:bg-white px-3 py-1.5 border border-white/20 group-hover:border-white transition-all uppercase cursor-pointer"
          >
            <span>EXPLORE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="relative py-24 lg:py-32 bg-[#08080a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-neutral-500" />
              <span>SPECIALIZED CURRICULUM</span>
            </div>
            <h2 className="font-athletic text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              TRAIN WITH PURPOSE.
            </h2>
            <p className="mt-4 text-base text-neutral-300 font-normal leading-relaxed">
              Every training discipline at TWS is built on structured progressive overload, sound biomechanics, and measurable physical performance. Choose your focus.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              06 CORE DISCIPLINES
            </span>
          </div>
        </div>

        {/* 6 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROGRAMS.map((program) => (
            <TiltCard
              key={program.id}
              program={program}
              onExplore={() => onSelectProgram(program)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
