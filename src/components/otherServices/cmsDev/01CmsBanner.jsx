import Image from "next/image";
import Icnbroad1 from "../../../../public/images/drupalimg/topdrupal.png";
import Lnkdn from "../../../../public/images/drupalimg/linkedin.png";
import smrsh from "../../../../public/images/drupalimg/semrush.png";

const CmsBanner = () => {
  return (
    <>
      <section className="drupaltp service-banner web-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="heading-main">
                <h2>
                  <span>Drupal Development</span>
                  <br />
                  Services
                </h2>
                <h5>Unleash the Full Potential of Drupal</h5>
                <p>
                  Accelerate growth with the help of our expert Drupal
                  developers, delivering growth-driven, fully optimized, and
                  secure solutions.
                </p>
              </div>
              <div className="getintchbtn">
                <a className="explore-btn" href="/">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="dplrtimg">
                <div className="lnkdn">
                  <Image src={Lnkdn} className="img-fluid"  alt="Image" />
                </div>
                <Image src={Icnbroad1} className="img-fluid"  alt="Image" />
                <div className="smrsh">
                  <Image src={smrsh} className="img-fluid"  alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsBanner;
