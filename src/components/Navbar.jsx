import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-topbar">
      <div className="site-topbar-inner">
        <NavLink to="/" className="brand" aria-label="The Silent Co-Driver home">
          <span className="brand-mark">SC</span>
          <span className="brand-text">THE SILENT <span>CO-DRIVER</span></span>
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

        <div className="hf-pill">
          <span className="icon">🤗</span>
          <span>Hugging Face</span>
        </div>
      </div>
    </header>
  );
}
