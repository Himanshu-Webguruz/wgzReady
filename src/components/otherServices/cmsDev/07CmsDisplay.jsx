
import {
  HealthCareIcon,
  FinanceIcon,
  EcommerceIcon,
  RestaurantIcon,
  TravelIcon,
  EntertainmentIcon,
  HealthCare,
  Finance,
  Ecommerce,
  Restaurant,
  Travel,
  Entertainment,
} from "../../../utils/SVGIcons";

const customizeContent = [
  { Icon: HealthCareIcon, title: "HealthCare" },
  { Icon: FinanceIcon, title: "Finance" },
  { Icon: EcommerceIcon, title: "Ecommerce" },
  { Icon: RestaurantIcon, title: "Restaurant" },
  { Icon: TravelIcon, title: "Travel" },
  { Icon: EntertainmentIcon, title: "Entertainment" },
  { Icon: HealthCare, title: "HealthCare" },
  { Icon: Finance, title: "Finance" },
  { Icon: Ecommerce, title: "Ecommerce" },
  { Icon: Restaurant, title: "Restaurant" },
  { Icon: Restaurant, title: "Restaurant" },
  { Icon: Restaurant, title: "Restaurant" },
  { Icon: Travel, title: "Travel" },
  { Icon: Entertainment, title: "Entertainment" },
  { Icon: Entertainment, title: "Entertainment" },
  { Icon: Entertainment, title: "Entertainment" },
  { Icon: Entertainment, title: "Entertainment" },
  { Icon: Entertainment, title: "Entertainment" },
];

const CmsDisplay = () => {
  return (
    <>
      <section className="cmsdisplay py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h3>
                Drupal Development Expertise In{" "}
                <span>Different Industries</span>
              </h3>
              <p>
                From concept ideation to product development and launch in the
                market, we help you in every stage of the development lifecycle
                to build high-performing and scalable web applications.
              </p>
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
    </>
  );
};

export default CmsDisplay;
