"use client";
import SlotCounter from "react-slot-counter";

const DevBusiness = () => {
  const counters = [
    {
      value: ["1", "6", "+"],
      label: "Years of Excellence",
      description:
        "Our extensive experience ensures that we deliver cutting-edge solutions tailored to your unique needs.",
    },
    {
      value: ["5", "0", "+"],
      label: "Talented Developers",
      description:
        "Our team of skilled professionals brings a diverse range of expertise to every project.",
    },
    {
      value: ["1", "5", "0", "0", "+"],
      label: "Successful Projects",
      description:
        "We've helped countless businesses achieve their online goals through our proven track record.",
    },
  ];

  return (
    <section className="devbusiness pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
            <h2>
              Expedite Business Growth with{" "}
              <span>Our Expert Web Development Services</span>
            </h2>
            <span className="d-inline-block mb-3">
              From concept to execution, we&apos;re your trusted partner for
              innovative web solutions.
            </span>
          </div>
        </div>
        <div className="row counter-min">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="col-sm-4 col-xs-12 counter-sub text-center hub-counting"
            >
              <SlotCounter value={counter.value} />
              <h5>{counter.label}</h5>
              <p>{counter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevBusiness;
