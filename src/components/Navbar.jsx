import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="site-topbar">
      <div className="site-topbar-inner">
        <NavLink to="/" className="brand" aria-label="Silent Co home">
          <span className="brand-mark">SC</span>
          <span className="brand-text">SILENT <span>CO</span></span>
        </NavLink>

        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Overview
          </NavLink>
          <NavLink to="/app" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            App Tool
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            How It Works
          </NavLink>
          <NavLink to="/tech" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Tech Specs
          </NavLink>
        </nav>

        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            <span className="theme-toggle-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <div className="hf-pill">
            <span className="icon">🤗</span>
            <span>Hugging Face</span>
          </div>
        </div>
      </div>
    </header>
  );
}
