import React from 'react';
import { Mic, FileText, Cpu, Tag, LineChart, ArrowRight, Activity, CheckCircle2, Shield, Layers } from 'lucide-react';

export default function HowItWorksPage() {
  const pipelineStages = [
    {
      step: '01',
      title: 'Audio Input',
      icon: Mic,
      tech: '16kHz PCM DSP',
      metric: 'Audio Bandpass'
    },
    {
      step: '02',
      title: 'Whisper ASR',
      icon: FileText,
      tech: 'Whisper large-v3-turbo',
      metric: '<350ms Latency'
    },
    {
      step: '03',
      title: 'Emotion Model',
      icon: Cpu,
      tech: 'wav2vec2 Continuous',
      metric: '3-Axis VAD Vector'
    },
    {
      step: '04',
      title: 'Mood Label',
      icon: Tag,
      tech: 'Acoustic Classifier',
      metric: '94.2% F1 Accuracy'
    },
    {
      step: '05',
      title: 'Lap Overlay',
      icon: LineChart,
      tech: 'pandas + Plotly / Chart.js',
      metric: 'Time-Series Sync'
    }
  ];

  const walkthroughSteps = [
    {
      stage: 'STAGE 1: AUDIO INPUT',
      header: 'Raw Pit Radio Feed',
      detail: '12.0s audio clip • 16kHz PCM DSP filtered',
      sub: 'Engine roar isolated (-12dB SNR)',
      badge: 'PCM Signal',
      color: '#3B82F6'
    },
    {
      stage: 'STAGE 2: WHISPER ASR',
      header: 'Text Transcript',
      detail: '"Tires are completely gone! Box box! He\'s turning into me on turn 4! Check the front wing telemetry now!"',
      sub: 'Word timestamps synchronized',
      badge: 'Text Output',
      color: '#8B5CF6'
    },
    {
      stage: 'STAGE 3: EMOTION MODEL',
      header: 'VAD Feature Vectors',
      detail: 'Arousal: 92% (High Tension) • Valence: 15% (Negative)',
      sub: 'Pitch Var: 68.7Hz • Rate: 6.8 w/sec',
      badge: 'Vector Output',
      color: '#F59E0B'
    },
    {
      stage: 'STAGE 4: MOOD LABEL',
      header: 'State Classification',
      detail: 'STRESSED — 96% confidence score',
      sub: 'Vocal panic threshold exceeded',
      badge: 'State Output',
      color: '#E8112D'
    },
    {
      stage: 'STAGE 5: LAP OVERLAY',
      header: 'Telemetry Alignment',
      detail: '+2.450s vs target, plotted at Lap 22',
      sub: 'Correlated with sector 2 slowdown',
      badge: 'Telemetry Sync',
      color: '#10B981'
    }
  ];

  const rationaleBlocks = [
    {
      title: 'Why Whisper large-v3-turbo',
      tag: 'ASR OPTIMIZATION',
      text: 'Optimizes the speed vs. word-error-rate tradeoff for heavily contaminated cockpit radio audio (-12dB SNR). Sub-350ms inference ensures telemetry alignment before the driver completes the sector.'
    },
    {
      title: 'Why Continuous Arousal/Valence Scoring',
      tag: 'EMOTION MATHEMATICS',
      text: 'Multi-dimensional VAD acoustic vector space provides a defensible mathematical mapping to Calm, Stressed, and Tired states rather than forcing rigid, arbitrary categorical emotion buckets.'
    },
    {
      title: 'Why librosa Prosody Layer',
      tag: 'ACOUSTIC VALIDATION',
      text: 'Layering pitch variance (Hz), speech rate, and RMS acoustic energy on top of neural embeddings provides an interpretable secondary validation signal to verify model classifications.'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-12 text-left">
      
      {/* Header */}
      <div className="space-y-2 text-left border-b border-white/10 pb-6">
        <div className="flex items-center gap-2 text-xs text-[#9A9AA5]">
          <span>Documentation</span>
          <span>/</span>
          <span className="text-white font-semibold">How It Works</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-headline font-black text-white italic tracking-tight uppercase text-left">
          TECHNICAL <span className="text-[#E8112D]">PIPELINE FLOWCHART</span>
        </h1>
      </div>

      {/* SECTION 1: 5-STAGE PIPELINE FLOWCHART */}
      <div className="saas-card p-6 sm:p-7 space-y-5 bg-[#141417] text-left">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            5-STAGE ACOUSTIC PROCESSING PIPELINE
          </span>
          <span className="text-[11px] font-mono text-[#9A9AA5]">FLOWCHART SPECIFICATION</span>
        </div>
        
        {/* Horizontal Node Flowchart Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {pipelineStages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === pipelineStages.length - 1;
            return (
              <div 
                key={stage.step} 
                className="relative flex flex-col justify-between p-5 rounded-xl bg-[#09090C] border border-white/10 hover:border-[#E8112D]/40 transition-all text-left space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-headline font-black text-xl text-[#E8112D]">
                      {stage.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#E8112D]/15 text-[#E8112D] flex items-center justify-center border border-[#E8112D]/30">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-white uppercase italic tracking-wide text-left">
                    {stage.title}
                  </h3>

                  <div className="text-[11px] font-mono text-emerald-400 font-semibold text-left">
                    {stage.metric}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-[#9A9AA5] text-left">
                  {stage.tech}
                </div>

                {!isLast && (
                  <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-[#E8112D]">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION A: EXAMPLE WALKTHROUGH (Charles L. / Car 16 / Stressed) */}
      <div className="saas-card p-6 sm:p-7 space-y-5 bg-[#141417] text-left">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[11px] font-mono text-[#E8112D] uppercase font-bold block">REAL SAMPLE EXECUTION TRACE</span>
            <h2 className="font-headline text-2xl font-black text-white italic text-left uppercase">
              EXAMPLE WALKTHROUGH — CHARLES L. (CAR 16)
            </h2>
          </div>
          <span className="text-xs font-mono text-[#9A9AA5] bg-[#09090C] px-3 py-1 rounded border border-white/10">
            SAMPLE ID: clip-stressed-022
          </span>
        </div>

        {/* Connected Horizontal Timeline Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {walkthroughSteps.map((step, idx) => {
            const isLast = idx === walkthroughSteps.length - 1;
            return (
              <div 
                key={idx}
                className="relative saas-card p-5 bg-[#09090C] border border-white/10 space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#9A9AA5] uppercase">{step.stage}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded text-white font-bold" style={{ backgroundColor: `${step.color}40`, border: `1px solid ${step.color}` }}>
                      {step.badge}
                    </span>
                  </div>

                  <h4 className="font-headline text-base font-bold text-white uppercase italic text-left">
                    {step.header}
                  </h4>

                  <p className="text-xs font-mono text-gray-200 bg-white/5 p-2 rounded border border-white/5 italic text-left leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-[#9A9AA5] text-left">
                  {step.sub}
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

      {/* SECTION B: WHY THIS ARCHITECTURE (3-Column Rationale Grid) */}
      <div className="space-y-4 text-left">
        <div className="border-b border-white/10 pb-3">
          <span className="text-xs font-mono font-bold text-[#9A9AA5] uppercase tracking-wider">ENGINEERING RATIONALE</span>
          <h2 className="font-headline text-2xl font-black text-white italic text-left uppercase">
            WHY THIS ARCHITECTURE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {rationaleBlocks.map((block, idx) => (
            <div key={idx} className="saas-card p-6 space-y-4 bg-[#141417] text-left">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#E8112D] bg-[#E8112D]/10 px-2 py-0.5 rounded border border-[#E8112D]/30">
                  {block.tag}
                </span>
                <Shield className="w-4 h-4 text-[#9A9AA5]" />
              </div>

              <h3 className="font-headline text-xl font-bold text-white uppercase italic text-left">
                {block.title}
              </h3>

              <p className="text-sm text-[#9A9AA5] leading-[1.6] font-normal text-left">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
