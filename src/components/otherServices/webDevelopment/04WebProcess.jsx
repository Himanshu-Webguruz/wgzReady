import Image from "next/image";
import web1 from "../../../../public/images/webimages/web1.svg";
import web2 from "../../../../public/images/webimages/web2.svg";
import web3 from "../../../../public/images/webimages/web3.svg";
import web4 from "../../../../public/images/webimages/web4.svg";
import web5 from "../../../../public/images/webimages/web5.svg";
import web6 from "../../../../public/images/webimages/web6.svg";
import web7 from "../../../../public/images/webimages/web7.svg";

// Array of process steps
const processSteps = [
  { number: 1, image: web1, text: "Discovery & Planning" },
  { number: 2, image: web2, text: "Sprint 0: Project Initiation" },
  { number: 3, image: web3, text: "UI/UX Design, Development, QA" },
  { number: 4, image: web4, text: "User Acceptance Testing" },
  { number: 5, image: web5, text: "MVP/Soft Launch" },
  { number: 6, image: web6, text: "Launch" },
  { number: 7, image: web7, text: "Support" },
];

const WebProcess = () => {
  return (
    <section className="webdev-process">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h3>
              Our Custom Web Application <span>Development Process</span>
            </h3>
            <p className="mt-3 mb-4">
              From concept ideation to product development and launch in the
              market, we help you in every stage of the development lifecycle to
              build high-performing and scalable web applications.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <ul>
              {processSteps.map(({ number, image, text }) => (
                <li key={number}>
                  <div className="icon-content">
                    <span className="number">{number}</span>
                    <Image src={image} alt={`web${number}`} />
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebProcess;
