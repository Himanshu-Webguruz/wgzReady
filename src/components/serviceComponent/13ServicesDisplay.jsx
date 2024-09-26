import SlotCounter from "react-slot-counter";

const ServicesDisplay = () => {
  return (
    <section className="counter-main service-counter py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-1">
            <h2>
              Our <span>Expertise</span>
            </h2>
            <span>Work with the Best Digital Marketing Agency in Chandigarh</span>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["2", "3", "0", "0", "+"]} />
              <p>Projects Launched</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["5", "0", "+"]} />
              <p>Experienced Marketers</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["1", "6", "+"]} />
              <p>Years of Expertise</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["9", "6", "%"]} />
              <p>Client Retention Rate</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDisplay;
