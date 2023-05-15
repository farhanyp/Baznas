import React from 'react'
// kegiatan data
import { banyumasSejahtera } from "../../data";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";


function Banyumassejahtera() {
  return (
    <>
    <h1 className="text-4xl text-secondary font-bold pt-10 pb-5 pl-10 md:text-4xl lg:text-4xl">
        <p>Banyumas Sejahtera</p>
    </h1>
    <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >

        {banyumasSejahtera.map((item, index) => {
            const { image, title, desc } = item;
                return (
                <SwiperSlide key={index}>
                  <div className="w-[60rem] flex mx-auto p-10 ">
                    <div className="flex flex-col justify-around items-center">
                      <img className="w-[281px] h-[245px] rounded-xl" src={image} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                );
                })}
    </Swiper>

                        
    </>
  )
}

export default Banyumassejahtera