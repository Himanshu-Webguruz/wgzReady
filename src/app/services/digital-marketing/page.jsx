// export const dynamic = 'force-dynamic'

import Service from '@/components/serviceComponent/01ServiceBanner'
import ExpertManaged from '@/components/serviceComponent/02ExpertManaged'
import BoostRanking from '@/components/serviceComponent/03BoostRanking'
import DigitalMarketing from '@/components/serviceComponent/04DigitalMarketing'
import ProcessStep from '@/components/serviceComponent/05ProcessStep'
import ServiceTools from '@/components/serviceComponent/06ServiceTools'
import WhyChoose from '@/components/serviceComponent/07WhyChoose'
import IndustriesServe from '@/components/serviceComponent/08IndustriesServe'
import CreativePortfolio from '@/components/serviceComponent/09CreativePortfolio'
import AddsPartner from '@/components/serviceComponent/11AddsPartner'
import TeamService from '@/components/serviceComponent/10TeamService'
import ServiceFaq from '@/components/serviceComponent/12ServiceFaq'
import CounterHome from '@/components/homeComponents/02CounterHome'
import Featuredblog from '@/components/homeComponents/09Featuredblog'

const page = () => {
  return (
    <>
      <Service/>
      <ExpertManaged/> 
      <BoostRanking/>
      <DigitalMarketing/>
      <ProcessStep/>
      <ServiceTools/>
      <WhyChoose/>
      <IndustriesServe/>
      <CreativePortfolio/>
      <CounterHome/>
      <TeamService/>
      <ServiceFaq/>
      <AddsPartner/>
      <Featuredblog/>
    </>
  )
}

export default page
