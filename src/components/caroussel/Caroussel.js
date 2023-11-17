import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const Caroussel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  return (
    <section className='caroussel'>
       <button className='caroussel__prev' onClick={prevSlide}><FaArrowLeft /></button>
      <img src={images[currentImageIndex]} alt="" />
      <button className='caroussel__next' onClick={nextSlide}><FaArrowRight /></button>
    </section>
  );
};

export  default Caroussel;
