import LocalSeoBanner from '@/components/otherServices/localSeo/01LocalSeoBanner'
import PpcServiceForm from '@/components/otherServices/PpcDev/02PpcServiceForm'
import React from 'react'
import '../pay-per-click-management/style.css'
import LocalSeoSearch from '@/components/otherServices/localSeo/02LocalSeoSearch'

import LocalServiceSeo from '@/components/otherServices/localSeo/03LocalServiceSeo'
import './style.css'
import IncreasedVisiblitySeo from '@/components/otherServices/localSeo/IncreasedVisiblitySeo'
import BusinessLocalService from '@/components/otherServices/localSeo/BusinessLocalService'
import CounterHome from '@/components/homeComponents/02CounterHome'
import ServiceFaq from '@/components/serviceComponent/12ServiceFaq'
import { accordionData } from '@/utils/accordionData'
import AddsPartner from '@/components/contactComponents/06AddsPartner'
import LocalSeoCompany from '@/components/otherServices/localSeo/LocalSeoCompany'

const page = () => {
  return (
    <>
      <LocalSeoBanner/>
      <PpcServiceForm
      heading={"Realize the true potential of your website with our "}
      subheading={"expert local SEO services!"}
      paragraph={"With over a decade of experience, WebGuruz helps businesses dominate search engines through strategic, results-oriented SEO services. Our innovative approaches ensure you stay ahead of the competition, no matter the industry."}
      />
      <LocalSeoSearch/>
      <LocalSeoCompany/>
      <LocalServiceSeo/>
      <IncreasedVisiblitySeo/>
      <BusinessLocalService/>
      <CounterHome/>
      <ServiceFaq accordionData={accordionData}/>
      <AddsPartner
        heading="Ready to enhance your local search presence?"
        paragraph="Contact WebGuruz today for expert local SEO services. We’ll help you rank higher and reach your local customers faster!"
        linkHref="/contact-us"
        linkText="Connect Now!"
      />
    </>
  )
}

export default page
