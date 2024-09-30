"use client";
import { useEffect } from "react";

const DigitalForm = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";  // Use https for secure loading
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      script.defer = true; 

      script.onload = () => {
        if (window.hbspt) {
          try {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "2383602",
              formId: "aad58c7f-f48a-40c1-b3d6-01b43e5b4026",
              target: "#digitalForm",  // Target div ID
            });
          } catch (error) {
            console.error("Error loading HubSpot form:", error);
          }
        }
      };

      document.body.appendChild(script);
    }
  }, []);

  return <div id="digitalForm"></div>;  // The form will be injected here
};

export default DigitalForm;
