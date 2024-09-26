import Image from 'next/image';
import techseo1 from '../../../../public/images/seoimages/techseo-1.svg'
import techseo2 from '../../../../public/images/seoimages/techseo-2.svg'
import techseo3 from '../../../../public/images/seoimages/techseo-3.svg'
import techseo4 from '../../../../public/images/seoimages/techseo-4.svg'

const SeoProfessional = () => {
  return (
    <>
      <section className="seoprofessional-main py-5 text-center counter-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main mb-3">
              <h2>
                Our Professional <span>SEO Services in India Include</span>
              </h2>
              <span className='d-inline-block'>
                We Follow Certain Steps To Provide High-Quality Small Business
                SEO Services. 
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3  col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo1} alt="techseo1" />
                <h3>OnPage SEO</h3>
                <p>Services</p>
                <button className="explore-btn">Get Started</button>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo2} alt="techseo2" />
                <h3>OnPage SEO</h3>
                <p>Services</p>
                <button className="explore-btn">Get Started</button>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo3} alt="techseo3" />
                <h3>OnPage SEO</h3>
                <p>Services</p>
                <button className="explore-btn">Get Started</button>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="seo-card flexd-column d-flex align-items-center">
                <Image src={techseo4} alt="techseo4" />
                <h3>OnPage SEO</h3>
                <p>Services</p>
                <button className="explore-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoProfessional;
