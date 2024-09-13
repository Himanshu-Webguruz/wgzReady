import Image from "next/image";
import servTeam from "../../../public/images/serviceImages/Our-Team-is-Your-Team.webp";

const teamQualities = [
  {
    title: "Quality",
    description:
      "We aim to deliver high-quality products. Hence, we take care of everything at the granular level.",
  },
  {
    title: "Reliability",
    description:
      "Our teams are made up of highly-skilled and certified engineers with industry-specific domain knowledge.",
  },
  {
    title: "Flexibility",
    description:
      "Our team keeps the requirements of our clients on priority & the development process transparent.",
  },
  {
    title: "Competence",
    description:
      "Our team consists of expert developers who have knowledge of domain expertise for all business industries.",
  },
];

const TeamService = () => {
  return (
    <section className="teamservice py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center heading-content">
            <h3>
              Our Team is <span>Your Team</span>
            </h3>
            <p>
              More the years, the better the solutions! We have been partnering
              <br />
              with brands and offering our expertise for more than a decade.
            </p>
          </div>
        </div>
        <div className="row qteam">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="servteaminr">
              <Image src={servTeam} className="img-fluid" alt="Our Team" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="teamquality">
              {teamQualities.map((quality, index) => (
                <div key={index} className="teamqualityinr">
                  <h4>{quality.title}</h4>
                  <p>{quality.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamService;
