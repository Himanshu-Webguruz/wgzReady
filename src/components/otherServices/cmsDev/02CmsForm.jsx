import Image from "next/image";
import icn1 from "../../../../public/images/drupalimg/d1.svg";
import icn2 from "../../../../public/images/drupalimg/d2.svg";
import icn3 from "../../../../public/images/drupalimg/d3.svg";
import icn4 from "../../../../public/images/drupalimg/d4.svg";
import icn5 from "../../../../public/images/drupalimg/d5.svg";
import cl1 from "../../../../public/images/drupalimg/cl1.png";
import cl2 from "../../../../public/images/drupalimg/cl2.png";
import cl3 from "../../../../public/images/drupalimg/cl3.png";
import cl4 from "../../../../public/images/drupalimg/cl4.png";
import cl5 from "../../../../public/images/drupalimg/cl5.png";
import HubspotForm from "../hubspotDev/clientHubForm/HubspotForm";

// Data arrays for development options and client logos
const devOptions = [
  { icon: icn1, text: "CMS 8 Development" },
  { icon: icn2, text: "CMS 10 Development" },
  { icon: icn3, text: "CMS UI/UX" },
  { icon: icn4, text: "CMS Theme Development" },
  { icon: icn5, text: "CMS Migration" },
];

const clientLogos = [cl1, cl2, cl3, cl4, cl5];

const CmsForm = () => {
  return (
    <>
      <section className="scrfrm py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="heading-main">
                <h2 className="text-white">
                  <strong>
                  Your Trusted CMS Web Development Partner
                  </strong>
                </h2>
                <p className="text-white">
                We are dedicated to crafting innovative content management systems that cater to your unique needs. With a team of expert developers and designers, we bring your vision to life, ensuring your platform is robust, scalable, and user-friendly.
                </p>
              </div>
              <div className="drpldvlpmnt">
                <ul>
                  {devOptions.map((option, index) => (
                    <li key={index}>
                        <Image src={option.icon} className="img-fluid"  alt="Image" />
                        <p>{option.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cltchmg">
                <ul>
                  {clientLogos.map((logo, index) => (
                    <li key={index}>
                      <div className="climg">
                        <Image src={logo} className="img-fluid"  alt="Image" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <HubspotForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsForm;
