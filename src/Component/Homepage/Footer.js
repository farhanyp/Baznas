import React from "react";

import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone";
import { FiMapPin } from "@react-icons/all-files/fi/FiMapPin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiOutlineCheckSquare } from "@react-icons/all-files/ai/AiOutlineCheckSquare";

import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <section className="pt-32 pb-32 bg-primary text-white">
      <div className="flex container justify-evenly">
        <div className=" flex-col items-center">
          <div className="flex justify-center items-center h-[150px] w-[150px] bg-third rounded-full mx-auto">
            <img src={Logo} className="" />
          </div>
          <p className="w-[400px] text-center">
            Menjadi Badan Amil Zakat yang Profesional, Amanah, Menebar Manfaat,
            Menabur Rahmat, serta Memuzakkikan Mustahiq
          </p>
        </div>

        <div className="pl-10">
          <h3 className="font-bold pb-5 text-2xl">Kontak</h3>
          <ul className="w-[26rem]">
            <li className="pb-2 flex">
              <AiOutlinePhone className="rotate-90 h-5 w-5 mr-3" />
              <p>(0281)631698</p>
            </li>
            <li className="pb-2 flex">
              <AiOutlineMail className="h-5 w-5 mr-3" />
              <p> baznaskab.banyumas@baznas.go.id;</p>
            </li>
            <li className="pb-2 flex">
              <FaInstagram className="h-5 w-5 mr-3" />
              <p>@baznasbanyumas</p>
            </li>
            <li className="pb-2 flex">
              <FaWhatsapp className="h-5 w-5 mr-3" />
              <p>0822-4356-9561</p>
            </li>
            <li className="pb-2 flex">
              <FiMapPin className="h-16 w-16 mr-3" />
              <p>Jalan Masjid Nomor 9, Kelurahan Sokanegara, Kecamatan Purwokerto
            Timur, Kabupaten Banyumas, Provinsi Jawa Tengah</p>
            </li>
          </ul>
        </div>

        <div className="pl-10">
          <h2 className="font-bold text-2xl pb-5">Layanan Publik</h2>
          <ul>
            
            <li className="pb-2">
              <a href="https://baznas.go.id">BAZNAS NASIONAL</a>
            </li>
            <li className="pb-2">
              <a href="https://baznas.go.id/v2/profil-ppid">PPID BAZNAS</a>
            </li>
            <li className="pb-2">
              <a href="https://baznas.go.id/v2/pustaka">PUSTAKA BAZNAS</a>
            </li>
            <li className="pb-2 flex">
              <AiOutlineCheckSquare className="h-5 w-5 mr-3 bg-white text-black" />
              <p>Kebijakan Privasi</p>
            </li>
            <li className="pb-2 flex">
              <AiOutlineCheckSquare className="h-5 w-5 mr-3 bg-white text-black" />
              <p>Syarat & Ketentuan</p>
            </li>
            <li className="pb-2 flex">
              <AiOutlineCheckSquare className="h-5 w-5 mr-3 bg-white text-black" />
              <p>FAQ</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
