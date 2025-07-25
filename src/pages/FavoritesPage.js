// src/pages/FavoritesPage.js
import React from 'react';
import { Heart, Star, MapPin, Search } from 'lucide-react';
import '../styles/FavoritesPage.css'; // New CSS file for favorites

const FavoritesPage = ({ favorites, destinations, setCurrentView, setSelectedDestination, toggleFavorite, getTypeIcon }) => {
  const favoriteDestinations = destinations.filter(dest => favorites.includes(dest.id));

  return (
    <div className="favorites-page-container">
      <div className="favorites-content-wrapper">
        <h1 className="favorites-title">Mes Destinations Favorites</h1>

        {favoriteDestinations.length > 0 ? (
          <div className="favorites-grid">
            {favoriteDestinations.map((destination) => (
              <div key={destination.id} className="favorite-card">
                <div className="favorite-card-image-wrapper">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="favorite-card-image"
                  />
                  <button
                    onClick={() => toggleFavorite(destination.id)}
                    className="favorite-card-remove-button"
                  >
                    <Heart className="favorite-card-remove-icon favorite-active" /> {/* Always active to show it's favorited */}
                  </button>
                  <div className="favorite-card-type-badge">
                    <div className="favorite-card-type-icon-wrapper">
                      {getTypeIcon(destination.type)}
                      <span className="favorite-card-type-text">{destination.type}</span>
                    </div>
                  </div>
                </div>

                <div className="favorite-card-content">
                  <div className="favorite-card-header-row">
                    <h3 className="favorite-card-title">{destination.name}</h3>
                    <div className="favorite-card-rating">
                      <Star className="favorite-card-star-icon" />
                      <span className="favorite-card-rating-text">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="favorite-card-location">
                    <MapPin className="favorite-card-location-icon" />
                    <span className="favorite-card-location-text">{destination.location}</span>
                  </div>
                  <p className="favorite-card-description">{destination.description}</p>
                  <button
                    onClick={() => {setSelectedDestination(destination); setCurrentView('detail');}}
                    className="favorite-card-discover-button"
                  >
                    Voir les détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-favorites-message">
            <div className="no-favorites-icon-wrapper">
              <Heart className="no-favorites-icon" />
            </div>
            <h3 className="no-favorites-title">Aucune destination favorite pour le moment</h3>
            <p className="no-favorites-text">Ajoutez des destinations à vos favoris pour les retrouver ici.</p>
            <button
              onClick={() => setCurrentView('destinations')}
              className="no-favorites-browse-button"
            >
              <Search className="no-favorites-browse-icon" />
              Explorer les destinations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;