import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img 
              src="https://via.placeholder.com/150/8A2BE2/FFFFFF?text=JP" 
              alt="Profile" 
              className="profile-image"
            />
            <div className="glow-ring"></div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">John Patchen</h1>
            <p className="profile-title">Full Stack Developer & Creative Technologist</p>
            <p className="profile-description">
              Passionate about building elegant solutions to complex problems. 
              Specializing in modern web technologies, cloud architecture, and 
              creating delightful user experiences. Always learning, always building.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
