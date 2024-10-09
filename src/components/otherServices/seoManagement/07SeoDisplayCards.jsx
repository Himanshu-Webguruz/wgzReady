"use client";
import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const SeoDisplayCards = () => {
  const [inView, setInView] = useState(false); // State to track if the component is in view
  const counterRef = useRef(null); // Ref to target the counter section

  useEffect(() => {
    const refValue = counterRef.current; // Store the ref value in a variable

    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true); // Set to true when component is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (refValue) {
      observer.observe(refValue); // Start observing
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue); // Clean up observer on unmount
      }
    };
  }, []);
  return (
    <section className="counter-main py-5" ref={counterRef}>
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
            {inView ? (
             <CountUp start={0} end={16} duration={2} suffix="+"   separator="" />
            ) : (
              <span>1+</span>
            )}
              <p>Years of Experience</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            {inView ? (
            <CountUp start={0} end={1000} duration={1} suffix="+"   separator="" />
          ) : (
                <span>1+</span>
              )}
              <p>Case Studies</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            {inView ? (
            <CountUp start={0} end={5} duration={2} suffix="M+"   separator="" />
          ) : (
                <span>1M+</span>
              )}
              <p>Keywords Ranked</p>
            </label>
          </div>
          <div className="col col-xs-12">
            <label>
            {inView ? (
            <CountUp start={0} end={5} duration={2} suffix="K+"   separator="" />
          ) : (
                <span>1K+</span>
              )}
              <p>Reviews</p>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoDisplayCards;
