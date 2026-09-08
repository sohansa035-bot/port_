import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ArchitectureMatrix } from './components/ArchitectureMatrix';
import { SelectedWork } from './components/SelectedWork';
import { ExperienceSection } from './components/ExperienceSection';
import { LeadershipSection } from './components/LeadershipSection';
import { TechnicalStack } from './components/TechnicalStack';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { QuickBioModal } from './components/QuickBioModal';
import { Project } from './types';

export default function App() {
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [quickBioOpen, setQuickBioOpen] = useState(false);

  // Smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const sections = ['hero', 'about', 'build', 'work', 'experience', 'leadership', 'stack', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0e15] text-[#e1e2ec] font-body relative selection:bg-[#ff8a65]/30 selection:text-[#22d3ee]">
      {/* Interactive System Boot Preloader */}
      <Preloader
        active={preloaderActive}
        onDismiss={() => setPreloaderActive(false)}
      />

      {/* Persistent Glassmorphism Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuickBio={() => setQuickBioOpen(true)}
        onRestartPreloader={() => setPreloaderActive(true)}
      />

      {/* Main Content Sections */}
      <main className="pt-16 sm:pt-20">
        {/* Section 00: Hero & Telemetry Stage */}
        <Hero onExploreWork={() => handleNavigate('work')} />

        {/* Section 01: Foundation / About */}
        <AboutSection />

        {/* Section 02: Architecture Matrix (What I Build) */}
        <ArchitectureMatrix />

        {/* Section 03: Selected Work / Indexed Repositories */}
        <SelectedWork onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* Section 04: Trajectory / Experience */}
        <ExperienceSection />

        {/* Section 05: Community Impact / Leadership */}
        <LeadershipSection />

        {/* Section 06: Instrumentation / Technical Stack */}
        <TechnicalStack />

        {/* Section 07: Transmission / Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Deep-Dive Architecture & Simulation Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Quick Bio Profile Card Modal */}
      <QuickBioModal
        isOpen={quickBioOpen}
        onClose={() => setQuickBioOpen(false)}
        onContactClick={() => handleNavigate('contact')}
      />
    </div>
  );
}
