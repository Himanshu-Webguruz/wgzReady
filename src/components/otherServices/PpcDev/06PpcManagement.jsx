import Image from 'next/image';
// import search from '../../../../public/images/ppcimages/search.svg';
import bingadsicon from '../../../../public/images/ppcimages/newImages/bing-ads-icon.webp';
import googleads from '../../../../public/images/ppcimages/newImages/google-ads-icon.png';
import instagramads from '../../../../public/images/ppcimages/newImages/instagram-ads-icon.png';
import linkedinadsicon from '../../../../public/images/ppcimages/newImages/linkedin-ads-icon.webp';
import youtubeadsicon from '../../../../public/images/ppcimages/newImages/youtube-ads-icon.png';
import facebookadsicon from '../../../../public/images/ppcimages/newImages/facebook-ads-icon.webp';
// C:\Users\NEW\Desktop\wgzReady\public\images\ppcimages\newImages\google-ads-icon.png
const cardData = [
  {
    image: googleads,
    alt: 'Google Ads',
    heading:"Google Ads",
    text: 'Drive targeted traffic and leads through search engine ads that capture intent.',
  },
  {
    image: instagramads,
    alt: 'instagramads',
    heading:"Instagram Ads",
    text: 'Leverage stunning visuals to engage a younger audience and boost brand awareness.',
  },
  {
    image: linkedinadsicon,
    alt: 'linkedinadsicon',
    heading:"LinkedIn Ads",
    text: 'Connect with professionals and businesses to generate quality B2B leads.',
  },
  {
    image: bingadsicon,
    alt: 'bingadsicon',
    heading:"Bing Ads",
    text: 'Reach a wider audience with ads on Microsoft’s search engine, tapping into a different demographic.',
  },
  {
    image: facebookadsicon,
    alt: 'facebookadsicon',
    heading:"Facebook Ads",
    text: 'Target specific user demographics and interests for highly effective advertising.',
  },
  {
    image: youtubeadsicon,
    alt: 'youtubeadsicon',
    heading:"YouTube Ads",
    text: 'Use video content to capture attention and engage viewers on the world’s largest video platform.',
  },
];

const PpcManagement = () => {
  return (
    <>
      <section className="ppcmanage-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
              Experts in a Variety of <span>Paid Ads Platforms</span>
              </h2>
              <p>
              Our experienced team is well-versed in several advertising platforms, allowing us to create impactful campaigns across multiple channels. We specialize in:
              </p>
            </div>
          </div>
          <div className="row">
            {cardData.map((card, index) => (
              <div key={index} className="col-sm-4 col-xs-12 mb-4">
                <div className="ppc-card h-100">
                  <div className="image">
                    <Image src={card.image} alt={card.alt} />
                  </div>
                  <h3>{card.heading}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcManagement;
