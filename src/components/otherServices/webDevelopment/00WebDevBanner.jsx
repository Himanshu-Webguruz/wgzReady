import Image from "next/image";
import serviceright from "/public/images/webimages/hbsptban.webp";
import Link from "next/link";

const WebDevBanner = () => {
  return (
    <>
      <section className="service-banner web-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h2 className="mb-3">
              Crafting Digital Masterpieces<span> Your Vision, Our Expertise.</span>
              </h2>
              <p className="fw-bold">
              Experience the power of exceptional Web Design and Development.

              </p>
              <p>
              Your website is your online storefront. At WebGuruz, we understand the importance of a visually appealing, user-friendly, and functional website. Our team of skilled developers is dedicated to crafting custom web solutions that not only captivate your audience but also drive business growth.
              </p>
              <Link className="explore-btn" href="#">
                Get Your Custom Web App
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

export default WebDevBanner;
