import React, { useState, useEffect } from 'react';
import { User, Menu, X, Terminal, Cpu } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenQuickBio: () => void;
  onRestartPreloader: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenQuickBio,
  onRestartPreloader
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'build', label: 'Build' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'stack', label: 'Stack' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none pt-2.5 md:pt-4 transition-all">
      <div className="pointer-events-auto h-14 max-w-[84rem] w-full px-4 md:px-6 flex items-center justify-between gap-2">
        {/* Left Telemetry Capsule */}
        <div className="flex items-center gap-2 bg-[#10131a]/85 backdrop-blur-xl border border-[#ff8a65]/20 px-3.5 h-11 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-orange-200/90 whitespace-nowrap font-medium">
            SYS.OK <span className="text-cyan-400 font-bold">//</span> BLR, IN
          </span>
          <button
            onClick={onRestartPreloader}
            title="Re-run Diagnostics Boot Sequence"
            className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-cyan-300 ml-1 border-l border-white/10 pl-2 transition-colors cursor-pointer"
          >
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>DIAG</span>
          </button>
        </div>

        {/* Desktop Central Navigation Pill */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 bg-[#10131a]/90 backdrop-blur-xl border border-white/10 p-1 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-bold shadow-[0_0_15px_rgba(255,138,101,0.35)]'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2">
          {/* Quick Dossier Profile Orb */}
          <button
            type="button"
            onClick={onOpenQuickBio}
            title="Open Student Profile Dossier"
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8a65]/30 to-[#22d3ee]/30 border border-[#ff8a65]/40 hover:border-cyan-400 flex items-center justify-center text-orange-200 hover:text-white shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <User className="w-4 h-4 text-cyan-300" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#10131a]/90 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto fixed inset-x-4 top-20 bg-[#10131a]/95 backdrop-blur-2xl border border-[#ff8a65]/30 rounded-2xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.8)] z-50 flex flex-col gap-2">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 font-mono text-[11px] text-orange-300">
            <span>ARCHITECTURAL DOSSIER NAVIGATION</span>
            <button
              type="button"
              onClick={onRestartPreloader}
              className="text-cyan-300 flex items-center gap-1 hover:underline"
            >
              <Cpu className="w-3 h-3" /> RE-INIT
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-2 rounded-lg font-mono text-[12px] uppercase text-left transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-bold'
                      : 'bg-[#151821] text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
