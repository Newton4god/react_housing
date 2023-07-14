import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';


// const images = ['crystal/public/assets/Landing images/153312953_708798096460980_452467716916402954_n.JPG','crystal/public/assets/Landing images/174761816_1917447998403655_4122621478398189509_n.JPG']


const ImageSlider = ({ images, writeUps }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  // 3 seconds
};

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="image-container">
            <img
                // key={index} 
                src={image} 
                alt={`Slide ${index}`}
                className='carouselImage'
            />
            <div className="carouselText">{writeUps[index]}</div> 
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;

