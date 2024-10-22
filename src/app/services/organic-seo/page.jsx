import DeliverOrganic from '@/components/otherServices/OrganicSeo/DeliverOrganic'
import OrganicProcess from '@/components/otherServices/OrganicSeo/OrganicProcess'
import OrganicService from '@/components/otherServices/OrganicSeo/OrganicService'
import PpcServiceForm from '@/components/otherServices/PpcDev/02PpcServiceForm'
import '../pay-per-click-management/style.css'
import OrgaincCounter from '@/components/otherServices/OrganicSeo/OrganicCounter'
import AddsPartner from '@/components/contactComponents/06AddsPartner'
import ServiceFaq from '@/components/serviceComponent/12ServiceFaq'
import { accordionData } from '@/utils/accordionData'
import OrganicStratergy from '@/components/otherServices/OrganicSeo/OrganicStratergy'
import OrganicQuality from '@/components/otherServices/OrganicSeo/OrganicQuality'
import OrganicDestination from '@/components/otherServices/OrganicSeo/OrganicDestination'
import OrganicSeoNeeds from '@/components/otherServices/OrganicSeo/OrganicSeoNeeds'
import CustomizeHome from '@/components/homeComponents/06CustomizeHome'

const page = () => {
  return (
    <div>
      <OrganicService/>
      <PpcServiceForm
        heading={"Supercharge Your Business with Our "}
        subHeading={"Organic SEO Services"}
        paragraph={"Our Organic SEO experts in Mohali work tirelessly to ensure your website ranks on the first page of search engine results. Through time-tested strategies, we bring you long-lasting results that increase your traffic and conversions organically. Let us help you maximize your online presence and outshine your competition."}
      />
      <OrgaincCounter/>
      <DeliverOrganic/>
      <OrganicStratergy/>
      <OrganicProcess/>
      <CustomizeHome
        heading="Industries We "
        subheading="Cater To"
        paragraph="From startups to established enterprises, we serve businesses across a wide range of industries."
      />
      <OrganicSeoNeeds/>
      <OrganicDestination/>
      <OrganicQuality/>
      <ServiceFaq accordionData={accordionData}/>
      <AddsPartner
      heading="Ready to unlock the full potential of your digital presence?"
      paragraph="Let WebGuruz help you in the journey."
      linkHref="/contact-us"
      linkText="Connect Now!"
      />
    </div>
  )
}

export default page
