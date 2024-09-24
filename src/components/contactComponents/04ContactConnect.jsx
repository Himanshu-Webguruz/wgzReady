
import Image from "next/image";
import bloging from "../../../public/images/contactimages/blogging.svg";
import success from "../../../public/images/contactimages/success.svg";
import Link from "next/link";
const ContactConnect = () => {
  return (
    <>
      <section className="connect-level py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                <span>Get Started </span> on Your Transformation Journey
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-xs-12 vacent-div"></div>
            <div className="col-sm-4 col-xs-12">
              <div className="connect-card text-center p-4">
                <Image src={bloging} alt="bloging" />
                <h5>Blog</h5>
                <p>
                Discover the latest insights, trends, and expert advice on digital technologies.
                </p>
                <Link className="explore-btn" href="/">Read More</Link>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="connect-card text-center p-4">
                <Image src={success} alt="success" />
                <h5>Success Stories</h5>
                <p>
                See how we have helped businesses build success stories that inspire.
                </p>
                <Link className="explore-btn" href="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactConnect;
