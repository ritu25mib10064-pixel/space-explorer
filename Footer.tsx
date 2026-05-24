import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="about">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span>🚀 Space Explorer</span>
            <p>An open-source interactive solar system explorer built with React & TypeScript.</p>
          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <a href="https://github.com/Khushi-Roy-123/space-explorer" target="_blank" rel="noreferrer">GitHub Repo</a>
            <a href="https://nasa.gov" target="_blank" rel="noreferrer">NASA</a>
            <a href="https://solarsystem.nasa.gov" target="_blank" rel="noreferrer">NASA Solar System</a>
          </div>
          <div className="footer-tech">
            <h4>Built With</h4>
            <span>⚛️ React 18</span>
            <span>📘 TypeScript</span>
            <span>🎨 CSS3 Animations</span>
            <span>🚀 Create React App</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with ❤️ by <strong>Khushi Roy</strong> | Open Source on GitHub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
