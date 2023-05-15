import React from "react";
import {Link} from "react-router-dom";

import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

import Hijab from "../../assets/hijab.png";

const Wa = "https://wa.me/+6282243569561/?text=Hello";

function Kontak() {
  return (
    <section
      id="home"
      className="mt-32 pt-20 pb-32 lg:h-[85vh] flex items-center lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left Side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full pr-32">
            <img src={Hijab} />
          </div>
          {/* right side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Informasi Lanjut
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Hubungi Baznas Kabupaten Banyumas untuk mendapatkan informasi
              program dan informasi penyaluran bantuan. Klik tombol dibawah ini
              untuk menghubungi melalui whatsapp
            </p>

            <a href={Wa}><button className="btn btn-md px-4 bg-wa rounded-lg md:btn-lg transition-all">
              <FaWhatsapp className="mr-2 scale-125 text-lg px" />
              <p className="text-base font-semibold">whatsapp
              </p>
            </button></a>  

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kontak;
