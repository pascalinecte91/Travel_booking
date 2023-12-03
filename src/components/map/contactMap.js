import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ContactMap = () => {
    useEffect(() => {
        // Coordonnées de Paris
        const parisCoordinates = [48.8566, 2.3522];
    
        // Coordonnées de succursales fictives de l'agence de travel booking
        const branchOffices = [
          { name: 'Siège social', coordinates: [48.8584, 2.2944], address: '1, Rue de la Tour Eiffel, 75007 Paris' },
          { name: 'Succursale Nord', coordinates: [49.0097, 2.5479], address: '123, Avenue du Nord, 95100 Val d\'Oise' },
          { name: 'Succursale Sud', coordinates: [48.6325, 2.3948], address: '456, Rue du Sud, 91000 Essonne' },
          { name: 'Succursale Ouest', coordinates: [48.8966, 2.1804], address: '789, Boulevard de l\'Ouest, 92000 Hauts-de-Seine' },
          // Ajoute autant de succursales que nécessaire
        ];
    
        // Crée une carte Leaflet et l'ajoute à l'élément avec l'id "map"
        const map = L.map('map').setView(parisCoordinates, 10);
    
        // Ajoute une couche de tuiles OpenStreetMap à la carte
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);

    
        // Ajoute des marqueurs pour chaque succursale avec le nom et l'adresse dans le popup
        branchOffices.forEach((branch) => {
          L.marker(branch.coordinates)
            .addTo(map)
            .bindPopup(`<b>${branch.name}</b><br>${branch.address}`)
            .openPopup();
        });
    
        // Retourne une fonction de nettoyage qui détruira la carte
        return () => {
          map.remove();
        };
      }, []);
    

  return <section className='mapAdress' id='map'></section>;
};

export default ContactMap;
