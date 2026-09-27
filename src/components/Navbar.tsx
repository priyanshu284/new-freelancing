import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'TRAINERS', href: '#trainers' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: TWS Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 tracking-tighter focus:outline-none"
        >
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-700 p-[1px] shadow-sm">
            <div className="w-full h-full bg-[#0a0a0d] flex items-center justify-center">
              <span className="font-display font-extrabold text-xs tracking-wider text-white">T</span>
            </div>
          </div>
          <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            TWS
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold tracking-wider text-neutral-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: JOIN NOW CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider text-black bg-white rounded-none hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 shadow-md whitespace-nowrap cursor-pointer uppercase"
          >
            <span>JOIN NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white rounded-none border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0c10]/98 backdrop-blur-xl px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest text-neutral-300 hover:text-white transition-colors py-2 border-b border-neutral-800/60"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center py-3 text-xs font-bold tracking-wider text-black bg-white hover:bg-neutral-200 uppercase"
              >
                JOIN NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
