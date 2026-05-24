import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <span className="nav-logo">🚀</span>
        <span className="nav-title">Space Explorer</span>
      </div>
      <div className="nav-links">
        <a href="#planets">Planets</a>
        <a href="#about">About</a>
        <a
          href="https://github.com/Khushi-Roy-123"
          target="_blank"
          rel="noreferrer"
          className="nav-cta"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
