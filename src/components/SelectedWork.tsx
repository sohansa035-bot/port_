import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Terminal, Play, SlidersHorizontal, Code2, ShieldAlert, ChevronRight, Activity } from 'lucide-react';

interface SelectedWorkProps {
  onOpenProjectModal: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenProjectModal }) => {
  // Live subtle telemetry jitter for realism
  const [liveFps, setLiveFps] = useState(28.4);
  const [liveLatency, setLiveLatency] = useState(34.2);
  const [liveStep, setLiveStep] = useState(418);
  const [soilJitter, setSoilJitter] = useState(41.8);
  const [ingestionRate, setIngestionRate] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveFps(+(28 + Math.random() * 0.9).toFixed(1));
      setLiveLatency(+(33.8 + Math.random() * 1.2).toFixed(1));
      setLiveStep((prev) => (prev >= 999 ? 400 : prev + 1));
      setSoilJitter(+(41.5 + Math.random() * 0.6).toFixed(1));
      setIngestionRate(1400 + Math.floor(Math.random() * 45));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="work"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24 border-t border-white/10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-3">
        <div>
          <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest block mb-1 font-semibold">
            // 03 · INDEXED REPOSITORIES
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold">
            SELECTED WORK{' '}
            <span className="bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] bg-clip-text text-transparent font-semibold tracking-normal text-[20px] sm:text-[24px]">
              // 05 SYSTEMS DEPLOYED
            </span>
          </h2>
        </div>
        <div className="font-mono text-[10px] sm:text-[11px] text-cyan-300 tracking-wider uppercase flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          CLICK ANY PROJECT CARD FOR TELEMETRY &amp; ARCHITECTURE SPECS
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project) => {
          const isFeatured = project.isFeatured;

          return (
            <article
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className={`p-6 sm:p-8 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
                isFeatured
                  ? 'bg-[#121622] border border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_12px_40px_rgba(34,211,238,0.2)]'
                  : 'bg-[#10131a] border border-[#ff8a65]/25 hover:border-cyan-400/60 hover:shadow-[0_8px_32px_rgba(255,138,101,0.15)]'
              }`}
            >
              {/* Featured Badge Ribbon */}
              {isFeatured && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500/30 to-cyan-500/30 border-l border-b border-cyan-400/50 px-4 py-1 font-mono text-[10px] uppercase text-cyan-200 tracking-widest font-semibold">
                  {project.featuredTag}
                </div>
              )}

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isFeatured ? 'mt-2' : ''}`}>
                {/* Left Description Column */}
                <div className="lg:col-span-7 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-orange-300 uppercase tracking-wider font-bold">
                      {project.index}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="font-mono text-[11px] text-cyan-300 uppercase font-medium">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-[24px] sm:text-[28px] text-white font-bold tracking-tight">
                    {project.title} —{' '}
                    <span
                      className={
                        isFeatured
                          ? 'bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] bg-clip-text text-transparent font-medium'
                          : 'text-orange-200 font-normal'
                      }
                    >
                      {project.subtitle}
                    </span>
                  </h3>

                  <p className="font-body text-[14px] sm:text-[15px] text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual Pipeline Conduit */}
                  <div className="my-2 p-2.5 bg-[#080a10] border border-[#ff8a65]/20 rounded font-mono text-[10px] text-slate-400 flex flex-wrap items-center gap-2">
                    <span className="text-orange-300 uppercase font-semibold">PIPELINE:</span>
                    {project.pipeline.map((step, idx) => (
                      <React.Fragment key={step}>
                        <span
                          className={
                            idx === project.pipeline.length - 1
                              ? 'text-cyan-300 font-semibold'
                              : 'text-slate-200'
                          }
                        >
                          {step}
                        </span>
                        {idx < project.pipeline.length - 1 && (
                          <span className="text-[#ff8a65] font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded bg-[#151821] border font-mono text-[11px] ${
                          idx % 2 === 0
                            ? 'border-orange-500/25 text-orange-200'
                            : 'border-cyan-500/25 text-cyan-200'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action CTA Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProjectModal(project);
                      }}
                      className={`px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm cursor-pointer ${
                        isFeatured
                          ? 'bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] hover:from-[#ff9e7d] hover:to-[#5de6ff] text-[#0b0e15] font-bold shadow-[0_4px_18px_rgba(34,211,238,0.35)] hover:scale-105'
                          : 'bg-gradient-to-r from-orange-500/20 to-cyan-500/20 border border-[#ff8a65]/40 hover:border-cyan-400 text-orange-100 hover:text-white'
                      }`}
                    >
                      {project.id === 'yugen' && (
                        <>
                          <span>VIEW ARCHITECTURE DOSSIER</span>
                          <Terminal className="w-3.5 h-3.5 text-cyan-300" />
                        </>
                      )}
                      {project.id === 'autosre' && (
                        <>
                          <span>INSPECT SRE SIMULATION</span>
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </>
                      )}
                      {project.id === 'terrasense' && (
                        <>
                          <span>VIEW TELEMETRY SPECS</span>
                          <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-300" />
                        </>
                      )}
                      {project.id === 'openenv_prop' && (
                        <>
                          <span>VIEW SCHEMA HARNESS</span>
                          <Code2 className="w-3.5 h-3.5 text-cyan-300" />
                        </>
                      )}
                      {project.id === 'soc_pipeline' && (
                        <>
                          <span>INSPECT TRIAGE PIPELINE</span>
                          <ShieldAlert className="w-3.5 h-3.5 text-cyan-300" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Interactive Telemetry Box */}
                <div className="lg:col-span-5">
                  {/* PROJECT 01: YUGĒN ROVER TELEMETRY */}
                  {project.id === 'yugen' && (
                    <div className="bg-[#080a10] border border-cyan-500/30 rounded-lg p-4 font-mono text-[11px] shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <span className="text-[10px] text-orange-300 uppercase font-bold">
                          TELEMETRY_STREAM // LIVE
                        </span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      </div>
                      <div className="space-y-1.5 text-slate-300 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-slate-400">FRAME_RATE:</span>
                          <span className="text-white font-semibold">{liveFps} FPS @ 640x480</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">INFERENCE_LATENCY:</span>
                          <span className="text-cyan-300 font-semibold">{liveLatency} ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">NETWORK_BUS:</span>
                          <span className="text-orange-200">{project.telemetryData.networkBus}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">DETECT_CONFIDENCE:</span>
                          <span className="text-cyan-400 font-semibold">
                            {project.telemetryData.confidence} [TARGET_ACQUIRED]
                          </span>
                        </div>
                        <div className="w-full bg-[#151821] h-1.5 rounded overflow-hidden mt-2">
                          <div className="bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] h-full w-4/5 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 02: AUTOSRE SRE SIMULATOR */}
                  {project.id === 'autosre' && (
                    <div className="bg-[#080a10] border border-[#ff8a65]/30 rounded-lg p-4 font-mono text-[11px] shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <span className="text-[10px] text-cyan-300 uppercase tracking-wider font-bold">
                          ENV: OPENENV_SRE_v1
                        </span>
                        <span className="text-[10px] text-orange-300 font-bold">
                          STEP: {liveStep}/1000
                        </span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="p-2 rounded bg-[#151821] border border-rose-500/30 flex items-center justify-between">
                          <span className="text-slate-400">ANOMALY DETECTED:</span>
                          <span className="text-rose-300 font-semibold">{project.telemetryData.anomaly}</span>
                        </div>
                        <div className="p-2 rounded bg-[#151821] border border-cyan-500/30 flex items-center justify-between">
                          <span className="text-slate-400">ACTION TAKEN:</span>
                          <span className="text-cyan-300 font-semibold">{project.telemetryData.action}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 pt-1">
                          <span>REWARD METRIC:</span>
                          <span className="text-orange-300 font-semibold">{project.telemetryData.reward}</span>
                        </div>
                        <div className="w-full bg-[#151821] h-2 rounded overflow-hidden">
                          <div className="bg-gradient-to-r from-[#ff8a65] via-[#fb923c] to-[#22d3ee] h-full w-[91.4%]" />
                        </div>
                        <div className="text-right text-cyan-300 font-semibold text-[10px]">
                          RECOVERY ACCURACY: 91.4%
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 03: TERRASENSE SOIL TELEMETRY */}
                  {project.id === 'terrasense' && (
                    <div className="bg-[#080a10] border border-white/10 rounded-lg p-4 font-mono text-[11px]">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <span className="text-[10px] text-cyan-300 uppercase font-bold">
                          TERRA_SOIL_SENSORS
                        </span>
                        <span className="text-orange-300 text-[10px] font-bold">TELEMETRY: OK</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-[#151821] border border-[#ff8a65]/20">
                          <span className="text-slate-400 block text-[10px]">SOIL_MOISTURE</span>
                          <span className="text-cyan-300 font-semibold">{soilJitter}% [OPTIMAL]</span>
                        </div>
                        <div className="p-2 rounded bg-[#151821] border border-cyan-500/20">
                          <span className="text-slate-400 block text-[10px]">NPK_NITROGEN</span>
                          <span className="text-orange-200 font-semibold">{project.telemetryData.npkNitrogen}</span>
                        </div>
                        <div className="p-2 rounded bg-[#151821] border border-cyan-500/20">
                          <span className="text-slate-400 block text-[10px]">GROUND_TEMP</span>
                          <span className="text-slate-200 font-semibold">{project.telemetryData.groundTemp}</span>
                        </div>
                        <div className="p-2 rounded bg-[#151821] border border-[#ff8a65]/20">
                          <span className="text-slate-400 block text-[10px]">IRRIGATION_VALVE</span>
                          <span className="text-orange-300 font-semibold">{project.telemetryData.irrigationValve}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 04: OPENENV_PROP SCHEMA */}
                  {project.id === 'openenv_prop' && (
                    <div className="bg-[#080a10] border border-white/10 rounded-lg p-4 font-mono text-[11px]">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                        <span className="text-[10px] text-orange-300 uppercase font-bold">
                          SCHEMA_VALIDATOR // PAYLOAD
                        </span>
                        <span className="text-cyan-400 text-[10px] font-bold">PARSED</span>
                      </div>
                      <pre className="text-[11px] text-slate-300 overflow-x-auto leading-tight p-2 bg-[#12151e] rounded border border-white/5">
                        <code>{JSON.stringify(project.telemetryData.payload, null, 2)}</code>
                      </pre>
                    </div>
                  )}

                  {/* PROJECT 05: AI SOC THREAT PIPELINE */}
                  {project.id === 'soc_pipeline' && (
                    <div className="bg-[#080a10] border border-white/10 rounded-lg p-4 font-mono text-[11px]">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                        <span className="text-[10px] text-orange-300 uppercase font-bold">
                          SOC_INFERENCE_LOG
                        </span>
                        <span className="text-rose-400 text-[10px] font-bold">SEV-1 TRIAGED</span>
                      </div>
                      <div className="space-y-2 text-[11px]">
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">INGESTION_RATE:</span>
                          <span className="text-white font-semibold">{ingestionRate} events/sec</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-400">INFERENCE_ENDPOINT:</span>
                          <span className="text-cyan-300 font-semibold">{project.telemetryData.endpoint}</span>
                        </div>
                        <div className="p-2 rounded bg-[#151821] border border-rose-500/30">
                          <span className="text-slate-400 block text-[10px]">ALERT CLASSIFICATION</span>
                          <span className="text-orange-200 font-medium">
                            {project.telemetryData.alertClassification}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
