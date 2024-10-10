import React from 'react';
import Image from 'next/image';
import upworklogo from '../../../public/images/aboutimages/upwork-logo.png'
import clutch from '../../../public/images/aboutimages/clutch-logo.png'
import goodfirm from '../../../public/images/aboutimages/good-firms-logo.png'
import googlebusiness from '../../../public/images/aboutimages/google-business-logo.png'
import gyf from '../../../public/images/aboutimages/abt-gif.gif'
const AboutWhoweare = () => {
  return (
    <div>
        <section className="about-we-are py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-xs-12 about-left heading-main">
                        <h2>Who <span>We Are</span></h2>
                        <p>With over decades of experience, WebGuruz Technologies help individuals and corporations navigate through their digital transformation journey by crafting custom applications in accordance to their requirements.</p>
                        <Image src={gyf} alt='gyf'/>
                    </div>
                    <div className="col-sm-6 col-xs-12 icon-content">
                        <div className="card-icon-content">
                            <Image src={upworklogo} alt='upworklogo'/>
                            <p>Earned 99% of job success & “Top Rated” Badge on Upwork.</p>
                        </div>
                        <div className="card-icon-content">
                            <Image src={clutch} alt='clutch'/>
                            <p>Recognized as Top App Developers by Clutch.</p>
                        </div>
                        <div className="card-icon-content">
                            <Image src={goodfirm} alt='goodfirm'/>
                            <p>Recognized as Top App Developers by Clutch.</p>
                        </div>
                        <div className="card-icon-content">
                            <Image src={googlebusiness} alt='googlebusiness'/>
                            <p>Earned 99% of job success & “Top Rated” Badge on Upwork.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutWhoweare;
