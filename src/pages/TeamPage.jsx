import React from 'react';
import { User, Cpu, Database, Layout, Mic, Code, Globe, Award } from 'lucide-react';

export default function TeamPage() {
  const members = [
    {
      name: 'ASR & Tone Pipeline Lead',
      role: 'SPEECH & ACOUSTIC MODELING',
      focus: [
        'Fine-tuned Whisper large-v3-turbo on high-noise cockpit audio',
        'Built wav2vec2 continuous Arousal-Valence scoring pipeline',
        'Implemented librosa prosodic pitch and speech rate extraction'
      ],
      icon: Cpu,
      color: '#E8112D',
      avatar: '🏎️'
    },
    {
      name: 'Data & Correlation Architect',
      role: 'TELEMETRY ALIGNMENT ENGINE',
      focus: [
        'Designed time-series alignment algorithm connecting radio timestamps to lap CSVs',
        'Built lap time degradation delta calculation logic',
        'Created pandas data ingestion and validation pipelines'
      ],
      icon: Database,
      color: '#3B82F6',
      avatar: '📊'
    },
    {
      name: 'Frontend & Demo Engineer',
      role: 'PIT WALL DASHBOARD & UX',
      focus: [
        'Architected carbon-fiber motorsport UI design system',
        'Built interactive audio spectrum visualizer & dynamic Plotly/Chart overlay',
        'Integrated real Hugging Face Space iframe embed'
      ],
      icon: Layout,
      color: '#10B981',
      avatar: '💻'
    },
    {
      name: 'Research & Pitch Lead',
      role: 'MOTORSPORT DOMAIN & PRESENTATION',
      focus: [
        'Formulated problem statement & pit wall engineer requirements',
        'Validated acoustic stress markers with F1 driver radio telemetry studies',
        'Created hackathon pitch deck & final judge presentation'
      ],
      icon: Award,
      color: '#F59E0B',
      avatar: '🏁'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 pb-16">
      
      {/* Section Header */}
      <div className="space-y-3 border-b border-white/10 pb-6">
        <div className="flex items-baseline gap-4">
          <span className="section-numeral text-6xl sm:text-7xl">06</span>
          <span className="font-eyebrow text-sm font-bold text-gray-400 tracking-widest uppercase">
            GEEK ROOM × SHEBUILDS HACKATHON TEAM
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-headline font-black text-white uppercase italic">
          THE TEAM BEHIND <span className="text-[#E8112D]">THE SILENT CO-DRIVER</span>
        </h2>
        <p className="text-base font-tech text-gray-300">
          A balanced 4-person engineering split spanning speech AI, telemetry correlation, motorsport UX, and research.
        </p>
      </div>

      {/* 4-Person Role Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {members.map((member, index) => {
          const Icon = member.icon;
          return (
            <div 
              key={index}
              className="carbon-panel p-6 space-y-4 border-l-4 hover:border-[#E8112D] transition-all flex flex-col justify-between"
              style={{ borderLeftColor: member.color }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#0D0D10] border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                    {member.avatar}
                  </div>
                  <div>
                    <span className="font-eyebrow text-xs font-extrabold tracking-wider block text-[#E8112D]">
                      {member.role}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-white uppercase">
                      {member.name}
                    </h3>
                  </div>
                </div>

                {/* Key Focus Items (Red Square Bullets) */}
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="font-tech text-xs font-bold text-gray-400 block uppercase">
                    CORE RESPONSIBILITIES:
                  </span>
                  <ul className="red-bullet-list text-xs sm:text-sm text-gray-300">
                    {member.focus.map((item, fIdx) => (
                      <li key={fIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-tech text-gray-400">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Icon className="w-4 h-4 text-[#E8112D]" />
                  <span>SPECIALIZED WORKFLOW</span>
                </span>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="hover:text-white cursor-pointer"><Code className="w-4 h-4" /></span>
                  <span className="hover:text-white cursor-pointer"><Globe className="w-4 h-4" /></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
