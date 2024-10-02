import Image from 'next/image';
import search from '../../../../public/images/ppcimages/search.svg';
import money from '../../../../public/images/ppcimages/money.svg';

const cardData = [
  {
    image: search,
    alt: 'Google Ads',
    heading:"Google Ads",
    text: 'Drive targeted traffic and leads through search engine ads that capture intent.',
  },
  {
    image: money,
    alt: 'money',
    heading:"Instagram Ads",
    text: 'Leverage stunning visuals to engage a younger audience and boost brand awareness.',
  },
  {
    image: search,
    alt: 'search',
    heading:"LinkedIn Ads",
    text: 'Connect with professionals and businesses to generate quality B2B leads.',
  },
  {
    image: money,
    alt: 'money',
    heading:"Bing Ads",
    text: 'Reach a wider audience with ads on Microsoft’s search engine, tapping into a different demographic.',
  },
  {
    image: search,
    alt: 'search',
    heading:"Facebook Ads",
    text: 'Target specific user demographics and interests for highly effective advertising.',
  },
  {
    image: money,
    alt: 'money',
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
              <div key={index} className="col-sm-4 col-xs-12">
                <div className="ppc-card">
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
