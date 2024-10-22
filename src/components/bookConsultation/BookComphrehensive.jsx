import Image from "next/image";
// import Drp1 from "../../../../public/images/drupalimg/cms-dev1.svg";
// import Drp2 from "../../../../public/images/drupalimg/cms-dev2.svg";
// import Drp3 from "../../../../public/images/drupalimg/cms-dev3.svg";
import userfriendly from "/public/images/drupalimg/newImages/user-friendly.svg"
import scalability from "/public/images/drupalimg/newImages/scalability.svg"
import analytics from "/public/images/drupalimg/newImages/analytics.svg"
import efficiency from "/public/images/drupalimg/newImages/efficiency.svg"
import seo from "/public/images/drupalimg/newImages/seo.svg"
import security from "/public/images/drupalimg/newImages/security.svg"

// Array to store comprehensive service data
const drupalComprehensiveServices = [
  {
    image:userfriendly,
    title: "User-Friendly Interface",
    description: "WebGuruz delivers CMS solutions with a simple interface, making it easy for you to manage and update your website’s content effortlessly, even if you have no technical background.",
    alt:"User-Friendly Interface Icon"
  },
  {
    image:scalability,
    title: "Scalability",
    description: "Our CMS platforms are built to grow with your business. WebGuruz ensures your system adapts seamlessly to increased traffic, new features, and evolving needs, supporting your future expansion.",
    alt:"Scalability Icon"
  },
  {
    image:security,
    title: "Security Features",
    description: "At WebGuruz, we prioritize your website’s security. Our CMS solutions come with robust protection features, safeguarding your data and ensuring your website is always secure from online threats.",
    alt:"Security Features Icon"
  },
  {
    image:seo,
    title: "SEO Optimization",
    description: "We provide CMS solutions that are optimized for search engines, helping your website rank higher, drive more traffic, and improve visibility, so your business gets noticed online.",
    alt:"SEO Optimization Icon"
  },
  {
    image:efficiency,
    title: "Cost Efficiency",
    description: "WebGuruz offers cost-effective CMS solutions, saving you money on development and maintenance. You get a powerful, easy-to-manage system without the high costs of traditional website management.",
    alt:"Cost Efficiency Icon"
  },
  {
    image:analytics,
    title: "Analytics and Reporting",
    description: "Gain insights into your website’s performance with our built-in analytics and reporting tools. WebGuruz’s CMS solutions provide actionable data to help you make informed business decisions.",
    alt:"Analytics and Reporting Icon"
  },
];

const BookComphrehensive = () => {
  return (
    <>
      <section className="comprhsvprt py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="heading-main text-center">
                <h2>
                Empower Your Website with <span>CMS Solutions</span>
                </h2>
                <span className="d-inline-block mb-3">
                Build, Edit & Manage with Ease with tailored CMS solutions for your business growth.
                </span>
              </div>

              <div className="cmssct">
                {drupalComprehensiveServices.map((service, index) => (
                  <div className="cmssctinr" key={index}>
                    <div className="cmslimg">
                      <Image src={service.image} className="img-fluid" alt={service.alt} />
                    </div>
                    <div className="cmslcnt">
                      <h3>{service.title}</h3>
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

export default BookComphrehensive;
