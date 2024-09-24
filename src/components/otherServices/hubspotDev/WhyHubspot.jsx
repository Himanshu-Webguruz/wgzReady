import Image from "next/image";
import optimized from "../../../../public/images/hubspotimages/huboptimised.svg";
import socialmarketing from "../../../../public/images/hubspotimages/hubspotbenefit.svg";
import automation from "../../../../public/images/hubspotimages/hubspoteffeciency.svg";
import contentmarkt from "../../../../public/images/hubspotimages/hubspotbenefit4.svg";
const WhyHubspot = () => {
  return (
    <>
      <section className="digital-marketing py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
              Reasons to Choose <span> WebGuruz as Your HubSpot Development Partner</span>
              </h3>
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Proven track record of success</h5>
              <p>
              We have a history of delivering successful HubSpot projects across various industries, demonstrating our expertise and ability to drive results.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="optimized" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Experienced and skilled team</h5>
              <p>
              Our team consists of highly skilled developers and marketers with in-depth knowledge of HubSpot&apos;s features and best practices. They are dedicated to providing exceptional service and delivering tailored solutions.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="socialmarketing" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Customized solutions</h5>
              <p>
              We work closely with our clients to understand their specific requirements and tailor our services accordingly, ensuring that our solutions align perfectly with their goals.  
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={contentmarkt} alt="contentmarkt" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Excellent customer support</h5>
              <p>
              Our dedicated team is always available to assist you with any questions or issues that may arise, ensuring a smooth and hassle-free experience.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={automation} alt="automation" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default WhyHubspot;
