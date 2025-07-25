import React from 'react';
import { MapPin, Star, Heart, Camera, X } from 'lucide-react';
import '../styles/DestinationDetail.css'; 

const DestinationDetail = ({ destination, setCurrentView, toggleFavorite, favorites, getTypeIcon }) => (
  <div className="destination-detail-container">
    {/* Hero Image */}
    <div className="hero-image-section">
      <img
        src={destination.image}
        alt={destination.name}
        className="hero-image"
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text-center">
          <h1 className="hero-title">{destination.name}</h1>
          <div className="hero-info-row">
            <div className="hero-info-item">
              <MapPin className="hero-icon" />
              <span>{destination.location}</span>
            </div>
            <div className="hero-info-item">
              <Star className="hero-icon star-icon" />
              <span>{destination.rating}</span>
            </div>
            <div className="hero-info-item">
              {getTypeIcon(destination.type)}
              <span className="capitalize">{destination.type}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setCurrentView('destinations')}
        className="close-button"
      >
        <X className="close-icon" />
      </button>
      <button
        onClick={() => toggleFavorite(destination.id)}
        className="favorite-button"
      >
        <Heart
          className={`favorite-icon ${
            favorites.includes(destination.id) ? 'favorite-active' : ''
          }`}
        />
      </button>
    </div>

    <div className="main-content-wrapper">
      {/* Description */}
      <div className="description-section">
        <h2 className="section-title">À propos</h2>
        <p className="description-text">{destination.description}</p>

        <h3 className="subsection-title">Points d'intérêt</h3>
        <div className="highlights-grid">
          {destination.highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-dot"></div>
              <span className="highlight-text">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-section">
        <h2 className="section-title gallery-title">
          <Camera className="gallery-icon" />
          Galerie Photos
        </h2>
        <div className="gallery-grid">
          {destination.gallery.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`${destination.name} ${index + 1}`}
                className="gallery-image"
              />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons-group">
        <button
          onClick={() => toggleFavorite(destination.id)}
          className={`action-button favorite-action-button ${
            favorites.includes(destination.id)
              ? 'favorite-action-button-active'
              : ''
          }`}
        >
          <Heart className={`action-button-icon ${favorites.includes(destination.id) ? 'fill-current' : ''}`} />
          <span>{favorites.includes(destination.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}</span>
        </button>
        <button className="action-button map-action-button">
          <MapPin className="action-button-icon" />
          <span>Voir sur la carte</span>
        </button>
      </div>
    </div>
  </div>
);

export default DestinationDetail;