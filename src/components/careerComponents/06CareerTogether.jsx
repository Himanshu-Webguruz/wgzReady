import React from "react";
import Image from "next/image";
// import Together1 from "../../../public/images/careerimages/get-together-img-1.webp";
// import Together2 from "../../../public/images/careerimages/get-together-new-2.webp";
// import Together3 from "../../../public/images/careerimages/get-together-new-3.webp";
// import Together4 from "../../../public/images/careerimages/get-together-img-4.jpg";
// import Together5 from "../../../public/images/careerimages/get-together-new-5.webp";
// import Together6 from "../../../public/images/careerimages/get-together-img-6.jpg";
// import Together7 from "../../../public/images/careerimages/get-together-img-7.jpg";
// import Together8 from "../../../public/images/careerimages/get-together-new-8.webp";


import Together1 from "../../../public/images/careerimages/newImages/Img1.jpg";
import Together2 from "../../../public/images/careerimages/get-together-new-2.webp";
import Together3 from "../../../public/images/careerimages/newImages/Img3.JPG";
import Together4 from "../../../public/images/careerimages/newImages/Img2.JPG";
import Together5 from "../../../public/images/careerimages/get-together-new-5.webp";
import Together6 from "../../../public/images/careerimages/newImages/prevImg.JPG";
import Together7 from "../../../public/images/careerimages/newImages/LastestImg.JPG";
import Together8 from "../../../public/images/careerimages/newImages/Img4.jpg";



const CareerTogether = () => {
  return (
    <>
      <section className="together-main py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
                Get <span>Together</span>
              </h2>
              <p>
                We don&apos;t hesitate in conducting business parties because we
                believe that it is appropriate just about whenever you have
                something to celebrate,whether it&apos;s an employee&apos;s
                birthday or the news of a huge sale. Wheneverwe get the
                opportunity for something&apos;s coming up, we are always ready
                to honor it with celebration.
              </p>
            </div>
          </div>
          <div className="row together-row">
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together1} alt="Together1" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together2} alt="Together2" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together5} alt="Together5" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together4} alt="Together4" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together7} alt="Together7" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together6} alt="Together6" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together3} alt="Together3" />
            </div>
            <div className="col-sm-3 col-xs-12 image">
              <Image src={Together8} alt="Together8" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerTogether;
