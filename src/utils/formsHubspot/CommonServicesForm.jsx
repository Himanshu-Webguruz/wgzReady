"use client"; // Ensure this component runs on the client side
import { useEffect } from "react";

const CommonServicesForm = () => {
  useEffect(() => {
    // Create a script element to load the HubSpot form script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js"; // Load the script
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true; // Load the script asynchronously

    // After the script is loaded, create the HubSpot form
    script.onload = () => {
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "2383602",
            formId: "46bee7c7-5168-46a9-9af5-a09227c25ff1",
            target: "#commonServicesForm", // Target div ID for the form
          });
        } catch (error) {
          console.error("Error loading HubSpot form:", error);
        }
      }
    };

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="commonServicesForm" className="content-right form"></div>; // The form will be injected here
};

export default CommonServicesForm;
