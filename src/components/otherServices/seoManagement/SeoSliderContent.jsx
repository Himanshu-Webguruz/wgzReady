import SwiperSlider from "./SeoSlider";

const SeoSliderContent = () => {
  return (
    <div>
      <section className="seomangement py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-3">
              <h2>
                Our Standard <span>SEO Process</span>
              </h2>
              <span className="d-inline-block mb-3">
                We Follow Certain Steps To Provide High-QualitySmall Business
                SEO Services.
              </span>
            </div>
            <SwiperSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoSliderContent;
