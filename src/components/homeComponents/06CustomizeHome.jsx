import {
  ecom1,
  Healthy1,
  education1,
  finance1,
  techno1,
  RealEstate,
  Manufacturing,
  Retail,
  Hospitality,
  Travel,
  NonProfit,
  Government,
  ConsultMe,
  Entertainment,
  Media,
  Legal,
  Construction,
  Automotive,
} from "../../utils/SVGIcons";

const customizeContent = [
  { Icon: ecom1, title: "E-Commerce" },
  { Icon: Healthy1, title: "Healthcare" },
  { Icon: education1, title: "Education" },
  { Icon: finance1, title: "Finance" },
  { Icon: techno1, title: "Technology" },
  { Icon: RealEstate, title: "Real Estate" },
  { Icon: Manufacturing, title: "Manufacturing" },
  { Icon: Retail, title: "Retail" },
  { Icon: Hospitality, title: "Hospitality" },
  { Icon: Travel, title: "Travel" },
  { Icon: NonProfit, title: "Non-profit" },
  { Icon: Government, title: "Government" },
  { Icon: ConsultMe, title: "Consulting" },
  { Icon: Entertainment, title: "Entertainment" },
  { Icon: Media, title: "Media" },
  { Icon: Legal, title: "Legal" },
  { Icon: Construction, title: "Construction" },
  { Icon: Automotive, title: "Automotive" },
];

const CustomizeHome = ({heading,paragraph,subheading}) => {
  return (
    <section className="customized-approach">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
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
