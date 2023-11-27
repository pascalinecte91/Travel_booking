
import Caroussel from 'components/caroussel/Caroussel.js'
import React from 'react'
import thailande from 'assets/thailande.jpg'
import sumatra from 'assets/sumatra.jpg'
import afrique from 'assets/afrique_safari.jpg'
import guadeloupe from 'assets/guadeloupe.jpg'
import caimens from 'assets/ile_caimens.webp'
import mexique from 'assets/mexique.jpg'
import martinic from 'assets/martinic.jpg'
import bali from 'assets/indonesie_bali.jpg'
import maurice from 'assets/ile_maurice.jpg'
import indonesie from 'assets/indonesie_bali.jpg'
import polinesie from 'assets/polinesie.jpg'


const HomePage = () => {
  const images = [ thailande, sumatra, afrique, bali, guadeloupe, caimens, martinic, mexique,  maurice, indonesie, polinesie];
  return (
    <section>
      <Caroussel images={images} />
  </section>
  )
}


export default HomePage;
