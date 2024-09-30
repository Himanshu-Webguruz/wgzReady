import CreativePortfolio from "./00PpcSliderService";

const PpcServicesOffer = () => {
  return (
    <>
      <section className="ppc-cater pt-5 position-relative">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-3 col-xs-12 heading-main">
              <h2>
                Industries We Cater to With Our <span>PPC Services</span>
              </h2>
              <p>
                Cost-effective and measurable - PPC marketing is a powerful way
                to instantly improve your online visibility. Our result-driven
                PPC service in India ensures that you get the highest returns
                out of your campaigns.{" "}
              </p>
              <button className="explore-btn">View All</button>
            </div>
            <div className="col-sm-9 col-xs-12 ppc-slider">
              <CreativePortfolio />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcServicesOffer;
