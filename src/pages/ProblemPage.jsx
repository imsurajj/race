import React from 'react';
import { AlertCircle, UserCheck, Flag, ShieldAlert, Cpu, Heart, Mic, ArrowRight } from 'lucide-react';

export default function ProblemPage({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 pb-16">
      
      {/* Section Header */}
      <div className="space-y-3 border-b border-white/10 pb-8">
        <div className="flex items-baseline gap-4">
          <span className="section-numeral text-6xl sm:text-7xl">02</span>
          <span className="font-eyebrow text-sm font-bold text-gray-400 tracking-widest uppercase">
            PROBLEM STATEMENT & DOMAIN ANALYSIS
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-headline font-black text-white uppercase italic">
          THE UNTAPPED <span className="text-[#E8112D]">TELEMETRY GAP</span>
        </h2>
        <p className="text-lg font-tech text-gray-300 max-w-3xl">
          Modern motorsport sensors monitor every mechanical component down to the millisecond. Yet the driver’s psychological and emotional state remains completely unmonitored during intense stint battles.
        </p>
      </div>

      {/* Main Narrative Grid: Physical Telemetry vs Voice Tone */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Physical Telemetry Limit Panel */}
        <div className="carbon-panel p-6 space-y-4 border-l-4 border-l-gray-600">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-gray-800 text-gray-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <span className="font-eyebrow text-xs text-gray-400">TRADITIONAL MONITORS</span>
              <h3 className="font-headline text-2xl font-bold text-white">WHAT PHYSICAL TELEMETRY MEASURES</h3>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Formula 1 and endurance pit walls receive 300+ channels of CAN-bus data:
          </p>

          <ul className="red-bullet-list text-sm text-gray-300 space-y-2">
            <li>Tire surface temperature and internal pressure degradation</li>
            <li>Brake bias, throttle application %, and engine RPM curves</li>
            <li>Basic biometric pulse rate (heart rate monitor in undersuit)</li>
          </ul>

          <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/30 text-xs text-red-300">
            <span className="font-bold block text-red-400 mb-1">THE FATAL FLAW:</span>
            A heart rate spike of 165 BPM can indicate laser-focused concentration or blind panic. Physical telemetry cannot distinguish focus from overload until a driver locks up or spins.
          </div>
        </div>

        {/* Vocal Acoustic Intelligence Panel */}
        <div className="carbon-panel p-6 space-y-4 border-l-4 border-l-[#E8112D]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#E8112D]/20 text-[#E8112D]">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <span className="font-eyebrow text-xs text-[#E8112D] font-bold">THE SILENT CO-DRIVER SOLUTION</span>
              <h3 className="font-headline text-2xl font-bold text-white">WHAT RADIO TONE REVEALS</h3>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Vocal acoustics contain micro-tremors, pitch jitter, and speaking rate variations that directly measure cognitive stress:
          </p>

          <ul className="red-bullet-list text-sm text-gray-300 space-y-2">
            <li>High pitch variance + rapid speech = Acute driver panic under wheel-to-wheel pressure</li>
            <li>Lethargic speech rate + low RMS energy = Hidden physical & mental fatigue</li>
            <li>Optimal pitch stability = Calm driver executing strategy in clean air</li>
          </ul>

          <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-xs text-emerald-300">
            <span className="font-bold block text-emerald-400 mb-1">PROACTIVE INTERVENTION:</span>
            Acoustic tone analysis detects stress 5 to 8 laps before physical lap times drop off, allowing pit wall engineers to issue reassuring radio messages or adjust pit window timing.
          </div>
        </div>

      </div>

      {/* Target Beneficiaries / Use Cases */}
      <div className="space-y-6 pt-6">
        <h3 className="font-headline text-3xl font-black text-white uppercase italic">
          WHO BENEFITS FROM THIS SYSTEM?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Beneficiary 1 */}
          <div className="carbon-panel p-6 space-y-4 hover:border-[#E8112D] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#E8112D]/20 border border-[#E8112D]/40 flex items-center justify-center text-[#E8112D]">
              <Flag className="w-6 h-6" />
            </div>
            <h4 className="font-headline text-2xl font-bold text-white">1. RACE ENGINEERS ON PIT WALL</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pit wall strategists are overwhelmed by numerical dashboards. "The Silent Co-Driver" highlights driver emotional state with simple visual indicators, prompting timely calm radio instructions during high-tension safety cars or battle laps.
            </p>
          </div>

          {/* Beneficiary 2 */}
          <div className="carbon-panel p-6 space-y-4 hover:border-[#E8112D] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#E8112D]/20 border border-[#E8112D]/40 flex items-center justify-center text-[#E8112D]">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="font-headline text-2xl font-bold text-white">2. JUNIOR DRIVER COACHING</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Young drivers in F3/F2 often hide anxiety or tire frustration from coaches. Post-session acoustic reports correlate vocal panic moments with telemetry errors, enabling targeted psychological and composure training.
            </p>
          </div>

          {/* Beneficiary 3 */}
          <div className="carbon-panel p-6 space-y-4 hover:border-[#E8112D] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#E8112D]/20 border border-[#E8112D]/40 flex items-center justify-center text-[#E8112D]">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="font-headline text-2xl font-bold text-white">3. ENDURANCE RACING STINTS</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              In 24-hour Le Mans or Nürburgring races, driver fatigue causes severe night-time crashes. Objective acoustic fatigue scoring alerts team principals to initiate driver swaps before lap times degrade exponentially.
            </p>
          </div>

        </div>
      </div>

      {/* CTA section */}
      <div className="carbon-panel p-8 bg-gradient-to-r from-[#18181C] via-[#121215] to-[#1A1012] border-l-4 border-l-[#E8112D] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-headline text-3xl font-black text-white italic">EXPLORE THE ARCHITECTURE PIPELINE</h3>
          <p className="text-sm text-gray-300">See how Whisper ASR and continuous emotion models process radio audio in 4 steps.</p>
        </div>
        <button
          onClick={() => onNavigate('how-it-works')}
          className="btn-primary py-3 px-6 text-sm"
        >
          <span>HOW IT WORKS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
