import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Mic, Upload, CheckCircle2, Sparkles, AlertTriangle, BatteryCharging } from 'lucide-react';

export default function AudioPlayer({ clips, selectedClip, onSelectClip, onCustomUpload }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(12);
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);
  const fileInputRef = useRef(null);

  // Playback timer simulation
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
  }, [isPlaying, duration]);

  // Audio Canvas Visualizer animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = 4;
      const barGap = 3;
      const barCount = Math.floor(canvas.width / (barWidth + barGap));
      
      const moodColor = selectedClip.mood === 'calm' 
        ? '#10B981' 
        : selectedClip.mood === 'stressed' 
          ? '#E8112D' 
          : '#F59E0B';

      for (let i = 0; i < barCount; i++) {
        let barHeight;
        if (isPlaying) {
          // Dynamic height when playing
          const freq = Math.sin((i * 0.2) + (Date.now() * 0.008)) * 0.5 + 0.5;
          barHeight = Math.max(6, freq * (canvas.height - 10));
        } else {
          // Static baseline
          barHeight = Math.max(4, Math.abs(Math.sin(i * 0.4)) * (canvas.height * 0.4));
        }

        const x = i * (barWidth + barGap);
        const y = (canvas.height - barHeight) / 2;

        ctx.fillStyle = moodColor;
        ctx.shadowBlur = isPlaying ? 8 : 0;
        ctx.shadowColor = moodColor;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, 2);
        ctx.fill();
      }

      animFrameId.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isPlaying, selectedClip]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Simulate custom file analysis
    const customClip = {
      id: "clip-custom-" + Date.now(),
      mood: "stressed",
      moodLabel: "Stressed (Analyzed)",
      confidence: 91,
      driver: "Custom Audio Ingestion",
      team: "Pit Wall Stream",
      lap: 33,
      lapTime: "1:22.100",
      lapTimeSec: 82.1,
      delta: "+2.70s vs Target",
      transcript: `[File: ${file.name}] "Copy pit wall... understeer into turn 3, front tires overheating!"`,
      audioUrl: "",
      acousticMetrics: {
        arousal: 88,
        valence: 22,
        dominance: 58,
        pitchVariance: "54.1 Hz",
        speakingRate: "5.9 words/sec",
        rmsEnergy: "0.142 RMS"
      },
      badgeColor: "#E8112D"
    };

    onCustomUpload(customClip);
    setIsPlaying(true);
    setCurrentTime(0);
  };

  return (
    <div className="space-y-6">
      {/* Sample Clip Selector Pills */}
      <div className="carbon-panel p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-[#E8112D]" />
          <span className="font-eyebrow font-bold text-sm text-gray-200">PRE-LOADED RADIO CLIPS:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {clips.map((clip) => {
            const isSelected = selectedClip.id === clip.id;
            return (
              <button
                key={clip.id}
                onClick={() => {
                  onSelectClip(clip);
                  setIsPlaying(false);
                  setCurrentTime(0);
                }}
                className={`px-3.5 py-1.5 rounded-lg font-tech text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#E8112D] text-white shadow-lg shadow-[#E8112D]/40 border border-white/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: clip.badgeColor }}></span>
                <span>{clip.driver} ({clip.moodLabel})</span>
              </button>
            );
          })}

          {/* Upload Custom Audio Button */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="audio/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="btn-secondary text-xs py-1.5 px-3 border-dashed border-gray-500 hover:border-[#E8112D]"
          >
            <Upload className="w-3.5 h-3.5 text-[#E8112D]" />
            <span>UPLOAD RADIO (.WAV/.MP3)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Audio Player Console */}
      <div className="carbon-panel p-6 border-l-4" style={{ borderLeftColor: selectedClip.badgeColor }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Audio Controls & Waveform */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-eyebrow text-xs text-gray-400 block">CURRENT STREAM</span>
                <h4 className="text-xl font-headline font-black text-white tracking-wide">
                  {selectedClip.driver} — {selectedClip.team}
                </h4>
              </div>
              <div className="text-right font-tech text-xs">
                <span className="text-gray-400">LAP {selectedClip.lap}</span>
                <div className="text-[#E8112D] font-bold">{selectedClip.lapTime}</div>
              </div>
            </div>

            {/* Canvas Waveform */}
            <div className="bg-[#0A0A0C] p-3 rounded-lg border border-white/10">
              <canvas
                ref={canvasRef}
                width={500}
                height={60}
                className="w-full h-[60px]"
              ></canvas>
            </div>

            {/* Play/Pause & Progress Bar */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-[#E8112D] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-[#E8112D]/40 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <div className="flex-1 space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  step="0.1"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                  className="w-full accent-[#E8112D] bg-gray-800 rounded h-1.5 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-tech text-gray-400">
                  <span>00:{currentTime.toFixed(1).padStart(4, '0')}</span>
                  <span>00:{duration.toFixed(1).padStart(4, '0')}</span>
                </div>
              </div>

              <Volume2 className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Model Classification Result Box */}
          <div className="lg:col-span-5 bg-[#0D0D10] p-5 rounded-xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-eyebrow text-xs text-gray-400">TONE / MOOD DETECTED</span>
              <span className="font-tech text-xs font-bold text-gray-300">
                CONFIDENCE: <span className="text-white font-extrabold">{selectedClip.confidence}%</span>
              </span>
            </div>

            {/* Large Mood Badge */}
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center font-headline font-black text-2xl text-white shadow-lg"
                style={{ backgroundColor: selectedClip.badgeColor }}
              >
                {selectedClip.mood === 'calm' && <CheckCircle2 className="w-7 h-7" />}
                {selectedClip.mood === 'stressed' && <AlertTriangle className="w-7 h-7" />}
                {selectedClip.mood === 'tired' && <BatteryCharging className="w-7 h-7" />}
              </div>
              <div>
                <div className="text-2xl font-headline font-black tracking-wider uppercase text-white">
                  {selectedClip.moodLabel}
                </div>
                <div className="text-xs font-tech text-gray-400">
                  Delta impact: <span className="text-[#E8112D] font-bold">{selectedClip.delta}</span>
                </div>
              </div>
            </div>

            {/* Acoustic Metrics Sliders */}
            <div className="space-y-2 pt-2 border-t border-white/5 text-xs font-tech">
              <div>
                <div className="flex justify-between text-gray-300 mb-1">
                  <span>Arousal (Vocal Tension)</span>
                  <span className="font-bold text-white">{selectedClip.acousticMetrics.arousal}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${selectedClip.acousticMetrics.arousal}%`,
                      backgroundColor: selectedClip.acousticMetrics.arousal > 70 ? '#E8112D' : '#10B981'
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-gray-300 mb-1">
                  <span>Valence (Emotional Positivity)</span>
                  <span className="font-bold text-white">{selectedClip.acousticMetrics.valence}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="h-1.5 bg-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${selectedClip.acousticMetrics.valence}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-gray-400">
                <div>Pitch Var: <span className="text-gray-200 font-bold">{selectedClip.acousticMetrics.pitchVariance}</span></div>
                <div>Speech Rate: <span className="text-gray-200 font-bold">{selectedClip.acousticMetrics.speakingRate}</span></div>
              </div>
            </div>

          </div>
        </div>

        {/* Whisper ASR Transcript Output */}
        <div className="mt-6 bg-[#09090C] p-4 rounded-xl border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-tech">
            <span className="text-[#E8112D] font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              WHISPER LARGE-V3-TURBO TRANSCRIPT
            </span>
            <span className="text-gray-500">SAMPLING RATE: 16KHZ PCM</span>
          </div>
          <p className="text-base sm:text-lg font-mono text-gray-100 italic bg-white/5 p-3 rounded-lg border border-white/5 leading-relaxed">
            "{selectedClip.transcript}"
          </p>
        </div>
      </div>
    </div>
  );
}
