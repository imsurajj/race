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
      <div className="site-shell">
        <Navbar />

        <main className="site-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app" element={<AppToolPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/tech" element={<TechStackPage />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="page-wrap footer-inner">
            <div className="footer-brand">
              <span className="brand-text footer-name">THE SILENT CO-DRIVER</span>
              <span className="footer-text">Motorsport Telemetry Engine</span>
            </div>
            <div className="footer-meta">
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
