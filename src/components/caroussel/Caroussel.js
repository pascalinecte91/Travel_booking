import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Caroussel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [enlargedImageIndex, setEnlargedImageIndex] = useState(null);

  const nextSlide = () => {
    const index = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(index);
  };

  const prevSlide = () => {
    const index = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(index);
  };

  const openImage = (index) => {
    setEnlargedImageIndex((currentImageIndex + index) % images.length);
  };

  const closeImage = () => {
    setEnlargedImageIndex(null);
  };

  return (
    <section className='caroussel'>
      <button className='caroussel__prev' onClick={prevSlide}><FaArrowLeft /></button>
      <div className='caroussel__images'>
        {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
          <img key={index} src={image} alt="" onClick={() => openImage(index)} />
        ))}
      </div>
      <button className='caroussel__next' onClick={nextSlide}><FaArrowRight /></button>
      {enlargedImageIndex !== null && (
        <div className='caroussel__enlarged' onClick={closeImage}>
          <img src={images[enlargedImageIndex]} alt="" />
        </div>
      )}
    </section>
  );
};

export default Caroussel;
