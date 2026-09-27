import React from 'react';
import { X, CheckCircle2, Clock, Activity, Target } from 'lucide-react';
import { Program } from '../types';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onOpenJoinModal: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onOpenJoinModal,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0e0e13] border border-white/20 text-white shadow-2xl z-10 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-[#0e0e13]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              {program.category}
            </span>
            <h3 className="font-athletic text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-none mt-1">
              {program.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              {program.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Meta Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-400">SESSION DURATION</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{program.duration}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-neutral-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-400">INTENSITY LEVEL</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{program.intensity}</div>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <Target className="w-4 h-4 text-neutral-400 shrink-0" />
              <div>
                <div className="text-[10px] font-mono uppercase text-neutral-400">PRIMARY FOCUS</div>
                <div className="text-xs sm:text-sm font-semibold text-white">{program.category}</div>
              </div>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              PROGRAM OVERVIEW
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Target Goals & Outcomes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              KEY OUTCOMES & ADAPTATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.targetGoals.map((goal, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200 bg-neutral-900/60 p-2.5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule & Equipment Highlights */}
          <div className="bg-neutral-950 p-4 border border-white/10 space-y-2">
            <div className="text-[11px] font-mono uppercase text-neutral-400">FACILITY HIGHLIGHTS</div>
            <div className="flex flex-wrap gap-2">
              {program.features.map((feat, i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-neutral-900 border border-white/15 text-neutral-300">
                  {feat}
                </span>
              ))}
            </div>
            <div className="text-xs text-neutral-400 pt-2 border-t border-white/10">
              Schedule: <span className="text-neutral-200 font-medium">{program.scheduleHighlights}</span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenJoinModal();
              }}
              className="flex-1 py-3.5 px-6 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-widest text-center transition-colors cursor-pointer"
            >
              ENROLL IN THIS PROGRAM
            </button>
            <button
              onClick={onClose}
              className="py-3.5 px-6 border border-white/20 hover:border-white text-white font-bold text-xs uppercase tracking-widest text-center transition-colors cursor-pointer"
            >
              BACK TO OVERVIEW
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
