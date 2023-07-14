import React from 'react'
import './ChooseUs.css'

const ChooseUs = () => {
  return (
    <section className='ChooseUs' id="WhyChooseUs"> 
        <div className='ChooseUsMainDiv'>
            
            <img className='ChooseUsImg' src="assets/Image folder/ChooseUs/175868360_471025981005416_4451336018517880321_n.JPG" alt="Home-Image" />
            
            <div className='ChooseUsSubDiv'>
                <i className='fas fa-chevron-up'> </i>
                <h1> Why Choose Us</h1>
                <hr></hr>
                <p> At our real estate agency, we are dedicated to providing our clients with the best possible experience. Our team of experts is comprised of professionals who have extensive experience in the industry and understand the unique challenges that each client may face. We believe that by working together, we can help our clients achieve their financial goals and achieve their dream home. <br></br> We offer a wide range of services to help our clients find the perfect home or property for their needs. Whether you are looking for a new home to buy, a rental property to rent, or an office space to rent, we can help you find the perfect solution. Our team of experts will work with you to develop a customized real estate plan that includes financial planning, asset management, and investment options.</p>

                <ul>
                    <li>Expert team of professionals</li>
                    <li>Wide range of services</li>
                    <li>Commitment to providing the best possible experience</li>
                    <li>Professionalism and customer service</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ChooseUs