

import Image from "next/image";
import Hbteam from "../../../../public/images/hubspotimages/m-team.png";

function OurTeamhubspot() {
  return (
    <section id="ourTeamhbspt">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="heading-main text-center">
              <h3>
              Why Choose <span> HubSpot?</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="hbstsct">
              <div className="hbstm">
                <Image src={Hbteam} className="img-fluid"  alt="Image" />
              </div>
              <div className="svypmng">
                <div className="svypmnginr">
                  <h5>All-in-one platform</h5>
                  <p>
                  HubSpot offers a comprehensive suite of tools for marketing, sales, and customer service.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h5>User-friendly interface</h5>
                  <p>
                  HubSpot is easy to learn and use.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h5>Scalability</h5>
                  <p>
                  HubSpot can grow with your business.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h5>Integration with other tools</h5>
                  <p>
                  HubSpot can be integrated with your existing systems.
                  </p>
                </div>
                <div className="svypmnginr">
                  <h5>Strong community and support</h5>
                  <p>
                  HubSpot has a large and active community of users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeamhubspot;
