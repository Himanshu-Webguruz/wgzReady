"use client"; // Ensure this component runs on the client side
import { useEffect } from "react";

const WebdevForm = () => {
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
            formId: "a281ebfa-9f30-40b2-af43-0e9397f1b0fc",
            target: "#webdevForm", // Target div ID for the form
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

  return <div id="webdevForm" className="web-connect text-center"></div>; // The form will be injected here
};

export default WebdevForm;
