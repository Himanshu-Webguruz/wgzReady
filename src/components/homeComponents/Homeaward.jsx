
import Image from "next/image";
import awards from "../../../public/images/awards.webp";

const awardsData = [
  { src: awards, alt: "Award 1", text: "APPFUTURA" },
  { src: awards, alt: "Award 2", text: "TECH AWARD" },
  { src: awards, alt: "Award 3", text: "INNOVATION AWARD" },
  { src: awards, alt: "Award 4", text: "EXCELLENCE AWARD" },
  { src: awards, alt: "Award 5", text: "BEST DESIGN" },
  { src: awards, alt: "Award 6", text: "LEADERSHIP AWARD" },
];

const Homeaward = () => {
  return (
    <section className="award-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
            <h3>
              Award & <span>Recognition</span>
            </h3>
            <p>
              Using the latest technology and industry expertise, we built
              top-end Android and IOS-based applications that add value to the
              business and user experience.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <ul className="award-list">
              {awardsData.map((award, index) => (
                <li key={index}>
                  <Image src={award.src} alt={award.alt} />
                  <p>{award.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeaward;
