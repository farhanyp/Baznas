import React from "react";

// Import image

// Import components
import { layanan } from "../../data";

function Layanan() {
  return (
    <section id="layanan" className="pt-32 pb-10 lg:mx-40">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex justify-around mb-16 mx-auto w-full">
            <span className="before:block before:absolute before:w-[140px] before:h-[16px] before:px-auto before:left-48 before:bg-primary relative items-center flex lg:before:left-60">
              <span className="after:block after:absolute after:w-[140px] after:h-[16px] after:px-auto after:right-48 after:bg-third relative justify-center items-center flex lg:after:right-60">
                <h1 className="ext-4xl relative text-secondary font-bold md:text-4xl lg:text-5xl">
                  Layanan
                </h1>
              </span>
            </span>
          </div>

          <div className="flex flex-wrap justify-around w-full  text-center">
            {layanan.map((item, index) => {
              return (
                <div className="group text-center scale-90 cursor-pointer lg:scale-100">
                  <div className="relative flex justify-center items-center">
                    <img src={item.image} />
                    <p className="scale-0 group-hover:scale-100 text-2xl absolute text-white items-center transition-all duration-300 font-bold">
                      {item.deskripsi}
                    </p>
                    <div className="group-hover:scale-0 text-3xl font-bold absolute w-full text-white items-center transition-all duration-300">
                      <p>{item.judul}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layanan;
