"use client";

import { useState } from "react";
import Link from "next/link";
const AccordianFooter = () => {
  const [showLegalInfo, setShowLegalInfo] = useState(false);

  // Function to toggle the visibility
  const handleToggleLegalInfo = () => {
    setShowLegalInfo(!showLegalInfo);
  };

  return (
    <div className="col-sm-12 col-xs-12 footer-bottom left">
      <p
        className="mb-0"
        style={{ cursor: "pointer", color: "blue" }}
        onClick={handleToggleLegalInfo}
      >
        Statutory legal information
      </p>
      {showLegalInfo && (
        <p className="col-12">
          Webguruz is the Registered Name of Webguruz Technologies Pvt. Ltd., a
          mobile app and web development company having its office in Mohali,
          Punjab, India at the registered address- C-205, 4th Floor, SM Heights,
          Sector 74, Mohali, 160055.The personal information(Name, Email, Phone
          and Project Details) that you submit to us through our website will
          remain confidential. We don&apos;t sell, share or rent this information to
          third-parties unless required by the law enforcement agencies governed
          by the State Govt. or the Govt. of India. For details, refer to our
          Privacy Policy.Our team will use this information to send updates to
          you about our company and projects or contact you if requested or when
          it deems necessary. You may opt out of receiving this communication by
          dropping us an email on{" "}
          <span>
            <Link href="info@webguruz.in">info@webguruz.in</Link>
          </span>
        </p>
      )}
    </div>
  );
};

export default AccordianFooter;
