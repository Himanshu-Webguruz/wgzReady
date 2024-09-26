
import Image from "next/image";
import frontendimg from "/public/images/webimages/frontendimg.svg";
import backendimg from "/public/images/webimages/backendimg.svg";
import frontend1 from "/public/images/webimages/frontend1.svg";
import frontend2 from "/public/images/webimages/frontend2.svg";
import frontend3 from "/public/images/webimages/frontend3.svg";
import frontend4 from "/public/images/webimages/frontend4.svg";
import frontend5 from "/public/images/webimages/frontend5.svg";
import frontend6 from "/public/images/webimages/frontend6.svg";
import frontend7 from "/public/images/webimages/frontend7.svg";
import frontend8 from "/public/images/webimages/frontend8.svg";
import frontend9 from "/public/images/webimages/frontend9.svg";

// Array of frontend technologies
const frontendTech = [
  { image: frontend2, text: "React Js" },
  { image: frontend3, text: "Angular Js" },
  { image: frontend4, text: "Vue Js" },
  { image: frontend5, text: "Backbone Js" },
  { image: frontend6, text: "Node Js" },
  { image: frontend7, text: "Bootstrap" },
  { image: frontend8, text: "CSS" },
  { image: frontend9, text: "HTML" },
  { image: frontend2, text: "React Js" },
];

// Array of backend technologies (using the same tech for demonstration)
const backendTech = [
  { image: frontend9, text: "HTML" },
  { image: frontend2, text: "React Js" },
  { image: frontend3, text: "Angular Js" },
  { image: frontend5, text: "Backbone Js" },
  { image: frontend1, text: "HTML" },
  { image: frontend6, text: "Node Js" },
  { image: frontend7, text: "Bootstrap" },
  { image: frontend8, text: "CSS" },
  { image: frontend4, text: "Vue Js" },
]

const TechSection = ({ title, techList, imgSrc, imgAlt, textAlign }) => (
  <div className={`row align-items-center ${textAlign === "end" ? "reverse" : ""}`}>
    <div className="col-sm-6 col-xs-12 image">
      <p className={`text-${textAlign}`}>{title}</p>
      <Image src={imgSrc} alt={imgAlt} />
    </div>
    <div className="col-sm-6 col-xs-12 logoicon-img">
      <ul>
        {techList.map(({ image, text }, index) => (
          <li key={index}>
            <div className="image">
              <Image src={image} alt={text} />
            </div>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const WebScalable = () => {
  return (
    <section className="web-scalable py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
            <span>Web Development Frameworks</span> We Use
            </h2>
            <p>
            Our expertise in popular frameworks empowers us to deliver efficient and scalable solutions.
            </p>
          </div>
        </div>
        <TechSection
          title="Frontend Development Framework"
          techList={frontendTech}
          imgSrc={frontendimg}
          imgAlt="Frontend Development Framework"
          textAlign="start"
        />
        <TechSection
          title="Backend Development Framework"
          techList={backendTech}
          imgSrc={backendimg}
          imgAlt="Backend Development Framework"
          textAlign="end"
        />
      </div>
    </section>
  );
};

export default WebScalable;
