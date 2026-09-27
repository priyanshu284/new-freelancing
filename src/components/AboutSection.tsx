import React, { useState } from 'react';
import { Shield, Zap, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strength' | 'discipline' | 'community'>('strength');

  const featureBlocks = [
    {
      id: 'strength',
      title: 'STRENGTH',
      description: 'Build power and functional strength.',
      details: 'We believe genuine strength is holistic—rooted in progressive barbell mechanics, reinforced joints, and an unshakeable central nervous system. Every piece of equipment at TWS has been hand-selected to optimize mechanical leverage and safety.',
      bullets: [
        'Competition-calibrated racks & Olympic steel',
        'Systematic progressive overload training logs',
        'Biomechanical alignment for lifetime joint health'
      ],
      icon: Zap
    },
    {
      id: 'discipline',
      title: 'DISCIPLINE',
      description: 'Create habits that last.',
      details: 'Motivation is fleeting; discipline is enduring. At TWS, we train the mind to embrace resistance, honor the early mornings, and measure success through repeatable consistency rather than temporary enthusiasm.',
      bullets: [
        '24/7 keycard access for non-negotiable schedules',
        'Structured programming that removes guesswork',
        'Habit-forming coaching and accountability protocols'
      ],
      icon: Shield
    },
    {
      id: 'community',
      title: 'COMMUNITY',
      description: 'Train alongside people who push you forward.',
      details: 'Culture dictates altitude. When you step into TWS, you join an uncompromising collective of lifters, endurance athletes, and driven individuals who celebrate your personal records as fiercely as their own.',
      bullets: [
        'Zero-ego, high-support gym culture',
        'Monthly internal lifting & endurance showcases',
        'Dedicated member lounge and recovery spaces'
      ],
      icon: Users
    }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0d] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-neutral-500" />
            <span>THE TWS ETHOS</span>
          </div>
          <h2 className="font-athletic text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            MORE THAN A GYM.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            TWS was founded on a singular principle: fitness is not a commercial chore—it is an athletic craft. We strip away the loud distractions, commercial gimmicks, and crowded waiting lines to give you an uncompromising environment engineered for physical and mental dominance.
          </p>
        </div>

        {/* Grid: Visual & Brand Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Large Gym Image with Dark Luxury Border & Floating Badge */}
          <div className="lg:col-span-6 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                alt="TWS Gym Facility Floor"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 contrast-115"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-transparent to-black/20" />
              
              {/* Overlay Quality Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#0f0f14]/90 backdrop-blur-md border border-white/10 p-4 sm:max-w-xs shadow-xl">
                <div className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase">
                  FACILITY SPECIFICATION
                </div>
                <div className="font-display text-sm font-bold text-white mt-1">
                  18,000 SQ FT ELITE TRAINING FLOOR
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Eleiko, Rogue, Prime Fitness & Woodway equipped
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Feature Blocks with Interactive Focus */}
          <div className="lg:col-span-6 space-y-4">
            {featureBlocks.map((block) => {
              const isSelected = activeTab === block.id;
              const Icon = block.icon;
              
              return (
                <div
                  key={block.id}
                  onClick={() => setActiveTab(block.id as any)}
                  className={`cursor-pointer border transition-all duration-300 p-6 sm:p-7 relative ${
                    isSelected
                      ? 'bg-[#121218] border-white/30 shadow-xl'
                      : 'bg-[#0d0d12]/50 border-white/10 hover:border-white/20 hover:bg-[#101016]'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div
                      className={`w-11 h-11 shrink-0 flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-white text-black border-white'
                          : 'bg-neutral-900 text-neutral-400 border-white/15'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-athletic text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase">
                          {block.title}
                        </h3>
                        <span className="text-[11px] font-mono text-neutral-400">
                          {block.id === 'strength' ? '01' : block.id === 'discipline' ? '02' : '03'}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-neutral-200 mt-1">
                        {block.description}
                      </p>

                      {isSelected && (
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-3 animate-in fade-in duration-300">
                          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                            {block.details}
                          </p>
                          <div className="space-y-1.5 pt-1">
                            {block.bullets.map((b, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
