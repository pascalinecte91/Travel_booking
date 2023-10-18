import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchDestinations } from '../'; 

const SearchForm = ({ searchDestinations }) => {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Dispatchez l'action de recherche avec les valeurs spécifiées
    searchDestinations({ location, date });
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchDestinations: (searchParams) => dispatch(searchDestinations(searchParams)),
});

export default connect(null, mapDispatchToProps)(SearchForm);
