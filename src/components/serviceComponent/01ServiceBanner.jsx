import Image from "next/image";
import serviceright from "../../../public/images/digital-marketing.svg";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <section className="service-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h6 className="dot">Digital Marketing Services</h6>
              <h2>
              You can buy Likes,<span>  But not Hearts</span>
              </h2>
              <p>
              Let WebGuruz help you cultivate market leadership from the inside out.
              </p>
              <Link className="explore-btn" href="#">
                Get Started Now!
              </Link>
            </div>
            <div className="col-sm-6 col-xs-12 service-right-banner text-center">
              <Image src={serviceright} alt="service-right" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
