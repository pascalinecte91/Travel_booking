import React, { useState } from 'react';

const SearchForm = ({ destinations, onSearch }) => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Appelle la fonction de recherche fournie par les props avec les valeurs des champs du formulaire
    onSearch({ destination, date, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="destination">Destination:</label>
      <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="">Sélectionner une destination</option>
        {destinations.map(destination => (
          <option key={destination.id} value={destination.id}>{destination.name}</option>
        ))}
      </select>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="price">Prix:</label>
      <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchForm;
