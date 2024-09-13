import Image from "next/image";
import Drp1 from "../../../../public/images/drupalimg/drp1.png";

// Array to store comprehensive service data
const drupalComprehensiveServices = [
  {
    title: "Drupal 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    title: "Drupal 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    title: "Drupal 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    title: "Drupal 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    title: "Drupal 9 Development",
    description: "From payment processing to investing and beyond, mobile app services make it easier than ever to access financial services on the go.",
  },
  {
    title: "Drupal 9 Development",
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
                <h3>
                  Our Comprehensive Drupal <span>Development Services</span>
                </h3>
                <p>
                  Proin euismod dictum facilisis. Donec nulla orci, suscipit ac
                  venenatis sit amet, cursus vitae ligula.
                </p>
              </div>

              <div className="cmssct">
                {drupalComprehensiveServices.map((service, index) => (
                  <div className="cmssctinr" key={index}>
                    <div className="cmslimg">
                      <Image src={Drp1} className="img-fluid" alt={service.title} />
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
