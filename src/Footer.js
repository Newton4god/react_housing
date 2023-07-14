import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='Footer' id="Footer">
        <div className='FooterMainDiv'>
            <div className='FooterAboutUs'>
                <h1>About Us</h1>
                <hr></hr>
                <p>At our real estate agency, we believe that everyone deserves access to the best possible real estate experience. That's why we are committed to providing our clients with the best possible services and products. We offer a range of services, including home search and selling, building for rent, office space for rent, real estate consulting, home inspection and testing, real estate asset management, and real estate photography. We are dedicated to helping our clients achieve their financial goals and achieve their dream home.<br></br>

                Whether you are a first-time homebuyer or a seasoned real estate professional, our real estate agency has the experience and expertise to help you find the perfect home or property for your needs. Contact us today to learn more about our services and how we can help you achieve your financial goals and achieve your dream home.<br></br>

                Thank you for choosing our real estate agency for your real estate needs. We look forward to helping you achieve your financial goals and achieve your dream home.</p>
            </div>

            <div className='FooterCompanyInfo'>
                <h1>Company Info</h1>
                <hr></hr>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Properties</a></li>
                    <li><a href="#">What We Offer</a></li>
                    {/* <li><a href="#"></a></li> */}
                </ul>
            </div>

            <div className='FooterQuickContact'>
                <h1>Quick contact</h1>
                <hr></hr>
                <p>If you have any questions or need help, feel free to contact our team.</p>
                <h6> Phone Number: +234 81XXXX89 </h6>
                <h6>Email: jjoiroor@gmail.com</h6>
                <a href='https://www.instagram.com/crystalhomesandproperties/'> <i className='fa-brands fa-instagram'></i></a>
            </div>
        </div>
    </section>
  )
}

export default Footer