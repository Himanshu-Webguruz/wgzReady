import Image from "next/image";
import semrush from "../../../public/images/serviceImages/toolsservice/semrush.webp";
import ahref from "../../../public/images/serviceImages/toolsservice/ahrefs.webp";
import buffer from "../../../public/images/serviceImages/toolsservice/buffer.webp";
import googleanalyse from "../../../public/images/serviceImages/toolsservice/google-analytic.webp";
import googlesearch from "../../../public/images/serviceImages/toolsservice/google-search-console.webp";
import hoots from "../../../public/images/serviceImages/toolsservice/hootsuite.webp";
import mail from "../../../public/images/serviceImages/toolsservice/mailchimp.webp";
import hubspot from "../../../public/images/serviceImages/toolsservice/hubspot.webp";

// Array of tools
const tools = [
  { image: googleanalyse, alt: "rankmath", name: "Google Analytics" },
  { image: googlesearch, alt: "google seach", name: "Google Search Console" },
  { image: semrush, alt: "semrush", name: "Semrush" },
  { image: ahref, alt: "ahref", name: "Ahrefs" },
  { image: hoots, alt: "mozpro", name: "Hootsuite" },
  { image: buffer, alt: "buffer", name: "Buffer" },
  { image: mail, alt: "Mailchimp", name: "Mailchimp" },
  { image: hubspot, alt: "HubSpot", name: "HubSpot" },
];

const ServiceTools = () => {
  return (
    <section className="tools-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h2>
              <span className="d-inline-block">Harnessing the Latest </span> Digital Marketing Tools For
              Your Brand
            </h2>
            <span className="pt-2 pb-3 para">
              As a leading digital marketing company, we leverage the latest
              digital marketing tools to deliver effective results. Our toolset
              includes:
            </span>
            <ul className="toolsicon-list d-flex align-items-center">
              {tools.map((tool, index) => (
                <li key={index}>
                  <Image src={tool.image} alt={tool.alt} />
                  <p className="mb-0 pt-2">{tool.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTools;
