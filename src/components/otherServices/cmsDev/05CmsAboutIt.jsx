import Image from "next/image";
import Abtimg from "../../../../public/images/drupalimg/aboutimg.png";

const CmsAboutIt = () => {
  return (
    <>
      <section className="abts py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="abtimg">
                <Image src={Abtimg} className="img-fluid"  alt="Image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="heading-main">
                <h3>
                  About Drupal <span>Web Development</span>
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                purus eros, aliquam at leo vitae, bibendum vulputate ipsum.
                Donec bibendum sed justo a imperdiet. Vivamus condimentum diam
                arcu, rutrum rhoncus est rhoncus eget.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                purus eros, aliquam at leo vitae, bibendum vulputate ipsum.
                Donec bibendum sed justo a imperdiet. Vivamus condimentum diam
                arcu, rutrum rhoncus est rhoncus eget.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                purus eros, aliquam at leo vitae, bibendum vulputate ipsum.
                Donec bibendum sed justo a imperdiet. Vivamus condimentum diam
                arcu, rutrum rhoncus est rhoncus eget.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                purus eros, aliquam at leo vitae, bibendum vulputate ipsum.
                Donec bibendum sed justo a imperdiet. Vivamus condimentum diam
                arcu, rutrum rhoncus est rhoncus eget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsAboutIt;
