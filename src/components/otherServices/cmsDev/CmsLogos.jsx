
import Image from "next/image";
import logo1 from "../../../../public/images/hubspotimages/hubspotclient1.svg";
import logo2 from "../../../../public/images/hubspotimages/hubspotclient2.svg";
import logo3 from "../../../../public/images/hubspotimages/hubspotclient3.svg";
import logo4 from "../../../../public/images/hubspotimages/hubspotclient4.svg";

const logos = [
  { src: logo1, alt: "logo1" },
  { src: logo2, alt: "logo2" },
  { src: logo3, alt: "logo3" },
  { src: logo4, alt: "logo4" },
  { src: logo1, alt: "logo5" },
  { src: logo2, alt: "logo6" },
  { src: logo3, alt: "logo7" },
  { src: logo4, alt: "logo8" }
];

const CmsLogos = () => {
  return (
    <section className="contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clients</span>
            </h2>
            <p>
              Clients of immense value guide our commitment to exceptional
              service
            </p>
          </div>
        </div>
        <div className="row">
          {logos.map((logo, index) => (
            <div className="col-sm-3 col-xs-12" key={index}>
              <div className="logo-card">
                <Image src={logo.src} alt={logo.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CmsLogos;
