import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 900);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 900;
    };

    window.addEventListener('resize', handleResize);

    const colors = [
      'rgba(255, 138, 101, 0.75)', // warm peach
      'rgba(251, 146, 60, 0.7)',   // apricot
      'rgba(34, 211, 238, 0.75)',  // cool cyan
      'rgba(6, 182, 212, 0.7)'     // arctic cyan
    ];

    const nodes = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    // Mouse pointer interaction
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Connect near nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 155) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(255, 181, 158, ${0.14 * (1 - dist / 155)})`;
            ctx.stroke();
          }
        }

        // Connect to mouse
        const mouseDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (mouseDist < 120) {
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(34, 211, 238, ${0.28 * (1 - mouseDist / 120)})`;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[920px] flex flex-col justify-between px-4 md:px-6 max-w-[84rem] mx-auto pt-6 pb-12 overflow-hidden"
    >
      {/* Live Architectural Grid Backdrop Canvas */}
      <canvas
        ref={canvasRef}
        id="hero-grid-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0"
      />

      {/* Subtle warm peach/cyan ambient glow in backdrop */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-gradient-to-b from-[#ff8a65]/15 via-[#22d3ee]/10 to-transparent blur-3xl pointer-events-none -z-0" />

      {/* Top Telemetry Strip */}
      <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-slate-400 border-b border-[#ff8a65]/20 pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-block w-2 h-2 rounded-sm bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
          <span className="text-orange-200 uppercase font-medium">SYS.STATUS: OPERATIONAL</span>
          <span className="text-slate-600">//</span>
          <span className="text-cyan-300 font-mono">B.TECH AI/ML @ REVA UNIVERSITY</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 font-mono">
          <span>LAT: {PERSONAL_INFO.coordinates.lat}</span>
          <span>LON: {PERSONAL_INFO.coordinates.lon}</span>
          <span className="text-orange-300 font-medium">{PERSONAL_INFO.coordinates.node}</span>
        </div>
      </div>

      {/* Central Editorial Statement */}
      <div className="relative z-10 my-auto py-12 flex flex-col items-start max-w-5xl">
        <div className="flex items-center gap-2 font-mono text-[13px] text-orange-300 mb-3">
          <span className="px-2.5 py-0.5 rounded bg-gradient-to-r from-orange-500/15 to-cyan-500/15 border border-[#ff8a65]/35 text-orange-200 shadow-sm font-semibold">
            // ARCHITECTURAL DOSSIER
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.dossierVersion}</span>
        </div>

        <h1 className="font-display text-[56px] sm:text-[72px] lg:text-[88px] text-white tracking-tight uppercase leading-[0.92] mb-4 font-bold select-none">
          SOHAN
          <br />
          <span className="bg-gradient-to-r from-[#ff8a65] via-[#fb923c] to-[#22d3ee] bg-clip-text text-transparent">
            SAHA
          </span>
        </h1>

        <div className="font-display text-[22px] sm:text-[28px] text-slate-200 font-medium tracking-tight mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-orange-100">{PERSONAL_INFO.title}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
          <span className="bg-gradient-to-r from-[#ffb59e] to-[#22d3ee] bg-clip-text text-transparent font-semibold">
            {PERSONAL_INFO.roleDescriptor}
          </span>
        </div>

        <p className="font-body text-[16px] sm:text-[18px] text-slate-300 max-w-2xl leading-relaxed mb-8">
          {PERSONAL_INFO.summary}
        </p>

        {/* Action Cluster */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onExploreWork}
            className="h-11 px-6 rounded-full bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] hover:from-[#ff9e7d] hover:to-[#5de6ff] text-[#0b0e15] font-mono text-[11px] uppercase tracking-wider font-bold flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(255,138,101,0.35)] hover:shadow-[0_6px_28px_rgba(34,211,238,0.45)] hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 font-bold" />
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-6 rounded-full bg-[#151821] border border-[#ff8a65]/30 hover:border-cyan-400 text-orange-100 hover:text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
          >
            <Code className="w-4 h-4 text-cyan-300" />
            <span>GITHUB ARCHIVE</span>
          </a>
        </div>
      </div>

      {/* Bottom Flowing Conduit Bar */}
      <div className="relative z-10 w-full pt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-slate-400 border-t border-white/5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-orange-300 font-semibold">&gt; CONTINUOUS STREAM</span>
          <span className="text-slate-400">
            // <span className="text-orange-200">LEARNING</span> ·{' '}
            <span className="text-cyan-300">EXPERIMENTING</span> ·{' '}
            <span className="text-cyan-100">BUILDING</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span className="text-cyan-400 font-mono">EXP_CYCLE: 2025–2029</span>
          <span className="text-orange-300 font-mono">INDEX: 01/06</span>
        </div>
      </div>
    </section>
  );
};
