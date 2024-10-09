import Image from "next/image";
import logoppc from "../../../../public/images/ppcimages/ppcform1.svg";
import logoppc2 from "../../../../public/images/ppcimages/ppcform2.svg";
import logoppc3 from "../../../../public/images/ppcimages/ppcform3.svg";
import HubspotForm from "../hubspotDev/clientHubForm/HubspotForm";
import WebdevForm from "@/utils/formsHubspot/Webdeveform";

const PpcServiceForm = ({ heading,subHeading}) => {
  const points = [
    "Prover Expertise",
    "Result Oriented Approach",
    "Strategic Ad Campaigns",
    "In-Depth Keyword Discovery",
    "Regular Campaign Reports",
  ];

  const logos = [logoppc, logoppc2, logoppc3]; // List of logo images

  return (
    <>
      <section className="ppcbannerservice py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h2 className="color-wt">
                {heading} <span>{subHeading}</span>
              </h2>
              <p className="color-wt">
              We understand that each click is a potential customer. Our tailored PPC campaigns are designed to maximize your advertising budget while delivering exceptional returns.
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
