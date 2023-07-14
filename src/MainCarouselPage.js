import React from 'react'
import Carousel from './Carousel'
import { images1,images2,images3,images4,images5,images6 } from './Carouselimages'
import './MainCarouselPage.css'


const MainCarouselPage = () => {
  return (
    <section id="MainCarouselPage">
        <div className='mainHeader'>
            <i className='fas fa-home'></i>
            <h1>Explore Properties</h1>
            <h2>FIND PROPERTY IN YOUR CITY</h2>
        </div>

        <div className='mainCarouselDivs'>
            
            <div className='subCarouselDivs'> 
                <Carousel images={images1}/>
                <div className='miniCarouselDivs'>
                    <h5>4 bedroom detached duplex with BQ for sale</h5>
                    <p>Location:Katampe Extension, Abuja</p>
                    <p> Price: 250m (corner piece)</p>
                    <p> Price: 230m (middle unit)</p>
                    <ul className='mainCarouselList'>
                        <li>All rooms en-suite</li>
                        <li>Smart home</li>
                        <li>CCTV</li>
                        <li>2 living rooms</li>
                        <li>High ceiling</li>
                        <li>High ceiling</li>
                        <li>Swimming pool</li>
                    </ul>
                    <hr></hr>
                    <p></p>
                </div>
            </div>
            <div className='subCarouselDivs'> 
                <Carousel images={images2}/>
                <div className='miniCarouselDivs'>
                    <h5>3 bedroom Apartment for sale</h5>
                    <p>Location:Idu mbora, Abuja</p>
                    <p> Price: 30m </p>
                    <ul className='mainCarouselList'>
                        
                        <li>All rooms en-suite</li>
                        <li>Pop finishing</li>
                        <li>Spacious rooms</li>
                        <li>Inverter</li>
                        <li>Fiber optic cable</li>
                        <li>Solar power</li>
                        <li>Elevator</li>
                        <li>Gym</li>
                    </ul>
                    <hr></hr>
                    <p></p>
                </div>
            </div>
            <div className='subCarouselDivs'>
                <Carousel images={images3}/>
                <div className='miniCarouselDivs'>
                    <h5>4 bedroom terrace dublex with BQ for sale</h5>
                    <p>Location:Guzape, Abuja</p>
                    <p> Price: 110m net</p>
                    <ul className='mainCarouselList'>
                        <li>All rooms en-suite</li>
                        <li>Pop finishing</li>
                        <li>Spacious</li>
                        <li>Serene Environment</li>
                        <li>2 Living rooms</li>
                    </ul>
                    <hr></hr>
                    <p></p>
                </div>
            </div>
        </div>
        
        <div className='mainCarouselDivs'>
            <div className='subCarouselDivs special-divs'> 
                <Carousel images={images4}/>
                <div className='miniCarouselDivs'>
                    <h5>Serviced 3 bedroom apartment with BQ for sale</h5>
                    <p>Location: Jahi, Abuja</p>
                    <p> Price: 50m</p>
                    <ul className='mainCarouselList'>
                        <li>All rooms en-suite</li>
                        <li>Pop Finishing</li>
                        <li>Generator</li>
                        <li>Ample Parking Space</li>
                        <li>Fitted kitchen cabinets</li>
                        <li>Modern finishing</li>
                    </ul>
                    <hr></hr>
                    <p></p>
                </div>
            </div>
            <div className='subCarouselDivs special-divs'>
                <Carousel images={images5}/>
                <div className='miniCarouselDivs'>
                    <h5>Luxury 1 bedroom apartment for Shortlet/Airbnb</h5>
                    <p> Location:Wuse 2, Abuja</p>
                    <p> Rate: 50k per night </p>
                    <ul className='mainCarouselList'>
                        <li>Kitchen</li>
                        <li>Spacious</li>
                        <li>Secured Compound</li>
                    </ul>
                    <hr></hr>
                    <p></p>
                </div>
            </div>
            <div className='subCarouselDivs special-divs'>
                <Carousel images={images6}/>
                <div className='miniCarouselDivs'>
                    <h5>Luxury 2 bedroomApartment for Shortlet/Airbnb</h5>
                    <p>Location: Wuse 2, Abuja</p>
                    <p>Rate: 70k per night</p>
                    <ul className='mainCarouselList'>
                        <li>24hrs Electricitv</li>
                        <li>Fast Wi-fi</li>
                        <li>Secure compound</li>
                        <li>Bi-weeklv cleaning</li>
                        <li>Ample parking space</li>
                        <li>Swimming pool</li>
                    </ul>
                    <hr></hr>
                    <p></p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default MainCarouselPage