import Image from "next/image";
import promintimg from "../../../../public/images/drupalimg/prmnt.png";

// Array for features of the Drupal web development partner
const features = [
  {
    title: "Higher Quality",
    description:
      "With superior CMS development services, our experts deliver qualitatively rich and quantifiable viable solutions for all types of industry domains.",
  },
  {
    title: "Competitive Costs",
    description:
      "Get real value for your investment with fair-priced CMS website development services that are strategized by their reliability, stability, and robustness.",
  },
  {
    title: "Proven Methodologies",
    description:
      "As an experienced CMS consultant, we combine innovation with tried and tested methodologies that equip you with the required expertise to stay competitive.",
  },
  {
    title: "Flexibility",
    description:
      "Using the flexibility of the CMS platform, we create all kinds of web solutions, including blogs, business websites, and even a network of several sites.",
  },
];

function ProminentPrtnr() {
  return (
    <section className="prminentprt py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h3>
                What Makes Us a Prominent CMS Web
                <br />
                <span>Development Partner?</span>
              </h3>
              <p>
                With our expertise, customized solutions, and ongoing support,
                we help you
                <br />
                create a powerful online presence that drives results.
              </p>
            </div>

            <div className="hquality d-flex flex-wrap">
              <div className="hqualitinr ctnt">
                <div className="hqlt">
                  {features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="hqltinr">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hqualitinr imgc">
                <div className="prmntmg">
                  <Image
                    src={promintimg}
                    className="img-fluid"
                    alt="Prominent Drupal Partner"
                  />
                </div>
              </div>

              <div className="hqualitinr ctnt">
                <div className="hqlt">
                  {features.slice(2).map((feature, index) => (
                    <div key={index} className="hqltinr">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProminentPrtnr;
