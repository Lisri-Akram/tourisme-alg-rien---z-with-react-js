import React, { useState } from 'react';
import { Heart, Star, MapPin, Search, Calendar, Plus, Trash2, Users, Euro, Clock, Edit3, Save, X } from 'lucide-react';
import '../styles/FavoritesPage.css';

const FavoritesPage = ({ 
  favorites, 
  destinations, 
  setCurrentView, 
  setSelectedDestination, 
  toggleFavorite, 
  getTypeIcon 
}) => {
  const [activeTab, setActiveTab] = useState('favorites');
  const [tripPlans, setTripPlans] = useState([]);
  const [showCreateTrip, setShowCreateTrip] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [newTrip, setNewTrip] = useState({
    name: '',
    startDate: '',
    endDate: '',
    budget: '',
    travelers: 1,
    destinations: [],
    notes: ''
  });

  const favoriteDestinations = destinations.filter(dest => favorites.includes(dest.id));

  // Create new trip
  const createTrip = () => {
    if (newTrip.name && newTrip.startDate && newTrip.endDate) {
      const trip = {
        id: Date.now(),
        ...newTrip,
        createdAt: new Date().toISOString(),
        status: 'planning'
      };
      setTripPlans([...tripPlans, trip]);
      resetNewTrip();
      setShowCreateTrip(false);
    }
  };

  // Reset new trip form
  const resetNewTrip = () => {
    setNewTrip({
      name: '',
      startDate: '',
      endDate: '',
      budget: '',
      travelers: 1,
      destinations: [],
      notes: ''
    });
  };

  // Update trip
  const updateTrip = (tripId, updatedTrip) => {
    setTripPlans(tripPlans.map(trip => 
      trip.id === tripId ? { ...trip, ...updatedTrip } : trip
    ));
    setEditingTrip(null);
  };

  // Delete trip
  const deleteTrip = (tripId) => {
    setTripPlans(tripPlans.filter(trip => trip.id !== tripId));
  };

  // Add destination to trip
  const addDestinationToTrip = (tripId, destinationId) => {
    setTripPlans(tripPlans.map(trip => 
      trip.id === tripId 
        ? { ...trip, destinations: [...new Set([...trip.destinations, destinationId])] }
        : trip
    ));
  };

  // Remove destination from trip
  const removeDestinationFromTrip = (tripId, destinationId) => {
    setTripPlans(tripPlans.map(trip => 
      trip.id === tripId 
        ? { ...trip, destinations: trip.destinations.filter(id => id !== destinationId) }
        : trip
    ));
  };

  // Calculate trip duration
  const getTripDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get destination by ID
  const getDestinationById = (id) => destinations.find(dest => dest.id === id);

  // Calculate estimated trip cost
  const calculateTripCost = (trip) => {
    const tripDestinations = trip.destinations.map(id => getDestinationById(id)).filter(Boolean);
    const destinationsCost = tripDestinations.reduce((total, dest) => {
      const price = parseInt(dest.price.replace(/[^\d]/g, '')) || 0;
      return total + price;
    }, 0);
    return destinationsCost * trip.travelers;
  };

  return (
    <div className="favorites-page-container">
      <div className="favorites-content-wrapper">
        {/* Header with Tabs */}
        <div className="favorites-header">
          <h1 className="favorites-title">Mes Favoris & Voyages</h1>
          <div className="favorites-tabs">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`favorites-tab ${activeTab === 'favorites' ? 'active' : ''}`}
            >
              <Heart className="favorites-tab-icon" />
              Favoris ({favorites.length})
            </button>
            <button
              onClick={() => setActiveTab('trips')}
              className={`favorites-tab ${activeTab === 'trips' ? 'active' : ''}`}
            >
              <Calendar className="favorites-tab-icon" />
              Mes Voyages ({tripPlans.length})
            </button>
          </div>
        </div>

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div className="favorites-tab-content">
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
                        <Heart className="favorite-card-remove-icon favorite-active" />
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
                      <div className="favorite-card-actions">
                        <button
                          onClick={() => {
                            setSelectedDestination(destination);
                            setCurrentView('detail');
                          }}
                          className="favorite-card-discover-button"
                        >
                          Voir les détails
                        </button>
                        <button
                          onClick={() => setActiveTab('trips')}
                          className="favorite-card-plan-button"
                        >
                          Planifier voyage
                        </button>
                      </div>
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
        )}

        {/* Trips Tab */}
        {activeTab === 'trips' && (
          <div className="trips-tab-content">
            <div className="trips-header">
              <h2 className="trips-section-title">Planification de Voyages</h2>
              <button
                onClick={() => setShowCreateTrip(true)}
                className="trips-create-button"
              >
                <Plus className="trips-create-icon" />
                Nouveau Voyage
              </button>
            </div>

            {/* Create Trip Modal */}
            {showCreateTrip && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title">Créer un Nouveau Voyage</h3>
                    <button
                      onClick={() => {
                        setShowCreateTrip(false);
                        resetNewTrip();
                      }}
                      className="modal-close-button"
                    >
                      <X className="modal-close-icon" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label className="form-label">Nom du voyage</label>
                      <input
                        type="text"
                        placeholder="Ex: Voyage d'été en Algérie"
                        value={newTrip.name}
                        onChange={(e) => setNewTrip({...newTrip, name: e.target.value})}
                        className="form-input"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Date de départ</label>
                        <input
                          type="date"
                          value={newTrip.startDate}
                          onChange={(e) => setNewTrip({...newTrip, startDate: e.target.value})}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Date de retour</label>
                        <input
                          type="date"
                          value={newTrip.endDate}
                          onChange={(e) => setNewTrip({...newTrip, endDate: e.target.value})}
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Budget (DA)</label>
                        <input
                          type="number"
                          placeholder="50000"
                          value={newTrip.budget}
                          onChange={(e) => setNewTrip({...newTrip, budget: e.target.value})}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Nombre de voyageurs</label>
                        <input
                          type="number"
                          value={newTrip.travelers}
                          onChange={(e) => setNewTrip({...newTrip, travelers: parseInt(e.target.value)})}
                          className="form-input"
                          min="1"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Notes (optionnel)</label>
                      <textarea
                        placeholder="Ajoutez des notes sur votre voyage..."
                        value={newTrip.notes}
                        onChange={(e) => setNewTrip({...newTrip, notes: e.target.value})}
                        className="form-textarea"
                        rows="3"
                      />
                    </div>
                  </div>
                  <div className="modal-actions">
                    <button
                      onClick={() => {
                        setShowCreateTrip(false);
                        resetNewTrip();
                      }}
                      className="modal-cancel-button"
                    >
                      Annuler
                    </button>
                    <button
                      onClick={createTrip}
                      className="modal-confirm-button"
                      disabled={!newTrip.name || !newTrip.startDate || !newTrip.endDate}
                    >
                      Créer le voyage
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Trip Plans List */}
            {tripPlans.length === 0 ? (
              <div className="no-trips-message">
                <div className="no-trips-icon-wrapper">
                  <Calendar className="no-trips-icon" />
                </div>
                <h3 className="no-trips-title">Aucun voyage planifié</h3>
                <p className="no-trips-text">Commencez à planifier votre prochaine aventure en Algérie</p>
              </div>
            ) : (
              <div className="trips-list">
                {tripPlans.map((trip) => (
                  <div key={trip.id} className="trip-card">
                    <div className="trip-header">
                      <div className="trip-main-info">
                        <h3 className="trip-name">{trip.name}</h3>
                        <div className="trip-meta">
                          <div className="trip-meta-item">
                            <Calendar className="trip-meta-icon" />
                            <span>
                              {new Date(trip.startDate).toLocaleDateString('fr-FR')} - 
                              {new Date(trip.endDate).toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          <div className="trip-meta-item">
                            <Clock className="trip-meta-icon" />
                            <span>{getTripDuration(trip.startDate, trip.endDate)} jours</span>
                          </div>
                          <div className="trip-meta-item">
                            <Users className="trip-meta-icon" />
                            <span>{trip.travelers} personne{trip.travelers > 1 ? 's' : ''}</span>
                          </div>
                          {trip.budget && (
                            <div className="trip-meta-item">
                              <Euro className="trip-meta-icon" />
                              <span>{trip.budget} DA</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="trip-actions">
                        <button
                          onClick={() => setEditingTrip(trip.id)}
                          className="trip-action-button edit"
                        >
                          <Edit3 className="trip-action-icon" />
                        </button>
                        <button
                          onClick={() => deleteTrip(trip.id)}
                          className="trip-action-button delete"
                        >
                          <Trash2 className="trip-action-icon" />
                        </button>
                      </div>
                    </div>

                    {/* Trip Cost Estimation */}
                    <div className="trip-cost-estimation">
                      <h4 className="trip-cost-title">Estimation des coûts</h4>
                      <div className="trip-cost-breakdown">
                        <span>Destinations: {calculateTripCost(trip)} DA</span>
                        {trip.budget && (
                          <span className={`trip-budget-status ${calculateTripCost(trip) <= parseInt(trip.budget) ? 'within-budget' : 'over-budget'}`}>
                            Budget: {trip.budget} DA
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Trip Notes */}
                    {trip.notes && (
                      <div className="trip-notes">
                        <h4 className="trip-notes-title">Notes</h4>
                        <p className="trip-notes-content">{trip.notes}</p>
                      </div>
                    )}

                    {/* Trip Destinations */}
                    <div className="trip-destinations">
                      <h4 className="trip-destinations-title">
                        Destinations ({trip.destinations.length})
                      </h4>
                      
                      {trip.destinations.length === 0 ? (
                        <p className="trip-no-destinations">Aucune destination ajoutée</p>
                      ) : (
                        <div className="trip-destinations-grid">
                          {trip.destinations.map((destId) => {
                            const destination = getDestinationById(destId);
                            if (!destination) return null;
                            return (
                              <div key={destId} className="trip-destination-card">
                                <img
                                  src={destination.image}
                                  alt={destination.name}
                                  className="trip-destination-image"
                                />
                                <div className="trip-destination-info">
                                  <h5 className="trip-destination-name">{destination.name}</h5>
                                  <p className="trip-destination-location">{destination.location}</p>
                                  <p className="trip-destination-price">{destination.price}</p>
                                </div>
                                <button
                                  onClick={() => removeDestinationFromTrip(trip.id, destId)}
                                  className="trip-destination-remove"
                                >
                                  <Trash2 className="trip-destination-remove-icon" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Add destinations from favorites */}
                      {favoriteDestinations.length > 0 && (
                        <div className="add-destinations-section">
                          <h5 className="add-destinations-title">Ajouter depuis les favoris:</h5>
                          <div className="add-destinations-buttons">
                            {favoriteDestinations
                              .filter(dest => !trip.destinations.includes(dest.id))
                              .map((destination) => (
                                <button
                                  key={destination.id}
                                  onClick={() => addDestinationToTrip(trip.id, destination.id)}
                                  className="add-destination-button"
                                >
                                  <Plus className="add-destination-icon" />
                                  {destination.name}
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;