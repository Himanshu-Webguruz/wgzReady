import React from "react";

const CareerJob = () => {
  return (
    <>
      <section className="career-job py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className=" col-sm-6 col-xs-12 left-content heading-main">
              <h2>
                Keep an eye on the <br />
                <span>latest job openings.</span>
              </h2>
              <button className="explore-btn">Check Now</button>
            </div>
            <div className="col-sm-6 col-xs-12 content-right">
              <h2 className="color-wt mb-4">
                Subscribe to our email newsletter and stay updated with the
                latest tech insights from our digital experts.
              </h2>
              <form className="newsleter">
                <input type="text" placeholder="Enter Email" />
                <input type="submit" value="subscribe"></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerJob;
