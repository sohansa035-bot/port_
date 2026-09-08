import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-white/10 bg-[#080a10] py-8 text-slate-400 font-mono text-[11px]">
      <div className="max-w-[84rem] mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-white font-bold">{PERSONAL_INFO.name}</span>
          <span className="text-slate-400">// ARCHITECTURAL DOSSIER</span>
        </div>

        <div className="text-slate-400 text-center">
          LAT: {PERSONAL_INFO.coordinates.lat} · LON: {PERSONAL_INFO.coordinates.lon} · BANGALORE
        </div>

        <div className="flex items-center gap-3">
          <span className="text-cyan-300 font-medium">SYS.LATENCY: {latency}ms</span>
          <span className="text-slate-400">·</span>
          <span className="text-orange-300 font-medium">ARCH.v4.09</span>
        </div>
      </div>
    </footer>
  );
};
