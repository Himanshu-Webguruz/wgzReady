import Image from "next/image";
import semrush from "../../../public/images/serviceImages/semrush.png";
import hubspot from "../../../public/images/serviceImages/hubspot.png";
import alexa from "../../../public/images/serviceImages/alexa.png";
import graph from "../../../public/images/serviceImages/graph.png";
import robot from "../../../public/images/serviceImages/robot.png";
import fire from "../../../public/images/serviceImages/fire.png";
import block from "../../../public/images/serviceImages/block.png";

// Array of tools
const tools = [
  { image: semrush, alt: "semrush", name: "Semrush" },
  { image: graph, alt: "graph", name: "SEO PowerSuite" },
  { image: fire, alt: "justuno", name: "Justuno" },
  { image: robot, alt: "robot", name: "SEO Site Checkup" },
  { image: fire, alt: "mozpro", name: "Moz Pro" },
  { image: block, alt: "block", name: "Surfer" },
  { image: fire, alt: "rankmath", name: "Rank Math" },
  { image: graph, alt: "marketgoo", name: "Marketgoo" },
  { image: robot, alt: "keywordtool", name: "Keyword Tool" },
  { image: alexa, alt: "alexa", name: "Alexa" },
  { image: hubspot, alt: "hubspot", name: "Hubspot" },
  { image: fire, alt: "seoptimer", name: "SEOptimer" },
  { image: fire, alt: "clicdata", name: "Clicdata" },
  { image: fire, alt: "channable", name: "Channable" },
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
