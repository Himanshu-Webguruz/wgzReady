import "./style.css";
import "../../contact-us/contact.css";
import PpcBanner from "@/components/otherServices/PpcDev/01PpcBanner";
import PpcServiceForm from "@/components/otherServices/PpcDev/02PpcServiceForm";
import PpcAdvertising from "@/components/otherServices/PpcDev/03PpcAdvertising";
import PpcProcess from "@/components/otherServices/PpcDev/04PpcProcess";
import PpcServicesOffer from "@/components/otherServices/PpcDev/05PpcServicesOffer";
import PpcManagement from "@/components/otherServices/PpcDev/06PpcManagement";
import PpcLeads from "@/components/otherServices/PpcDev/07PpcLeads";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import OurTeamhubspot from "@/components/otherServices/hubspotDev/06Ourteam";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import Featuredblog from "@/components/homeComponents/09Featuredblog";
import PpcLogos from "@/components/otherServices/PpcDev/PpcLogos";
// export const dynamic = "force-dynamic";

const page = () => {
  return (
    <>
      <PpcBanner />
      <PpcServiceForm heading={"PPC Services"} />
      <PpcAdvertising />
      <PpcProcess />
      <PpcServicesOffer />
      <PpcManagement />
      <PpcLeads />
      <PpcLogos />
      <OurTeamhubspot />
      <ServiceFaq />
      <AddsPartner />
      <Featuredblog />
    </>
  );
};

export default page;
