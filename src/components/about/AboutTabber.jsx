"use client";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
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
          <div className="col-sm-12 col-xs-12 ">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)} // Update active tab
              id="uncontrolled-tabeer"
              className=""
            >
              {aboutTabData.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div className="image-cnt d-flex justify-content-between column-gap-5">
                    <div className="content">
                      {tab.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
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
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTabber;
