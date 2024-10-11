"use client";
import { useState } from "react";
import Image from "next/image";
import { aboutTabData } from "@/utils/03utilHomeTab";

const AboutTabber = () => {
  const [activeTab, setActiveTab] = useState("experts");

  return (
    <section className="py-5 tab-main history-sec">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <h2>Our <span>History</span></h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <div className="tabs-input-main">
            <div className="nav-tab-main">
              <div className="nav nav-tabs" role="tablist">
                {aboutTabData.map((tab) => (
                  <button
                    key={tab.eventKey}
                    className={`nav-link ${activeTab === tab.eventKey ? "active" : ""}`}
                    onClick={() => setActiveTab(tab.eventKey)}
                    type="button"
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              </div>
              <div className="tab-content mt-3">
                {aboutTabData.map((tab) => (
                  <div
                    key={tab.eventKey}
                    className={`tab-pane ${activeTab === tab.eventKey ? "active" : ""}`}
                    role="tabpanel"
                  >
                    <div className="image-cnt d-flex justify-content-between column-gap-5">
                      <div className="content">
                        {tab.content.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                        {/* Add an unordered list if desired */}
                        {/* {tab.eventKey === "experts" && (
                          <ul>
                            <li>Expert 1</li>
                            <li>Expert 2</li>
                            <li>Expert 3</li>
                          </ul>
                        )} */}
                      </div>
                      <div className="image">
                        <Image
                          src={tab.imageSrc}
                          alt={tab.title}
                          width={643}
                          height={569}
                          style={{ height: "100%", width: "100%" }}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTabber;
