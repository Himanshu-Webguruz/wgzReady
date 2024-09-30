"use client"
import React from 'react';
import CountUp from 'react-countup';

const HubServiceDisplay = () => {
  return (
    <section className="counter-main service-counter hubspot-counting py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-0">
            <h2>
            Partner with the Experts in <span>Hubspot Development</span>
            </h2>
            <p>Discover how HubSpot can transform your business with its powerful features and capabilities. Backed by a team of over 40 HubSpot experts and a proven track record of success, we&apos;ve helped countless businesses achieve significant growth and ROI.</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <label>
              <CountUp start={0} end={80} duration={2} suffix="+"   separator="" />
              <p>Hubspot Clients</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <CountUp start={0} end={40} duration={2} suffix="+"   separator="" />
              <p> Hubspot Experts</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <CountUp start={0} end={30} duration={2} suffix="%"   separator="" />
              <p>Increase in HubSpot Campaign Efficiency</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubServiceDisplay;
