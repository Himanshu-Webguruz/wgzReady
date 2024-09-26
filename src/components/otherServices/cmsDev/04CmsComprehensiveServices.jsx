import Image from "next/image";
import Drp1 from "../../../../public/images/drupalimg/cms-dev1.svg";
import Drp2 from "../../../../public/images/drupalimg/cms-dev2.svg";
import Drp3 from "../../../../public/images/drupalimg/cms-dev3.svg";

// Array to store comprehensive service data
const drupalComprehensiveServices = [
  {
    image:Drp1,
    title: "CMS 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    image:Drp2,
    title: "CMS 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    image:Drp3,
    title: "CMS 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    image:Drp1,
    title: "CMS 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    image:Drp2,
    title: "CMS 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    image:Drp3,
    title: "CMS 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
];

const CmsComprehensiveServices = () => {
  return (
    <>
      <section className="comprhsvprt py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                  Our Comprehensive CMS <span>Development Services</span>
                </h2>
                <span className="d-inline-block mb-3">
                  Proin euismod dictum facilisis. Donec nulla orci, suscipit ac
                  venenatis sit amet, cursus vitae ligula.
                </span>
              </div>

              <div className="cmssct">
                {drupalComprehensiveServices.map((service, index) => (
                  <div className="cmssctinr" key={index}>
                    <div className="cmslimg">
                      <Image src={service.image} className="img-fluid" alt={service.title} />
                    </div>
                    <div className="cmslcnt">
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
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

export default CmsComprehensiveServices;
