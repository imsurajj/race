import React from 'react';
import { Trophy, Flame, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-12 pb-8 text-xs font-tech text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#E8112D]"></span>
              <h3 className="font-headline text-2xl font-black text-white italic tracking-wider">
                THE SILENT CO-DRIVER
              </h3>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Problem Statement 01 for Geek Room x SheBuilds AI Race Month. Acoustic stress classification from driver radio calls correlated with telemetry lap times.
            </p>
            <div className="hf-badge-pill">
              <span className="text-amber-400 font-extrabold text-sm">🤗</span>
              <span>HUGGING FACE</span>
              <span className="text-gray-400 text-[10px]">—</span>
              <span className="highlight">MANDATORY IN EVERY BUILD</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-headline font-bold text-white text-base tracking-wider uppercase text-[#E8112D]">
              PAGE INDEX
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#E8112D] transition-colors">
                  01 — HERO / LANDING
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('problem')} className="hover:text-[#E8112D] transition-colors">
                  02 — WHY IT MATTERS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('how-it-works')} className="hover:text-[#E8112D] transition-colors">
                  03 — HOW IT WORKS
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('demo')} className="hover:text-[#E8112D] transition-colors">
                  04 — LIVE DEMO
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tech-stack')} className="hover:text-[#E8112D] transition-colors">
                  05 — TECH STACK
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-[#E8112D] transition-colors">
                  06 — THE TEAM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('roadmap')} className="hover:text-[#E8112D] transition-colors">
                  07 — ROADMAP
                </button>
              </li>
            </ul>
          </div>

          {/* Hackathon Organizers */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-headline font-bold text-white text-base tracking-wider uppercase text-[#E8112D]">
              ORGANIZERS & PARTNERS
            </h4>
            <div className="space-y-1.5 text-gray-300">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Trophy className="w-3.5 h-3.5 text-[#E8112D]" />
                <span>Geek Room</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-pink-400">
                <Flame className="w-3.5 h-3.5 text-pink-500" />
                <span>SheBuilds AI Race Month</span>
              </div>
              <div className="text-gray-400 text-[11px] pt-1">
                Plaksha University DS BRAR Center for Girls and Women in STEM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © 2026 The Silent Co-Driver. Built for Geek Room x SheBuilds AI Race Month Hackathon.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E8112D]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
