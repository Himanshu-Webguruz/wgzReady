import React from "react";
import Image from "next/image";
import Target1 from "../../../../public/images/localseoimages/target-1.svg";
import Target2 from "../../../../public/images/localseoimages/target-2.svg";
import Target3 from "../../../../public/images/localseoimages/target-3.svg";
import Target4 from "../../../../public/images/localseoimages/target-4.svg";

const BusinessLocalService = () => {
  return (
    <>
      <seciton className="businesslocal-service py-5 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-5 col-xs-12 heading-main">
              <h3>
                Benefits of our <span>Local SEO Service</span>
              </h3>
              <p>
                Our powerful local SEO Services place your business in front of
                the right audience effortlessly.
              </p>
              <button className="explore-btn">Book a consultation now!</button>
            </div>
            <div className="col-sm-7 col-xs-12 content">
              <div className="row">
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target1} alt="Target1" />
                    <h5 className="mb-3">Increased Local Traffic</h5>
                    <p>
                      By optimizing your website for local search queries, you
                      ensure that your business appears in front of potential
                      customers who are geographically close and more likely to
                      visit your physical location or engage with your services
                      online.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target2} alt="Target2" />
                    <h5 className="mb-3">Higher Conversion Rates</h5>
                    <p>
                      For service-based businesses, local SEO helps bridge the
                      gap between online searches and offline conversions,
                      turning potential customers into paying clients. Local
                      searchers are more likely to choose a business that ranks
                      highly in local results, driving both foot traffic and
                      online conversions.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target3} alt="Target3" />
                    <h5 className="mb-3">Cost-Effective Marketing</h5>
                    <p>
                      Unlike traditional forms of advertising, which can be
                      expensive and difficult to track, local SEO offers
                      measurable results without breaking the bank. With the
                      right local SEO strategy, you can consistently attract new
                      customers without the need for large advertising budgets.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12 mb-4">
                  <div className="card p-3 py-4">
                    <Image src={Target4} alt="Target4" />
                    <h5 className="mb-3">Better Online Visibility</h5>
                    <p>
                      Local SEO improves your visibility on major search engines
                      like Google, Bing, and Yahoo, ensuring that your business
                      is seen by people searching for local solutions. By
                      appearing in the top three results displayed on Google
                      Maps or the first page of local SERPs, your brand&apos;s reach
                      is extended, helping you stand out from competitors and
                      gain greater exposure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </seciton>
    </>
  );
};

export default BusinessLocalService;