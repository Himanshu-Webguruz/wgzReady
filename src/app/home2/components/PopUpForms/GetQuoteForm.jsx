// components/ModalForm.js
import React, { useEffect, useState } from "react";
import useScript from "@/utils/formsHubspot/useScript";
import Image from "next/image";
import qoute from "../../../public/images/quote-img.webp";
const ModalForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  const [showModal, setShowModal] = useState(false);

  // Effect to create the HubSpot form
  useEffect(() => {
    if (isLoaded && window.hbspt && showModal) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "3b223d7c-ad34-41c9-b896-aa21ded33dc5",
          target: "#hubspotFormV2", // Ensure this matches the div's ID
        });
      } catch (error) {
        console.error("HubSpot form creation error:", error);
      }
    }
  }, [isLoaded, showModal]); // Run effect when isLoaded or showModal changes

  // Handle modal open
  const handleOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <button type="button" className="btn btn-primary" onClick={handleOpen}>
        GET A QUOTE
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block get-quote-form ">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
                <div className="image-form">
                  <div className="image">
                    <Image src={qoute} alt="Contact us" />
                  </div>
                  <div className="form">
                    {/* The div where the HubSpot form will be rendered */}
                    <div id="hubspotFormV2" className="contact-right-form">
                      Loading form...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
