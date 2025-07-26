import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import FavoritesPage from './pages/FavoritesPage';
import { regionsData, destinationsData } from './data/appData';
import { Waves, Mountain, Building2, Trees, MapPin } from 'lucide-react'; // Import necessary icons

const TourismPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data is now imported from appData.js
  const regions = regionsData;
  const destinations = destinationsData;

  const toggleFavorite = (destinationId) => {
    setFavorites(prev =>
      prev.includes(destinationId)
        ? prev.filter(id => id !== destinationId)
        : [...prev, destinationId]
    );
  };

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || dest.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type) => {
    switch(type) {
      case 'plage': return <Waves className="w-5 h-5" />;
      case 'montagne': return <Mountain className="w-5 h-5" />;
      case 'patrimoine': return <Building2 className="w-5 h-5" />;
      case 'desert': return <Trees className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage
            regions={regions}
            destinations={destinations}
            setCurrentView={setCurrentView}
            setSelectedDestination={setSelectedDestination}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            getTypeIcon={getTypeIcon}
          />
        );
      case 'destinations':
        return (
          <DestinationsPage
            filteredDestinations={filteredDestinations}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filterType={filterType}
            setFilterType={setFilterType}
            setSelectedDestination={setSelectedDestination}
            setCurrentView={setCurrentView}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            getTypeIcon={getTypeIcon}
          />
        );
      case 'detail':
        return (
          <DestinationDetail
            destination={selectedDestination}
            setCurrentView={setCurrentView}
            toggleFavorite={toggleFavorite}
            favorites={favorites}
            getTypeIcon={getTypeIcon}
          />
        );
      case 'favorites':
        return (
          <FavoritesPage
            destinations={destinations}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            setSelectedDestination={setSelectedDestination}
            setCurrentView={setCurrentView}
            getTypeIcon={getTypeIcon}
          />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        favoritesCount={favorites.length}
      />
      
      <main>
        {renderContent()}
      </main>
    </div>
  );
};

export default TourismPlatform;