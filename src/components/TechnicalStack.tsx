import React from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { Cpu, Code, Globe, Terminal } from 'lucide-react';

export const TechnicalStack: React.FC = () => {
  const sections = [
    {
      title: 'AI / ML & Tools',
      icon: Cpu,
      color: 'peach',
      items: TECH_STACK.aiMl
    },
    {
      title: 'Languages',
      icon: Code,
      color: 'cyan',
      items: TECH_STACK.languages
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'peach',
      items: TECH_STACK.webDevelopment
    },
    {
      title: 'DevOps & IoT',
      icon: Terminal,
      color: 'cyan',
      items: TECH_STACK.devopsIot
    }
  ];

  return (
    <section
      id="stack"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24 border-t border-white/10"
    >
      <div className="mb-12">
        <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest block mb-1 font-semibold">
          // 06 · INSTRUMENTATION
        </span>
        <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold">
          TECHNICAL STACK
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isPeach = sec.color === 'peach';
          const borderNormal = isPeach ? 'border-[#ff8a65]/20' : 'border-cyan-500/20';
          const borderHover = isPeach ? 'hover:border-[#ff8a65]/60' : 'hover:border-cyan-400/60';

          return (
            <div
              key={sec.title}
              className={`p-6 bg-[#10131a] ${borderNormal} ${borderHover} rounded-xl transition-all flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.4)]`}
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                  <Icon
                    className={`w-4 h-4 ${isPeach ? 'text-orange-400' : 'text-cyan-400'}`}
                  />
                  <h3 className="font-mono text-[12px] uppercase text-white font-bold tracking-wider">
                    {sec.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {sec.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded bg-[#151821] border border-white/5 flex items-center justify-between hover:border-white/20 transition-colors"
                    >
                      <span className="font-mono text-[12px] text-slate-200">{item.name}</span>
                      <span
                        className={`font-mono text-[10px] px-2 py-0.5 rounded ${
                          isPeach
                            ? 'bg-orange-950/40 text-orange-300 border border-[#ff8a65]/30'
                            : 'bg-cyan-950/40 text-cyan-300 border border-cyan-400/30'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500 text-right">
                {sec.items.length} MODULES SPECIFIED
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
