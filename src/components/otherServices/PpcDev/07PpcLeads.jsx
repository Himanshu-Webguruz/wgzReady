import Image from "next/image";
import optimized from "../../../../public/images/serviceImages/seo.png";
import socialmarketing from "../../../../public/images/serviceImages/Social-Media-Marketing.webp";
import automation from "../../../../public/images/serviceImages/Marketing-Automation.webp";
import paid from "../../../../public/images/serviceImages/paid-markeitng.webp";
import emailmarket from "../../../../public/images/serviceImages/email-marketing.webp";
import contentmarkt from "../../../../public/images/serviceImages/content-marketing.webp";
const PpcLeads = () => {
  return (
    <>
      <section className="digital-marketing py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                How Our PPC Service Can Increase Your{" "}
                <span> Leads & Scale</span>
              </h3>
              <p>
                As a renowned digital marketing company, we utilize
                top-of-the-line tools to design an inbound marketing plan for
                our customers.
              </p>
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Planing & Initiating PPC Campaign Setup</h5>
              <p>
                PPC is a form of paid advertising where you pay per click. With
                PPC services India, you can quickly appear on page one and be
                discovered by customers who require the services your company
                offers.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="optimized" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">PPC Services Increase Your Sales</h5>
              <p>
                At EZ Rankings, a team of experts first creates personalized PPC
                Management Services that aids in your goal-achieving. PPC
                marketing needs to improve clicks and conversions to boost
                sales.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="socialmarketing" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Efficient & Effective</h5>
              <p>
                Enjoy the freedom of building distinctive solutions with zero
                developer dependency. Drag & drop your custom-built templates,
                themes, and modules to create digital assets on the go.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={contentmarkt} alt="contentmarkt" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcLeads;
