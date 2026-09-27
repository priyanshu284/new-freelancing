import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="community" className="relative py-24 lg:py-32 bg-[#08080b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-neutral-500" />
            <span>MEMBER PROOF</span>
            <span className="w-6 h-[1px] bg-neutral-500" />
          </div>
          <h2 className="font-athletic text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            BUILT BY THE COMMUNITY.
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-normal leading-relaxed">
            Real outcomes from dedicated athletes who show up every single day to push their baseline further.
          </p>
        </div>

        {/* 3 Structured Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between bg-[#101017] border border-white/10 hover:border-white/25 p-7 sm:p-8 transition-all duration-300 shadow-xl"
            >
              {/* Top Row: Rating & Quote Icon */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* 5 Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-600" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Card Footer: Structured Member Info */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-athletic text-2xl font-bold text-white uppercase tracking-wide">
                    {t.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-300" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 font-medium">
                  {t.title} · <span className="text-neutral-500">{t.duration}</span>
                </div>

                {/* Highlight Result */}
                <div className="mt-3 py-1.5 px-3 bg-neutral-900 border border-white/10 text-xs font-semibold text-neutral-300">
                  Result: <span className="text-white">{t.achievement}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
