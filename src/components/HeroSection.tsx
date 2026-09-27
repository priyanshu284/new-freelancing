import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { HeroPlate3D } from './HeroPlate3D';

interface HeroSectionProps {
  onOpenJoinModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenJoinModal }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax offsets for the background visual
  const bgOffsetX = (mousePos.x - 0.5) * -18;
  const bgOffsetY = (mousePos.y - 0.5) * -14;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 sm:pb-12 overflow-hidden bg-[#08080a]"
    >
      {/* Background Cinematic Visual with Mouse Parallax */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out will-change-transform scale-105"
        style={{
          transform: `translate3d(${bgOffsetX}px, ${bgOffsetY}px, 0)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity filter contrast-125"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/65 to-[#08080a]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-transparent to-[#08080a]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(45,45,60,0.18),transparent_60%)]" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-gym-grid opacity-30 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-neutral-300 uppercase">
                TWS ATHLETIC CLUB · NEW YORK
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-athletic text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[0.9] uppercase select-none">
              BUILD YOUR<br />
              <span className="text-metallic">STRONGEST SELF.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-xl font-normal leading-relaxed">
              {GYM_INFO.heroSupporting}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenJoinModal}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-xs font-extrabold tracking-widest text-black bg-white hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 shadow-xl cursor-pointer uppercase"
              >
                <span>JOIN TWS</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#programs"
                className="group inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-widest text-white border border-white/25 hover:border-white hover:bg-white/5 active:scale-[0.98] transition-all duration-200 uppercase"
              >
                <span>EXPLORE PROGRAMS</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Weight Plate / Dumbbell Element */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[420px]">
            {/* Subtle backlight glow */}
            <div className="absolute w-72 h-72 rounded-full bg-neutral-100/5 blur-3xl pointer-events-none" />
            
            {/* The 3D Rotating & Mouse-Responsive Olympic Weight Plate */}
            <HeroPlate3D mouseXRatio={mousePos.x} mouseYRatio={mousePos.y} />

            {/* Subtle caption beneath 3D plate */}
            <div className="text-center mt-2 pointer-events-none">
              <span className="text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
                CALIBRATED COMPETITION GEAR · 44.1 LBS
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Statistics & Minimal Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/10 pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Key Statistics */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full md:w-auto">
            {GYM_INFO.stats.map((stat) => (
              <div key={stat.label} className="border-l border-white/15 pl-4 sm:pl-6">
                <div className="font-athletic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white tabular-nums leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold tracking-widest text-neutral-400 uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Scroll Indicator */}
          <a
            href="#about"
            className="hidden sm:inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-[11px] font-bold tracking-widest uppercase">
              SCROLL TO EXPLORE
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};
