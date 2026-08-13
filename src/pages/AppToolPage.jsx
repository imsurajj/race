import React from 'react';
import TelemetryToolPanel from '../components/TelemetryToolPanel';

export default function AppToolPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-8 space-y-6 pb-20 text-left">
      
      {/* Small Left-Aligned Breadcrumb / Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-left">
        <div className="flex items-center gap-2 text-xs text-[#9A9AA5]">
          <span>App</span>
          <span>/</span>
          <span className="text-white font-semibold">Telemetry Tool</span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#9A9AA5]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-white font-bold">INFRASTRUCTURE ONLINE</span>
        </div>
      </div>

      {/* 3-Zone App Shell Workspace */}
      <TelemetryToolPanel previewMode={false} />

    </div>
  );
}
