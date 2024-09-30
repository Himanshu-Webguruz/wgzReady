"use client"
import React from 'react';
import CountUp from 'react-countup';

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
            <CountUp start={0} end={2300} duration={2} suffix="+"   separator="" />
              <p>Projects Launched</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            <CountUp start={0} end={50} duration={2} suffix="+"/>
              <p>Experienced Marketers</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            <CountUp start={0} end={16} duration={2} suffix="+"/>
              <p>Years of Expertise</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            <CountUp start={0} end={96} duration={2} suffix="%"/>
              <p>Client Retention Rate</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDisplay;
