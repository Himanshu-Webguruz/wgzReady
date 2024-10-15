import Image from "next/image";
import logoppc from "../../../../public/images/HomeTechExpert/techexpert01.svg"
import logoppc2 from "../../../../public/images/HomeTechExpert/techexpert4.svg";
import logoppc3 from  "../../../../public/images/HomeTechExpert/techexpert13.svg";
import HubspotForm from "../hubspotDev/clientHubForm/HubspotForm";
import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const PpcServiceForm = () => {
 
  const points = [
    "Prover Expertise",
    "Result Oriented Approach",
    "Experienced Professionals",
    "Data-Driven Approach",
    // "Regular Campaign Reports",
  ];

  const logos = [logoppc, logoppc2, logoppc3]; // List of logo images

  return (
    <>
      <section className="ppcbannerservice py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              {/* <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2> */}

              <h2 className="color-wt">
              Realize the true potential of your website with our <span> expert SEO services!</span>
              </h2>
              <p className="color-wt">
              With over a decade of experience, WebGuruz helps businesses dominate search engines through strategic, results-oriented SEO services. Our innovative approaches ensure you stay ahead of the competition, no matter the industry.
              </p>
              <ul className="ppctab-main d-flex align-items-center">
                {points.map((point, index) => (
                  <li key={index} className="color-wt">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="logoimage-main d-flex align-items-center pt-4">
                {logos.map((logo, index) => (
                  <Image key={index} src={logo} alt="logoppc" />
                ))}
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 formppc boost-ranking hub-ranking">
              {/* <HubspotForm /> */}
              <WebdevForm/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcServiceForm;
