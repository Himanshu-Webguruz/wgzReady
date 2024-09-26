"use client"; // Ensure this component runs on the client side
import { useEffect } from "react";

const BlogSubscribeForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js"; // Load the script
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true; // Load the script asynchronously

    script.onload = () => {
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "2383602",
            formId: "b1cc9043-30e3-4e00-b5be-0739f835d639",
            target: "#blogSubscribeForm", // Target div ID
          });
        } catch (error) {
          console.error("Error loading HubSpot form:", error);
        }
      }
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="blogSubscribeForm" className="news-form-right"></div>; // The form will be injected here
};

export default BlogSubscribeForm;
