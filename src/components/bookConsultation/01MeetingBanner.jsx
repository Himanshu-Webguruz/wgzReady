import React from "react";
import HubSpotMeetings from "./HubSpotMeetings";

const MeetingBanner = () => {
  return (
    <>
      <section className="calender-cnsultaion py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center my-4 inner-page">
              <h1>
              Ready to Grow? Book Your <span>Free Digital Marketing Consultation</span>
              </h1>
            </div>
            <div className="col-sm-12 col-xs-12 wgz-meet">
              <HubSpotMeetings />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetingBanner;
