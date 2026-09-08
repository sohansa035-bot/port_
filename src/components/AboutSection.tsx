import React, { useState } from 'react';
import { DOMAINS_OF_INQUIRY, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'learning' | 'experimenting' | 'building'>('building');

  const stageDescriptions = {
    learning: 'Dissecting research preprints, neural architectures, and fundamental mathematical formalisms.',
    experimenting: 'Simulating failure topologies, training quantized agents, and validating inference boundaries.',
    building: 'Deploying autonomous edge systems, low-latency APIs, and hardware-coupled robotic bridges.'
  };

  return (
    <section
      id="about"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Section Index & Tagline Column */}
        <div className="lg:col-span-4 flex flex-col gap-3 border-l-2 border-[#ff8a65] pl-4">
          <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest font-semibold">
            // 01 · FOUNDATION
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold leading-tight">
            I BUILD
            <br />
            <span className="bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] bg-clip-text text-transparent">
              INTELLIGENT
            </span>
            <br />
            <span className="text-cyan-300">SYSTEMS.</span>
          </h2>
          <div className="mt-4 font-mono text-[13px] text-slate-300 leading-relaxed">
            &gt; Execution over abstract rhetoric.
            <br />
            &gt; Prototyping edge intelligence.
            <br />
            &gt; Bangalore, India (IST / UTC+5:30)
          </div>
        </div>

        {/* Narrative & Credentials Column */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="bg-[#10131a] border border-[#ff8a65]/25 hover:border-cyan-400/40 p-6 sm:p-8 rounded-xl relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
            <div className="absolute top-0 right-0 px-3 py-1.5 font-mono text-[10px] uppercase text-cyan-300 bg-cyan-950/40 border-l border-b border-cyan-800/40 rounded-bl font-semibold">
              ACADEMIC_SPECS // 01
            </div>

            <p className="font-body text-[16px] sm:text-[18px] text-slate-200 leading-relaxed mb-8 pt-2">
              I’m an Artificial Intelligence &amp; Machine Learning student focused on building practical
              AI-powered systems and applications. My approach anchors on deep curiosity and methodical
              prototyping: moving seamlessly from theoretical algorithms to deployable real-world edge hardware.
            </p>

            {/* Core Academic Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6 mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase text-orange-300 block mb-1 tracking-wider font-semibold">
                  PROGRAM OF STUDY
                </span>
                <span className="font-body text-[15px] text-white font-medium block">
                  {PERSONAL_INFO.degree}
                </span>
                <span className="font-mono text-[13px] text-cyan-300 font-medium">
                  {PERSONAL_INFO.university}
                </span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-orange-300 block mb-1 tracking-wider font-semibold">
                  TIMELINE &amp; STATUS
                </span>
                <span className="font-body text-[15px] text-white font-medium block">
                  {PERSONAL_INFO.timeline}
                </span>
                <span className="font-mono text-[13px] text-slate-300">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Philosophy Pill Matrix */}
            <div className="bg-[#080a10] p-4 rounded-lg border border-[#ff8a65]/20 flex flex-col gap-3 shadow-inner">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-orange-200 font-medium">
                  CORE OPERATIONAL ENGINE:
                </span>
                <div className="flex items-center gap-2 font-mono text-[12px] flex-wrap">
                  <button
                    type="button"
                    onClick={() => setActiveStage('learning')}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      activeStage === 'learning'
                        ? 'bg-orange-500/20 border-orange-400 text-orange-200 font-bold shadow-[0_0_10px_rgba(255,138,101,0.2)]'
                        : 'bg-orange-950/20 border-[#ff8a65]/30 text-orange-300/80 hover:text-orange-200'
                    }`}
                  >
                    LEARNING
                  </button>
                  <span className="text-cyan-400">→</span>
                  <button
                    type="button"
                    onClick={() => setActiveStage('experimenting')}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      activeStage === 'experimenting'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-bold shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                        : 'bg-cyan-950/20 border-cyan-400/30 text-cyan-300/80 hover:text-cyan-200'
                    }`}
                  >
                    EXPERIMENTING
                  </button>
                  <span className="text-orange-400">→</span>
                  <button
                    type="button"
                    onClick={() => setActiveStage('building')}
                    className={`px-2.5 py-1 rounded border transition-all cursor-pointer ${
                      activeStage === 'building'
                        ? 'bg-gradient-to-r from-orange-500/25 to-cyan-500/25 border-cyan-300 text-white font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                        : 'bg-white/5 border-white/20 text-slate-300 hover:text-white'
                    }`}
                  >
                    BUILDING
                  </button>
                </div>
              </div>

              {/* Dynamic stage detail snippet */}
              <div className="pt-2 border-t border-white/5 text-[12px] font-mono text-cyan-200/90 flex items-center gap-2">
                <span className="text-orange-300">&gt;&gt;</span>
                <span>{stageDescriptions[activeStage]}</span>
              </div>
            </div>
          </div>

          {/* Research & Domain Badges Cluster */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-orange-300 block mb-3 font-semibold">
              // DOMAINS OF ACTIVE INQUIRY &amp; APPLICATION
            </span>
            <div className="flex flex-wrap gap-2">
              {DOMAINS_OF_INQUIRY.map((domain) => {
                const dotColor =
                  domain.color === 'peach'
                    ? 'bg-[#ff8a65] shadow-[0_0_6px_rgba(255,138,101,0.8)]'
                    : domain.color === 'cyan'
                    ? 'bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]'
                    : domain.color === 'amber'
                    ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]'
                    : 'bg-slate-400';

                const borderHover =
                  domain.color === 'peach'
                    ? 'hover:border-orange-400/50'
                    : domain.color === 'cyan'
                    ? 'hover:border-cyan-400/50'
                    : 'hover:border-amber-400/50';

                return (
                  <span
                    key={domain.name}
                    className={`px-3 py-1.5 rounded-full bg-[#151821] border border-white/10 ${borderHover} font-mono text-[11px] text-slate-200 flex items-center gap-2 shadow-sm transition-all hover:scale-105 select-none`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                    {domain.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
