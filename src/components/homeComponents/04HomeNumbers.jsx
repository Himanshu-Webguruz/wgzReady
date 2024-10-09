"use client";
import React, { useState, useRef } from "react";
import validator from "validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import numbercards from "@/utils/04utilHomeNumbers";
import HomeClient from "./clientcomp/HomeClient";
import HubSpotForm from "@/utils/formsHubspot/HubspotForm";
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

const HomeNumbers = () => {
  // const [website, setWebsite] = useState("");
  // const [email, setEmail] = useState("");
  // const [errors, setErrors] = useState({ website: "", email: "" });
  // const [serverMessage, setServerMessage] = useState("");
  // const websiteRef = useRef(null);
  // const emailRef = useRef(null);

  // const handleWebsiteChange = (e) => {
  //   setWebsite(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleButtonClick = async (e) => {
  //   e.preventDefault();
  //   const trimmedWebsite = website.trim();
  //   const trimmedEmail = email.trim();
  //   let formattedWebsite = trimmedWebsite;
  //   let websiteError = "";
  //   let emailError = "";

  //   // Ensure URL starts with "http://"
  //   if (
  //     !formattedWebsite.startsWith("http://") &&
  //     !formattedWebsite.startsWith("https://")
  //   ) {
  //     formattedWebsite = "http://" + formattedWebsite;
  //   }

  //   // Check if the website contains invalid characters like "@"
  //   if (formattedWebsite.includes("@")) {
  //     websiteError = "Enter a valid URL";
  //   } else if (!validator.isURL(formattedWebsite, { require_protocol: true })) {
  //     websiteError = "Enter a valid URL";
  //   }

  //   // Validate email
  //   if (!validator.isEmail(trimmedEmail)) {
  //     emailError = "Enter a valid email";
  //   }

  //   if (websiteError || emailError) {
  //     setErrors({ website: websiteError, email: emailError });
  //     if (websiteError && websiteRef.current) websiteRef.current.focus();
  //     if (emailError && emailRef.current) emailRef.current.focus();
  //     return;
  //   }

  //   // Clear errors if both fields are valid
  //   setErrors({ website: "", email: "" });

  //   try {
  //     const formdata = new FormData();
  //     formdata.append("website", formattedWebsite);
  //     formdata.append("your-email", trimmedEmail);
  //     formdata.append("_wpcf7_unit_tag", "wpcf7-f232-p5-o5");

  //     const requestOptions = {
  //       method: "POST",
  //       body: formdata,
  //       redirect: "follow",
  //     };

  //     const response = await fetch(
  //       `${BASE_URL_API}/wp-json/contact-form-7/v1/contact-forms/232/feedback`,
  //       requestOptions
  //     );

  //     const result = await response.json();

  //     if (result.status === "mail_failed") {
  //       setServerMessage(
  //         "There was an error trying to send your message. Please try again later."
  //       );
  //     } else {
  //       setServerMessage("Your message was sent successfully!");
  //       setWebsite("");
  //       setEmail("");
  //     }
  //   } catch (error) {
  //     console.error("Error posting website and email:", error);
  //     setServerMessage("An error occurred. Please try again later.");
  //   }
  // };

  return (
    <section className="number-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>
              Our <span>Portfolio</span>
            </h2>
            <span className="d-inline-block mb-4">
              Explore our diverse range of projects and see how we&apos;ve
              helped businesses of all sizes achieve their goals.
            </span>
            {/* <form
              className="website-label btn-main srchfrm"
              onSubmit={handleButtonClick}
            >
              <div className="entrweb">
                <input
                  type="text"
                  placeholder="Enter Your Website"
                  value={website}
                  onChange={handleWebsiteChange}
                  ref={websiteRef}
                />
                {errors.website && (
                  <p style={{ color: "red" }}>{errors.website}</p>
                )}
              </div>
              <div className="entrml">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={handleEmailChange}
                  ref={emailRef}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
              <button
                type="submit"
                value="Get a proposal"
                className="btn-submit"
              >
                Get a proposal
                <FontAwesomeIcon
                  style={{ height: "1em" }}
                  icon={faArrowRight}
                  className="ps-1"
                  role="image"
                  aria-label="Arrow Right"
                />
              </button>
            </form> */}
            {/* <HomeClient /> */}
            <HubSpotForm targetId="hubspotForm-componentTwo" />
          </div>
        </div>

        <div className="row numbercard-main">
          {numbercards.map((card, index) => (
            <div className="col col-sm-3 col-xs-12" key={index}>
              <div className="card text-center">
                <h3>{card.title}</h3>
                <span>{card.para}</span>
                <h4>{card.percentage}</h4>
                <Link className="btn-link about--btn" href="/">
                  {card.anchor}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ps-1"
                    role="image"
                    aria-label="Arrow Right"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNumbers;
