import Image from 'next/image';
import search from '../../../../public/images/ppcimages/search.svg';
import money from '../../../../public/images/ppcimages/money.svg';

const cardData = [
  {
    image: search,
    alt: 'search',
    text: 'We research and develop a list of keywords that represent your products or services.',
  },
  {
    image: money,
    alt: 'money',
    text: 'We research and develop a list of keywords that represent your products or services.',
  },
  {
    image: search,
    alt: 'search',
    text: 'We research and develop a list of keywords that represent your products or services.',
  },
  {
    image: money,
    alt: 'money',
    text: 'We research and develop a list of keywords that represent your products or services.',
  },
  {
    image: search,
    alt: 'search',
    text: 'We research and develop a list of keywords that represent your products or services.',
  },
  {
    image: money,
    alt: 'money',
    text: 'We research and develop a list of keywords that represent your products or services.',
  },
];

const PpcManagement = () => {
  return (
    <>
      <section className="ppcmanage-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                Partner With Certified <span>PPC Management Company India</span>
              </h3>
              <p>
                As a reliable PPC management company, we can help you reap the
                following benefits:
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
