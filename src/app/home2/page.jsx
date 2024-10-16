// export const dynamic = 'force-dynamic'
import dynamic from "next/dynamic";

// Dynamically importing components
const HomeNumbers = dynamic(
  () => import("./components/homeComponents/04HomeNumbers"),
  { ssr: true }
);
const HomeBanner = dynamic(
  () => import("./components/homeComponents/01HomeBanner"),
  { ssr: true }
);
const CounterHome = dynamic(
  () => import("./components/homeComponents/02CounterHome"),
  { ssr: true }
);
const TechnicalHome = dynamic(
  () => import("./components/homeComponents/05TechnicalHome"),
  { ssr: true }
);
const CustomizeHome = dynamic(
  () => import("./components/homeComponents/06CustomizeHome"),
  { ssr: true }
);
const FeaturedProject = dynamic(
  () => import("./components/homeComponents/08FeaturedProject"),
  { ssr: true }
);
const HomeTestimonial = dynamic(
  () => import("./components/homeComponents/07HomeTestimonial"),
  { ssr: true }
);

const Homeaward = dynamic(
  () => import("./components/homeComponents/Homeaward"),
  { ssr: true }
);

const HomeTab = dynamic(() => import("@/components/homeComponents/03HomeTabber"), { ssr: true });

import Featuredblog from "./components/homeComponents/09Featuredblog";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeTab/>
      <CounterHome />
      <HomeNumbers />
      <TechnicalHome />
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <FeaturedProject />
      <HomeTestimonial />
      <Featuredblog />
      <Homeaward />
    </>
  );
}
