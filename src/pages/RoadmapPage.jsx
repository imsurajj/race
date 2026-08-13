import React from 'react';
import { Rocket, Target, Zap, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function RoadmapPage({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 pb-16">
      
      {/* Section Header */}
      <div className="space-y-3 border-b border-white/10 pb-6">
        <div className="flex items-baseline gap-4">
          <span className="section-numeral text-6xl sm:text-7xl">07</span>
          <span className="font-eyebrow text-sm font-bold text-gray-400 tracking-widest uppercase">
            PRODUCT EVOLUTION & VISION
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-headline font-black text-white uppercase italic">
          DEVELOPMENT <span className="text-[#E8112D]">ROADMAP</span>
        </h2>
        <p className="text-base font-tech text-gray-300">
          From our current hackathon MVP build to a full enterprise pit-wall decision intelligence platform.
        </p>
      </div>

      {/* Side-by-Side Comparison: Current MVP vs Stretch Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MVP NOW Panel */}
        <div className="carbon-panel p-6 space-y-5 border-l-4 border-l-[#E8112D]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E8112D]/20 text-[#E8112D] flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="badge bg-[#E8112D] text-white text-[10px] font-tech font-bold px-2 py-0.5 rounded">
                  DEPLOYED NOW
                </span>
                <h3 className="font-headline text-2xl font-bold text-white uppercase">
                  PHASE 1: HACKATHON MVP
                </h3>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Our functional V1 build meets all core problem statement requirements for pit-wall acoustic evaluation:
          </p>

          <ul className="red-bullet-list text-sm text-gray-300 space-y-3">
            <li><strong>Single Clip Audio Upload:</strong> Ingest pre-recorded or uploaded WAV/MP3 driver radio clips.</li>
            <li><strong>Whisper ASR Integration:</strong> Speech-to-text conversion tuned for engine roar environment.</li>
            <li><strong>3-Label Mood Classification:</strong> Discrete output mapping to Calm, Stressed, or Tired.</li>
            <li><strong>Static CSV Lap Alignment:</strong> Correlates timestamps directly onto lap time telemetry charts with mood markers.</li>
            <li><strong>Hugging Face Space Host:</strong> Live REST API and Gradio interface deployment.</li>
          </ul>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={() => onNavigate('demo')}
              className="btn-primary text-xs py-2 px-4"
            >
              <span>TEST MVP IN DEMO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FUTURE STRETCH GOALS Panel */}
        <div className="carbon-panel p-6 space-y-5 border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <span className="badge bg-amber-500 text-black text-[10px] font-tech font-bold px-2 py-0.5 rounded">
                  FUTURE HORIZONS
                </span>
                <h3 className="font-headline text-2xl font-bold text-white uppercase">
                  PHASE 2 & 3: STRETCH GOALS
                </h3>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Next-level features planned for real-time race weekend integration and multi-team analytics:
          </p>

          <ul className="red-bullet-list text-sm text-gray-300 space-y-3">
            <li><strong>Multi-Driver Comparison:</strong> Simultaneous acoustic stress tracking for teammate comparisons and overtake vulnerability scoring.</li>
            <li><strong>Live Microphone Pit Feed:</strong> Low-latency streaming mic ingestion via WebSockets straight from pit wall radio receivers.</li>
            <li><strong>Historical Race Database:</strong> Multi-season driver acoustic profiles to model individual baseline stress degradation curves.</li>
            <li><strong>Predictive Pit Window Optimization:</strong> Autonomous strategy recommendation engine altering pit windows based on cognitive fatigue thresholds.</li>
          </ul>

          <div className="pt-4 border-t border-white/10 text-xs font-tech text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>Targeting Formula E & Endurance WEC team trials for 2027 season.</span>
          </div>
        </div>

      </div>

      {/* Timeline Visual Graphic */}
      <div className="carbon-panel p-8 space-y-6">
        <h3 className="font-headline text-2xl font-bold text-white uppercase border-b border-white/10 pb-3">
          MILESTONE TIMELINE
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-tech">
          <div className="bg-[#0D0D10] p-4 rounded-xl border border-[#E8112D]/40 space-y-2">
            <div className="text-xs font-bold text-[#E8112D]">Q3 2026 — CURRENT</div>
            <div className="text-lg font-bold text-white font-headline">HACKATHON RELEASE</div>
            <p className="text-xs text-gray-400">Offline clip ingestion, Whisper ASR, 3-mood classifier, dynamic Plotly lap chart.</p>
          </div>

          <div className="bg-[#0D0D10] p-4 rounded-xl border border-white/10 space-y-2">
            <div className="text-xs font-bold text-blue-400">Q4 2026 — STAGE 2</div>
            <div className="text-lg font-bold text-white font-headline">LIVE STREAMING & WS</div>
            <p className="text-xs text-gray-400">Real-time WebSocket audio streaming, multi-driver side-by-side radio channels.</p>
          </div>

          <div className="bg-[#0D0D10] p-4 rounded-xl border border-white/10 space-y-2">
            <div className="text-xs font-bold text-amber-400">Q1 2027 — STAGE 3</div>
            <div className="text-lg font-bold text-white font-headline">STRATEGY INTEGRATION</div>
            <p className="text-xs text-gray-400">Autonomous pit-stop recommendation engine synced with telemetry CAN-bus.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
