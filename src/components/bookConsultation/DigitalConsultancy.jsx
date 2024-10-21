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
                Benefits of 1-1 <span>Digital Marketing Consultancy</span>
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
                You will get access to a 1-1 digital marketing consultation. The
                consultant will create a customized strategy specifically
                tailored to your business requirements, goals, and target
                audience.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsulttwo} alt="Consultation 2" />
              </div>
              <h3>Personalized Attention</h3>
              <p>
                Rather than treating our clients like a business like other
                marketing companies do, we provide you with a dedicated
                consultant for personalized attention to your project needs. Our
                consultant will always be available so you can freely
                communicate and get a more focused approach.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultthree} alt="Consultation 3" />
              </div>
              <h3>Expertise</h3>
              <p>
                Our digital marketing consultants have a high level of expertise
                and more than two decades of experience. They stay updated on
                the latest trends, tools, and strategies to bring your business
                the most effective solutions.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultfour} alt="Consultation 4" />
              </div>
              <h3>Cost-Effectiveness</h3>
              <p>
                Hiring our consultant is a smart move for small and medium-sized
                businesses looking to save costs. In fact, it can be more
                cost-effective than hiring a full-time in-house marketing team.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultfive} alt="Consultation 5" />
              </div>
              <h3>Efficiency</h3>
              <p>
                With our one-on-one consultation, decisions can be made quickly,
                and adjustments can be implemented promptly. It is very crucial
                in the fast-paced world of digital marketing.
              </p>
            </div>
            <div className="col-sm-4 col-xs-12 digital-consult-sub">
              <div className="icon-image">
                <Image src={imageconsultsix} alt="Consultation 6" />
              </div>
              <h3>Focus on Results</h3>
              <p>
                Our consultant is usually result-oriented. They focus on
                achieving measurable results and ROI for your business.
                Moreover, they ensure that our digital marketing efforts align
                with your overall business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalConsultancy;
