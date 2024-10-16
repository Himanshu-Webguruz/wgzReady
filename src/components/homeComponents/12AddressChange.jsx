"use client";
import React, { useState } from "react";
import Image from "next/image";
import IndiaBig from "../../../public/images/india-location.svg";
import AustraliaBig from "../../../public/images/australia.svg";
import UsaBig from "../../../public/images/usa.svg";
import UkBig from "../../../public/images/uk.svg";

import loc1 from "../../../public/images/loc-1.svg";
import loc2 from "../../../public/images/loc-2.svg";
import loc3 from "../../../public/images/loc-3.svg";
import loc4 from "../../../public/images/loc-4.svg";
import { usePathname } from "next/navigation";
const AddressChange = () => {
  const pathname = usePathname();
  // State to track the hovered location
  const [activeLocation, setActiveLocation] = useState("India"); // Default to "India"
  const [lastHoveredLocation, setLastHoveredLocation] = useState("India"); // Track the last hovered location

  // Function to handle mouse enter for a location
  const handleMouseEnter = (location) => {
    setActiveLocation(location); // Update the active location
    setLastHoveredLocation(location); // Update the last hovered location
  };

  return (
    <>
      {pathname === "/helloworld" && (
        <section className="our-locations-sec pt-5 pb-4">
          <div className="container">
            <div className="our-locations__inner">
              <div className="header-sec text-center pb-4">
                <div className="small-heading">Contact Us</div>
                <div className="sub-header-sec heading-main inner-page">
                  <h2 className="heading">
                    Let&apos;s Fire up your <span>Business</span>
                  </h2>
                  <p>
                    Team up with us Today for an unforgettable Service
                    experience
                  </p>
                </div>
                <div className="underlines"></div>
              </div>
              <div className="our-locations-outer">
                <div className="row">
                  {/* Locations Sidebar */}
                  <div className="col-lg-3">
                    <div className="location-tabs">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <h4 className="heading">Our Locations</h4>
                        </li>
                        <li
                          className={`hover-tabs ${
                            lastHoveredLocation === "India" ? "active-loc" : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter("India")}
                        >
                          <span className="loc-icon">
                            <Image
                              src={loc1}
                              alt="India-Icon"
                              width={5}
                              height={5}
                            />
                          </span>
                          <span>India</span>
                        </li>
                        <li
                          className={`hover-tabs ${
                            lastHoveredLocation === "Australia"
                              ? "active-loc"
                              : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter("Australia")}
                        >
                          <span className="loc-icon">
                            <Image
                              src={loc2}
                              alt="Australia-Icon"
                              width={5}
                              height={5}
                            />
                          </span>
                          <span>Australia</span>
                        </li>
                        <li
                          className={`hover-tabs ${
                            lastHoveredLocation === "USA" ? "active-loc" : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter("USA")}
                        >
                          <span className="loc-icon">
                            <Image
                              src={loc3}
                              alt="USA-Icon"
                              width={5}
                              height={5}
                            />
                          </span>
                          <span>USA</span>
                        </li>
                        <li
                          className={`hover-tabs ${
                            lastHoveredLocation === "UK" ? "active-loc" : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter("UK")}
                        >
                          <span className="loc-icon">
                            <Image
                              src={loc4}
                              alt="UK-Icon"
                              width={5}
                              height={5}
                            />
                          </span>
                          <span>UK</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="col-lg-9">
                    {activeLocation === "India" && (
                      <div className="location-details">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <figure className="mt-0 text-center">
                              <Image
                                src={IndiaBig}
                                alt="India Location"
                                width={200}
                                height={200}
                              />
                            </figure>
                          </div>
                          <div className="col-lg-4">
                            <div className="location">
                              <h5>India</h5>
                              <p>
                                4th Floor, SM Heights, C-205,
                                <br />
                                Phase 8 B, Sector 74 Mohali
                              </p>
                            </div>
                            <div className="location-item">
                              <h5>Contact(Sale)</h5>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a href="tel:+917087233361">
                                    <i className="fas fa-phone-alt"></i>{" "}
                                    <p>+91-7087233361</p>
                                  </a>
                                </li>
                                <li>
                                  <a href="mailto:provider@webguruz.in">
                                    <i className="fas fa-envelope"></i>{" "}
                                    <p>provider@webguruz.in</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeLocation === "Australia" && (
                      <div className="location-details">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <figure className="mt-0 text-center">
                              <Image
                                src={AustraliaBig}
                                alt="Australia Location"
                                width={200}
                                height={200}
                              />
                            </figure>
                          </div>
                          <div className="col-lg-4">
                            <div className="location">
                              <h5>Australia</h5>
                              <p>
                                31 Newmarket Parade, Mickleham, VIC, 3064,
                                Australia
                              </p>
                            </div>
                            <div className="location-item">
                              <h5>Contact(Sale)</h5>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a href="mailto:provider@webguruz.in">
                                    <i className="fas fa-envelope"></i>
                                    <p>provider@webguruz.in</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeLocation === "USA" && (
                      <div className="location-details">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <figure className="mt-0 text-center">
                              <Image
                                src={UsaBig}
                                alt="USA Location"
                                width={200}
                                height={200}
                              />
                            </figure>
                          </div>
                          <div className="col-lg-4">
                            <div className="location">
                              <h5>USA</h5>
                              <p>
                                5700 Dowdell Avenue, Unit 362, Rohnert Park
                                California 94928
                              </p>
                            </div>
                            <div className="location-item">
                              <h5>Contact(Sale)</h5>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a href="mailto:provider@webguruz.in">
                                    <i className="fas fa-envelope"></i>{" "}
                                    <p>provider@webguruz.in</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeLocation === "UK" && (
                      <div className="location-details">
                        <div className="row align-items-center">
                          <div className="col-lg-8">
                            <figure className="mt-0 text-center">
                              <Image
                                src={UkBig}
                                alt="UK Location"
                                width={200}
                                height={200}
                              />
                            </figure>
                          </div>
                          <div className="col-lg-4">
                            <div className="location">
                              <h5>UK</h5>
                              <p>
                                53 Birchend Cl,South Croydon CR2 7DS
                                {/* <br /> */}
                                {/* South Croydon CR2 7DS */}
                              </p>
                            </div>
                            <div className="location-item">
                              <h5>Contact(Sale)</h5>
                              <ul className="list-unstyled mb-0">
                                <li>
                                  <a href="mailto:provider@webguruz.in">
                                    <i className="fas fa-envelope"></i>{" "}
                                    <p>provider@webguruz.in</p>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AddressChange;
