"use client";
import React from 'react';
import CountUp from 'react-countup';

const CounterHome = () => {
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
          <div className="col-sm-4 col-xs-12 counter-sub text-center hub-counting">
            <label>
              <CountUp start={0} end={16} duration={2} suffix="+" />
              <h3>Years of Excellence</h3>
              <p>Our extensive experience ensures that we deliver cutting-edge solutions tailored to your unique needs.</p>
            </label>
          </div>
          <div className="col-sm-4 col-xs-12 counter-sub text-center hub-counting">
            <label>
              <CountUp start={0} end={50} duration={2} suffix="M+" />
              <h3>Keywords Ranked</h3>
              <p>Our team of skilled professionals brings a diverse range of expertise to every project.</p>
            </label>
          </div>
          <div className="col-sm-4 col-xs-12 counter-sub text-center hub-counting">
            <label>
              <CountUp start={0} end={1500} duration={2} suffix="+" separator="" />
              <h3>Successful Projects</h3>
              <p>We&apos;ve helped countless businesses achieve their online goals through our proven track record.</p>
            </label>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default CounterHome;
