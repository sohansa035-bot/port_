import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onDismiss: () => void;
  active: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ onDismiss, active }) => {
  const [fading, setFading] = useState(false);
  const [bootLog, setBootLog] = useState('> ARCH_KERNEL: STANDBY // IDLE');

  useEffect(() => {
    if (!active) return;
    const logs = [
      '> ARCH_KERNEL: STANDBY // IDLE',
      '> CALIBRATING TENSOR BUS: OK',
      '> CONNECTING REVA NODE: NODE.00 // BLR',
      '> TELEMETRY CHANNELS: INITIALIZED'
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % logs.length;
      setBootLog(logs[i]);
    }, 900);

    return () => clearInterval(interval);
  }, [active]);

  const handleDismiss = () => {
    setFading(true);
    setTimeout(() => {
      onDismiss();
      setFading(false);
    }, 600);
  };

  if (!active) return null;

  return (
    <div
      id="system-preloader"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07090e] select-none transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center w-72 h-72">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border border-[#ff8a65]/20 animate-spin"
          style={{ animationDuration: '18s' }}
        />
        {/* Inner reverse rotating ring */}
        <div
          className="absolute inset-6 rounded-full border border-cyan-500/25 animate-spin"
          style={{ animationDuration: '9s', animationDirection: 'reverse' }}
        />
        {/* Glow orb */}
        <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-[#ff8a65]/20 to-[#22d3ee]/20 blur-xl animate-pulse" />

        {/* Core interactive orb */}
        <button
          type="button"
          aria-label="Initialize System"
          onClick={handleDismiss}
          className="relative group z-10 w-24 h-24 rounded-full bg-[#10131a] border border-[#ff8a65]/40 hover:border-cyan-400 flex flex-col items-center justify-center gap-1 transition-all duration-500 shadow-[0_0_35px_rgba(255,138,101,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] shadow-[0_0_12px_rgba(255,138,101,0.9)] group-hover:scale-125 transition-transform" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffdbd0] mt-1 text-center font-semibold leading-tight">
            INITIALIZE
            <br />
            SYSTEM
          </span>
        </button>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="font-mono text-[13px] text-cyan-300 tracking-wider transition-all duration-300">
          {bootLog}
        </span>
        <button
          type="button"
          onClick={handleDismiss}
          className="font-mono text-[10px] text-slate-500 hover:text-orange-300 transition-colors uppercase tracking-widest cursor-pointer mt-1"
        >
          [ BYPASS INTRO ]
        </button>
      </div>
    </div>
  );
};
