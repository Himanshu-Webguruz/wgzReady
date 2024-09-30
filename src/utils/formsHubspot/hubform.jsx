"use client";
import { useEffect } from "react";

const HubSpotFormV2 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      script.defer = true; 

      script.onload = () => {
        // Ensure hbspt is available before calling the function
        if (window.hbspt) {
          try {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "2383602",
              formId: "6d74d4a0-dc01-4519-b1af-33f67b2e9518",
              target: "#hubspotFormV2",  // This should match the div's ID
            });
          } catch (error) {
            console.error("HubSpot form creation error:", error);
          }
        } else {
          console.error("hbspt object not found on window.");
        }
      };

      // Append the script to the document
      document.body.appendChild(script);
    }
  }, []);

  return <div id="hubspotFormV2" className="contact-right-form"></div>; // Placeholder div for the HubSpot form
};

export default HubSpotFormV2;
