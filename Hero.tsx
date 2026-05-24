import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">✨ Interactive Solar System</div>
        <h1 className="hero-title">
          Explore the <span className="gradient-text">Universe</span>
        </h1>
        <p className="hero-subtitle">
          Journey through our solar system. Discover planets, their moons, temperatures, and mind-blowing facts — all in one place.
        </p>
        <div className="hero-actions">
          <a href="#planets" className="btn btn-primary">
            🪐 Start Exploring
          </a>
          <a
            href="https://github.com/Khushi-Roy-123/space-explorer"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            ⭐ Star on GitHub
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>8</span><label>Planets</label></div>
          <div className="stat"><span>290+</span><label>Moons</label></div>
          <div className="stat"><span>∞</span><label>Wonder</label></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orbit-ring ring-1">
          <div className="orbit-planet" style={{ background: '#4fa3e0' }}>🌍</div>
        </div>
        <div className="orbit-ring ring-2">
          <div className="orbit-planet" style={{ background: '#c1440e' }}>🔴</div>
        </div>
        <div className="orbit-ring ring-3">
          <div className="orbit-planet" style={{ background: '#c88b3a' }}>🟠</div>
        </div>
        <div className="sun-core">☀️</div>
      </div>
    </section>
  );
};

export default Hero;
