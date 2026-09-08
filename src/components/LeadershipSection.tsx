import React from 'react';
import { LEADERSHIP_ITEM, ACHIEVEMENTS } from '../data/portfolioData';
import { Award, Users, Flag, Sparkles, CheckCircle } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24 border-t border-white/10"
    >
      <div className="mb-12">
        <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest block mb-1 font-semibold">
          // 05 · COMMUNITY IMPACT
        </span>
        <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold">
          LEADERSHIP &amp; ENGAGEMENT
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Leadership Card */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#10131a] border border-[#ff8a65]/25 hover:border-cyan-400/50 rounded-xl relative overflow-hidden transition-all flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] uppercase text-orange-300 mb-3">
              <span className="font-bold">LEADERSHIP // 01</span>
              <span className="text-cyan-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                ACTIVE INITIATIVE
              </span>
            </div>

            <h3 className="font-display text-[24px] sm:text-[28px] text-white font-bold leading-tight mb-1">
              {LEADERSHIP_ITEM.role}
            </h3>

            <div className="font-body text-[16px] text-cyan-300 font-medium mb-3">
              {LEADERSHIP_ITEM.organization}
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-slate-400 mb-6">
              <span className="px-2.5 py-0.5 rounded bg-[#151821] border border-[#ff8a65]/30 text-orange-200">
                {LEADERSHIP_ITEM.period}
              </span>
              <span className="text-slate-600">//</span>
              <span className="text-slate-300">{LEADERSHIP_ITEM.location}</span>
              <span className="text-slate-600">//</span>
              <span className="text-cyan-400">{LEADERSHIP_ITEM.focus}</span>
            </div>

            <p className="font-body text-[15px] text-slate-300 leading-relaxed mb-6">
              {LEADERSHIP_ITEM.description}
            </p>
          </div>

          {/* 4 Core Leadership Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-white/10">
            {LEADERSHIP_ITEM.initiatives.map((init) => (
              <div
                key={init}
                className="p-2.5 rounded bg-[#080a10] border border-[#ff8a65]/20 font-mono text-[10px] text-orange-200 text-center uppercase tracking-wider font-semibold"
              >
                {init}
              </div>
            ))}
          </div>
        </div>

        {/* Right Achievements Column */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4 p-6 sm:p-7 bg-[#10131a] border border-white/10 rounded-xl">
          <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-300 uppercase tracking-widest font-semibold border-b border-white/10 pb-3">
            <Award className="w-4 h-4 text-orange-400" />
            <span>KEY_ACHIEVEMENTS // LOGS</span>
          </div>

          <div className="space-y-4 my-2">
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                className="p-3.5 rounded-lg bg-[#151821] border border-white/5 hover:border-[#ff8a65]/40 transition-colors"
              >
                <span className="font-mono text-[9px] uppercase tracking-wider text-orange-300 block mb-1 font-bold">
                  {ach.type}
                </span>
                <span className="font-display text-[14px] text-white font-bold block mb-1">
                  {ach.title}
                </span>
                <span className="font-body text-[12px] text-slate-400">
                  {ach.subtitle}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#080a10] rounded border border-white/5 font-mono text-[10px] text-slate-400 text-center">
            IEEE STUDENT CHAPTER &bull; BANGALORE SECTION
          </div>
        </div>
      </div>
    </section>
  );
};
