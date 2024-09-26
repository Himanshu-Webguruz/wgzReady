import SlotCounter from "react-slot-counter";

const CounterHome = () => {
  return (
    <section className="counter-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
              We Are Your <span>Digital Partner for Growth</span>
            </h2>
            <p className="my-3">Transforming Ideas into Online Success</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["1", "6", "+"]} />
              <p>Years of Excellence</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["5", "M", "+"]} />
              <p>Keywords Ranked</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["1", "7", "0", "0", "+"]} />
              <p>Successful Projects</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <SlotCounter value={["1", "0", "0", "+"]} />
              <p>Digital Experts</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterHome;
