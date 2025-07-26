import React from 'react';
import { Plane, MapPin, Heart } from 'lucide-react';
import '../styles/Header.css';

const Header = ({ setCurrentView }) => {
  return (
    <header className="header-main">
      <div className="header-container">
        <div className="header-logo-group">
          <Plane size={28} />
          <h1 className="header-title">Tourism Platform</h1>
        </div>
        <nav>
          <ul className="header-nav-list">
            <li>
              <button
                className="header-nav-link"
                onClick={() => setCurrentView('destinations')}
              >
                <MapPin size={20} />
                <span>Destinations</span>
              </button>
            </li>
            <li>
              <button
                className="header-nav-link"
                onClick={() => setCurrentView('favorites')}
              >
                <Heart size={20} />
                <span>Favorites</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
