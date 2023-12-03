import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchForm = () => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Ici, tu peux ajouter une logique de recherche si nécessaire
    // Pour l'instant, cela ne fait que vider les champs de recherche
    setLocation('');
    setDate('');
  };

  return (
    <div className="search-form">
      <h2>Rechercher des Destinations</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="location">Lieu :</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Rechercher</button>
      </form>
    
      <Link to="/search">Aller à la page de recherche</Link>
    </div>
  );
};

export default SearchForm;
