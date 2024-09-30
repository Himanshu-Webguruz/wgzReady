
import Image from "next/image";
import logo1 from "/public/images/contactimages/logo1.svg";
import logo2 from "/public/images/contactimages/logo2.svg";
import logo3 from "/public/images/contactimages/logo3.svg";
import logo4 from "/public/images/contactimages/logo4.svg";
import logo5 from "/public/images/contactimages/logo5.svg";
import logo6 from "/public/images/contactimages/logo6.svg";
import logo7 from "/public/images/contactimages/logo7.svg";

const logos = [
  { src: logo1, alt: "logo1" },
  { src: logo2, alt: "logo2" },
  { src: logo3, alt: "logo3" },
  { src: logo4, alt: "logo4" },
  { src: logo5, alt: "logo5" },
  { src: logo6, alt: "logo6" },
  { src: logo7, alt: "logo7" },
  { src: logo2, alt: "logo8" }
];

const ContactLogo = () => {
  return (
    <section className="contact-logo py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-3">
            <h2>
              Our <span>Clientele</span>
            </h2>
            <p>
            The team at WebGuruz is trusted by high-value businesses across the globe.
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

export default ContactLogo;
