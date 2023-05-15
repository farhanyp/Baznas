import React from 'react'

import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

function Muzaqi() {
  return (
    <>
<section className="pt-40 pb-10 lg:mx-40">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="flex justify-around mb-16 mx-auto w-full">
                <span className="before:block before:absolute before:w-[200px] before:h-[16px] before:px-auto before:left-48 before:bg-primary relative items-center flex lg:before:-left-60">
                  <span className="after:block after:absolute after:w-[200px] after:h-[16px] after:px-auto after:right-48 after:bg-third relative justify-center items-center flex lg:after:-right-60">
                    <h1 className="text-4xl text-center relative text-secondary font-bold md:text-4xl lg:text-5xl">
                      <p>Muzaki</p>
                    </h1>
                  </span>
                </span>
              </div>
            <div className='w-[60rem] mx-auto bg-secondary mb-5'>
                <div className='py-10 px-8 text-white font-bold text-lg'>
                <p className='text-justify'>Layanan Konter zakat adalah layanan setoran tunai untuk berzakat, berinfak atau bersedekah dan dana sosial keagamaan lainnya (DSKL), yang bertempat di Kantor BAZNAS Kabupaten Banyumas atau di Unit Pengumpul Zakat (UPZ) dinas/instansi Se-Kabupaten Banyumas.</p><br/>
                <p>Muzaki atau munfiq bisa mendatangi langsung ke konter layana zakat BAZNAS Kabupaten Banyumas (Jalan Masjid No. 9 Purwokerto/Sebelah Barat Alun-alun Purwokerto), pada hari dan jam kerja.</p>
                </div>
              </div>
            </div>
            <div className='w-[60rem] mx-auto bg-secondary '>
                <div className='py-10 px-8 text-white font-bold text-lg'>
                <p className='text-justify'>Layanan jemput zakat adalah layanan diperuntukkan untuk muzakki/munfiq UPZ ataupun perorangan, layanan ini diprioritaskan untuk muzaki/munfiq di dalam Kota Purwokerto.</p><br/>
                <p>Muzaki/munfiq menghubungi nomor layanan BAZNAS Kab. Banyumas sbb:</p>
                <ul className="flex flex-col items-start pl-10 pt-5">
                    <li className="pb-2 flex">
                    <AiOutlinePhone className="rotate-90 h-5 w-5 mr-3" />
                    <p>(0281)631698</p>
                    </li>
                    <li className="pb-2 flex">
                    <FaWhatsapp className="h-5 w-5 mr-3" />
                    <p>0822-4356-9561</p>
                    </li>
                </ul>
                <p>Note: Hanya menerima chating pada Hari & Jam Kerja</p>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Muzaqi