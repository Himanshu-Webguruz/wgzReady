import React from "react";
import Image from "next/image";
import afordableseoone from "../../../../public/images/localseoimages/afordableseo-1.png";
import afordableseotwo from "../../../../public/images/localseoimages/afordableseo-2.png";
import afordableseothree from "../../../../public/images/localseoimages/afordableseo-3.png";
import afordableseofour from "../../../../public/images/localseoimages/afordableseo-4.png";
import afordableseofive from "../../../../public/images/localseoimages/afordableseo-5.png";
import afordableseosix from "../../../../public/images/localseoimages/afordableseo-6.png";

const LocalServiceSeo = () => {
  return (
    <>
      <section className="local-service py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                Our Local <span>SEO Services</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseoone} alt="afordableseoone" />
                </div>
                <div className="content">
                  <h5 className="mb-3">Local SEO Audit</h5>
                  <p>
                    We perform an in-depth analysis of your website’s current
                    local search performance, evaluating factors such as local
                    keyword rankings, mobile responsiveness, site speed, and
                    user experience. We also examine your website’s technical
                    aspects, including meta tags, URL structures, and internal
                    linking, to identify any barriers preventing your site from
                    ranking higher in local search results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseotwo} alt="afordableseotwo" />
                </div>
                <div className="content">
                  <h5 className="mb-3">Local SEO Competitor Analysis</h5>
                  <p>
                    Our Local SEO Competitor Analysis involves a thorough
                    examination of your top local competitors to uncover their
                    strengths and weaknesses. We analyze their keyword
                    strategies, backlink profiles, Google My Business listings,
                    and customer reviews to identify areas where your business
                    can gain a competitive edge.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseothree} alt="afordableseothree" />
                </div>
                <div className="content">
                  <h5 className="mb-3">Local Optimization</h5>
                  <p>
                    We optimize your website&apos;s content by incorporating relevant
                    local keywords, improving page load speed, and ensuring
                    mobile-friendliness. Off-page, we focus on building
                    high-quality local backlinks, managing citations, and
                    enhancing your social media presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseofour} alt="afordableseofour" />
                </div>
                <div className="content">
                  <h5 className="mb-3">Google My Business Profile</h5>
                  <p>
                    We optimize and manage your GMB profile to ensure that your
                    business is prominently featured in local searches and
                    Google Maps. This includes ensuring your business
                    information (name, address, phone number, and hours) is
                    accurate, adding high-quality photos, responding to customer
                    reviews, and utilizing relevant local keywords in your
                    profile description.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseofive} alt="afordableseofive" />
                </div>
                <div className="content">
                  <h5 className="mb-3">Local Citations</h5>
                  <p>
                    We ensure that your business is listed on relevant and
                    high-authority directories such as Yelp, TripAdvisor, and
                    local industry-specific directories. We also ensure the
                    consistency of your NAP information across all platforms,
                    which helps search engines trust your business and rank you
                    higher in local search results.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="seo-card text-center p-3 mb-4">
                <div className="seoservice-icon">
                  <Image src={afordableseosix} alt="afordableseosix" />
                </div>
                <div className="content">
                  <h5 className="mb-3">Landing Pages</h5>
                  <p>
                    We create highly targeted local landing pages that are
                    tailored to specific services, locations, or keywords,
                    making it easier for customers to find what they’re looking
                    for. These pages are optimized with relevant content, local
                    keywords, and strong calls to action to drive conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalServiceSeo;
