import React, { useState, useEffect } from 'react';
import './Carousel.css'

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length, isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handleImageClick = () => {
    setIsTransitioning(true);
  };

  return (
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="carousel-image"
        onClick={handleImageClick}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
};

export default Carousel;