import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Upload, FileSpreadsheet, RefreshCw, AlertTriangle, CheckCircle2, BatteryCharging, Sparkles, Volume2, Mic } from 'lucide-react';
import LapTimeChart from './LapTimeChart';
import { SAMPLE_CLIPS, INITIAL_TELEMETRY_DATA, INITIAL_CSV_STRING } from '../data/sampleClips';

export default function TelemetryToolPanel({ previewMode = false }) {
  const [clips, setClips] = useState(SAMPLE_CLIPS);
  const [selectedClipId, setSelectedClipId] = useState(SAMPLE_CLIPS[1].id); // default Stressed
  const [telemetryData, setTelemetryData] = useState(INITIAL_TELEMETRY_DATA);
  const [csvInput, setCsvInput] = useState(INITIAL_CSV_STRING);
  const [showCsvEditor, setShowCsvEditor] = useState(false);
  const [csvError, setCsvError] = useState('');
  
  // Audio playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 12;
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const fileInputRef = useRef(null);

  // Active clip derived object
  const currentClip = clips.find(c => c.id === selectedClipId) || clips[0];

  // Playback timer loop
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Audio Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = 3;
      const barGap = 2;
      const barCount = Math.floor(canvas.width / (barWidth + barGap));
      
      const moodColor = currentClip.mood === 'calm' 
        ? '#10B981' 
        : currentClip.mood === 'stressed' 
          ? '#E8112D' 
          : '#F59E0B';

      for (let i = 0; i < barCount; i++) {
        let barHeight;
        if (isPlaying) {
          const freq = Math.sin((i * 0.25) + (Date.now() * 0.009)) * 0.5 + 0.5;
          barHeight = Math.max(4, freq * (canvas.height - 8));
        } else {
          barHeight = Math.max(3, Math.abs(Math.sin(i * 0.35)) * (canvas.height * 0.35));
        }

        const x = i * (barWidth + barGap);
        const y = (canvas.height - barHeight) / 2;

        ctx.fillStyle = moodColor;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 1.5);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, currentClip]);

  // Custom audio upload handler
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newClip = {
      id: "clip-custom-" + Date.now(),
      mood: "stressed",
      moodLabel: "Stressed",
      confidence: 93,
      driver: `File: ${file.name.substring(0, 16)}...`,
      team: "Uploaded Input",
      lap: 18,
      lapTime: "1:22.400",
      lapTimeSec: 82.4,
      delta: "+2.90s vs Pace",
      transcript: `[Ingested File: ${file.name}] "Copy pit wall... car is sliding into turn 4, understeer severe!"`,
      acousticMetrics: {
        arousal: 89,
        valence: 20,
        dominance: 60,
        pitchVariance: "61.2 Hz",
        speakingRate: "6.2 words/sec",
        rmsEnergy: "0.155 RMS"
      },
      badgeColor: "#E8112D"
    };

    setClips([newClip, ...clips]);
    setSelectedClipId(newClip.id);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  // CSV Data Ingestion handler
  const handleApplyCsv = () => {
    try {
      setCsvError('');
      const lines = csvInput.trim().split('\n');
      if (lines.length < 2) {
        throw new Error('CSV must contain header and at least 1 data row.');
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
        throw new Error('No valid lap rows parsed.');
      }

      setTelemetryData(newItems);
      setShowCsvEditor(false);
    } catch (err) {
      setCsvError(err.message);
    }
  };

  const handleSelectLap = (lapItem) => {
    const matching = clips.find(c => c.mood.toLowerCase() === lapItem.mood.toLowerCase());
    if (matching) {
      setSelectedClipId(matching.id);
    }
  };

  return (
    <div className="space-y-6 text-left">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.4fr_0.95fr] lg:items-stretch">
        <div className="saas-card flex flex-col justify-between space-y-5 bg-[#141417] p-4 sm:p-5 text-left lg:p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-[#9A9AA5] uppercase tracking-wider flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5 text-[#E8112D]" />
                RADIO STREAMS
              </span>
              <span className="text-[10px] font-mono text-gray-400">{clips.length} SAMPLES</span>
            </div>

            {/* Vertical List of Clips */}
            <div className="space-y-3">
              {clips.map((clip) => {
                const isSelected = clip.id === selectedClipId;
                return (
                  <button
                    key={clip.id}
                    onClick={() => {
                      setSelectedClipId(clip.id);
                      setIsPlaying(false);
                      setCurrentTime(0);
                    }}
                    className={`w-full text-left p-4 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#1C1C20] border-[#E8112D] shadow-md shadow-[#E8112D]/10'
                        : 'bg-[#0E0E11] border-white/5 hover:border-white/15 hover:bg-[#121216]'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="text-xs font-bold text-white truncate font-sans">
                        {clip.driver}
                      </div>
                      <div className="text-[11px] text-[#9A9AA5] font-mono flex items-center gap-1.5">
                        <span>Lap {clip.lap}</span>
                        <span>•</span>
                        <span>{clip.lapTime}</span>
                      </div>
                    </div>

                    <span 
                      className="px-2 py-0.5 rounded text-[10px] font-bold text-white font-mono uppercase"
                      style={{ backgroundColor: clip.badgeColor }}
                    >
                      {clip.mood}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Upload Button Pinned at Bottom of Sidebar */}
          <div className="pt-4 border-t border-white/10">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="audio/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-secondary w-full justify-center text-xs py-2.5 font-bold"
            >
              <Upload className="w-3.5 h-3.5 text-[#E8112D]" />
              <span>UPLOAD RADIO FILE</span>
            </button>
          </div>
        </div>

        <div className="saas-card flex flex-col justify-between space-y-5 bg-[#141417] p-4 sm:p-5 text-left lg:p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#9A9AA5] uppercase block">SELECTED STREAM AUDIO</span>
                <h3 className="font-headline text-xl font-black text-white italic text-left">
                  {currentClip.driver}
                </h3>
              </div>
              <div className="text-right text-xs">
                <span className="text-[#9A9AA5] font-mono text-[11px]">LAP {currentClip.lap}</span>
                <div className="text-[#E8112D] font-bold font-mono text-xs">{currentClip.lapTime}</div>
              </div>
            </div>

            {/* Canvas Waveform Display */}
            <div className="bg-[#050507] p-4 rounded-lg border border-white/10">
              <canvas
                ref={canvasRef}
                width={500}
                height={45}
                className="w-full h-[45px]"
              ></canvas>
            </div>

            {/* Audio Player Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-[#E8112D] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-md shadow-[#E8112D]/40 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>

              <div className="flex-1 space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  step="0.1"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                  className="w-full accent-[#E8112D] bg-gray-800 rounded h-1 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#9A9AA5]">
                  <span>00:{currentTime.toFixed(1).padStart(4, '0')}</span>
                  <span>00:{duration.toFixed(1).padStart(4, '0')}</span>
                </div>
              </div>

              <Volume2 className="w-4 h-4 text-[#9A9AA5]" />
            </div>
          </div>

          {/* Whisper ASR Transcript Output Panel */}
          <div className="pt-4 border-t border-white/10 space-y-3 text-left">
            <div className="flex items-center justify-between text-[11px] text-[#9A9AA5]">
              <span className="text-[#E8112D] font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                WHISPER ASR TRANSCRIPT
              </span>
              <span className="font-mono text-[10px]">16kHz PCM</span>
            </div>
            <p className="text-xs sm:text-sm font-mono text-gray-100 bg-[#09090C] p-4 rounded-lg border border-white/10 italic leading-[1.6] text-left">
              "{currentClip.transcript}"
            </p>
          </div>
        </div>

        <div className="saas-card flex flex-col justify-between space-y-5 bg-[#141417] p-4 sm:p-5 text-left lg:p-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-[#9A9AA5] uppercase tracking-wider">MOOD RESULT</span>
              <span className="text-xs font-mono font-bold text-white">
                Confidence: <span className="text-[#E8112D]">{currentClip.confidence}%</span>
              </span>
            </div>

            {/* Mood Result Badge */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#09090C] border border-white/10 text-left">
              <div 
                className="w-11 h-11 rounded-lg flex items-center justify-center text-white text-xl shadow-lg"
                style={{ backgroundColor: currentClip.badgeColor }}
              >
                {currentClip.mood === 'calm' && <CheckCircle2 className="w-6 h-6" />}
                {currentClip.mood === 'stressed' && <AlertTriangle className="w-6 h-6" />}
                {currentClip.mood === 'tired' && <BatteryCharging className="w-6 h-6" />}
              </div>
              <div className="text-left">
                <div className="text-2xl font-headline font-black tracking-wider uppercase text-white leading-none">
                  {currentClip.moodLabel}
                </div>
                <div className="text-xs text-[#9A9AA5] mt-1 font-mono">
                  Pace Delta: <span className="text-[#E8112D] font-bold">{currentClip.delta}</span>
                </div>
              </div>
            </div>

            {/* Arousal / Valence Bars */}
            <div className="space-y-4 pt-2 text-xs text-left">
              <div>
                <div className="flex justify-between text-[#9A9AA5] mb-1 font-semibold text-[11px]">
                  <span>Arousal (Vocal Tension)</span>
                  <span className="font-bold text-white font-mono">{currentClip.acousticMetrics.arousal}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${currentClip.acousticMetrics.arousal}%`,
                      backgroundColor: currentClip.acousticMetrics.arousal > 70 ? '#E8112D' : '#10B981'
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#9A9AA5] mb-1 font-semibold text-[11px]">
                  <span>Valence (Emotional Positivity)</span>
                  <span className="font-bold text-white font-mono">{currentClip.acousticMetrics.valence}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-1.5 bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${currentClip.acousticMetrics.valence}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[11px] font-mono text-[#9A9AA5] pt-4 border-t border-white/10 text-left">
            <div>Pitch Var: <span className="text-gray-100 font-bold">{currentClip.acousticMetrics.pitchVariance}</span></div>
            <div>Speech Rate: <span className="text-gray-100 font-bold">{currentClip.acousticMetrics.speakingRate}</span></div>
          </div>
        </div>

      </div>

      {/* FULL-WIDTH BOTTOM PANEL: Lap-Time Correlation Line Chart */}
      <div className="saas-card p-6 space-y-4 bg-[#141417] text-left">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs font-bold text-white uppercase tracking-wider font-headline text-lg italic">
            LAP-TIME CORRELATION OVERLAY
          </span>

          {!previewMode && (
            <button
              onClick={() => setShowCsvEditor(!showCsvEditor)}
              className="btn-secondary text-xs py-1.5 px-3 font-semibold"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-[#E8112D]" />
              <span>{showCsvEditor ? 'Hide CSV Ingestion' : 'Import / Edit Lap CSV'}</span>
            </button>
          )}
        </div>

        {/* Optional CSV Ingestion drawer */}
        {showCsvEditor && !previewMode && (
          <div className="p-6 bg-[#09090C] rounded-lg border border-white/10 space-y-4 text-left">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-white">CUSTOM LAP TELEMETRY CSV INGESTION</span>
              <span className="text-[#9A9AA5] font-mono text-[11px]">Format: lap,lap_time_sec,mood,transcript</span>
            </div>

            <textarea
              value={csvInput}
              onChange={(e) => setCsvInput(e.target.value)}
              rows={5}
              className="w-full bg-[#050507] p-3 rounded-md border border-white/10 font-mono text-xs text-gray-200 focus:border-[#E8112D] focus:outline-none"
            ></textarea>

            {csvError && (
              <div className="p-2.5 bg-red-950/40 border border-red-800 text-red-300 text-xs rounded">
                ⚠️ {csvError}
              </div>
            )}

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => {
                  setCsvInput(INITIAL_CSV_STRING);
                  setCsvError('');
                }}
                className="text-xs text-[#9A9AA5] hover:text-white flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset to Default F1 Dataset
              </button>

              <button
                onClick={handleApplyCsv}
                className="btn-primary text-xs py-1.5 px-4"
              >
                Apply Telemetry Dataset
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Lap Time Chart Component */}
        <LapTimeChart
          data={telemetryData}
          onSelectLap={handleSelectLap}
        />
      </div>

    </div>
  );
}
