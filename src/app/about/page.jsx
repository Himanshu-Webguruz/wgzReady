import AboutBanner from "@/components/about/AboutBanner";
import Aboutvision from "@/components/about/Aboutvision";
import AboutWhoweare from "@/components/about/AboutWhoweare";
import CounterHome from "@/components/homeComponents/02CounterHome";
import HomeTestimonial from "@/components/homeComponents/07HomeTestimonial";
import WhyChoose from "@/components/serviceComponent/07WhyChoose";
import Aboutleaders from "@/components/about/Aboutleaders";
import "./style.css";
import AboutTabber from "@/components/about/AboutTabber";

const page = () => {
  return (
    <div>
      <AboutBanner />
      <AboutWhoweare />
      <WhyChoose />
      <Aboutvision />
      <CounterHome />
      <AboutTabber/>
      <HomeTestimonial />
      <Aboutleaders />
    
    </div>
  );
};

export default page;
export const metadata = {
  title: "About Us - Webguruz",
  description:
    "Know more about Webguruz; We are India&#039;s top Web development &amp; marketing company that focuses on providing the highest level of customer service. Call us today",
};
