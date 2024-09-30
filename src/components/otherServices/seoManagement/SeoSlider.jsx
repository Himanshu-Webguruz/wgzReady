'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server side
  }

  return (
    <Swiper
      slidesPerView={5} // Default value for large screens
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        // when window width is >= 1200px
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">01</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">02</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">03</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">04</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">05</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">06</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-seo-process mb-5">
          <span className="number">01</span>
          <h3>Discovery</h3>
          <p>Let sit down and examine your current online positioning and discuss your business goals and targets.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
