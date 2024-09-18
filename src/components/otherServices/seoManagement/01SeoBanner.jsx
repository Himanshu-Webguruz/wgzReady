import Image from "next/image";
import seobannertop from "../../../../public/images/seoimages/seobannertop.svg";

const SeoBanner = () => {
  return (
    <>
      <section className="seobanner-main py-5 service-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 heading-main">
              <h2>
                <span>SEO SERVICES:</span> Result Driven & Affordable
              </h2>
              <p className="strong-contnt">
                Enhance organic traffic flow to your website like never before
                with our top-notch SEO strategy.
              </p>
              <p>
                With over 3.5 billion online searches made every day, your
                business can’t afford to stay invisible. Optimizing your website
                for the leading search engines (like Google) is the best way to
                reach the most potential buyers. And you need to reach them
                right when they are in need of your services or products.
              </p>
              <div className="button-merge">
                <button className="explore-btn">Quick Enquiry</button>
                <button className="explore-btn without-bg">
                  Call Us: +918420197208
                </button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 banner-image-right">
              <Image src={seobannertop} alt="seobannertop" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoBanner;
