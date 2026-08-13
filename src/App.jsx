import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AppToolPage from './pages/AppToolPage';
import HowItWorksPage from './pages/HowItWorksPage';
import TechStackPage from './pages/TechStackPage';

export default function App() {
  return (
    <Router>
      <div className="bg-[#0A0A0D] min-h-screen text-white selection:bg-[#E8112D] selection:text-white">
        {/* Thin Persistent Top Bar */}
        <Navbar />

        {/* 4-Route View Switcher */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app" element={<AppToolPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/tech" element={<TechStackPage />} />
          </Routes>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-white/10 py-8 text-xs text-[#9A9AA5] mt-20 bg-[#08080A]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-headline font-bold text-white tracking-wide">THE SILENT CO-DRIVER</span> — Motorsport Telemetry Engine
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span>Whisper large-v3-turbo</span>
              <span>•</span>
              <span>wav2vec2 Emotion Engine</span>
              <span>•</span>
              <span>Hugging Face Spaces</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
