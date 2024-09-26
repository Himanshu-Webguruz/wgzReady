import Image from "next/image";
import Drpl from "../../../../public/images/drupalimg/cmsdevsol.svg";

// Array to store Drupal solution data
const drupalSolutions = [
  {
    number: "1",
    title: "Customized Website Solutions",
    description: "Our HubSpot CMS development creates fully customized websites tailored to your brand and goals.",
  },
  {
    number: "2",
    title: "Customized Website Solutions",
    description: "Our HubSpot CMS development creates fully customized websites tailored to your brand and goals.",
  },
  {
    number: "3",
    title: "Customized Website Solutions",
    description: "Our HubSpot CMS development creates fully customized websites tailored to your brand and goals.",
  },
  {
    number: "4",
    title: "Customized Website Solutions",
    description: "Our HubSpot CMS development creates fully customized websites tailored to your brand and goals.",
  },
];

const CmsWebSolution = () => {
  return (
    <>
      <section className="drplscl1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  CMS Development <span>Solutions</span>
                </h2>
                <span className="mb-2 d-inline-block">
                  Proin euismod dictum facilisis. Donec nulla orci, suscipit ac
                  venenatis sit amet, cursus vitae ligula.
                </span>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ddrpl">
                <Image src={Drpl} className="img-fluid" alt="CMS Development Solutions" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="cmsrgt right">
                {drupalSolutions.map((solution, index) => (
                  <div className="cmsrgtinr left" key={index}>
                    <div className="cmsnmbr">
                      <span className="nmbr">{solution.number}</span>
                    </div>
                    <h5>{solution.title}</h5>
                    <p>{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsWebSolution;
