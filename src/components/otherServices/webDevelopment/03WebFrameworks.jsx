import Image from "next/image";
import webimage from "/public/images/webimages/serviceimg.svg";
import webicon from "/public/images/webimages/webicon.svg";

const WebFrameworks = () => {
  return (
    <>
      <section className="web-framework py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pt-2 pb-4">
              <h3>
                <span> Website Development Services</span> We Offer
              </h3>
              <p>
                From simple websites to complex e-commerce platforms, web apps,
                and more, we&apos;ve got you covered.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">Front-end Development</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">E-Commerce Development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">Back-end Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="image-content">
                <div className="image">
                  <Image src={webimage} alt="webimage" />
                </div>
                <div className="content">
                  <div className="contentimg">
                    <Image src={webicon} alt="webimage" />
                  </div>
                  <p className="color-wt">CMS Development</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-xs-12">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">
                        Open Source Platform Development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">PWAs Development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="image-content">
                    <div className="image">
                      <Image src={webimage} alt="webimage" />
                    </div>
                    <div className="content">
                      <div className="contentimg">
                        <Image src={webicon} alt="webimage" />
                      </div>
                      <p className="color-wt">Custom Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="image-content">
                <div className="image">
                  <Image src={webimage} alt="webimage" />
                </div>
                <div className="content">
                  <div className="contentimg">
                    <Image src={webicon} alt="webimage" />
                  </div>
                  <p className="color-wt">Magento Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebFrameworks;
