import Image from "next/image";
import Drpl from "../../../../public/images/drupalimg/drpl.png";

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
                <h3>
                  Drupal Development <span>Solutions</span>
                </h3>
                <p>
                  Proin euismod dictum facilisis. Donec nulla orci, suscipit ac
                  venenatis sit amet, cursus vitae ligula.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ddrpl">
                <Image src={Drpl} className="img-fluid" alt="Drupal Development Solutions" />
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
