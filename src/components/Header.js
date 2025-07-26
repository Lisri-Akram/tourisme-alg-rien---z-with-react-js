
import React from 'react';
import { Plane, MapPin, Heart } from 'lucide-react';

import '../styles/Header.css'; 

const Header = () => {
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
              <a href="/" className="header-nav-link">
                <MapPin size={20} />
                <span>Destinations</span>
              </a>
            </li>
            <li>
              <a href="/favorites" className="header-nav-link">
                <Heart size={20} />
                <span>Favorites</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;