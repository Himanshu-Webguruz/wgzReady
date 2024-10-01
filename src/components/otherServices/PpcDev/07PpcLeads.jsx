import Image from "next/image";
import optimized from "../../../../public/images/ppcimages/ppclead1.svg";
import socialmarketing from "../../../../public/images/ppcimages/ppclead2.svg";
import contentmarkt from "../../../../public/images/ppcimages/ppclead3.svg";
const PpcLeads = () => {
  return (
    <>
      <section className="digital-marketing py-5 vector-digital ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                How Our PPC Service Can Increase Your{" "}
                <span> Leads & Scale</span>
              </h2>
              <span>
                As a renowned digital marketing company, we utilize
                top-of-the-line tools to design an inbound marketing plan for
                our customers.
              </span>
            </div>
          </div>
          <div className="row py-3">
          <div className="card-content d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Planing & Initiating PPC Campaign Setup</h3>
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
          </div>
          <div className="row py-3">
          <div className="card-content reverse d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">PPC Services Increase Your Sales</h3>
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
          </div>
          <div className="row py-3">
          <div className="card-content d-flex align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h3 className="mb-3">Efficient & Effective</h3>
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
        </div>
      </section>
    </>
  );
};

export default PpcLeads;
