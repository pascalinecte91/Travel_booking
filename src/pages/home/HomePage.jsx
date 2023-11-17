
import Caroussel from 'components/caroussel/Caroussel.js'
import React from 'react'
import url1 from 'assets/url1.jpg'
import url2 from 'assets/url2.jpg'
import url3 from 'assets/url3.jpg'
import circuit from 'assets/circuit_indonesie.jpeg'



const HomePage = () => {
  const images = [url1, url2, url3, circuit];
  return (
    <section>
      <Caroussel images={images} />
  </section>
  )
}


export default HomePage
