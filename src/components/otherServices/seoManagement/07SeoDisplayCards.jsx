"use client"
import React from 'react';
import CountUp from 'react-countup';

const SeoDisplayCards = () => {
  return (
    <section className="counter-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
            <h2>
              Our <span>Work</span>
            </h2>
            <p>
              Lorem simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been thestandard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
             <CountUp start={0} end={16} duration={2} suffix="+"   separator="" />
              <p>Years of Experience</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            <CountUp start={0} end={1000} duration={2} suffix="+"   separator="" />
              <p>Case Studies</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            <CountUp start={0} end={5} duration={2} suffix="M+"   separator="" />
              <p>Keywords Ranked</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            <CountUp start={0} end={5} duration={2} suffix="K+"   separator="" />

              <p>Reviews</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoDisplayCards;
