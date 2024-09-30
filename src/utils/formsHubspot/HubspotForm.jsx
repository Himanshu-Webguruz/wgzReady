"use client"
import { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async=true;
    script.defer = true;
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "9048fe87-1d85-4da2-aa39-e3c9ae5fff0d",
          target: "#hubspotForm", 
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="hubspotForm" className="website-label tpfrmbnr"></div>; 
};

export default HubSpotForm;
