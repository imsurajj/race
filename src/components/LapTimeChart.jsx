import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Activity, FileSpreadsheet, RefreshCw, Layers } from 'lucide-react';

Chart.register(...registerables);

export default function LapTimeChart({ data, onSelectLap }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredData = React.useMemo(() => {
    if (selectedFilter === 'all') return data;
    return data.filter(item => item.mood.toLowerCase() === selectedFilter.toLowerCase());
  }, [data, selectedFilter]);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const labels = filteredData.map(d => `Lap ${d.lap}`);
    const lapTimes = filteredData.map(d => d.lapTime);

    // Dynamic marker colors based on mood
    const pointBackgroundColors = filteredData.map(d => {
      const mood = d.mood.toLowerCase();
      if (mood === 'calm') return '#10B981';
      if (mood === 'stressed') return '#E8112D';
      if (mood === 'tired') return '#F59E0B';
      return '#3B82F6';
    });

    const pointBorderColors = filteredData.map(d => {
      const mood = d.mood.toLowerCase();
      if (mood === 'calm') return '#059669';
      if (mood === 'stressed') return '#B80A20';
      if (mood === 'tired') return '#D97706';
      return '#1D4ED8';
    });

    const pointRadius = filteredData.map(d => (d.mood.toLowerCase() === 'stressed' ? 8 : 6));

    // Create line chart gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(232, 17, 45, 0.25)');
    gradient.addColorStop(1, 'rgba(10, 10, 12, 0.0)');

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Lap Time (seconds)',
            data: lapTimes,
            borderColor: '#E8112D',
            borderWidth: 3,
            backgroundColor: gradient,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: pointBackgroundColors,
            pointBorderColor: pointBorderColors,
            pointBorderWidth: 2,
            pointRadius: pointRadius,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: '#FFFFFF',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (e, elements) => {
          if (elements.length > 0 && onSelectLap) {
            const index = elements[0].index;
            onSelectLap(filteredData[index]);
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#16161A',
            titleColor: '#FFFFFF',
            titleFont: { family: 'Barlow Condensed', size: 16, weight: 'bold' },
            bodyFont: { family: 'Inter', size: 13 },
            borderColor: '#E8112D',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            callbacks: {
              labelColor: (context) => {
                const item = filteredData[context.dataIndex];
                const mood = item.mood.toLowerCase();
                let color = '#10B981';
                if (mood === 'stressed') color = '#E8112D';
                if (mood === 'tired') color = '#F59E0B';
                return {
                  borderColor: color,
                  backgroundColor: color,
                  borderWidth: 2,
                  borderRadius: 2
                };
              },
              label: (context) => {
                const item = filteredData[context.dataIndex];
                return [
                  `Lap Time: ${item.lapTime.toFixed(2)}s (${item.timeStr || ''})`,
                  `Mood State: ${item.mood.toUpperCase()}`,
                  `Radio: "${item.transcript || 'No radio transcript'}"`
                ];
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)',
            },
            ticks: {
              color: '#9CA3AF',
              font: { family: 'Rajdhani', size: 12, weight: '600' }
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)',
            },
            ticks: {
              color: '#9CA3AF',
              font: { family: 'Rajdhani', size: 12, weight: '600' },
              callback: (value) => `${value}s`
            },
            title: {
              display: true,
              text: 'LAP TIME (SECONDS)',
              color: '#E8112D',
              font: { family: 'Barlow Condensed', size: 13, weight: 'bold' }
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [filteredData, onSelectLap]);

  return (
    <div className="carbon-panel p-5 space-y-4">
      {/* Header controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-[#E8112D]" />
          <h3 className="text-lg font-headline font-bold text-white tracking-wide">
            DYNAMIC LAP-TIME & DRIVER MOOD OVERLAY
          </h3>
        </div>

        {/* Mood filter tabs */}
        <div className="flex items-center gap-1.5 bg-[#0D0D10] p-1 rounded-lg border border-white/10 text-xs font-tech">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
              selectedFilter === 'all' ? 'bg-[#E8112D] text-white font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            ALL LAPS ({data.length})
          </button>
          <button
            onClick={() => setSelectedFilter('calm')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
              selectedFilter === 'calm' ? 'bg-emerald-600 text-white font-bold' : 'text-gray-400 hover:text-emerald-400'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            CALM
          </button>
          <button
            onClick={() => setSelectedFilter('stressed')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
              selectedFilter === 'stressed' ? 'bg-red-600 text-white font-bold' : 'text-gray-400 hover:text-red-400'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            STRESSED
          </button>
          <button
            onClick={() => setSelectedFilter('tired')}
            className={`px-2.5 py-1 rounded transition-colors cursor-pointer flex items-center gap-1 ${
              selectedFilter === 'tired' ? 'bg-amber-600 text-white font-bold' : 'text-gray-400 hover:text-amber-400'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            TIRED
          </button>
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="relative w-full h-[320px]">
        <canvas ref={chartRef}></canvas>
      </div>

      {/* Mood Legend Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs font-tech text-gray-400 border-t border-white/5">
        <div className="flex items-center gap-4">
          <span className="font-bold text-gray-300">MOOD MARKERS:</span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span> Calm (Optimal Pace)
          </span>
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50"></span> Stressed (+1.8s to +3.5s Delta)
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="w-3 h-3 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50"></span> Tired (Fatigue Degradation)
          </span>
        </div>
        <div className="text-gray-500 italic">
          💡 Click any lap point to inspect radio transcript
        </div>
      </div>
    </div>
  );
}
