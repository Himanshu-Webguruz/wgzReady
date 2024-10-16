'use client'
import india from "../../../public/images/india.png";
import uk from "../../../public/images/uk.png";
import usa from "../../../public/images/usa.png";
import AustraliaBig from "../../../public/images/aus.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
const addressdata = [
  {
    img: india,
    title: "India",
    para: "4th Floor, SM Heights, C-205, Phase 8 B, Sector 74 Mohali",
  },
  {
    img: uk,
    title: "UK",
    para: "11 Rydons Lane, Coulsdon, CR5 1SU, UK",
  },
  {
    img: usa,
    title: "USA",
    para: "6917 Hovingham Court Centreville va 20121",
  },
  {
    img: AustraliaBig,
    title: "Australia",
    para: " 31 Newmarket Parade, Mickleham, VIC, 3064,Australia",
  },
];

function Addresshome() {
  const pathname = usePathname();
  return (
   <>
   {pathname !== '/home2' && (
     <section className="adress-main">
     <div className="container">
       <div className="row">
         <div className="col-sm-12 col-xs-12 heading-main">
           <h2 className="color-wt pb-4">Our Address</h2>
         </div>
       </div>
       <div className="row ">
         {addressdata.map((addressconst, index) => (
           <div className="col col-sm-3 col-xs-12" key={index}>
             <div className="address-card">
               <Image src={addressconst.img}  alt="Image"/>
               <div className="content">
                 <h3>{addressconst.title}</h3>
                 <p>{addressconst.para}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </section>
   )}
   </>
  );
}

export default Addresshome;
