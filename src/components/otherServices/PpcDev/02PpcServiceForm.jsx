import Image from "next/image";
import logoppc from "../../../../public/images/ppcimages/ppcform1.svg";
import logoppc2 from "../../../../public/images/ppcimages/ppcform2.svg";
import logoppc3 from "../../../../public/images/ppcimages/ppcform3.svg";
import HubspotForm from "../hubspotDev/clientHubForm/HubspotForm";

const PpcServiceForm = ({ heading}) => {
  const points = [
    "Prover Expertise",
    "Result Oriented Approach",
    "Oriented",
    "Result Oriented Approach",
    "Result Oriented",
  ];

  const logos = [logoppc, logoppc2, logoppc3]; // List of logo images

  return (
    <>
      <section className="ppcbannerservice py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 ppcservicecontent heading-main">
              <h3 className="color-wt">
                {heading} <span>– Scale Your Business</span>
              </h3>
              <p className="color-wt">
                Gain brand exposure, attract more users, and boost sales. Get
                top-class pay per click management services that power your
                marketing strategies and brand-building efforts.
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
            <div className="col-sm-6 col-xs-12 formppc">
              <HubspotForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcServiceForm;
