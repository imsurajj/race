import React from 'react';
import TelemetryToolPanel from '../components/TelemetryToolPanel';

export default function AppToolPage() {
  return (
    <div className="app-page">
      <div className="app-topline">
        <div className="app-breadcrumb">
          <span>App</span>
          <span> / </span>
          <strong>Telemetry Tool</strong>
        </div>

        <div className="app-status">
          <span className="live-dot" />
          <span>Infrastructure Online</span>
        </div>
      </div>

      <div className="app-frame">
        <TelemetryToolPanel previewMode={false} />
      </div>
    </div>
  );
}
