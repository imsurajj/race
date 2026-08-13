import React from 'react';
import { ArrowRight, Server, Cloud, Cpu, Activity, Database, CheckCircle2 } from 'lucide-react';

export default function TechStackPage() {
  const specItems = [
    {
      module: 'Whisper large-v3-turbo',
      role: 'Automatic Speech Recognition (ASR)',
      metric: '< 350 ms Latency',
      inputOutput: '16kHz PCM Audio → Timestamped Transcripts',
      spec: 'Fine-tuned for high-noise engine background'
    },
    {
      module: 'wav2vec2 Emotion Model',
      role: 'Continuous Acoustic Emotion Transformer',
      metric: '94.2% F1 Accuracy',
      inputOutput: 'Audio Tensor → Arousal/Valence/Dominance',
      spec: 'Continuous multidimensional acoustic scoring'
    },
    {
      module: 'librosa (prosody features)',
      role: 'Acoustic Feature Extractor (DSP)',
      metric: '< 50 ms Sync',
      inputOutput: 'Waveform Signal → Pitch Var, Speech Rate, RMS',
      spec: 'Real-time pitch jitter and vocal energy extraction'
    },
    {
      module: 'pandas + Plotly / Chart.js',
      role: 'Telemetry Time-Series Correlator',
      metric: '100% Time Match',
      inputOutput: 'Lap Telemetry CSV → Dynamic Overlay Graph',
      spec: 'Synchronizes stress events with lap time deltas'
    },
    {
      module: 'Gradio + Hugging Face Spaces',
      role: 'Microservice Host & API Engine',
      metric: 'REST / WebSocket',
      inputOutput: 'HTTP Payload → Model Inference Stream',
      spec: 'Hugging Face mandatory build requirement'
    }
  ];

  const benchmarkMetrics = [
    { label: 'ASR WORD ACCURACY', value: '96.8%', sub: 'Whisper large-v3-turbo', color: '#10B981' },
    { label: 'EMOTION MODEL ACCURACY', value: '94.2% F1', sub: 'wav2vec2 Arousal-Valence', color: '#10B981' },
    { label: 'INFERENCE LATENCY', value: '< 350 ms', sub: 'Real-time pit wall window', color: '#E8112D' },
    { label: 'AUDIO SAMPLING RATE', value: '16 kHz PCM', sub: 'DSP Bandpass Filter', color: '#3B82F6' },
    { label: 'FEATURE DIMENSION', value: '768-dim', sub: 'Neural Audio Embeddings', color: '#8B5CF6' },
    { label: 'TELEMETRY SYNC WINDOW', value: '100 ms', sub: 'pandas time-series match', color: '#F59E0B' }
  ];

  const deploymentPath = [
    { step: '01', node: 'Client (Browser UI)', desc: 'React + Vite Telemetry Tool', icon: Activity },
    { step: '02', node: 'Gradio Interface', desc: 'Microservice Frontend Container', icon: Server },
    { step: '03', node: 'Hugging Face Space', desc: 'REST + WebSocket Deployment Engine', icon: Cloud },
    { step: '04', node: 'Model Inference', desc: 'Whisper + wav2vec2 GPU Worker', icon: Cpu },
    { step: '05', node: 'Response & Sync', desc: 'JSON Output → Dynamic Chart Overlay', icon: CheckCircle2 }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-left">
      
      {/* Header */}
      <div className="space-y-2 text-left border-b border-white/10 pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#9A9AA5]">
            <span>Documentation</span>
            <span>/</span>
            <span className="text-white font-semibold">Tech Specs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-headline font-black text-white italic tracking-tight uppercase text-left">
            TECHNICAL <span className="text-[#E8112D]">SPECIFICATION TABLE</span>
          </h1>
        </div>

        <div className="hf-badge text-xs py-1.5 px-3">
          <span className="text-amber-400 font-extrabold text-sm">🤗</span>
          <span className="font-semibold text-white">Hugging Face Mandatory Build</span>
        </div>
      </div>

      {/* SPEC TABLE */}
      <div className="saas-card bg-[#141417] border border-white/10 overflow-hidden shadow-2xl text-left">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono text-gray-200 divide-y divide-white/10">
            <thead>
              <tr className="bg-[#1C1C20] text-[#9A9AA5] font-sans font-bold uppercase text-[11px] tracking-wider">
                <th className="py-5 px-6">MODULE / MODEL</th>
                <th className="py-5 px-6">FUNCTIONAL ROLE</th>
                <th className="py-5 px-6">LATENCY / METRIC</th>
                <th className="py-5 px-6">INPUT / OUTPUT SCHEME</th>
                <th className="py-5 px-6">TECHNICAL SPECIFICATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-[#141417]">
              {specItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#1C1C20] transition-colors">
                  <td className="py-5 px-6 font-bold text-white font-sans text-sm">
                    <span className="text-[#E8112D] mr-2">▪</span>
                    {item.module}
                  </td>
                  <td className="py-5 px-6 text-[#9A9AA5] font-sans text-xs">{item.role}</td>
                  <td className="py-5 px-6 font-bold text-emerald-400 text-xs font-mono">{item.metric}</td>
                  <td className="py-5 px-6 text-gray-300 text-[11px] font-mono">{item.inputOutput}</td>
                  <td className="py-5 px-6 text-gray-400 font-sans text-xs">{item.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION A: BENCHMARK METRICS (6-Cell Stat Grid) */}
      <div className="space-y-5 text-left">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-mono font-bold text-[#9A9AA5] uppercase tracking-wider">SYSTEM PERFORMANCE</span>
          <h2 className="font-headline text-2xl font-black text-white italic text-left uppercase">
            BENCHMARK METRICS
          </h2>
        </div>

        <div className="saas-card bg-[#141417] border border-white/10 rounded-xl overflow-hidden grid grid-cols-2 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-left">
          {benchmarkMetrics.map((bm, idx) => (
            <div key={idx} className="p-6 sm:p-7 space-y-2 text-left border-b md:border-b-0 border-white/10">
              <span className="text-[11px] font-mono text-[#9A9AA5] block uppercase tracking-wider font-semibold">{bm.label}</span>
              <span className="text-2xl font-mono font-bold" style={{ color: bm.color }}>{bm.value}</span>
              <span className="text-[10px] text-gray-400 block font-mono">{bm.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B: DEPLOYMENT ARCHITECTURE (Request Path Diagram Panel) */}
      <div className="saas-card p-7 space-y-6 bg-[#141417] text-left">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[11px] font-mono text-[#E8112D] uppercase font-bold block">REQUEST PATH PIPELINE</span>
            <h2 className="font-headline text-2xl font-black text-white italic text-left uppercase">
              DEPLOYMENT ARCHITECTURE
            </h2>
          </div>
          <span className="text-xs font-mono text-[#9A9AA5] bg-[#09090C] px-3 py-1 rounded border border-white/10">
            HUGGING FACE REST + WS
          </span>
        </div>

        {/* Horizontal Request Flow Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
          {deploymentPath.map((dp, idx) => {
            const Icon = dp.icon;
            const isLast = idx === deploymentPath.length - 1;
            return (
              <div 
                key={dp.step}
                className="relative saas-card p-5 bg-[#09090C] border border-white/10 space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#E8112D] uppercase">{dp.step}</span>
                    <div className="w-7 h-7 rounded bg-[#E8112D]/15 text-[#E8112D] flex items-center justify-center border border-[#E8112D]/30">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h4 className="font-headline text-base font-bold text-white uppercase italic text-left">
                    {dp.node}
                  </h4>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#9A9AA5] text-left">
                  {dp.desc}
                </div>

                {!isLast && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-white/30">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
