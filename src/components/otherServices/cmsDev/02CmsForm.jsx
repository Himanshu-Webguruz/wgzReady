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
  { icon: icn1, text: "Drupal 8 Development" },
  { icon: icn2, text: "Drupal 10 Development" },
  { icon: icn3, text: "Drupal UI/UX" },
  { icon: icn4, text: "Drupal Theme Development" },
  { icon: icn5, text: "Drupal Migration" },
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
                <h3 className="text-white">
                  <strong>
                    Get Secure and Flexible Solutions with Drupal Development
                    Company
                  </strong>
                </h3>
                <p className="text-white">
                  Leverage OrangeMantra expertise to get a customised solution.
                  Our Drupal development services offer an end-to-end solution
                  for your every need.
                </p>
              </div>
              <div className="drpldvlpmnt">
                <ul>
                  {devOptions.map((option, index) => (
                    <li key={index}>
                      <a href="#">
                        <Image src={option.icon} className="img-fluid"  alt="Image" />
                        {option.text}
                      </a>
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
