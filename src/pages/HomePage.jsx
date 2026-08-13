import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page-wrap">
      <section className="home-hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="dot" />
            <span>MOTORSPORT ACOUSTIC TELEMETRY ENGINE</span>
          </div>

          <div>
            <h1 className="hero-title">
              THE SILENT <span className="accent">CO-DRIVER</span>
            </h1>
          </div>

          <p className="hero-subtitle">
            Reading driver stress from radio calls and turning it into lap-time intelligence.
          </p>

          <p className="hero-copy">
            Built to interpret live pit-radio audio, detect emotional pressure, and map the driver’s stress profile against race performance in real time.
          </p>

          <button className="cta-btn" onClick={() => navigate('/app')}>
            <span>Open Live Dashboard</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="stats-strip">
        <div className="stat-tile">
          <span className="stat-label">ASR latency</span>
          <span className="stat-value" style={{ color: '#fff' }}>&lt; 350 ms</span>
          <span className="stat-meta">Whisper large-v3-turbo</span>
        </div>

        <div className="stat-tile">
          <span className="stat-label">Emotion accuracy</span>
          <span className="stat-value" style={{ color: '#39d69d' }}>94.2% F1</span>
          <span className="stat-meta">wav2vec2-arousal-valence</span>
        </div>

        <div className="stat-tile">
          <span className="stat-label">Prosody channels</span>
          <span className="stat-value" style={{ color: '#6fb2ff' }}>3-Axis VAD</span>
          <span className="stat-meta">librosa DSP engine</span>
        </div>

        <div className="stat-tile">
          <span className="stat-label">Telemetry sync</span>
          <span className="stat-value" style={{ color: '#ff5f7a' }}>Real-Time</span>
          <span className="stat-meta">pandas + Plotly / Chart.js</span>
        </div>
      </section>
    </div>
  );
}
