import React from "react";

import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

// import logo
import Logo from "../../assets/garuda.svg";

import { Link } from "react-router-dom";

function Masuk() {
  return (
    <section className="pt-[120px] flex justify-evenly items-center">
      {/* Kiri */}
      <div className="text-secondary px-[10%]">
        <h1 className="text-4xl font-bold mb-8">Masuk</h1>
        <div className="">
          <label className="font-semibold flex w-[25rem] text-xl mb-2">
            Email:
          </label>
          <form>
            <input
              type="text"
              name="pengarang"
              className="font-semibold flex w-[25rem] mb-8 py-3 px-1 rounded-lg border-2 border-gray-900"
              placeholder="Email"
            />

            <label className="font-semibold flex w-[25rem] text-xl mb-2">
              Password:
            </label>
            <input
              type="text"
              name="pengarang"
              className="font-semibold flex w-[25rem] mb-20 py-3 px-2 rounded-lg border-2 border-gray-900"
              placeholder="Password"
            />

            <input
              type="submit"
              value="Masuk"
              className=" font-semibold flex w-[25rem] mb-3  rounded-xl border-2 border-gray-900 btn btn-md cursor-pointer"
            />
          </form>

          <p className="text-center">
            Belum punya akun?{" "}
            <Link to="/daftar" className="font-bold">
              Keluar
            </Link>
          </p>
        </div>
      </div>
      {/* Kanan */}
      <div className="flex flex-col w-full pt-24 pl-20 h-[100vh] bg-primary text-white">
        <div className="flex mb-10">
          <img src={Logo} className="w-[144px] h-[151px] mr-5" />
          <div className="my-auto font-bold">
            <h1 className="text-3xl">BAZNAS</h1>
            <h2 className="text-lg">Badan Amil Zakat Nasional</h2>
            <h2 className="text-xl tracking-wide">KABUPATEN BANYUMAS</h2>
          </div>
        </div>
        <p className="text-lg mb-16">
          Menjadi Badan Amil Zakat yang Profesional, Amanah, <br /> Menebar
          Manfaat, Menabur Rahmat, serta Memuzakkikan <br /> Mustahiq{" "}
        </p>
        <div>
          <h3 className="font-bold pb-5 text-2xl">Kontak</h3>
          <ul>
            <li className="pb-2 flex">
              <FaTwitterSquare className="h-5 w-5 mr-3" />
              <p>(0281)631698</p>
            </li>
            <li className="pb-2 flex">
              <FaFacebook className="h-5 w-5 mr-3" />
              <p> baznaskab.banyumas@baznas.go.id;</p>
            </li>
            <li className="pb-2 flex">
              <FaInstagram className="h-5 w-5 mr-3" />
              <p>@baznasbanyumas</p>
            </li>
            <li className="pb-2 flex">
              <FaWhatsapp className="h-5 w-5 mr-3" />
              <p>08123456789</p>
            </li>
            <li className="pb-2 flex">
              <FaWhatsapp className="h-5 w-5 mr-3" />
              <p className="w-[500px]">
                Jalan Masjid Nomor 9, Kelurahan Sokanegara, Kecamatan Purwokerto
                Timur, Kabupaten Banyumas, Provinsi Jawa Tengah
              </p>
            </li>
          </ul>
        </div>
      </div>
      ;
    </section>
  );
}

export default Masuk;
