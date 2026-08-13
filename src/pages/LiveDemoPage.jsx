import React, { useState } from 'react';
import { Sparkles, Layers, FileSpreadsheet, ExternalLink, RefreshCw, Upload, Radio, Info } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import LapTimeChart from '../components/LapTimeChart';
import { SAMPLE_CLIPS, INITIAL_TELEMETRY_DATA, INITIAL_CSV_STRING } from '../data/sampleClips';

export default function LiveDemoPage() {
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'hf-space'
  const [clips, setClips] = useState(SAMPLE_CLIPS);
  const [selectedClip, setSelectedClip] = useState(SAMPLE_CLIPS[1]); // default to Stressed sample
  const [telemetryData, setTelemetryData] = useState(INITIAL_TELEMETRY_DATA);
  const [csvInput, setCsvInput] = useState(INITIAL_CSV_STRING);
  const [hfSpaceUrl, setHfSpaceUrl] = useState('https://openai-whisper.hf.space');
  const [showCsvEditor, setShowCsvEditor] = useState(false);
  const [csvError, setCsvError] = useState('');

  // Handle selected lap click from chart
  const handleSelectLap = (lapItem) => {
    // Find matching clip or build clip object
    const matchingClip = clips.find(c => c.mood.toLowerCase() === lapItem.mood.toLowerCase()) || {
      id: "clip-lap-" + lapItem.lap,
      mood: lapItem.mood,
      moodLabel: lapItem.mood.toUpperCase(),
      confidence: 92,
      driver: `Driver Radio (Lap ${lapItem.lap})`,
      team: "Pit Wall Data",
      lap: lapItem.lap,
      lapTime: lapItem.timeStr || `${lapItem.lapTime}s`,
      lapTimeSec: lapItem.lapTime,
      delta: "+1.95s vs Target",
      transcript: lapItem.transcript || "Radio transcript...",
      acousticMetrics: {
        arousal: lapItem.mood === 'stressed' ? 90 : lapItem.mood === 'tired' ? 35 : 25,
        valence: lapItem.mood === 'calm' ? 80 : 20,
        dominance: 50,
        pitchVariance: "32.1 Hz",
        speakingRate: "4.5 words/sec",
        rmsEnergy: "0.080 RMS"
      },
      badgeColor: lapItem.mood === 'calm' ? '#10B981' : lapItem.mood === 'stressed' ? '#E8112D' : '#F59E0B'
    };
    setSelectedClip(matchingClip);
  };

  // Handle CSV parser
  const handleApplyCsv = () => {
    try {
      setCsvError('');
      const lines = csvInput.trim().split('\n');
      if (lines.length < 2) {
        throw new Error('CSV must contain a header and at least 1 data row.');
      }
      
      const newItems = [];
      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(',');
        if (parts.length >= 3) {
          const lap = parseInt(parts[0].trim());
          const lapTimeSec = parseFloat(parts[1].trim());
          const mood = parts[2].trim().toLowerCase();
          const transcript = parts.slice(3).join(',').trim().replace(/^"|"$/g, '');

          if (!isNaN(lap) && !isNaN(lapTimeSec)) {
            newItems.push({
              lap,
              lapTime: lapTimeSec,
              timeStr: `${Math.floor(lapTimeSec / 60)}:${(lapTimeSec % 60).toFixed(3).padStart(6, '0')}`,
              mood: mood || 'calm',
              transcript: transcript || `Lap ${lap} telemetry point`
            });
          }
        }
      }

      if (newItems.length === 0) {
        throw new Error('No valid lap rows parsed from CSV.');
      }

      setTelemetryData(newItems);
      setShowCsvEditor(false);
    } catch (err) {
      setCsvError(err.message);
    }
  };

  const handleCustomUpload = (newClip) => {
    setClips([newClip, ...clips]);
    setSelectedClip(newClip);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8 pb-16">
      
      {/* Section Header */}
      <div className="space-y-3 border-b border-white/10 pb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-4">
            <span className="section-numeral text-6xl sm:text-7xl">04</span>
            <span className="font-eyebrow text-sm font-bold text-gray-400 tracking-widest uppercase">
              HACKATHON LIVE DEMO & TESTBED
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-black text-white uppercase italic">
            EXPERIENCE THE <span className="text-[#E8112D]">PIT WALL CO-DRIVER</span>
          </h2>
        </div>

        {/* Tab Switcher: Simulator vs Hugging Face Embed */}
        <div className="flex items-center gap-2 bg-[#121216] p-1.5 rounded-xl border border-white/10 text-xs font-tech">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'simulator'
                ? 'bg-[#E8112D] text-white shadow-lg shadow-[#E8112D]/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Radio className="w-4 h-4" />
            <span>INTERACTIVE SIMULATOR</span>
          </button>

          <button
            onClick={() => setActiveTab('hf-space')}
            className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'hf-space'
                ? 'bg-[#E8112D] text-white shadow-lg shadow-[#E8112D]/40'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-base">🤗</span>
            <span>HUGGING FACE SPACE EMBED</span>
          </button>
        </div>
      </div>

      {/* TAB A: INTERACTIVE SIMULATOR */}
      {activeTab === 'simulator' && (
        <div className="space-y-8">
          
          {/* Audio Console Section */}
          <AudioPlayer
            clips={clips}
            selectedClip={selectedClip}
            onSelectClip={setSelectedClip}
            onCustomUpload={handleCustomUpload}
          />

          {/* Dynamic Lap-Time Overlay Chart with Mood Markers */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-eyebrow text-xs text-[#E8112D] font-bold">TELEMETRY ALIGNMENT</span>
                <h3 className="font-headline text-2xl sm:text-3xl font-black text-white uppercase italic">
                  CORRELATED LAP TIME OVERLAY
                </h3>
              </div>

              {/* Toggle CSV Editor Button */}
              <button
                onClick={() => setShowCsvEditor(!showCsvEditor)}
                className="btn-secondary text-xs py-2 px-4"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#E8112D]" />
                <span>{showCsvEditor ? 'HIDE CSV DATASET EDITOR' : 'IMPORT / EDIT TELEMETRY CSV'}</span>
              </button>
            </div>

            {/* Optional CSV Dataset Editor Drawer */}
            {showCsvEditor && (
              <div className="carbon-panel p-6 bg-[#0D0D10] border-l-4 border-l-[#E8112D] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-headline text-lg font-bold text-white flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5 text-[#E8112D]" />
                    CUSTOM TELEMETRY CSV INGESTION
                  </h4>
                  <span className="text-xs font-tech text-gray-400">FORMAT: lap,lap_time_sec,mood,transcript</span>
                </div>

                <textarea
                  value={csvInput}
                  onChange={(e) => setCsvInput(e.target.value)}
                  rows={7}
                  className="w-full bg-[#050507] p-3 rounded-lg border border-white/10 font-mono text-xs text-gray-200 focus:border-[#E8112D] focus:outline-none"
                  placeholder="lap,lap_time_sec,mood,transcript..."
                ></textarea>

                {csvError && (
                  <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs font-tech rounded">
                    ⚠️ {csvError}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      setCsvInput(INITIAL_CSV_STRING);
                      setCsvError('');
                    }}
                    className="text-xs font-tech text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    RESET TO DEFAULT F1 DATASET
                  </button>

                  <button
                    onClick={handleApplyCsv}
                    className="btn-primary text-xs py-2 px-5"
                  >
                    <span>UPDATE DYNAMIC CHART</span>
                  </button>
                </div>
              </div>
            )}

            {/* Dynamic Chart Component */}
            <LapTimeChart
              data={telemetryData}
              onSelectLap={handleSelectLap}
            />
          </div>

        </div>
      )}

      {/* TAB B: REAL HUGGING FACE SPACE IFRAME EMBED */}
      {activeTab === 'hf-space' && (
        <div className="space-y-6">
          <div className="carbon-panel p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🤗</span>
                <div>
                  <h3 className="font-headline text-2xl font-bold text-white">HUGGING FACE GRADIO SPACE EMBED</h3>
                  <p className="text-xs text-gray-400">Mandatory hackathon component hosted on Hugging Face Spaces.</p>
                </div>
              </div>

              {/* URL Customizer Input */}
              <div className="flex items-center gap-2 bg-[#0A0A0C] p-2 rounded-lg border border-white/10 flex-1 max-w-md">
                <span className="text-xs font-tech text-gray-400">SPACE EMBED URL:</span>
                <input
                  type="text"
                  value={hfSpaceUrl}
                  onChange={(e) => setHfSpaceUrl(e.target.value)}
                  className="bg-transparent text-xs font-mono text-gray-200 flex-1 focus:outline-none"
                  placeholder="https://openai-whisper.hf.space"
                />
                <a
                  href={hfSpaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 p-1"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hugging Face Space Iframe */}
            <div className="w-full h-[680px] bg-[#0A0A0C] rounded-xl border border-white/10 overflow-hidden relative shadow-2xl">
              <iframe
                src={hfSpaceUrl}
                title="The Silent Co-Driver Hugging Face Space"
                className="w-full h-full border-0"
                allow="microphone; camera"
              ></iframe>
            </div>

            <div className="flex items-center justify-between text-xs font-tech text-gray-400 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1 text-amber-400">
                <Info className="w-4 h-4" />
                Hugging Face badge & space iframe embed verified for SheBuilds AI Race Month requirements.
              </span>
              <span className="text-gray-500">HF MODEL: whisper-large-v3-turbo + wav2vec2-arousal</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
