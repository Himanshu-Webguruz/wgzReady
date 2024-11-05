import React from "react";
import DigitalConsultancy from "@/components/bookConsultation/DigitalConsultancy";
import WebguruzConsultation from "@/components/bookConsultation/WebguruzConsultation";
import MeetingBanner from "@/components/bookConsultation/01MeetingBanner";
import RevolutionConsultancy from "@/components/bookConsultation/RevolutionConsultancy";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import ProminentPrtnr from "@/components/otherServices/cmsDev/09ProminentPrtnr";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { accordionData } from "@/utils/accordionData";
import BookComphrehensive from "@/components/bookConsultation/BookComphrehensive";
const page = () => {
  return (
    <>
      <MeetingBanner />
      <DigitalConsultancy />
      <WebguruzConsultation />
      <RevolutionConsultancy />
      <AddsPartner
        heading="Is your business ready for next-level growth?"
        paragraph="Let Webguruz be your trusted partner in this success."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <BookComphrehensive/>
      <ProminentPrtnr />
      <ServiceFaq accordionData={accordionData} />
    </>
  );
};

export default page;
