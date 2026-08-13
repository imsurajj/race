import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, Zap } from 'lucide-react';
import TelemetryToolPanel from '../components/TelemetryToolPanel';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 space-y-16 pb-24 text-left">
      
      {/* ── HERO: Asymmetric Two-Column (55% Left / 45% Right) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN (55% → lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#E8112D]/10 border border-[#E8112D]/30 text-[#E8112D] text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E8112D] animate-ping"></span>
            <span>MOTORSPORT ACOUSTIC TELEMETRY ENGINE</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black text-white italic tracking-tight leading-[0.92] text-left uppercase">
            THE SILENT <span className="text-[#E8112D]">CO-DRIVER</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl font-bold text-gray-200 tracking-wide text-left italic border-l-4 border-[#E8112D] pl-4 py-1 leading-snug">
            Reading driver stress from radio calls.
          </p>

          {/* Description (max ~480px, left-aligned) */}
          <p className="text-sm sm:text-base text-[#9A9AA5] leading-[1.6] text-left max-w-[480px] font-normal">
            Processes vocal radio acoustics with Whisper ASR and continuous emotion models to correlate driver stress directly with lap time degradation.
          </p>

          {/* CTA (left-aligned) */}
          <div className="text-left">
            <button
              onClick={() => navigate('/app')}
              className="btn-primary py-3.5 px-8 text-sm sm:text-base shadow-xl shadow-[#E8112D]/30 hover:scale-105 transition-all"
            >
              <span>OPEN THE TOOL</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN (45% → lg:col-span-5): Live product preview card */}
        <div className="lg:col-span-5 w-full">
          <div className="saas-card p-6 border border-[#E8112D]/35 shadow-2xl shadow-red-950/20 space-y-4 bg-[#141417]">
            <div className="flex items-center justify-between text-xs text-[#9A9AA5] font-semibold border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-white font-headline text-base italic">
                <Activity className="w-4 h-4 text-[#E8112D]" />
                LIVE WORKSPACE PREVIEW
              </span>
              <span className="text-[11px] flex items-center gap-1.5 text-[#E8112D]">
                <Zap className="w-3.5 h-3.5" />
                PREVIEW MODE
              </span>
            </div>
            <div className="rounded-lg overflow-hidden bg-[#0A0A0D]">
              <TelemetryToolPanel previewMode={true} />
            </div>
          </div>
        </div>

      </div>

      {/* ── STAT ROW: 4 Cells in a Bordered Grid ── */}
      <div className="saas-card bg-[#141417] border border-white/10 rounded-xl overflow-hidden grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-left">
        <div className="p-6 sm:p-7 space-y-2 text-left">
          <span className="text-[11px] font-mono text-[#9A9AA5] block uppercase tracking-wider font-semibold">ASR LATENCY</span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-white">&lt; 350 ms</span>
          <span className="text-[10px] text-gray-400 block font-mono">Whisper large-v3-turbo</span>
        </div>

        <div className="p-6 sm:p-7 space-y-2 text-left">
          <span className="text-[11px] font-mono text-[#9A9AA5] block uppercase tracking-wider font-semibold">EMOTION ACCURACY</span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">94.2% F1</span>
          <span className="text-[10px] text-gray-400 block font-mono">wav2vec2-arousal-valence</span>
        </div>

        <div className="p-6 sm:p-7 space-y-2 text-left">
          <span className="text-[11px] font-mono text-[#9A9AA5] block uppercase tracking-wider font-semibold">PROSODY CHANNELS</span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-blue-400">3-Axis VAD</span>
          <span className="text-[10px] text-gray-400 block font-mono">librosa DSP Engine</span>
        </div>

        <div className="p-6 sm:p-7 space-y-2 text-left">
          <span className="text-[11px] font-mono text-[#9A9AA5] block uppercase tracking-wider font-semibold">TELEMETRY SYNC</span>
          <span className="text-xl sm:text-2xl font-mono font-bold text-[#E8112D]">Real-Time</span>
          <span className="text-[10px] text-gray-400 block font-mono">pandas + Plotly / Chart.js</span>
        </div>
      </div>

    </div>
  );
}
