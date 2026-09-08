import React, { useState } from 'react';
import { ARCHITECTURE_NODES } from '../data/portfolioData';
import { ArchitectureNode } from '../types';
import { ChevronRight, Cpu, Layers, Sparkles, X } from 'lucide-react';

interface ArchitectureMatrixProps {
  onSelectNode?: (node: ArchitectureNode) => void;
}

export const ArchitectureMatrix: React.FC<ArchitectureMatrixProps> = ({ onSelectNode }) => {
  const [activeNodeDetail, setActiveNodeDetail] = useState<ArchitectureNode | null>(null);

  return (
    <section
      id="build"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24 border-t border-white/10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest block mb-1 font-semibold">
            // 02 · SYSTEM ARCHITECTURE
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold">
            WHAT I BUILD
          </h2>
        </div>
        <p className="font-mono text-[13px] text-cyan-200 max-w-md">
          Hover or click nodes to trace algorithmic execution paths, throughput targets, and linked technical toolsets.
        </p>
      </div>

      {/* Interactive 6-Node Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARCHITECTURE_NODES.map((node) => {
          const isPeach = node.colorScheme === 'peach';
          const borderNormal = isPeach ? 'border-[#ff8a65]/20' : 'border-cyan-500/20';
          const borderHover = isPeach
            ? 'hover:border-[#ff8a65]/70 hover:shadow-[0_6px_28px_rgba(255,138,101,0.2)]'
            : 'hover:border-cyan-400/70 hover:shadow-[0_6px_28px_rgba(34,211,238,0.2)]';
          const tagBorder = isPeach ? 'border-[#ff8a65]/30' : 'border-cyan-400/30';
          const tagBg = isPeach ? 'bg-orange-950/30 text-orange-200' : 'bg-cyan-950/30 text-cyan-200';

          return (
            <div
              key={node.id}
              onClick={() => setActiveNodeDetail(node)}
              className={`group p-6 sm:p-7 bg-[#10131a] ${borderNormal} ${borderHover} hover:bg-[#151924] rounded-xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden`}
            >
              {/* Subtle node corner accent */}
              <div
                className={`absolute -top-10 -right-10 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity ${
                  isPeach ? 'bg-[#ff8a65]/20' : 'bg-cyan-400/20'
                }`}
              />

              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase text-slate-400 mb-4">
                  <span className={isPeach ? 'text-orange-300 font-bold' : 'text-cyan-400 font-bold'}>
                    {node.nodeNumber}
                  </span>
                  <span className="group-hover:text-cyan-300 transition-colors text-slate-400">
                    STATUS: {node.status}
                  </span>
                </div>

                <h3
                  className={`font-display text-[20px] sm:text-[22px] text-white font-semibold mb-2 transition-colors ${
                    isPeach ? 'group-hover:text-orange-200' : 'group-hover:text-cyan-300'
                  }`}
                >
                  {node.title}
                </h3>

                <p className="font-body text-[14px] sm:text-[15px] text-slate-300 leading-relaxed mb-6">
                  {node.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {node.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className={`px-2 py-0.5 rounded ${tagBg} border ${tagBorder} font-mono text-[10px]`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-300 flex items-center gap-0.5">
                    SPECS <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Node Detail Inspector Drawer/Modal */}
      {activeNodeDetail && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#10131a] border border-[#ff8a65]/35 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.85)] animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setActiveNodeDetail(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-[#151821] border border-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 font-mono text-[11px] text-orange-300 uppercase mb-2 font-semibold">
              <span>{activeNodeDetail.nodeNumber}</span>
              <span>·</span>
              <span className="text-cyan-300">ARCHITECTURE SPECIFICATION</span>
            </div>

            <h3 className="font-display text-[24px] text-white font-bold mb-3">
              {activeNodeDetail.title}
            </h3>

            <p className="font-body text-[15px] text-slate-300 leading-relaxed mb-6">
              {activeNodeDetail.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-3.5 bg-[#080a10] border border-[#ff8a65]/20 rounded-lg">
                <span className="font-mono text-[10px] uppercase text-orange-300 block mb-1 font-semibold">
                  ALGORITHMIC FOCUS:
                </span>
                <span className="font-mono text-[12px] text-cyan-200">
                  {activeNodeDetail.details.algorithmicFocus}
                </span>
              </div>

              <div className="p-3.5 bg-[#080a10] border border-cyan-500/20 rounded-lg">
                <span className="font-mono text-[10px] uppercase text-cyan-300 block mb-1 font-semibold">
                  THROUGHPUT TARGET:
                </span>
                <span className="font-mono text-[12px] text-orange-200">
                  {activeNodeDetail.details.throughputTarget}
                </span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {activeNodeDetail.details.primaryStack.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded bg-[#151821] border border-white/10 font-mono text-[11px] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveNodeDetail(null)}
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-mono text-[11px] uppercase font-bold cursor-pointer"
              >
                DISMISS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
