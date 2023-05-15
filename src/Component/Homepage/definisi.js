import React from "react";
import { Link } from "react-scroll";

function Definisi() {
  return (
    <section className="pt-32 lg:px-10">
      <div className="flex flex-wrap justify-center">
        <div className="w-full pb-16 lg:w-1/2">
          <span className="before:block before:absolute before:w-[60px] before:h-[60px] before:bg-primary relative inline-block before:bottom-[40px] md:before:h-[70px] md:before:w-[55px] lg:before:bottom-8 lg:before:w-[150px] lg:before:h-[90px]">
            <span className="baznas before:block before:absolute before:w-[62px] before:h-[60px] before:left-[17px] before:bottom-[30px] before:bg-third inline-block md:before:w-[66px] lg:before:left-[70px] lg:before:bottom-[20px] lg:before:w-[100px] lg:before:h-[80px]">
              <h1 className="px-4 container text-3xl relative text-secondary font-bold mb-12 md:text-4xl lg:text-5xl lg:px-20">
                Baznas Banyumas
              </h1>
            </span>
          </span>
          <p className="px-4 text-secondary mb-12 font-normal text-sm lg:px-20 lg:text-base">
            Badan Amil Zakat Nasional (BAZNAS) merupakan badan resmi dan
            satu-satunya yang dibentuk oleh pemerintah berdasarkan SK DIRJEN
            BIMAS ISLAM No. DJ.III/499 Tahun 2016 Tentang Perubahan Kedua Atas
            Keputusan Direktur Jenderal Bimbingan Masyarakat Islam Nomor
            DJ.II/568 Tahun 2014 Tentang Pembentukan Badan Amil Zakat Nasional
            Kabupaten/Kota Se-Indonesia.
          </p>
          <Link
            to="#"
            className="mx-4 container bg-primary pt-2 pb-2 px-5 text-white font-bold rounded-xl lg:mx-20"
          >
            Selengkapnya
          </Link>
        </div>

        <div className="flex justify-center px-2 container lg:px-20 lg:w-1/2">
          <span className="before:block before:absolute before:w-[340px] before:h-[165px] before:-inset-1 before:bg-primary before:mt-7 before:-z-10 relative inline-block md:before:w-[500px] md:before:h-[265px] lg:before:w-[480px] lg:before:h-[280px]">
            <span className="before:block before:absolute before:w-[340px] before:h-[165px] before:-inset-1 before:bg-third before:mt-4 before:ml-3 before:-z-10 relative inline-block md:before:w-[500px] md:before:h-[265px] lg:before:w-[480px] lg:before:h-[280px]">
              <iframe
                src="https://www.youtube.com/embed/4wgywXXAMl8"
                title="Video Profil BAZNAS Kabupaten Banyumas"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-[360px] h-[165px] pl-5 md:w-[520px] md:h-[265px] lg:pl-5 lg:w-[500px] lg:h-[280px]"
              ></iframe>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Definisi;
