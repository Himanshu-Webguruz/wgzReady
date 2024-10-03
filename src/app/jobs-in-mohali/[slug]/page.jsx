import CareerJob from "@/components/careerComponents/07CareerJob"
import SingleCareerBanner from "@/components/careerSingleComponents/SingleCareerBanner"
import SingleExperience from "@/components/careerSingleComponents/SingleExperience"
import SingleJobDescription from "@/components/careerSingleComponents/SingleJobDescription"
import HomeTestimonial from "@/components/homeComponents/07HomeTestimonial"

const page=async({params})=>{
    const {slug}=params;

    const response =await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/wp-json/wp/v2/wgt-careerjobs?slug=${slug}`)
  const data= await response.json();
  // console.log(data[0].yoast_head_json.description);
  
  
    return(
        <>
        <SingleCareerBanner data={data} />
        <SingleExperience data={data} />
        <SingleJobDescription data={data}/>
        <HomeTestimonial/>
        <CareerJob/>
        </>
    )
}
export default page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/wp-json/wp/v2/wgt-careerjobs?slug=${slug}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data  = await response.json();

  return {
    title: data[0].yoast_head_json.title,
    description: data[0].yoast_head_json.description || data[0].yoast_head_json.title,
  };
}