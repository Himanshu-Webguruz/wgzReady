import Image from "next/image";

import ppcserviceone from "../../../../public/images/ppcimages/ppc-service-1.svg";
import ppcservicetwo from "../../../../public/images/ppcimages/ppc-service-2.svg";
import ppcservicethree from "../../../../public/images/ppcimages/ppc-service-3.svg";
import ppcservicefour from "../../../../public/images/ppcimages/ppc-service-4.svg";
import ppcservicefive from "../../../../public/images/ppcimages/ppc-service-5.svg";
import ppcservicesix from "../../../../public/images/ppcimages/ppc-service-6.svg";

const services = [
  {
    src: ppcservicetwo,
    title: "Search Advertising",
    description:
      "Search ads appear to prospects searching for products/services you offer, and generate high-quality leads.",
  },
  {
    src: ppcservicethree,
    title: "Display Advertising",
    description:
      "Display ads are good for branding / awareness and remarketing through images, banners, creative copies, etc., that appear on display ad networks.",
  },
  {
    src: ppcservicefour,
    title: "Social Media Advertising",
    description:
      "Social media platforms offer excellent targeting capabilities, which bolsters your overall marketing strategy and even drives sales.",
  },
  {
    src: ppcservicefive,
    title: "Display Advertising",
    description:
      "Display ads are good for branding / awareness and remarketing through images, banners, creative copies, etc., that appear on display ad networks.",
  },
  {
    src: ppcservicesix,
    title: "Social Media Advertising",
    description:
      "Social media platforms offer excellent targeting capabilities, which bolsters your overall marketing strategy and even drives sales.",
  },
  {
    src: ppcserviceone,
    title: "Social Media Advertising",
    description:
      "Social media platforms offer excellent targeting capabilities, which bolsters your overall marketing strategy and even drives sales.",
  },
];

const PpcAdvertising = () => {
  return (
    <>
      <section className="ppcadvertising py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h2>
                <span>PPC Advertising</span> Service In India
              </h2>
              <span className="mb-2 d-inline-block">Here’s a list of our pay-per-click marketing services in India:
              </span>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-sm-4 col-xs-12 mb-4">
                <div className="adverticingcard text-center">
                  <Image src={service.src} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcAdvertising;
