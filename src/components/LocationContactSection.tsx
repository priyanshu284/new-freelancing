import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, Car, Train } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LocationContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Strength & Muscle',
    message: ''
  });
  const [directionsModalOpen, setDirectionsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#09090d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-neutral-500" />
            <span>HEADQUARTERS & INQUIRIES</span>
          </div>
          <h2 className="font-athletic text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-none">
            FIND TWS.
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-normal leading-relaxed">
            Located in the heart of the Power District. Drop in for a facility tour or send a direct inquiry to speak with our head coaching staff.
          </p>
        </div>

        {/* 2 Column Layout: Info & Map on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: TWS Gym Info & Sleek Dark Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-[#101017] border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    ATHLETIC FACILITY
                  </span>
                  <h3 className="font-athletic text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                    TWS GYM
                  </h3>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white bg-neutral-900 border border-white/20 px-2.5 py-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN 24/7
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">ADDRESS</div>
                    <div className="text-white font-medium mt-0.5">{GYM_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">PHONE</div>
                    <a href={`tel:${GYM_INFO.phone}`} className="text-white font-medium mt-0.5 hover:underline block">
                      {GYM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">EMAIL</div>
                    <a href={`mailto:${GYM_INFO.email}`} className="text-white font-medium mt-0.5 hover:underline block">
                      {GYM_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-neutral-400 uppercase">OPERATING HOURS</div>
                    <div className="text-white font-medium mt-0.5">{GYM_INFO.hours}</div>
                    <div className="text-xs text-neutral-400 mt-1">{GYM_INFO.staffedHours}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Location */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <button
                  onClick={() => setDirectionsModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS</span>
                </button>

                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:border-white transition-colors"
                >
                  <span>CONTACT US</span>
                </a>
              </div>
            </div>

            {/* Sleek Dark Map Placeholder Canvas */}
            <div className="relative aspect-[16/9] w-full bg-[#121219] border border-white/10 overflow-hidden group">
              {/* Map grid simulation */}
              <div className="absolute inset-0 bg-gym-grid opacity-40" />
              
              {/* Stylized road & block outlines */}
              <svg className="w-full h-full opacity-30 stroke-neutral-600" viewBox="0 0 600 350" fill="none">
                <path d="M0 80 Q 200 90 400 60 T 600 120" strokeWidth="6" />
                <path d="M120 0 L 160 350" strokeWidth="8" />
                <path d="M380 0 L 360 350" strokeWidth="10" />
                <path d="M0 240 L 600 240" strokeWidth="8" />
                <path d="M220 120 L 500 220" strokeWidth="4" />
                <rect x="220" y="90" width="120" height="90" fill="#1c1c24" stroke="none" />
                <rect x="380" y="160" width="100" height="70" fill="#1c1c24" stroke="none" />
              </svg>

              {/* Glowing Gym Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 animate-ping absolute inset-0" />
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-black font-display text-xs shadow-xl relative z-10 border-2 border-black">
                    TWS
                  </div>
                </div>
                <div className="mt-2 bg-black/90 backdrop-blur-md px-3 py-1 border border-white/20 text-center">
                  <div className="font-athletic text-base font-bold text-white uppercase leading-none">
                    TWS ATHLETIC CLUB
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono">104 IRONWORKS BLVD</div>
                </div>
              </div>

              {/* Map Controls Overlay */}
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-[10px] font-mono text-neutral-300">
                LAT 40.7306° N · LON 74.0048° W
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div id="contact-form" className="lg:col-span-6">
            <div className="bg-[#101017] border border-white/10 p-6 sm:p-8 relative">
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                  DIRECT LINE
                </span>
                <h3 className="font-athletic text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                  SEND AN INQUIRY
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                  Fill in your details below and an executive fitness director will respond within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-white text-black mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-athletic text-3xl font-bold text-white uppercase">
                    INQUIRY RECEIVED
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our team at TWS has received your transmission and will be in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', goal: 'Strength & Muscle', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 border border-white/20 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white transition-colors cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Miller"
                        className="w-full bg-[#0a0a0e] border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@example.com"
                        className="w-full bg-[#0a0a0e] border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#0a0a0e] border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                        PRIMARY GOAL
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-[#0a0a0e] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                      >
                        <option value="Strength & Muscle">Strength & Powerlifting</option>
                        <option value="Hypertrophy">Hypertrophy & Physique</option>
                        <option value="Cardio Conditioning">Cardio & VO2 Conditioning</option>
                        <option value="Functional / CrossFit">Functional Athletics & CrossFit</option>
                        <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching</option>
                        <option value="Facility Tour">General Facility Tour</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                      MESSAGE OR TRAINING BACKGROUND
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current training routine, goals, or any specific questions..."
                      className="w-full bg-[#0a0a0e] border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-neutral-400 text-center pt-2 font-mono">
                    Direct access · No automated call center bots
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Directions Modal */}
      {directionsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#111117] border border-white/20 p-6 text-white shadow-2xl space-y-5">
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-400">NAVIGATION</span>
                <h4 className="font-athletic text-2xl font-bold uppercase">DIRECTIONS TO TWS</h4>
              </div>
              <button
                onClick={() => setDirectionsModalOpen(false)}
                className="text-neutral-400 hover:text-white p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-neutral-300">
              <div className="flex items-start gap-3 bg-neutral-900/70 p-3 border border-white/10">
                <Car className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-[11px]">BY VEHICLE & PARKING</div>
                  <p className="mt-0.5 leading-relaxed text-neutral-400">
                    Accessible via West Side Highway & Exit 4B. TWS members enjoy validated 2-hour underground parking at 112 Ironworks Garage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-900/70 p-3 border border-white/10">
                <Train className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-[11px]">PUBLIC TRANSIT</div>
                  <p className="mt-0.5 leading-relaxed text-neutral-400">
                    2 blocks west from 14th St Subway Station (A, C, E, L, 1, 2, 3 trains).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-neutral-900/70 p-3 border border-white/10">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-[11px]">KEYCARD ACCESS</div>
                  <p className="mt-0.5 leading-relaxed text-neutral-400">
                    Members use the digital Bluetooth key in the TWS Gym Member App for 24/7 exterior turnstile unlocking.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setDirectionsModalOpen(false)}
              className="w-full py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              CLOSE DIRECTIONS
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
