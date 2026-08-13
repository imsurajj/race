import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0D]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-14 sm:h-16 flex items-center justify-between gap-4 text-sm">
        
        {/* Brand Logo / Name */}
        <NavLink to="/" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-7 h-7 rounded bg-gradient-to-br from-[#E8112D] to-[#B80A20] flex items-center justify-center font-headline text-white font-black text-xs shadow-md shadow-[#E8112D]/30 group-hover:scale-105 transition-transform">
            SC
          </div>
          <span className="font-headline text-lg sm:text-xl font-black tracking-wide text-white group-hover:text-[#E8112D] transition-colors italic">
            THE SILENT CO-DRIVER
          </span>
        </NavLink>

        {/* Minimal 4-Page Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isActive 
                  ? 'bg-[#1C1C20] text-white border border-white/15' 
                  : 'text-[#9A9AA5] hover:text-white hover:bg-white/5'
              }`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/app"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isActive 
                  ? 'bg-[#E8112D] text-white shadow-md shadow-[#E8112D]/40' 
                  : 'text-[#9A9AA5] hover:text-white hover:bg-white/5'
              }`
            }
          >
            App Tool
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isActive 
                  ? 'bg-[#1C1C20] text-white border border-white/15' 
                  : 'text-[#9A9AA5] hover:text-white hover:bg-white/5'
              }`
            }
          >
            How It Works
          </NavLink>
          <NavLink
            to="/tech"
            className={({ isActive }) =>
              `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                isActive 
                  ? 'bg-[#1C1C20] text-white border border-white/15' 
                  : 'text-[#9A9AA5] hover:text-white hover:bg-white/5'
              }`
            }
          >
            Tech Specs
          </NavLink>
        </nav>

        {/* Small Hugging Face Badge Pinned Right */}
        <div className="hf-badge hidden sm:inline-flex text-xs py-1 px-3">
          <span className="text-amber-400 font-extrabold text-sm">🤗</span>
          <span className="font-semibold text-gray-200">Hugging Face</span>
        </div>

      </div>
    </header>
  );
}
