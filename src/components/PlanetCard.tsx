import React from 'react';
import { Planet } from '../App';

interface Props {
  planet: Planet;
  onClick: () => void;
}

const PlanetCard: React.FC<Props> = ({ planet, onClick }) => {
  return (
    <div className="planet-card" onClick={onClick} style={{ '--planet-color': planet.color } as React.CSSProperties}>
      <div className="planet-glow" style={{ background: planet.color }} />
      <div className="planet-emoji">{planet.emoji}</div>
      <div className="planet-info">
        <div className="planet-type-badge">{planet.type}</div>
        <h3 className="planet-name">{planet.name}</h3>
        <p className="planet-desc">{planet.description.slice(0, 90)}...</p>
        <div className="planet-meta">
          <span>🌙 {planet.moons} moon{planet.moons !== 1 ? 's' : ''}</span>
          <span>📏 {planet.diameter}</span>
        </div>
        <button className="explore-btn">Explore →</button>
      </div>
    </div>
  );
};

export default PlanetCard;
