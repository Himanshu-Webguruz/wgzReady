import Link from "next/link";
import Conversion from "../../../public/images/serviceImages/conversion.jpg";

const AddsPartner = ({ heading, paragraph, linkHref, linkText }) => {
  return (
    <section
      className="addspartnr py-8"
      style={{
        backgroundImage: `url(${Conversion.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundPosition: "100% 50%",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h3 className="color-wt">{heading}</h3>
            <p className="color-wt">{paragraph}</p>
            <Link className="explore-btn" href={linkHref}>
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddsPartner;
