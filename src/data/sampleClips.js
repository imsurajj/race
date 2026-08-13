// Pre-loaded realistic F1 Driver Radio sample clips for Live Demo & Telemetry Correlation

export const SAMPLE_CLIPS = [
  {
    id: "clip-calm",
    mood: "calm",
    moodLabel: "Calm",
    confidence: 94,
    driver: "Max V. (Car 1)",
    team: "Red Bull Racing",
    lap: 14,
    lapTime: "1:18.234",
    lapTimeSec: 78.234,
    delta: "-0.142s vs Target",
    transcript: "Car feels balanced. Holding the delta at plus 0.4s. Clean air ahead, tires look good for another 8 laps.",
    audioUrl: "https://actions.google.com/sounds/v1/vehicles/car_idle_long.ogg", // standard public sample fallback
    acousticMetrics: {
      arousal: 28, // %
      valence: 76, // %
      dominance: 82, // %
      pitchVariance: "14.2 Hz",
      speakingRate: "3.2 words/sec",
      rmsEnergy: "0.042 RMS"
    },
    bgGlow: "rgba(16, 185, 129, 0.2)",
    badgeColor: "#10B981"
  },
  {
    id: "clip-stressed",
    mood: "stressed",
    moodLabel: "Stressed",
    confidence: 96,
    driver: "Charles L. (Car 16)",
    team: "Scuderia Ferrari",
    lap: 22,
    lapTime: "1:21.890",
    lapTimeSec: 81.890,
    delta: "+2.450s vs Target",
    transcript: "Tires are completely gone! Box box! He's turning into me on turn 4! Check the front wing telemetry now!",
    audioUrl: "https://actions.google.com/sounds/v1/vehicles/car_horn.ogg",
    acousticMetrics: {
      arousal: 92, // %
      valence: 15, // %
      dominance: 64, // %
      pitchVariance: "68.7 Hz",
      speakingRate: "6.8 words/sec",
      rmsEnergy: "0.185 RMS"
    },
    bgGlow: "rgba(232, 17, 45, 0.25)",
    badgeColor: "#E8112D"
  },
  {
    id: "clip-tired",
    mood: "tired",
    moodLabel: "Tired",
    confidence: 89,
    driver: "Lewis H. (Car 44)",
    team: "Mercedes-AMG",
    lap: 48,
    lapTime: "1:23.450",
    lapTimeSec: 83.450,
    delta: "+3.810s vs Target",
    transcript: "Copy... yeah... losing rear grip in turn 9... neck is stiff... copy that.",
    audioUrl: "https://actions.google.com/sounds/v1/ambiences/wind_synth.ogg",
    acousticMetrics: {
      arousal: 35, // %
      valence: 32, // %
      dominance: 25, // %
      pitchVariance: "8.4 Hz",
      speakingRate: "2.1 words/sec",
      rmsEnergy: "0.021 RMS"
    },
    bgGlow: "rgba(245, 158, 11, 0.25)",
    badgeColor: "#F59E0B"
  }
];

// Telemetry dataset matching lap history with stress levels
export const INITIAL_TELEMETRY_DATA = [
  { lap: 1, lapTime: 78.5, timeStr: "1:18.500", mood: "calm", transcript: "Formation lap clean. Temperatures in window." },
  { lap: 2, lapTime: 78.1, timeStr: "1:18.100", mood: "calm", transcript: "Pushing hard into turn 1. Good traction." },
  { lap: 3, lapTime: 78.3, timeStr: "1:18.300", mood: "calm", transcript: "Gap to car ahead is 1.2s." },
  { lap: 4, lapTime: 78.0, timeStr: "1:18.000", mood: "calm", transcript: "Purple sector 2. Balance is great." },
  { lap: 5, lapTime: 78.2, timeStr: "1:18.200", mood: "calm", transcript: "DRS open. Keeping delta steady." },
  { lap: 6, lapTime: 79.4, timeStr: "1:19.400", mood: "stressed", transcript: "Traffic in sector 3! Backing off!" },
  { lap: 7, lapTime: 81.2, timeStr: "1:21.200", mood: "stressed", transcript: "Lockup at turn 10! Flat spot on front left!" },
  { lap: 8, lapTime: 82.5, timeStr: "1:22.500", mood: "stressed", transcript: "Massive vibration! He pushed me wide!" },
  { lap: 9, lapTime: 79.8, timeStr: "1:19.800", mood: "calm", transcript: "Under control again. Temperature settling." },
  { lap: 10, lapTime: 78.4, timeStr: "1:18.400", mood: "calm", transcript: "Clear track now. Resetting pace." },
  { lap: 11, lapTime: 78.6, timeStr: "1:18.600", mood: "calm", transcript: "Holding gap." },
  { lap: 12, lapTime: 78.9, timeStr: "1:18.900", mood: "calm", transcript: "Tire wear starting on rear right." },
  { lap: 13, lapTime: 79.5, timeStr: "1:19.500", mood: "tired", transcript: "Rear sliding a bit... steering heavy." },
  { lap: 14, lapTime: 80.2, timeStr: "1:20.200", mood: "tired", transcript: "Yeah... losing rear grip in turn 9..." },
  { lap: 15, lapTime: 81.9, timeStr: "1:21.900", mood: "tired", transcript: "Focusing hard... neck fatigue... copy." },
  { lap: 16, lapTime: 83.4, timeStr: "1:23.400", mood: "tired", transcript: "Box this lap... I can't hold pace." }
];

export const INITIAL_CSV_STRING = `lap,lap_time_sec,mood,transcript
1,78.50,calm,Formation lap clean. Temperatures in window.
2,78.10,calm,Pushing hard into turn 1. Good traction.
3,78.30,calm,Gap to car ahead is 1.2s.
4,78.00,calm,Purple sector 2. Balance is great.
5,78.20,calm,DRS open. Keeping delta steady.
6,79.40,stressed,Traffic in sector 3! Backing off!
7,81.20,stressed,Lockup at turn 10! Flat spot on front left!
8,82.50,stressed,Massive vibration! He pushed me wide!
9,79.80,calm,Under control again. Temperature settling.
10,78.40,calm,Clear track now. Resetting pace.
11,78.60,calm,Holding gap.
12,78.90,calm,Tire wear starting on rear right.
13,79.50,tired,Rear sliding a bit... steering heavy.
14,80.20,tired,Yeah... losing rear grip in turn 9...
15,81.90,tired,Focusing hard... neck fatigue... copy.
16,83.40,tired,Box this lap... I can't hold pace.`;
