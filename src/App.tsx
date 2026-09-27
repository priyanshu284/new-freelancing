/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrainersSection } from './components/TrainersSection';
import { GymExperienceSection } from './components/GymExperienceSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { ProgramModal } from './components/ProgramModal';
import { Program } from './types';

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const handleOpenJoinModal = () => {
    setJoinModalOpen(true);
  };

  const handleCloseJoinModal = () => {
    setJoinModalOpen(false);
  };

  const handleSelectProgram = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleCloseProgramModal = () => {
    setSelectedProgram(null);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white selection:bg-neutral-800 selection:text-white relative">
      {/* Sticky Blurred Navbar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Landing Page Flow */}
      <main>
        {/* Full-screen Hero Section with 3D rotating metallic plate & mouse parallax */}
        <HeroSection onOpenJoinModal={handleOpenJoinModal} />

        {/* About Section: MORE THAN A GYM */}
        <AboutSection />

        {/* Programs Section: TRAIN WITH PURPOSE (6 3D tilt cards) */}
        <ProgramsSection onSelectProgram={handleSelectProgram} />

        {/* Trainers Section: MEET YOUR COACHES */}
        <TrainersSection onOpenJoinModal={handleOpenJoinModal} />

        {/* Gym Experience Section: NO EXCUSES. JUST PROGRESS. */}
        <GymExperienceSection />

        {/* Gallery Section: THE TWS EXPERIENCE (asymmetric masonry & lightbox) */}
        <GallerySection />

        {/* Testimonials: BUILT BY THE COMMUNITY */}
        <TestimonialsSection />

        {/* Final CTA: READY TO GET STRONGER? */}
        <FinalCTASection onOpenJoinModal={handleOpenJoinModal} />

        {/* Location & Contact: FIND TWS */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <JoinModal isOpen={joinModalOpen} onClose={handleCloseJoinModal} />
      
      <ProgramModal
        program={selectedProgram}
        onClose={handleCloseProgramModal}
        onOpenJoinModal={() => {
          setSelectedProgram(null);
          setJoinModalOpen(true);
        }}
      />
    </div>
  );
}
