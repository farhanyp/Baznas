import React from "react";

// import berita
import { berita } from "../../data";

import beritaBaznas from "../../assets/berita-baznas.png";

function Berita() {
  return (
    <section className="pt-40">
      <div className="flex flex-wrap justify-center lg:pl-10">
        <div className="w-full">
          <span className="before:block before:absolute before:w-[140px] before:left-80 before:h-[16px] before:bg-primary relative inline-block  before:top-0 md:before:h-[16px] md:before:w-[140px] lg:before:left-[30rem] lg:before:w-[140px] lg:before:h-[16px]">
            <span className="baznas before:block before:absolute before:w-[140px] before:h-[16px] before:left-[25rem] before:top-[0.5rem] before:bg-third inline-block md:before:w-[140px] lg:before:left-[35rem] lg:before:top-[.5rem] lg:before:w-[140px] lg:before:h-[16px]">
              <h1 className="px-4 container text-4xl relative text-secondary font-bold md:text-4xl lg:text-5xl lg:px-20">
                Berita Terkini
              </h1>
            </span>
          </span>
        </div>

        <div>
          <div className="flex flex-wrap justify-center items-center px-20">
            <div className="scale-75 cursor-pointer relative w-full lg:w-1/2">
              <img
                src={beritaBaznas}
                className=" rounded-xl shadow-2xl hover:brightness-50 transition duration-500"
              />
              <div className="px-5 absolute left-0 right-0 bottom-20 text-2xl font-medium text-white text-start">
                <p>
                  PENGUMUMAN HASIL SELEKSI ADMINISTRASI PIMPINAN BAZNAS
                  KAB.BANYUMAS
                </p>
                <p>2022-2027</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:w-1/2">
              {berita.map((item, index) => {
                return (
                  <div
                    className="scale-90 cursor-pointer relative rounded-xl"
                    key={index}
                  >
                    <img
                      src={item.image}
                      className="brightness-50 shadow-2xl rounded-xl"
                    />
                    <div className="pl-[12rem] justify-end absolute top-5 text-white text-xl lg:pl-[14rem] lg:top-14 lg:text-2xl font-medium text-start">
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Berita;
