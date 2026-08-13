import React from 'react';
import { ArrowRight, Play, Sparkles, Activity, ShieldCheck, Flame, Radio } from 'lucide-react';
import { SAMPLE_CLIPS } from '../data/sampleClips';

export default function HeroPage({ onNavigate }) {
  return (
    <div className="space-y-12 pb-16">
      {/* Recreated Problem Statement 01 Slide Hero */}
      <section className="relative overflow-hidden pt-8 pb-12">
        {/* Background glow and subtle grid */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8112D]/15 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-900/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header Tag / Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#18181C] border border-[#E8112D]/40 text-[#E8112D] font-eyebrow font-extrabold text-xs mb-6 shadow-lg shadow-[#E8112D]/20">
            <span className="w-2 h-2 rounded-full bg-[#E8112D] animate-ping"></span>
            <span>GEEK ROOM × SHEBUILDS AI RACE MONTH — PROBLEM STATEMENT 01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Hero Title & Key Content */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Large Numeral Section Motif */}
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="section-numeral text-6xl sm:text-8xl">01</span>
                  <span className="font-eyebrow text-sm sm:text-base font-bold text-gray-400 tracking-widest uppercase">
                    PROBLEM STATEMENT 1
                  </span>
                </div>

                {/* Hero Title */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tight text-white uppercase italic leading-none mb-3">
                  THE SILENT <span className="text-[#E8112D] text-shadow-red">CO-DRIVER</span>
                </h1>

                {/* Subhead */}
                <p className="text-xl sm:text-2xl font-tech font-bold text-gray-300 tracking-wide border-l-4 border-[#E8112D] pl-4 py-1">
                  Reading driver stress from radio calls.
                </p>
              </div>

              {/* Verbatim Card: THE CHALLENGE */}
              <div className="carbon-panel p-6 border-l-4 border-l-[#E8112D] bg-gradient-to-r from-[#1A1A1E] to-[#121215]">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="w-5 h-5 text-[#E8112D]" />
                  <h3 className="font-eyebrow font-black text-sm tracking-wider text-[#E8112D] uppercase">
                    THE CHALLENGE
                  </h3>
                </div>
                <p className="text-base sm:text-lg font-body text-gray-100 leading-relaxed italic">
                  "Engineers are watching numbers, not listening to tone. A tired or stressed driver goes unnoticed because nobody has time to hear it."
                </p>
              </div>

              {/* Verbatim Section: WHAT YOU BUILD (Red Square Bullets ▪) */}
              <div className="carbon-panel p-6 space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <Activity className="w-5 h-5 text-[#E8112D]" />
                  <h3 className="font-eyebrow font-black text-sm tracking-wider text-white uppercase">
                    WHAT YOU BUILD
                  </h3>
                </div>

                <ul className="red-bullet-list text-sm sm:text-base font-body">
                  <li>Upload or play a driver radio clip</li>
                  <li>Speech converted to readable text</li>
                  <li>Tone analysed - calm, stressed or tired</li>
                  <li>Shown next to lap times, so stress lines up with slower laps</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('demo')}
                  className="btn-primary py-3 px-8 text-base shadow-xl"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>LAUNCH LIVE DEMO</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="btn-secondary py-3 px-6 text-sm"
                >
                  <span>SEE HOW IT WORKS</span>
                </button>
              </div>
            </div>

            {/* Right Column: Dramatic Motorsport Visual Card & Quick Audio Preview */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Automotive Photography Card with Red Rim Light Visual */}
              <div className="carbon-panel p-6 relative overflow-hidden flex-1 flex flex-col justify-between group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/70 to-transparent z-10"></div>
                
                {/* Visual Header */}
                <div className="relative z-20 flex justify-between items-start">
                  <span className="badge bg-[#E8112D]/80 text-white font-tech text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    F1 PIT WALL ACOUSTICS
                  </span>
                  <span className="text-xs font-tech text-gray-400">REAL-TIME INFRASTRUCTURE</span>
                </div>

                {/* Simulated Waveform & Pit Radio HUD Visual */}
                <div className="relative z-20 my-8 space-y-4">
                  <div className="bg-[#09090B]/90 p-4 rounded-xl border border-[#E8112D]/30 backdrop-blur-md shadow-2xl">
                    <div className="flex items-center justify-between text-xs font-tech mb-2">
                      <span className="text-gray-400">RADIO FREQUENCY: 454.025 MHz</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        LIVE SYNC
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 h-12 justify-center my-2">
                      {[40, 75, 30, 90, 45, 100, 60, 85, 25, 95, 50, 80, 35, 70, 90, 40].map((h, i) => (
                        <div
                          key={i}
                          className="w-1.5 bg-[#E8112D] rounded-full wave-bar"
                          style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
                        ></div>
                      ))}
                    </div>

                    <div className="text-center font-mono text-xs text-gray-200 italic mt-2">
                      "Tires are completely gone! Box box!"
                    </div>
                  </div>

                  {/* Telemetry Indicator Pill */}
                  <div className="grid grid-cols-2 gap-3 font-tech text-xs">
                    <div className="bg-black/60 p-3 rounded-lg border border-white/10">
                      <div className="text-gray-400">LAP 22 DELTA</div>
                      <div className="text-lg font-bold text-[#E8112D]">+2.450s</div>
                    </div>
                    <div className="bg-black/60 p-3 rounded-lg border border-white/10">
                      <div className="text-gray-400">CLASSIFICATION</div>
                      <div className="text-lg font-bold text-red-500">STRESSED (96%)</div>
                    </div>
                  </div>
                </div>

                {/* Footer link */}
                <div className="relative z-20 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-tech text-gray-400">
                  <span>HUGGING FACE MODEL DEPLOYED</span>
                  <button 
                    onClick={() => onNavigate('tech-stack')} 
                    className="text-[#E8112D] hover:underline font-bold"
                  >
                    MODEL SPECS →
                  </button>
                </div>
              </div>

              {/* Mandatory Hugging Face Callout Banner */}
              <div className="carbon-panel p-4 bg-gradient-to-r from-amber-950/40 via-red-950/30 to-[#121215] border-amber-500/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🤗</span>
                  <div>
                    <h4 className="font-tech text-sm font-bold text-white">HUGGING FACE INTEGRATION</h4>
                    <p className="text-xs text-gray-300">Whisper ASR & wav2vec2 continuous emotion models hosted on HF Spaces.</p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('tech-stack')}
                  className="px-3 py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-tech text-xs font-bold border border-amber-500/40"
                >
                  VIEW SPACE
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="carbon-panel p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E8112D]/20 border border-[#E8112D]/40 flex items-center justify-center text-[#E8112D]">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-white">NOISY RADIO ASR</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Whisper large-v3-turbo converts harsh, engine-roar distorted driver audio into synchronized textual transcripts in milliseconds.
            </p>
          </div>

          <div className="carbon-panel p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E8112D]/20 border border-[#E8112D]/40 flex items-center justify-center text-[#E8112D]">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-white">3-STATE MOOD ENGINE</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Continuous Arousal, Valence, and Dominance scoring categorizes driver cognitive state into Calm, Stressed, or Tired.
            </p>
          </div>

          <div className="carbon-panel p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#E8112D]/20 border border-[#E8112D]/40 flex items-center justify-center text-[#E8112D]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-white">LAP TIME OVERLAY</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Direct telemetry mapping aligns vocal stress events with slower lap times, enabling race engineers to intervene proactively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
