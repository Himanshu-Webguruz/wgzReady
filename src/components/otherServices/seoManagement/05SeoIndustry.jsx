import Image from 'next/image';
import industryseo1 from '../../../../public/images/seoimages/industryseo-1.svg'
import industryseo2 from '../../../../public/images/seoimages/industryseo-2.svg'
import industryseo3 from '../../../../public/images/seoimages/industryseo-3.svg'
import industryseo4 from '../../../../public/images/seoimages/industryseo-4.svg'
import industryseo5 from '../../../../public/images/seoimages/industryseo-5.svg'
import industryseo6 from '../../../../public/images/seoimages/industryseo-6.svg'
import industryseo7 from '../../../../public/images/seoimages/industryseo-7.svg'
import industryseo8 from '../../../../public/images/seoimages/industryseo-8.svg'
import industryseo9 from '../../../../public/images/seoimages/industryseo-9.svg'
import industryseo10 from '../../../../public/images/seoimages/industryseo-10.svg'
import industryseo11 from '../../../../public/images/seoimages/industryseo-11.svg'

const SeoIndustry = () => {
  return (
    <>
      <section className="seo-industry py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h3 className="mb-5">
                Industry Specialized <span>SEO Services in India</span>
              </h3>
              <ul>
                <li>
                  <Image src={industryseo1} alt="industryseo1" />
                  <p className="mt-4">Ecommerce SEO</p>
                </li>
                <li>
                  <Image src={industryseo2} alt="industryseo2" />
                  <p className="mt-4">Dental SEO</p>
                </li>
                <li>
                  <Image src={industryseo3} alt="industryseo3" />
                  <p className="mt-4">IT Company SEO</p>
                </li>
                <li>
                  <Image src={industryseo4} alt="industryseo4" />
                  <p className="mt-4">Law Firm SEO</p>
                </li>
                <li>
                  <Image src={industryseo5} alt="industryseo5" />
                  <p className="mt-4">Mover SEO</p>
                </li>
                <li>
                  <Image src={industryseo6} alt="industryseo6" />
                  <p className="mt-4">Real Estate SEO</p>
                </li>
                <li>
                  <Image src={industryseo7} alt="industryseo7" />
                  <p className="mt-4">Roofer SEO</p>
                </li>
                <li>
                  <Image src={industryseo8} alt="industryseo8" />
                  <p className="mt-4">SEO for Doctor</p>
                </li>
                <li>
                  <Image src={industryseo9} alt="industryseo9" />
                  <p className="mt-4">Pest Control SEO</p>
                </li>
                <li>
                  <Image src={industryseo10} alt="industryseo10" />
                  <p className="mt-4">Cleaning Company SEO</p>
                </li>
                <li>
                  <Image src={industryseo11} alt="industryseo11" />
                  <p className="mt-4">Jewelry SEO</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoIndustry;
