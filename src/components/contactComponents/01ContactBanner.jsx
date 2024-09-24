import Link from "next/link";
import ContactClient from "../homeComponents/clientcomp/ContactClient";

const ContactBanner = () => {
  return (
    <>
      <section className="contact-banner py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-xs-12 content">
              <h2 className="color-wt">
                Have
                <br />
                <strong> Questions?</strong>
              </h2>
              <p className="color-wt">
                Get prompt support from our expert support team, now!
              </p>
              <div className="btn-merge">
                <Link className="explore-btn me-3" href="/">
                  For Business
                </Link>
                <Link className="explore-btn no-color" href="/">
                  For Career
                </Link>
              </div>
            </div>
            <ContactClient />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
