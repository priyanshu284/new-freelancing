import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenJoinModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenJoinModal }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-[#070709] border-t border-white/10 overflow-hidden">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 bg-gym-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,60,80,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Monogram tag */}
        <div className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="text-xs font-bold tracking-[0.25em] text-neutral-400 uppercase">
            COMMENCE TRAINING
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-athletic text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase leading-[0.9]">
          READY TO GET STRONGER?
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal max-w-xl mx-auto">
          Your next chapter starts at TWS.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenJoinModal}
            className="group w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 text-xs font-extrabold tracking-widest text-black bg-white hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 shadow-2xl cursor-pointer uppercase"
          >
            <span>JOIN TWS</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 text-xs font-bold tracking-widest text-white border border-white/30 hover:border-white hover:bg-white/5 active:scale-[0.98] transition-all duration-200 uppercase"
          >
            <Mail className="w-4 h-4 mr-2 text-neutral-400" />
            <span>CONTACT US</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
          <span>· COMPLIMENTARY 1-DAY TRIAL PASS</span>
          <span>· COMPREHENSIVE MOVEMENT SCREENING</span>
          <span>· NO CROWDS · STRICT CAPACITY CAP</span>
        </div>

      </div>
    </section>
  );
};
