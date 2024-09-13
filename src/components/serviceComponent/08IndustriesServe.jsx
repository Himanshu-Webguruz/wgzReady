const industries = [
  {
    title: "Healthcare",
    description:
      "As a digital marketing company, we help healthcare brands increase awareness through comprehensive SEO (search engine optimization) and social media marketing.",
  },
  {
    title: "Finance",
    description:
      "Leverage cost-effective digital marketing services, and implement digital strategies to gain visibility, reach more potential customers, and generate leads and sales.",
  },
  {
    title: "eCommerce",
    description:
      "The eCommerce sector can boost its physical or online store presence with our internet marketing services. In addition, it drives sales and resolves shopping cart abandonment issues.",
  },
  {
    title: "Lifestyle",
    description:
      "Stay ahead of the competition in a competitive digital world with our digital marketing services and boost your search engine ranking and sales without any hassle.",
  },
  {
    title: "Education",
    description:
      "Our dedicated team of Internet marketing experts and project managers can help you build your brand identity and promote your services by implementing tailor-made content marketing strategies.",
  },
  {
    title: "Travel",
    description:
      "Our certified online marketing services provider enables businesses in the traveling domain to compete and lead in the top searches on the google search engine.",
  },
];

const IndustriesServe = () => {
  return (
    <section className="industries-serve py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="heading-main text-center pb-2 heading-content">
              <h3>
                Industries <span>We Serve</span>
              </h3>
              <p>
                Signity, a leading digital marketing services provider, delivers
                online marketing solutions to various businesses across
                industries to widen their business reach and profitability.
              </p>
            </div>

            <div className="indstrsrv">
              {industries.map((industry, index) => (
                <div key={index} className="indstrsrvinr">
                  <h5>{industry.title}</h5>
                  <p>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServe;
