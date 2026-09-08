import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState<null | 'sending' | 'sent'>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSentStatus('sending');
    setTimeout(() => {
      setSentStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSentStatus(null), 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[84rem] mx-auto px-4 md:px-6 py-16 lg:py-24 border-t border-white/10"
    >
      <div className="mb-12">
        <span className="font-mono text-[11px] text-orange-300 uppercase tracking-widest block mb-1 font-semibold">
          // 07 · TRANSMISSION
        </span>
        <h2 className="font-display text-[32px] sm:text-[40px] text-white uppercase font-bold">
          GET IN TOUCH
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Editorial & Direct Links */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="p-6 sm:p-8 bg-[#10131a] border border-[#ff8a65]/25 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <h3 className="font-display text-[26px] sm:text-[32px] text-white font-bold leading-tight mb-3">
              LET’S BUILD{' '}
              <span className="bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] bg-clip-text text-transparent">
                SOMETHING
              </span>{' '}
              MEANINGFUL.
            </h3>
            <p className="font-body text-[15px] sm:text-[16px] text-slate-300 leading-relaxed mb-6">
              Open to AI/ML research, engineering internships, open-source collaborations, and autonomous systems prototyping.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Email Block */}
              <div className="p-3.5 bg-[#080a10] border border-[#ff8a65]/20 rounded-lg flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-[#ff8a65]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-orange-300" />
                  </div>
                  <div className="truncate">
                    <span className="font-mono text-[10px] uppercase text-orange-300 block font-semibold">
                      DIRECT INBOX
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-[12px] sm:text-[13px] text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-[#151821] border border-white/10 hover:border-cyan-400 font-mono text-[10px] text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Block */}
              <div className="p-3.5 bg-[#080a10] border border-cyan-500/20 rounded-lg flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4 text-cyan-300" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase text-cyan-300 block font-semibold">
                      CODE REPOSITORY
                    </span>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] sm:text-[13px] text-white hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.githubHandle}
                    </a>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#151821] border border-white/10 hover:border-cyan-400 font-mono text-[10px] text-slate-300 hover:text-cyan-300 shrink-0"
                >
                  VISIT
                </a>
              </div>

              {/* Location Block */}
              <div className="p-3.5 bg-[#080a10] border border-white/10 rounded-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-orange-400" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-slate-400 block font-semibold">
                    PHYSICAL NODE
                  </span>
                  <span className="font-mono text-[12px] text-slate-200">
                    {PERSONAL_INFO.location}, India // {PERSONAL_INFO.coordinates.timezone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Direct Transmission Form */}
        <div className="lg:col-span-6 p-6 sm:p-8 bg-[#10131a] border border-white/10 rounded-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
            <span className="font-mono text-[11px] text-cyan-300 uppercase font-semibold">
              TRANSMIT_MESSAGE // DISPATCH
            </span>
            <span className="font-mono text-[10px] text-slate-400">STATUS: READY</span>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block font-mono text-[10px] text-orange-300 uppercase mb-1 font-semibold">
                YOUR IDENTITY / NAME:
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dr. Alex Mercer / Lead Researcher"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#151821] border border-white/10 focus:border-cyan-400 rounded-lg px-3.5 py-2.5 font-body text-[14px] text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-cyan-300 uppercase mb-1 font-semibold">
                RETURN ADDRESS / EMAIL:
              </label>
              <input
                type="email"
                required
                placeholder="alex@domain.org"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#151821] border border-white/10 focus:border-cyan-400 rounded-lg px-3.5 py-2.5 font-body text-[14px] text-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-slate-400 uppercase mb-1 font-semibold">
                COMMUNICATION PAYLOAD:
              </label>
              <textarea
                required
                rows={4}
                placeholder="Detail collaboration proposal, project specs, or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#151821] border border-white/10 focus:border-cyan-400 rounded-lg px-3.5 py-2.5 font-body text-[14px] text-white outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sentStatus === 'sending'}
              className="w-full h-11 rounded-full bg-gradient-to-r from-[#ff8a65] to-[#22d3ee] hover:from-[#ff9e7d] hover:to-[#5de6ff] text-[#0b0e15] font-mono text-[11px] uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(255,138,101,0.3)] hover:scale-[1.01] active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {sentStatus === 'sending' ? (
                <span>DISPATCHING PACKET...</span>
              ) : sentStatus === 'sent' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950 font-bold" />
                  <span>TRANSMISSION CONFIRMED</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>DISPATCH TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
