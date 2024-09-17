import Image from "next/image";
import semrush from "../../../public/images/serviceImages/toolsservice/semrush.svg";
import hubspot from "../../../public/images/serviceImages/toolsservice/hubspot.svg";
import alexa from "../../../public/images/serviceImages/toolsservice/Alexa-logo.svg";
import graph from "../../../public/images/serviceImages/toolsservice/sps-vertical.svg";
import robot from "../../../public/images/serviceImages/toolsservice/sitecheckup.svg";
import fire from "../../../public/images/serviceImages/toolsservice/fire.svg";
import rankmath from "../../../public/images/serviceImages/toolsservice/rank-math-logo.svg";
import mojpro from "../../../public/images/serviceImages/toolsservice/mojpro.svg";
import surfer from "../../../public/images/serviceImages/toolsservice/surfer.svg";
import keywordtool from "../../../public/images/serviceImages/toolsservice/keyword-tool.svg";
import seooptimize from "../../../public/images/serviceImages/toolsservice/seo-optimize.svg";
import clickdata from "../../../public/images/serviceImages/toolsservice/clickdata.svg";
import channable from "../../../public/images/serviceImages/toolsservice/channable.svg";

// Array of tools
const tools = [
  { image: semrush, alt: "semrush", name: "Semrush" },
  { image: graph, alt: "graph", name: "SEO PowerSuite" },
  { image: fire, alt: "justuno", name: "Justuno" },
  { image: robot, alt: "robot", name: "SEO Site Checkup" },
  { image: mojpro, alt: "mozpro", name: "Moz Pro" },
  { image: surfer, alt: "block", name: "Surfer" },
  { image: rankmath, alt: "rankmath", name: "Rank Math" },
  { image: robot, alt: "marketgoo", name: "Marketgoo" },
  { image: keywordtool, alt: "keywordtool", name: "Keyword Tool" },
  { image: alexa, alt: "alexa", name: "Alexa" },
  { image: hubspot, alt: "hubspot", name: "Hubspot" },
  { image: seooptimize, alt: "seoptimer", name: "SEOptimer" },
  { image: clickdata, alt: "clicdata", name: "Clicdata" },
  { image: channable, alt: "channable", name: "Channable" },
];

const ServiceTools = () => {
  return (
    <section className="tools-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h3>
              <span>Digital Marketing</span> Tools We Use
            </h3>
            <p className="pt-2 pb-3">
              As a renowned digital marketing company, we utilize
              top-of-the-line tools to design an inbound marketing plan for our
              customers. Our customized strategies and tools ensure we deliver
              the best results to meet the client&apos;s requirements.
            </p>
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
