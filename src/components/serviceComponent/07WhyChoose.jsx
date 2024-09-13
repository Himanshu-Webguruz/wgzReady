import Image from "next/image";
import earnings from "../../../public/images/serviceImages/Earning.png";
import conversion from "../../../public/images/serviceImages/conversion.png";
import competitor from "../../../public/images/serviceImages/competitors.png";
import businessaudit from "../../../public/images/serviceImages/business-audit.png";
import roi from "../../../public/images/serviceImages/roi.png";
import reatltime from "../../../public/images/serviceImages/real-time.png";

// Array of sections
const sections = [
  {
    image: earnings,
    alt: "Earning Traffic",
    title: "Earning Traffic",
    description:
      "Drive 10X traffic to your website with customized and comprehensive digital marketing services.",
  },
  {
    image: conversion,
    alt: "Better Conversion Rates",
    title: "Better Conversion Rates",
    description:
      "Boost your conversion rate by 2X with our rigorous tested conversion rate optimization strategies.",
  },
  {
    image: competitor,
    alt: "In-Depth Competitor Analysis",
    title: "In-Depth Competitor Analysis",
    description:
      "We evaluate opportunities and threats with in-depth competitor analysis to create up-to-date metrics and generate actionable insights.",
  },
  {
    image: businessaudit,
    alt: "Complete Business Audit",
    title: "Complete Business Audit",
    description:
      "We do comprehensive business audits to incorporate your customer experience in all stages of strategy development.",
  },
  {
    image: roi,
    alt: "ROI Projections",
    title: "ROI Projections",
    description:
      "We help you measure the performance of your marketing campaigns which can influence your marketing investment, strategy, and more. You can achieve a 44% average increase in conversions with accurate projection.",
  },
  {
    image: reatltime,
    alt: "Real-Time Results",
    title: "Real-Time Results",
    description:
      "As an experienced digital marketing company, we take a 360-degree approach to online marketing and deliver real-time results.",
  },
];

const WhyChoose = () => {
  return (
    <section className="whychoose py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h3>
                Why Choose Signity For
                <br /> <span>Digital Marketing Services?</span>
              </h3>
              <p>
                As a renowned digital marketing company, we utilize
                top-of-the-line tools to design an inbound marketing plan for
                our customers. Our customized strategies and tools ensure we
                deliver the best results to meet the client's requirements.
              </p>
            </div>

            <div className="earntraffic">
              {sections.map((section, index) => (
                <div key={index} className="earntrafficinr">
                  <div className="earntrfimg">
                    <Image
                      src={section.image}
                      className="img-fluid"
                      alt={section.alt}
                    />
                  </div>
                  <div className="earntrfcnt">
                    <h5>{section.title}</h5>
                    <p>{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
