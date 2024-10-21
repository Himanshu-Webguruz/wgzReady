import React from "react";
import DigitalConsultancy from "@/components/bookConsultation/DigitalConsultancy";
import WebguruzConsultation from "@/components/bookConsultation/WebguruzConsultation";
import MeetingBanner from "@/components/bookConsultation/01MeetingBanner";
import RevolutionConsultancy from "@/components/bookConsultation/RevolutionConsultancy";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import CmsComprehensiveServices from "@/components/otherServices/cmsDev/04CmsComprehensiveServices";
import ProminentPrtnr from "@/components/otherServices/cmsDev/09ProminentPrtnr";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import { accordionData } from "@/utils/accordionData";
const page = () => {
  return (
    <>
      <MeetingBanner />
      <DigitalConsultancy />
      <WebguruzConsultation />
      <RevolutionConsultancy />
      <AddsPartner
        heading="Ready to unlock the full potential of your digital presence?"
        paragraph="Let WebGuruz help you in the journey."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      <CmsComprehensiveServices />
      <ProminentPrtnr />
      <ServiceFaq accordionData={accordionData} />
    </>
  );
};

export default page;
