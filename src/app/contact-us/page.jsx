import ContactBanner from "@/components/contactComponents/01ContactBanner";
import TeamCard from "@/components/contactComponents/02TeamCard";
import ContactTalent from "@/components/contactComponents/03ContactTalent";
import ContactConnect from "@/components/contactComponents/04ContactConnect";
import ContactMap from "@/components/contactComponents/05ContactMap";
import AddsPartner from "@/components/contactComponents/06AddsPartner";
import "./contact.css";
import ContactLogo from "@/components/contactComponents/07ContactLogo";
import ContactTestimonial from "@/components/contactComponents/ContactTestimonial";
import HomeTestimonial from "@/components/homeComponents/07HomeTestimonial";
import HiringForm from "@/components/PopUpForms/hiringform";


const page = () => {
  return (
    <>
      <ContactBanner />
      <TeamCard />
      <ContactTalent />
      <ContactLogo />
      <ContactConnect />
      <AddsPartner
        heading="Ready to unlock the full potential of your digital presence?"
        paragraph="Let WebGuruz help you in the journey."
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
      {/* <ContactTestimonial/> */}
      <HomeTestimonial/>
      <ContactMap />
      <HiringForm/>
    
    </>
  );
};

export default page;

export const metadata = {
  title: "Contact Us - Webguruz", // Static title for this page
  description: "Get in touch with WebGuruz for top-notch web development, digital marketing, SEO, PPC, and SMO services. Contact now our expert to boost your business.",
};
