import React from "react";

// kegiatan data
import { kegiatan } from "../../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const KegiatanSlider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {kegiatan.map((item, index) => {
          const { image, title, desc } = item;
          return (
            <SwiperSlide key={index}>
              <div className="w-[60rem] mx-auto p-10 text-justify border-4">
                <div className="flex justify-center">
                  <img className="w-10 h-10 mr-4" src={image} alt="" />
                  <h5 className="text-2xl mb-8 font-bold">{title}</h5>
                </div>
                <div>
                  <p className="text-lg mb-10">{desc}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default KegiatanSlider;
