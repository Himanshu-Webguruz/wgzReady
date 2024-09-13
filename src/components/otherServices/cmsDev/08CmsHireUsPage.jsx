import Image from "next/image";
import Whyrsimg from "../../../../public/images/drupalimg/whyrs.png";

// Array to store reasons to hire the company
const reasonsToHire = [
  "Experienced Drupal development team",
  "Transparent solutions",
  "IP rights protection",
  "Maintain oversight & control",
  "Flexible engagement options",
  "No contract lock-ins",
  "Hand-picked vetted talent",
  "ISO 9001:2015 certified processes",
];

const CmsHireUsPage = () => {
  return (
    <>
      <section className="whyhrs py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="heading-main">
                <h3>
                  Why Hire Us As Your Drupal Website
                  <br />
                  <span>Development Company?</span>
                </h3>
                <p>
                  Webguruz is dedicated to delivering world-class Drupal web
                  development solutions to global clients. Our team of certified
                  Drupal web developers has years of experience in handling
                  complex projects and offering innovative, scalable, and
                  high-quality solutions.
                </p>
              </div>
              <div className="exphrs">
                <ul>
                  {reasonsToHire.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="whrsimg">
                <Image src={Whyrsimg} className="img-fluid" alt="Why Hire Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsHireUsPage;
