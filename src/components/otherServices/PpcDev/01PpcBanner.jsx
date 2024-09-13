import Image from 'next/image';
import ppcbannerimage from '../../../../public/images/ppcimages/ppcservicebanner.svg'
import whitearrow from '../../../../public/images/ppcimages/white-arrow.svg'
const PpcBanner = () => {
  return (
    <>
      <section className="ppcbanner py-5 service-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-xs-12 banner-content-left heading-main">
              <h2>
                PPC <span>Management Services</span>
              </h2>
              <p className='mb-5'>
                Looking for the quickest way to bring ready-to-buy customers to
                your website and mobile app? PPC (Pay-per-Click) offers the
                perfect solution. As a leading PPC management company in India
                we specialize in various PPC management services such as Google
                Adwords, Facebook and YouTube advertisements. As an ISO
                9001:2015 certified PPC service provider in India, we have been
                serving a global clientele from varied industries and
                demographic for the past ten years in the most efficient manner.
              </p>
              <ul className="ppcbutton d-flex">
                <li>
                  <button className="seaservice">
                    Seo Services
                    <Image src={whitearrow} />
                  </button>
                </li>
                <li>
                  <button className="mediamarketing">
                    Social Media Marketing
                    <Image src={whitearrow} />
                  </button>
                </li>
                <li>
                  <button className="contentmrkteing">
                    Content Marketing
                    <Image src={whitearrow} />
                  </button>
                </li>
                <li>
                  <button className="contentwrting">
                    Content Writing
                    <Image src={whitearrow} />
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-sm-5 col-xs-12 banner-image-right">
              <Image src={ppcbannerimage} alt="ppcbannerimage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcBanner;
