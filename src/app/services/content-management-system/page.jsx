// export const dynamic = 'force-dynamic'
import '../../contact-us/contact.css'
import CmsBanner from '@/components/otherServices/cmsDev/01CmsBanner'
import CmsForm from '@/components/otherServices/cmsDev/02CmsForm'
import CmsWebServices from '@/components/otherServices/cmsDev/03CmsWebServices'
import CmsComprehensiveServices from '@/components/otherServices/cmsDev/04CmsComprehensiveServices'
import CmsAboutIt from '@/components/otherServices/cmsDev/05CmsAboutIt'
import CmsWebSolution from '@/components/otherServices/cmsDev/06CmsWebSolution'
import CmsDisplay from '@/components/otherServices/cmsDev/07CmsDisplay'
import CmsHireUsPage from '@/components/otherServices/cmsDev/08CmsHireUsPage'
import ProminentPrtnr from '@/components/otherServices/cmsDev/09ProminentPrtnr'
import Featuredblog from '@/components/homeComponents/09Featuredblog';
import CmsLogos from '@/components/otherServices/cmsDev/CmsLogos';
const page = () => {
  return (
    <>
     <CmsBanner/> 
     <CmsForm/>
     <CmsWebServices/>
     <CmsComprehensiveServices/>
     <CmsAboutIt/>
     <CmsWebSolution/>
     <CmsDisplay/>
     <CmsHireUsPage/>
     <ProminentPrtnr/>
     <CmsLogos/>
     <Featuredblog/>
    </>
  )
}

export default page
