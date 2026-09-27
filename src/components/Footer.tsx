import React from 'react';
import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'TRAINERS', href: '#trainers' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 text-white overflow-hidden pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Massive TWS Logo & Brand Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-8">
          <div>
            <div className="font-display font-black text-7xl sm:text-8xl md:text-9xl tracking-tighter text-white select-none leading-none">
              TWS
            </div>
            <p className="font-athletic text-2xl sm:text-3xl font-bold tracking-wider text-neutral-300 uppercase mt-2">
              "{GYM_INFO.tagline}"
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              COMMUNITY & NETWORK
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TWS Gym on Instagram"
                className="w-10 h-10 border border-white/20 bg-neutral-900/60 hover:bg-white hover:text-black flex items-center justify-center transition-colors text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TWS Gym on Facebook"
                className="w-10 h-10 border border-white/20 bg-neutral-900/60 hover:bg-white hover:text-black flex items-center justify-center transition-colors text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TWS Gym on YouTube"
                className="w-10 h-10 border border-white/20 bg-neutral-900/60 hover:bg-white hover:text-black flex items-center justify-center transition-colors text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation & Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-b border-white/10 items-center">
          
          {/* Navigation Links */}
          <div className="md:col-span-8 flex flex-wrap items-center gap-6 sm:gap-9">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold tracking-widest text-neutral-300 hover:text-white transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div className="md:col-span-4 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white group cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <div className="w-7 h-7 rounded-none border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom Section: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} TWS ATHLETIC CLUB. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY PROTOCOL</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS OF ATHLETIC ACCESS</span>
            <span>·</span>
            <span className="text-neutral-400">{GYM_INFO.address.split(',')[1]}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
