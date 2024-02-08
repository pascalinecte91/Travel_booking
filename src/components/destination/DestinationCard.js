import React from 'react';
import Chance from 'chance';

const chance = new Chance();

const DestinationCard = ({ destination }) => {
    // Génération d'une phrase aléatoire avec  mots
    const randomPhrase = chance.sentence({ words: 10 });
    
    return (
        <div className="destination-card-container">
            <h3>{destination.title}</h3>
            <div className="destination-card">
                <img src={destination.image} alt={destination.title} />
               
                <p>{destination.description}</p>
            </div>
            {/* Propriété "designation" à droite de la carte avec le contenu aléatoire */}
            <div className="designation">
                <p>{randomPhrase}</p>
            </div>
        </div>
    );
};

export default DestinationCard;
