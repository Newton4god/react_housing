import React from 'react';
import ImageSlider from './ImageSlider';
import './ImageSlider.css';

const LandingCarousel = () => {
  const images = [
    'assets/Landing images/153312953_708798096460980_452467716916402954_n.JPG',
    'assets/Landing images/195879999_312172063843746_3397922762368774891_n.JPG',
    'assets/Landing images/210941253_211431814179955_1443693398602813124_n.JPG',
    'assets/Landing images/234479673_1584691141701510_1687389405821125972_n.JPG'
  ];

  const writeUps = [
    <div>
      <h2> <span className='HomePageSpan'> 5 bedroom detached duplex </span>with Bq for sale</h2>
      <p>All rooms en-suite<br/>
        Pop finishing<br/>
        Guest toilet<br/>
        Spacious rooms<br/>
        3 living rooms<br/>
        Rooftop terrace<br/>
        Serene environment<br/>
        Maid's room<br/>
        Smart Estate<br/>
        Home Automation<br/>
        Location:Abuja Nigeria<br/>
        </p>
    </div>,
    <div>
      <h2> <span className='HomePageSpan'>  Luxury 1 bedroom apartment </span>for Shortlet/Airbnb</h2>
      <p>Location:Wuse 2, Abuja Rate:100k per night<br/>
        Kitchen<br/>
        Spacious<br/>
        Secured compound<br/>
        24hrs Electricity</p>
    </div>,
    <div>
      <h2><span className='HomePageSpan'>4 bedroom detached duplex </span>with Bq for sale</h2>
      <p>All rooms en-suite <br/>
        Smart home <br/>
        CCTV<br/>
        2 living rooms<br/>
        High ceiling<br/>
        Fully fitted kitchen<br/>
        Swimming pool<br/>
        Gym<br/>
        Club house<br/>
        We have 5 units in the estate <br/>
        Location:Katampe Extension, Abuja
        </p>
    </div>,
    <div>
      <h2><span className='HomePageSpan'>New 4 bedroom terrace duplex </span>with Bq for sale</h2>
      <p>
        All rooms en-suite<br/>
        Playground area<br/>
        Uniform security<br/>
        Good electricity<br/>
        4 Balconies<br/>
        Courtyard<br/>
        Phase1 is sold out<br/>
        Location:4th avenue gwarinpa, Abuja
        </p>
    </div>
  ];


  return (
    <div id="LandingCarousel">
      {/* <h1>Image Slider</h1> */}
      <ImageSlider images={images} writeUps={writeUps} />
    </div>
  );
};

export default LandingCarousel;



// This is the main page that you should link to your APP.js file