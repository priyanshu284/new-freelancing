import React, { useState } from 'react';
import { X, CheckCircle, Calendar, ShieldCheck, Dumbbell, Sparkles } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trainingFocus: 'Strength Training',
    experienceLevel: 'Intermediate Lifter',
    preferredDate: new Date().toISOString().split('T')[0],
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0f0f15] border border-white/20 text-white shadow-2xl z-10 p-6 sm:p-8 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
          aria-label="Close Join Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-white text-black mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                TWS ATHLETIC PASS ISSUED
              </span>
              <h3 className="font-athletic text-4xl font-bold uppercase text-white">
                WELCOME, {formData.name.toUpperCase()}
              </h3>
            </div>

            <p className="text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Your complimentary 1-Day Training Pass for <span className="text-white font-semibold">{formData.preferredDate}</span> has been confirmed. Present your name and confirmation code at our front desk.
            </p>

            {/* Simulated Pass Code */}
            <div className="bg-neutral-950 border border-white/15 p-4 text-center font-mono">
              <div className="text-[10px] text-neutral-400 uppercase">ACCESS CODE</div>
              <div className="text-2xl font-bold tracking-widest text-white mt-1">
                TWS-NYC-{(Math.random() * 8999 + 1000).toFixed(0)}
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">
                Includes full facility access, locker suite, and recovery amenities
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3.5 bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                DONE
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Header */}
            <div className="border-b border-white/10 pb-4 pr-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                <Dumbbell className="w-3.5 h-3.5 text-white" />
                <span>MEMBERSHIP INQUIRY & PASS</span>
              </div>
              <h3 className="font-athletic text-3xl sm:text-4xl font-bold text-white uppercase mt-1 leading-none">
                JOIN THE TWS COMMUNITY.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1.5">
                Experience the facility with a complimentary training pass and movement consultation.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-neutral-400">FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Hayes"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a0a0e] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400">EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0e] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400">PHONE NUMBER</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0a0a0e] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400">PRIMARY FOCUS</label>
                  <select
                    value={formData.trainingFocus}
                    onChange={(e) => setFormData({ ...formData, trainingFocus: e.target.value })}
                    className="w-full bg-[#0a0a0e] border border-white/15 px-3 py-2.5 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Strength Training">Strength Training</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Cardio Conditioning">Cardio Conditioning</option>
                    <option value="Functional Athletics">Functional Athletics</option>
                    <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                    <option value="CrossFit / WOD">CrossFit / WOD</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-neutral-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>PREFERRED VISIT DATE</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#0a0a0e] border border-white/15 px-3 py-2 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-3 bg-neutral-950 border border-white/10 flex items-center gap-2.5 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Strict capacity cap · High-performance environment · No obligations</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                <span>CLAIM COMPLIMENTARY PASS</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
