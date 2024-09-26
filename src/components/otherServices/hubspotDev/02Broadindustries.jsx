

import Image from "next/image";
import Icnbroad1 from "../../../../public/images/hubspotimages/fintech.svg";
import Icnbroad2 from "../../../../public/images/hubspotimages/retail-ecoomerce.svg";
import Icnbroad3 from "../../../../public/images/hubspotimages/healthcare.svg";
import Icnbroad4 from "../../../../public/images/hubspotimages/educaate.svg";

function Broadindustries() {
  const industries = [
    {
      img: Icnbroad1,
      title: "Technology.",
      description:
        "Drive lead generation, nurture leads, and close deals more effectively with HubSpot's sales and marketing tools.",
    },
    {
      img: Icnbroad2,
      title: "E-commerce.",
      description:
        "Boost online sales and improve customer experiences with HubSpot's marketing automation and CRM features.",
    },
    {
      img: Icnbroad3,
      title: "Healthcare.",
      description:
        "Enhance patient satisfaction and streamline operations with HubSpot's patient management tools.",
    },
    {
      img: Icnbroad4,
      title: "Education.",
      description:
        "Engage students, streamline enrollment, and improve campus operations with HubSpot's education-specific solutions.",
    },
  ];

  return (
    <section id="brdindstries">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <div className="heading-main">
              <h2>
              Solutions for a 
                <span>Broad Range of Industries</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="brdighdtxt">
              <span>
              Our Hubspot solutions cater to a wide range of industries including, but not limited to:
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="indrngserv">
              {industries.map((industry, index) => (
                <div className="indrngservinnr" key={index}>
                  <div className="indrngservimg">
                    <Image
                      src={industry.img}
                      className="img-fluid"
                      alt={industry.title}
                    />
                  </div>
                  <div className="indrngservcnnct">
                    <h5>{industry.title}</h5>
                    <p>{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Broadindustries;
