// src/pages/HomePage.js
import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';  //MapPin, Star, Heart must be  imported
import '../styles/HomePage.css';

const HomePage = ({ regions, destinations, setCurrentView, setSelectedDestination, toggleFavorite, favorites, getTypeIcon }) => (
  <div className="homepage-main-container">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-overlay-gradient"></div>
      <div
        className="hero-background-image"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1577871450676-6159315fba89?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }}
      ></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Découvrez l'<span className="highlight-algeria">Algérie</span>
        </h1>
        <p className="hero-subtitle">
          Terre de contrastes entre Méditerranée et Sahara, patrimoine millénaire et modernité
        </p>
        <button
          onClick={() => setCurrentView('destinations')}
          className="hero-button"
        >
          Explorer les destinations
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-outer">
          <div className="scroll-indicator-inner"></div>
        </div>
      </div>
    </section>

    {/* Regions Section */}
    <section className="regions-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-header-title">Nos Régions</h2>
          <p className="section-header-subtitle">
            De la côte méditerranéenne aux dunes du Sahara, chaque région révèle ses trésors uniques
          </p>
        </div>

        <div className="regions-grid">
          {regions.map((region) => (
            <div key={region.id} className="region-card-group">
              <div className="region-card-wrapper">
                <img
                  src={region.image}
                  alt={region.name}
                  className="region-card-image"
                />
                <div className={`region-card-overlay ${region.color}`}></div>
                <div className="region-card-content">
                  <h3 className="region-card-title">{region.name}</h3>
                  <p className="region-card-description">{region.description}</p>
                  <div className="region-card-footer">
                    <span className="region-card-destination-count">{region.destinations} destinations</span>
                    <div className="region-card-icon-wrapper">
                      <MapPin className="region-card-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Destinations */}
    <section className="featured-destinations-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-header-title">Destinations Phares</h2>
          <p className="section-header-subtitle">Les incontournables de votre voyage en Algérie</p>
        </div>

        <div className="featured-destinations-grid">
          {destinations.slice(0, 6).map((destination) => (
            <div key={destination.id} className="featured-card">
              <div className="featured-card-image-wrapper">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="featured-card-image"
                />
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className="featured-card-favorite-button"
                >
                  <Heart
                    className={`featured-card-favorite-icon ${
                      favorites.includes(destination.id) ? 'favorite-active' : ''
                    }`}
                  />
                </button>
                <div className="featured-card-type-badge">
                  <div className="featured-card-type-content">
                    {getTypeIcon(destination.type)}
                    <span className="featured-card-type-text">{destination.type}</span>
                  </div>
                </div>
              </div>

              <div className="featured-card-content">
                <div className="featured-card-header">
                  <h3 className="featured-card-title">{destination.name}</h3>
                  <div className="featured-card-rating">
                    <Star className="featured-card-star-icon" />
                    <span className="featured-card-rating-text">{destination.rating}</span>
                  </div>
                </div>
                <div className="featured-card-location">
                  <MapPin className="featured-card-location-icon" />
                  <span className="featured-card-location-text">{destination.location}</span>
                </div>
                <p className="featured-card-description">{destination.description}</p>
                <button
                  onClick={() => {setSelectedDestination(destination); setCurrentView('detail');}}
                  className="featured-card-discover-button"
                >
                  Découvrir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;