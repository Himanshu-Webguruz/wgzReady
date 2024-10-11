import Image from "next/image";
import Icnbroad1 from "../../../../public/images/drupalimg/cmsbanner.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CmsBanner = () => {
  return (
    <>
      <section className="drupaltp service-banner web-banner inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="heading-main">
                <h1>
                  <span>CMS Web Development</span>
                  <br />
                  Services
                </h1>
                <h5>Transforming Ideas into Dynamic Content Solutions</h5>
                <p>
                Managing your content effectively is essential for success in a fast-paced digital landscape. At WebGuruz, we specialize in delivering tailored CMS Website Development Services designed to empower businesses and individuals alike. Our solutions not only enhance your online presence but also streamline your content management processes. Explore how we can help you take control of your digital narrative.
                </p>
              </div>
              <div className="getintchbtn">
                <Link className="explore-btn" href="/">
                  Get In Touch {" "}
                  <FontAwesomeIcon
                          icon={faArrowRight}
                          role="img"
                          aria-label="Arrow Right"
                        />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="banner-image-right">
                <Image src={Icnbroad1} className="img-fluid" alt="CMS Web Development Services" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsBanner;
