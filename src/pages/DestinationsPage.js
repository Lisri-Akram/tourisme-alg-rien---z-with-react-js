import React from 'react';
import { Search, Filter, Star, MapPin, Heart } from 'lucide-react'; // Added Heart import
import '../styles/DestinationsPage.css'; 

const DestinationsPage = ({
  filteredDestinations,
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  setSelectedDestination,
  setCurrentView,
  toggleFavorite,
  favorites,
  getTypeIcon
}) => (
  <div className="destinations-page-container">
    <div className="max-width-container">
      <div className="heading-section">
        <h1 className="main-heading">Toutes les Destinations</h1>

        {/* Search and Filter */}
        <div className="search-filter-controls">
          <div className="search-input-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher une destination..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-select-wrapper">
            <Filter className="filter-icon" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="filter-select"
            >
              <option value="all">Tous les types</option>
              <option value="plage">Plages</option>
              <option value="montagne">Montagnes</option>
              <option value="patrimoine">Patrimoine</option>
              <option value="desert">Désert</option>
            </select>
          </div>
        </div>

        <div className="results-count">
          {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} trouvée{filteredDestinations.length !== 1 ? 's' : ''}
        </div>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <div className="destination-card-image-wrapper">
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-card-image"
              />
              <button
                onClick={() => toggleFavorite(destination.id)}
                className="favorite-button"
              >
                <Heart
                  className={`favorite-icon ${
                    favorites.includes(destination.id) ? 'filled' : 'empty'
                  }`}
                />
              </button>
              <div className="type-badge">
                {getTypeIcon(destination.type)}
                <span className="type-text">{destination.type}</span>
              </div>
            </div>

            <div className="destination-card-content">
              <div className="card-header">
                <h3 className="card-title">{destination.name}</h3>
                <div className="rating">
                  <Star className="star-icon" />
                  <span className="rating-text">{destination.rating}</span>
                </div>
              </div>
              <div className="location">
                <MapPin className="location-icon" />
                <span className="location-text">{destination.location}</span>
              </div>
              <p className="description">{destination.description}</p>
              <button
                onClick={() => {setSelectedDestination(destination); setCurrentView('detail');}}
                className="discover-button"
              >
                Découvrir
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="no-destination-found">
          <div className="no-destination-icon">
            <Search className="no-destination-icon" />
          </div>
          <h3 className="no-destination-title">Aucune destination trouvée</h3>
          <p className="no-destination-message">Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  </div>
);

export default DestinationsPage;