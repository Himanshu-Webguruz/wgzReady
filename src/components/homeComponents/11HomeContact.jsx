import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ContactClient from "./clientcomp/ContactClient";

const Contact = () => {
  return (
    <section className="contact-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xs-12 contact-sub left">
            <p>Get in Touch with</p>
            <h2>Our Experts</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex nisi,
              pharetra nec ultricie.
            </p>
            <p>Integrate Towards Innovation</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex nisi,
              pharetra nec ultricie.
            </p>
            <Link href="/" className="partner-btn about--btn">
              Become a Partner&nbsp;
              <FontAwesomeIcon
                icon={faArrowRight}
                role="img"
                aria-label="Arrow Right"
              />
            </Link>
            <div className="contact-info">
              <h4>Contact Info:</h4>
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="ps-1"
                        role="image"
                        aria-label="Phone Number"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales - <a href="tel:7307001777">(+91) 730 700 1777</a>
                      </p>
                      <p>
                        Jobs - <a href="tel:9592016444">(+91) 959 201 6444</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="ps-1"
                        role="image"
                        aria-label="Envelope"
                      />
                    </div>
                    <div className="content">
                      <p>
                        Sales -{" "}
                        <a
                          href="mailto:provider@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          provider@webguruz.in
                        </a>
                      </p>
                      <p>
                        Jobs -
                        <a
                          href="mailto:careers@webguruz.in"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          careers@webguruz.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactClient />
        </div>
      </div>
    </section>
  );
};

export default Contact;
