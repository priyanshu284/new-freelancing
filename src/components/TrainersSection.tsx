import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, Award, CheckCircle } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { Trainer } from '../types';

interface TrainersSectionProps {
  onOpenJoinModal: () => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onOpenJoinModal }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="relative py-24 lg:py-32 bg-[#0a0a0e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-neutral-500" />
              <span>ELITE ATHLETIC FACULTY</span>
            </div>
            <h2 className="font-athletic text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
              MEET YOUR COACHES.
            </h2>
            <p className="mt-4 text-base text-neutral-300 font-normal leading-relaxed">
              Our coaching staff is comprised of collegiate strength specialists, competitive lifters, and certified mobility clinicians. No junior interns. Only proven practitioners.
            </p>
          </div>

          <button
            onClick={onOpenJoinModal}
            className="self-start md:self-auto text-xs font-bold tracking-widest text-neutral-300 hover:text-white border border-white/20 hover:border-white px-5 py-3 transition-colors uppercase cursor-pointer"
          >
            REQUEST 1-ON-1 COACHING
          </button>
        </div>

        {/* 4 Trainer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative flex flex-col bg-[#111117] border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg"
            >
              {/* Trainer Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                  loading="lazy"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111117] via-transparent to-black/20" />

                {/* Experience Tag */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/15 px-2.5 py-1">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase">
                    {trainer.experience}
                  </span>
                </div>

                {/* Social Links Bar on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {trainer.socials.instagram && (
                    <a
                      href={trainer.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-none bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      aria-label={`${trainer.name} on Instagram`}
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.twitter && (
                    <a
                      href={trainer.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-none bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      aria-label={`${trainer.name} on Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.youtube && (
                    <a
                      href={trainer.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-none bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                      aria-label={`${trainer.name} on YouTube`}
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Info Block */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    {trainer.role}
                  </div>
                  <h3 className="font-athletic text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase mt-0.5">
                    {trainer.name}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-300 mt-1">
                    {trainer.specialization}
                  </div>
                  <p className="text-xs text-neutral-400 italic mt-3 line-clamp-2">
                    "{trainer.quote}"
                  </p>
                </div>

                {/* View Details Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedTrainer(trainer)}
                    className="text-xs font-bold tracking-wider text-neutral-300 hover:text-white uppercase inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>CREDENTIALS</span>
                    <Award className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                  <button
                    onClick={onOpenJoinModal}
                    className="text-[11px] font-bold tracking-widest text-white hover:underline uppercase cursor-pointer"
                  >
                    TRAIN WITH {trainer.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Trainer Credentials Modal */}
      {selectedTrainer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#111117] border border-white/20 p-7 text-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-neutral-400">{selectedTrainer.role}</span>
                <h3 className="font-athletic text-3xl font-bold text-white uppercase">{selectedTrainer.name}</h3>
                <div className="text-xs text-neutral-300 font-semibold">{selectedTrainer.specialization}</div>
              </div>
              <button
                onClick={() => setSelectedTrainer(null)}
                className="text-neutral-400 hover:text-white text-lg p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  BACKGROUND & PHILOSOPHY
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{selectedTrainer.quote}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                  CERTIFICATIONS & HONORS
                </h4>
                <div className="space-y-2">
                  {selectedTrainer.certifications.map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-200 bg-neutral-900/80 p-2.5 border border-white/10">
                      <CheckCircle className="w-4 h-4 text-white shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex gap-3">
              <button
                onClick={() => {
                  setSelectedTrainer(null);
                  onOpenJoinModal();
                }}
                className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                BOOK SESSION WITH {selectedTrainer.name.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
