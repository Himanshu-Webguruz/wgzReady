import HomeClient from "@/components/homeComponents/clientcomp/HomeClient";
import Image from "next/image";
// import HubSpotForm from "@/utils/formsHubspot/HubspotForm";

const HomeBanner = () => {
  return (
    <section className="home-banner d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 video-banner">
            <video
              autoPlay
              muted
              loop
              preload="auto"
              width={"100%"}
              playsInline
            >
              <source src="/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col col-sm-8 col-xs-12 banner-content">
            <h1>
              Crafting <span className="animate-charcter">Websites & Digital Marketing Strategies </span> that Convert
            </h1>
            <p className="mt-4">
              Your Digital Vision, Our Technical Brilliance
            </p>
            {/* <HubSpotForm/> */}
            <HomeClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
