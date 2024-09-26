import Image from "next/image";
import Icnbroad1 from "../../../../public/images/drupalimg/cmsbanner.svg";
import Link from "next/link";

const CmsBanner = () => {
  return (
    <>
      <section className="drupaltp service-banner web-banner inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="heading-main">
                <h1>
                  <span>CMS Development</span>
                  <br />
                  Services
                </h1>
                <h5>Unleash the Full Potential of Drupal</h5>
                <p>
                  Accelerate growth with the help of our expert Drupal
                  developers, delivering growth-driven, fully optimized, and
                  secure solutions.
                </p>
              </div>
              <div className="getintchbtn">
                <Link className="explore-btn" href="/">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="banner-image-right">
                <Image src={Icnbroad1} className="img-fluid" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsBanner;
