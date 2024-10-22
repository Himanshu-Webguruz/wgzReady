import React from 'react'
import Image from 'next/image'
import revolution from '../../../public/images/consultImages/revolution.webp'
const RevolutionConsultancy = () => {
  return (
    <div>
      <section className="revolution-consultancy py-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
                    <h2><span>Revolutionize, Grow, and Thrive </span> with Us</h2>
                    <p>Focused on delivering results with personalized marketing solutions.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className='col-sm-6 col-xs-12'>
                    <ul className='attention-main'>
                        <li>Individual attention: Tailored strategies focused on your unique business needs.</li>
                        <li>360-degree approach: Comprehensive marketing solutions for total business growth.</li>
                        <li>Result-oriented: Focused on delivering measurable and impactful results.</li>
                        <li>Confidentiality: Your business privacy is always our top priority.</li>
                        <li>Video conferencing: Seamless, convenient communication wherever you are located.</li>
                    </ul>
                    <a className='explore-btn' href="#">Book 1-1 Call Today</a>
                </div>
                <div className='col-sm-6 col-xs-12 consultaion-image-right'>
                  <Image src={revolution} alt='Consult Us'/>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default RevolutionConsultancy
