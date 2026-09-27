import React, { useEffect, useState } from 'react';

export const GymExperienceSection: React.FC = () => {
  const [scrollYOffset, setScrollYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Parallax scroll factor
      const el = document.getElementById('experience');
      if (el) {
        const rect = el.getBoundingClientRect();
        const factor = (rect.top / window.innerHeight) * 45;
        setScrollYOffset(factor);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full py-32 sm:py-40 lg:py-48 overflow-hidden bg-[#070709] border-y border-white/10 flex items-center justify-center text-center"
    >
      {/* Cinematic Parallax Background Image */}
      <div
        className="absolute inset-0 z-0 will-change-transform scale-110 pointer-events-none"
        style={{
          transform: `translate3d(0, ${scrollYOffset}px, 0)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div
          className="w-full h-full bg-cover bg-center filter contrast-125 brightness-60"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        {/* Deep Dark Scrim Overlays for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-[#070709]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-gym-grid opacity-25 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Subtle Brand Watermark Monogram */}
        <div className="inline-flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-white/30" />
          <span className="text-xs font-extrabold tracking-[0.3em] text-neutral-300 uppercase">
            TWS CULTURE
          </span>
          <span className="h-[1px] w-12 bg-white/30" />
        </div>

        {/* Hero Overlay Text */}
        <h2 className="font-athletic text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white uppercase leading-[0.88] select-none">
          NO EXCUSES.<br />
          <span className="text-metallic">JUST PROGRESS.</span>
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-medium max-w-xl mx-auto tracking-wide">
          Every session is another step forward.
        </p>

        {/* Atmospheric Pillars */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono tracking-widest text-neutral-400 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>PROGRESSIVE OVERLOAD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>ZERO DISTRACTIONS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>UNCOMPROMISING STANDARDS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
