import React from "react";
import Image from "next/image";
import imageconsultone from "../../../public/images/consultImages/consult-icon-1.svg";
import imageconsulttwo from "../../../public/images/consultImages/consult-icon-2.svg";
import imageconsultthree from "../../../public/images/consultImages/consult-icon-3.svg";
import imageconsultfour from "../../../public/images/consultImages/consult-icon-4.svg";
import imageconsultfive from "../../../public/images/consultImages/consult-icon-5.svg";
import imageconsultsix from "../../../public/images/consultImages/consult-icon-6.svg";

const DigitalConsultancy = () => {
  return (
    <div>
      <section className="digital-consultancy py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main inner-pages pb-4 text-center">
              <h2>
                Why WebGuruz? Here&apos;s <span>What Sets Us Apart</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultone} alt="Consultation 1" />
              </div>
              <h3>Tailored Strategy</h3>
              <p>
                WebGuruz delivers a fully customized marketing strategy that
                targets your specific business goals, helping you stand out in
                your industry. We analyze your needs and create plans that drive
                growth and enhance brand visibility.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsulttwo} alt="Consultation 2" />
              </div>
              <h3>Personalized Attention</h3>
              <p>
                You receive personalized attention from our experts, ensuring
                that every aspect of your digital marketing aligns with your
                business vision. WebGuruz dedicates time to understand your
                unique needs and provides hands-on guidance.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultthree} alt="Consultation 3" />
              </div>
              <h3>Expertise</h3>
              <p>
                With years of experience in digital marketing, WebGuruz provides
                you with expert advice and solutions that keep you ahead of the
                competition. Our strategies are built on a deep understanding of
                the latest industry trends.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultfour} alt="Consultation 4" />
              </div>
              <h3>Cost-Effectiveness</h3>
              <p>
                WebGuruz offers affordable yet effective marketing solutions
                that save you money while delivering high-quality services. Our
                consultancy ensures you get the most out of your marketing
                budget without compromising on results.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultfive} alt="Consultation 5" />
              </div>
              <h3>Efficiency</h3>
              <p>
                WebGuruz ensures your marketing campaigns are executed
                efficiently, saving you time and resources. Our streamlined
                processes help you achieve your digital marketing goals quickly
                and effectively, allowing you to focus on growth.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultsix} alt="Consultation 6" />
              </div>
              <h3>Focus on Results</h3>
              <p>
                We focus on delivering measurable results for your business.
                WebGuruz&apos;s strategies are data-driven and designed to meet your
                specific objectives, ensuring you see real improvements in your
                online performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalConsultancy;
