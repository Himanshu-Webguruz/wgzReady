"use client"
import React from 'react';
import CountUp from 'react-countup';

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
              <CountUp start={0} end={16} duration={2} suffix="+"/>
              <p>Years of Excellence</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <CountUp start={0} end={5} duration={2} suffix="M+" />
              <p>Keywords Ranked</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <CountUp start={0} end={1700} duration={2} suffix="+"  separator="" />
              <p>Successful Projects</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
              <CountUp start={0} end={100} duration={2}  suffix="+" />
              <p>Digital Experts</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterHome;