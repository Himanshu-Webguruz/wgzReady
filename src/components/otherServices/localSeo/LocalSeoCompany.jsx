import React from "react";
import Image from "next/image";
import threecircle from "../../../../public/images/localseoimages/three-circle.png";
const LocalSeoCompany = () => {
  return (
    <div>
      <section className="seo-industry py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 industry-local-content heading-main">
              <h3 className="mb-4">
                Preferred <span>Local SEO Company </span> for Market Leaders
              </h3>
              <p>
                As a leading local SEO company, WebGuruz is committed to helping
                businesses reach their local audience. We specialize in creating
                tailored SEO strategies that increase visibility and engagement.
              </p>
              <p>
                <strong>What sets us apart?</strong>
              </p>
              <ul className="mb-4">
                <li>
                  At WebGuruz, what sets us apart is our unwavering commitment
                  to innovation, customer satisfaction, and delivering
                  exceptional results. As a local SEO agency in India with years
                  of experience, we possess the expertise required to navigate
                  the complexities of local search engine optimization.
                </li>
                <li>
                  Our team has a proven track record of success, consistently
                  helping businesses rank for top local keywords and driving
                  significant improvements in their online visibility. One of
                  our core strengths is our personalized approach- we understand
                  that every business is unique, so we develop tailored
                  strategies based on each client’s specific needs and local
                  market conditions.{" "}
                </li>
                <li>
                  Our dedicated team of SEO experts is highly skilled at
                  analyzing local markets, identifying opportunities, and
                  crafting targeted strategies that maximize your online
                  presence. By combining our in-depth industry knowledge with a
                  focus on client success, WebGuruz ensures that you achieve
                  sustainable growth and maintain a competitive edge in your
                  local area.
                </li>
              </ul>
              <button className="explore-btn">Contact Us Now!</button>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={threecircle} alt="threecircle" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSeoCompany;
