import Image from "next/image";
import optimized from "../../../public/images/serviceImages/seo.png";
import socialmarketing from "../../../public/images/serviceImages/Social-Media-Marketing.webp";
import automation from "../../../public/images/serviceImages/Marketing-Automation.webp";
import paid from "../../../public/images/serviceImages/paid-markeitng.webp";
import emailmarket from "../../../public/images/serviceImages/email-marketing.webp";
import contentmarkt from "../../../public/images/serviceImages/content-marketing.webp";
const DigitalMarketing = () => {
  return (
    <>
      <section className="digital-marketing py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                <span>Digital Marketing</span> Services We Offer
              </h2>
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">SEO (Search Engine Optimization Services)</h5>
              <p>
              Our search engine optimization consultants optimize your website to improve its ranking on search engines like Google. We focus on keyword research, on-page optimization, link building, technical SEO, and more to ensure maximum visibility.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={optimized} alt="optimized" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">SMM (Social Media Marketing Services)</h5>
              <p>
              We create and manage engaging social media campaigns to build brand awareness and connect with your target audience. Our SMM services include content creation, community management, advertising, and analytics.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={socialmarketing} alt="socialmarketing" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Content Marketing Services</h5>
              <p>
              High-quality content is essential for attracting and retaining customers. Our content marketing services include blog writing, article creation, infographics, and video production.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={contentmarkt} alt="contentmarkt" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Marketing Automation</h5>
              <p>
              Streamline your marketing processes and improve efficiency with our marketing automation solutions. As a leading digital marketing agency, we help you automate tasks like email marketing, lead nurturing, and social media management.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={automation} alt="automation" />
            </div>
          </div>
          <div className="row d-flex align-items-center py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">PPC Management Services</h5>
              <p>
              Reach a wider audience with targeted paid advertising campaigns. Our paid marketing services include Google Ads, social media advertising, and display advertising.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={paid} alt="paid" />
            </div>
          </div>
          <div className="row d-flex align-items-center reverse py-3">
            <div className="col-sm-6 col-xs-12 content">
              <h5 className="mb-3">Email Marketing Services</h5>
              <p>
              Build relationships with your customers and drive conversions with a leading email marketing company. We create personalized email content and optimize your email campaigns for maximum results.
              </p>
            </div>
            <div className="col-sm-6 col-xs-12 image">
              <Image src={emailmarket} alt="emailmarket" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
