import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Briefcase, CheckCircle2, FileCheck2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24 border-t border-white/10"
    >
      <div className="mb-12">
        <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest block mb-1 font-semibold">
          // 04 · TRAJECTORY
        </span>
        <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold">
          EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {EXPERIENCE_ITEMS.map((item, idx) => (
          <div
            key={item.company + idx}
            className="p-6 sm:p-8 bg-[#10131a] border border-[#ff8a65]/25 hover:border-cyan-400/50 rounded-xl relative overflow-hidden transition-all shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Header Info */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <span className="font-mono text-[11px] text-orange-300 font-bold uppercase tracking-wider">
                  ROLE // 01
                </span>
                <h3 className="font-display text-[22px] sm:text-[24px] text-white font-bold leading-tight">
                  {item.role}
                </h3>
                <div className="font-body text-[16px] text-cyan-300 font-medium">
                  {item.company}
                </div>
                <div className="font-mono text-[12px] text-slate-400">
                  {item.division}
                </div>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151821] border border-[#ff8a65]/30 font-mono text-[11px] text-orange-200 self-start">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Responsibilities & Achievements */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <ul className="space-y-3 font-body text-[14px] sm:text-[15px] text-slate-300 leading-relaxed mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="text-cyan-400 font-mono text-[12px] mt-0.5">&gt;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-3 bg-[#080a10] border border-white/5 rounded flex items-center justify-between font-mono text-[10px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VERIFIED RESUME RECORD</span>
                  </div>
                  <span className="text-cyan-300">STATUS: ARCHIVED // SATISFACTORY PERFORMANCE</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
