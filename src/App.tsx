import React, { useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlanetCard from './components/PlanetCard';
import StarField from './components/StarField';
import Footer from './components/Footer';
import PlanetDetail from './pages/PlanetDetail';

export interface Planet {
  id: number;
  name: string;
  emoji: string;
  type: string;
  distanceFromSun: string;
  diameter: string;
  moons: number;
  description: string;
  color: string;
  funFact: string;
  temperature: string;
}

export const planets: Planet[] = [
  {
    id: 1,
    name: 'Mercury',
    emoji: '⚫',
    type: 'Terrestrial',
    distanceFromSun: '57.9 million km',
    diameter: '4,879 km',
    moons: 0,
    description: 'The smallest planet in our solar system and closest to the Sun. Mercury has extreme temperature swings from scorching hot to freezing cold.',
    color: '#b5b5b5',
    funFact: 'A year on Mercury lasts only 88 Earth days!',
    temperature: '-180°C to 430°C',
  },
  {
    id: 2,
    name: 'Venus',
    emoji: '🟡',
    type: 'Terrestrial',
    distanceFromSun: '108.2 million km',
    diameter: '12,104 km',
    moons: 0,
    description: 'The hottest planet in our solar system with a thick atmosphere of carbon dioxide and clouds of sulfuric acid.',
    color: '#e8cda0',
    funFact: 'Venus rotates backwards compared to most planets!',
    temperature: '462°C (average)',
  },
  {
    id: 3,
    name: 'Earth',
    emoji: '🌍',
    type: 'Terrestrial',
    distanceFromSun: '149.6 million km',
    diameter: '12,742 km',
    moons: 1,
    description: 'Our home planet, the only known planet to harbor life. Earth has liquid water on its surface and a protective magnetic field.',
    color: '#4fa3e0',
    funFact: 'Earth is the only planet not named after a god or goddess!',
    temperature: '-88°C to 58°C',
  },
  {
    id: 4,
    name: 'Mars',
    emoji: '🔴',
    type: 'Terrestrial',
    distanceFromSun: '227.9 million km',
    diameter: '6,779 km',
    moons: 2,
    description: 'The Red Planet with the largest volcano in the solar system - Olympus Mons. Mars has seasons similar to Earth.',
    color: '#c1440e',
    funFact: 'A day on Mars is 24 hours and 37 minutes — almost like Earth!',
    temperature: '-87°C to -5°C',
  },
  {
    id: 5,
    name: 'Jupiter',
    emoji: '🟠',
    type: 'Gas Giant',
    distanceFromSun: '778.5 million km',
    diameter: '139,820 km',
    moons: 95,
    description: 'The largest planet in the solar system. Jupiter\'s Great Red Spot is a storm that has been raging for hundreds of years.',
    color: '#c88b3a',
    funFact: 'Jupiter is so massive it could fit all other planets inside it!',
    temperature: '-108°C (cloud tops)',
  },
  {
    id: 6,
    name: 'Saturn',
    emoji: '🪐',
    type: 'Gas Giant',
    distanceFromSun: '1.43 billion km',
    diameter: '116,460 km',
    moons: 146,
    description: 'Famous for its stunning ring system made of ice and rock. Saturn is the least dense planet and could float on water.',
    color: '#e4d191',
    funFact: 'Saturn\'s rings are only about 10 meters thick but 282,000 km wide!',
    temperature: '-139°C (average)',
  },
  {
    id: 7,
    name: 'Uranus',
    emoji: '🔵',
    type: 'Ice Giant',
    distanceFromSun: '2.87 billion km',
    diameter: '50,724 km',
    moons: 28,
    description: 'An ice giant that rotates on its side. Uranus has a unique blue-green color due to methane in its atmosphere.',
    color: '#7de8e8',
    funFact: 'Uranus tilts so much it basically rolls around the Sun on its side!',
    temperature: '-197°C (average)',
  },
  {
    id: 8,
    name: 'Neptune',
    emoji: '🌀',
    type: 'Ice Giant',
    distanceFromSun: '4.5 billion km',
    diameter: '49,244 km',
    moons: 16,
    description: 'The windiest planet with storms reaching 2,100 km/h. Neptune was the first planet discovered through mathematical prediction.',
    color: '#3f54ba',
    funFact: 'One year on Neptune = 165 Earth years!',
    temperature: '-201°C (average)',
  },
];

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const types = ['All', 'Terrestrial', 'Gas Giant', 'Ice Giant'];
  const filtered = filter === 'All' ? planets : planets.filter(p => p.type === filter);

  if (selectedPlanet) {
    return <PlanetDetail planet={selectedPlanet} onBack={() => setSelectedPlanet(null)} />;
  }

  return (
    <div className="app">
      <StarField />
      <Navbar />
      <Hero />

      <section className="planets-section" id="planets">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🌌 Explore the Solar System</h2>
            <p className="section-subtitle">Click on any planet to discover its secrets</p>

            <div className="filter-tabs">
              {types.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${filter === type ? 'active' : ''}`}
                  onClick={() => setFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="planets-grid">
            {filtered.map(planet => (
              <PlanetCard
                key={planet.id}
                planet={planet}
                onClick={() => setSelectedPlanet(planet)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
