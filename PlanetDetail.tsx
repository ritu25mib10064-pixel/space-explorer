import React from 'react';
import { Planet } from '../App';
import StarField from '../components/StarField';

interface Props {
  planet: Planet;
  onBack: () => void;
}

const PlanetDetail: React.FC<Props> = ({ planet, onBack }) => {
  return (
    <div className="planet-detail">
      <StarField />
      <button className="back-btn" onClick={onBack}>← Back to Solar System</button>

      <div className="detail-container">
        <div className="detail-hero" style={{ '--planet-color': planet.color } as React.CSSProperties}>
          <div className="detail-planet-visual">
            <div
              className="detail-planet-orb"
              style={{ background: `radial-gradient(circle at 35% 35%, white 2%, ${planet.color} 40%, #000 100%)` }}
            >
              <span className="detail-planet-emoji">{planet.emoji}</span>
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-badge">{planet.type}</div>
            <h1 className="detail-name">{planet.name}</h1>
            <p className="detail-description">{planet.description}</p>

            <div className="fun-fact-box">
              <span>💡 Fun Fact</span>
              <p>{planet.funFact}</p>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">📏</div>
            <div className="stat-label">Diameter</div>
            <div className="stat-value">{planet.diameter}</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">☀️</div>
            <div className="stat-label">Distance from Sun</div>
            <div className="stat-value">{planet.distanceFromSun}</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🌙</div>
            <div className="stat-label">Number of Moons</div>
            <div className="stat-value">{planet.moons}</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🌡️</div>
            <div className="stat-label">Temperature</div>
            <div className="stat-value">{planet.temperature}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
