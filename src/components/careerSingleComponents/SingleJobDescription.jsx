import React from 'react';
import Image from 'next/image';
// import Careerdesc from '../../../public/images/singlecareerimages/description-image.jpg'
import job from '../../../public/images/careerimages/job.gif'





const SingleJobDescription = ({data}) => {
  return (
    <div>
        <section className="job-description py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-xs-12 left heading-main">
                        <h2>Job <span>Description</span></h2>
                        {/* dynamic data */}
                        <div
                    dangerouslySetInnerHTML={{
                      __html: data[0].content.rendered
                        
                    }}
                  />
                        {/* <p>Company Overview</p>
                        <h3>WebGuruz Technologies Pvt. Ltd., Mohali</h3>
                        <p>Webguruz represents the pinnacle of innovation in both Digital Marketing and Software Development services. For the past 16 years, we have maintained an unparalleled record of delivering high-end solutions and ensuring exceptional client satisfaction.</p>
                        <p>Our vision is to offer robust, cutting-edge solutions that empower businesses to achieve their goals with remarkable efficiency. At Webguruz, we pride ourselves on fostering a work culture that values excellence, collaboration, and continuous learning.</p>
                        <p>Joining our team means immersing yourself in a dynamic environment where you will have the opportunity to work with the latest technologies and gain invaluable experiences. We are committed to not only advancing your professional skills but also contributing to your personal growth in the everevolving tech landscape.</p>
                        <p>Experience the synergy of innovation and expertise at Webguruz, where your career aspirations align with our mission of driving success through state-of-the-art solutions.</p>
                        <h3>Job Summary</h3>
                        <p>Our company seeks a motivated and results-driven Business Development Manager who can help expand our market presence. Our immediate goals for this position include identifying and pursuing new business opportunities, cultivating strategic partnerships, and carefully managing current client relationships. We require someone who has a strong background in sales or business development. Exceptional communication skills and a proven track record for driving growth are also necessary.</p> */}
                    </div>
                    <div className="col-sm-6 col-xs-12 right-image">
                        <Image src={job}  alt="Hello3"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default SingleJobDescription;
