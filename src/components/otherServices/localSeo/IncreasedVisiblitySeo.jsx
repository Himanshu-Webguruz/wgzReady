import React from "react";
import Image from "next/image";
import Solutionimage from "../../../../public/images/localseoimages/the-soln-img.png";
import Circleline from "../../../../public/images/localseoimages/circle-line.png";

const IncreasedVisiblitySeo = () => {
  return (
    <>
      <section className="visibilty-solution py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 visiblty-search-image">
              <Image src={Solutionimage} alt="Solutionimage" />
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="content heading-main ps-5">
                <Image src={Circleline} alt="Circleline" />
                <h6>One-Stop Solution</h6>
                <h3 className="mb-4">
                  Tailor-made <span>Local SEO Services</span>
                </h3>
                <p>
                  We know that every business is unique. That’s why we offer
                  tailor-made local SEO services to suit businesses of all
                  sizes:
                </p>
                <ul>
                  <li>
                    <strong>Small Businesses: </strong>
                    <br />
                    Focused on building a local presence with a limited budget.
                  </li>
                  <li>
                    <strong>Multi-location Businesses: </strong>
                    <br />
                    Optimizing local search for businesses with multiple
                    locations.
                  </li>
                  <li>
                    <strong>E-commerce Businesses: </strong>
                    <br />
                    Helping online stores attract local customers.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncreasedVisiblitySeo;
