import React from "react";
import Chance from "chance";
import Caroussel from "components/caroussel/Caroussel.js";
import DestinationCard from "components/destination/DestinationCard.js";
import guadeloupe from "assets/guadeloupe.jpg";
import thailande from "assets/thailande.jpg";
import ile_maurice from "assets/ile_maurice.jpg";
import martinique from "assets/martinique.jpg";
import sumatra from "assets/sumatra.jpg";
import polynesie from "assets/polynesie.jpg";
import indonesie from "assets/indonesie_bali.jpg";
import afrique from "assets/afrique_safari.jpg";
import mexique from "assets/mexique.jpg";

import caimens from "assets/ile_caimens.webp";

// Initialise Chance.js
const chance = new Chance();

// Tableau des noms de destinations possibles
const destinationNames = ["Guadeloupe", "Martinique", "Polynesie", "Sumatra"];

// Générer les données aléatoires pour chaque destination
const destinations = destinationNames.map((name) => ({
  image: chance.pickone([
    thailande,
    sumatra,
    afrique,
    guadeloupe,
    caimens,
    martinique,
    mexique,
    ile_maurice,
    indonesie,
    polynesie,
  ]), // Choix aléatoire d'une image parmi les images disponibles
  title: name,
  description: chance.sentence({ words: 10 }), // Générer une phrase aléatoire avec 10 mots
}));

const HomePage = () => {
  const images = [
    thailande,
    sumatra,
    afrique,
    guadeloupe,
    caimens,
    martinique,
    mexique,
    ile_maurice,
    indonesie,
    polynesie,
  ];

  return (
    <>
      <section className="homePage">
        <h1 className="homePage--title">Choisissez une destination</h1>
        <Caroussel images={images} />
      </section>
      <h1 className="title">Destinations populaires</h1>
      <section className="destination">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
