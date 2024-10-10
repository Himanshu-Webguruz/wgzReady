// components/ModalForm.js
"use client";
import React, { useEffect, useState, useRef } from "react";
import useScript from "@/utils/formsHubspot/useScript";

const HiringForm = () => {
  const isLoaded = useScript("https://js.hsforms.net/forms/embed/v2.js");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null); // Ref to track the modal content

  // Effect to create the HubSpot form
  useEffect(() => {
    if (isLoaded && window.hbspt && showModal) {
      try {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "2383602",
          formId: "dbef1393-dbd3-4099-91c2-9eeb4faacef1",
          target: "#hubspotFormV2",
          onFormReady: function () {
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) {
              fileInput.setAttribute("accept", ".pdf");
            }
          },
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

  // Close modal when clicking outside of the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false); // Close the modal
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up
    };
  }, [showModal]);

  return (
    <>
      {/* Button to trigger the modal */}
      <button
        type="button"
        className="btn btn-primary hiring-form"
        onClick={handleOpen}
      >
        We are Hiring
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block hiring-form-main fade-scale">
          <div className="modal-dialog">
            <div className="modal-content" ref={modalRef}>
              <div className="modal-body">
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
                {/* The div where the HubSpot form will be rendered */}
                <div id="hubspotFormV2" className="contact-right-form">
                  Loading form...
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HiringForm;
