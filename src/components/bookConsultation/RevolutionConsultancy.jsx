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
                    <h2>Revolutionizing <span>Digital Marketing Consultancy</span></h2>
                    <p>Get the attention you deserve with our 1-1 video consultancy.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className='col-sm-6 col-xs-12'>
                    <ul className='attention-main'>
                        <li>Individual attention and support by our experts.</li>
                        <li>360-degree approach for all digital marketing channels.</li>
                        <li>Data-driven and result-oriented consultation.</li>
                        <li>Project details are kept confidential to ensure your privacy.</li>
                        <li>Enjoy convenient access to the consultation through video conferencing (Zoom / Google Meet).</li>
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
