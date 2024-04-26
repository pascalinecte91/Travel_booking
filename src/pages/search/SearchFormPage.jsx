
import SearchForm from 'components/search/SearchForm.js';
import React, { useState, useEffect } from 'react';
import formData from 'datas/data.json';

const SearchFormPage = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    setDestinations(formData); 
    console.log(" setDestinations");
  }, []);
  // Définit la fonction handleSearch pour gérer la recherche
  const handleSearch = (searchParams) => {
    console.log("Recherche effectuée avec les paramètres :", searchParams);
    // Ici, tu peux ajouter la logique pour effectuer la recherche
    // par exemple, filtrer les destinations en fonction des critères de recherche
  };

  return (
    <div>
      <h1>Search Form</h1>
      <SearchForm destinations={destinations} onSearch={handleSearch} />
    </div>
  );
}

export default SearchFormPage;
