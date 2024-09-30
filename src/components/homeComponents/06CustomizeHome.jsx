import {
  ecom1,
  Healthy1,
  education1,
  finance1,
  techno1,
  RealEstate,
  Retail,
  Hospitality,
  NonProfit,
  ConsultMe,
  Legal,
  Automotive,
} from "../../utils/SVGIcons";

const customizeContent = [
  { Icon: ecom1, title: "E-Commerce" },
  { Icon: Healthy1, title: "Healthcare" },
  { Icon: education1, title: "Education" },
  { Icon: finance1, title: "Finance" },
  { Icon: techno1, title: "Technology" },
  { Icon: RealEstate, title: "Real Estate" },
  { Icon: Retail, title: "Retail" },
  { Icon: Hospitality, title: "Hospitality" },
  { Icon: NonProfit, title: "Non-profit" },
  { Icon: ConsultMe, title: "Consulting" },
  { Icon: Legal, title: "Legal" },
  { Icon: Automotive, title: "Automotive" },
];

const CustomizeHome = ({heading,paragraph,subheading}) => {
  return (
    <section className="customized-approach">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-2">
            <h2>
            {heading} <span>{subheading}</span>
            </h2>
            <p>{paragraph}</p>
          </div>
        </div>

        <div className="row diverse-main px-2">
          {customizeContent.map(({ Icon, title }, index) => (
            <div className="col col-xs-12" key={index}>
              <div className="icon-content text-center">
                <Icon />
                <p className="text-center">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizeHome;
