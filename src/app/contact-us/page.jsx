import ContactBanner from "@/components/contactComponents/01ContactBanner";
import TeamCard from "@/components/contactComponents/02TeamCard";
import ContactTalent from "@/components/contactComponents/03ContactTalent";
import ContactConnect from "@/components/contactComponents/04ContactConnect";
import ContactMap from "@/components/contactComponents/05ContactMap";
import AddsPartner from "@/components/serviceComponent/11AddsPartner";
import "./contact.css";
import HomeTestimonial from "@/components/homeComponents/07HomeTestimonial";
import ContactLogo from "@/components/contactComponents/07ContactLogo";

const page = () => {
  return (
    <>
      <ContactBanner />
      <TeamCard />
      <ContactTalent />
      <ContactLogo />
      <ContactConnect />
      <AddsPartner />
      <HomeTestimonial />
      <ContactMap />
    </>
  );
};

export default page;

export const metadata = {
  title: "Contact Us - Webguruz", // Static title for this page
};
