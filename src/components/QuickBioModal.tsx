import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, GraduationCap, MapPin, Mail, Github, Award, CheckCircle2, FileText } from 'lucide-react';

interface QuickBioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const QuickBioModal: React.FC<QuickBioModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#10131a] border border-[#ff8a65]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#151821] border border-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Card Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff8a65] via-[#fb923c] to-[#22d3ee] p-0.5 shadow-lg">
            <div className="w-full h-full bg-[#0b0e15] rounded-[14px] flex items-center justify-center font-display text-[24px] font-black text-white">
              SS
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-cyan-300 uppercase font-bold">
              <span>DOSSIER VERIFIED</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <h3 className="font-display text-[22px] text-white font-bold">{PERSONAL_INFO.name}</h3>
            <span className="font-mono text-[12px] text-orange-200">{PERSONAL_INFO.roleDescriptor}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6 font-mono text-[12px]">
          <div className="p-3 bg-[#080a10] rounded-lg border border-white/5 flex items-start gap-3">
            <GraduationCap className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-semibold block">{PERSONAL_INFO.degree}</span>
              <span className="text-slate-400">{PERSONAL_INFO.university} (2025 – 2029)</span>
            </div>
          </div>

          <div className="p-3 bg-[#080a10] rounded-lg border border-white/5 flex items-center gap-3">
            <Award className="w-4 h-4 text-orange-400 shrink-0" />
            <div>
              <span className="text-white font-semibold block">IEEE TEMS Technical Co-Head</span>
              <span className="text-slate-400">Directing workshops &amp; hackathons</span>
            </div>
          </div>

          <div className="p-3 bg-[#080a10] rounded-lg border border-white/5 flex items-center gap-3">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-300">{PERSONAL_INFO.location}, India</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="flex-1 py-2.5 rounded-full bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-mono text-[11px] uppercase tracking-wider font-bold text-center cursor-pointer shadow-md"
          >
            TRANSMIT MESSAGE
          </button>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-[#151821] border border-white/10 hover:border-cyan-400 font-mono text-[11px] text-white uppercase flex items-center justify-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  );
};
