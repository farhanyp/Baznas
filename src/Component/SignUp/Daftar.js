import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

// import logo
import Logo from "../../assets/garuda.svg";

function Daftar() {
  const dataKosong = {
    nik: "",
    nama: "",
    alamat: "",
    hp: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(dataKosong);
  const [errMsg, setErrMsg] = useState("");
  const regex = /.+@.+\.[A-Za-z]+$/

  const handleSubmit = (event) => {
    alert("Data terkirim");
  };

  const handleInput = (e) => {
    const nama = e.target.name;
    const value = e.target.value;

    if(nama === "email"){
      if(regex.test(value)){
        setErrMsg("")
      }else{
        setErrMsg("Input Email tidak sesuai")
      }
    }

    setData({
      ...data,
      [nama]: value,
    });
  };

  return (
    <section className="pt-[120px] flex justify-evenly items-center">
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

      <div className="text-secondary px-[10%]">
        <h1 className="text-3xl font-bold mb-8">Daftar</h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="nik"
              value={data.nik}
              onChange={handleInput}
              className="font-medium flex w-[25rem] mb-2 py-3 px-3 rounded-lg border-2 border-gray-900"
              placeholder="NIK"
            />

            <input
              type="text"
              name="nama"
              value={data.nama}
              onChange={handleInput}
              className="font-medium flex w-[25rem] mb-2 py-3 px-3 rounded-lg border-2 border-gray-900"
              placeholder="Nama"
            />

            <input
              type="text"
              name="alamat"
              value={data.alamat}
              onChange={handleInput}
              className="font-medium flex w-[25rem] mb-2 py-3 px-3 rounded-lg border-2 border-gray-900"
              placeholder="Alamat Lengkap"
            />
            

            <input
              type="number"
              name="hp"
              value={data.hp}
              onChange={handleInput}
              className="font-medium flex w-[25rem] mb-2 py-3 px-3 rounded-lg border-2 border-gray-900"
              placeholder="No. Hp"
            />

            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleInput}
              className="font-medium flex w-[25rem] mb-2 py-3 px-3 rounded-lg border-2 border-gray-900"
              placeholder="Email"
            />
            <span className="text-red-500 mb-2">{errMsg}</span>

            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleInput}
              className="font-medium flex w-[25rem] mb-10 py-3 px-3 rounded-lg border-2 border-gray-900"
              placeholder="Password"
            />

            <input
              type="submit"
              value="Daftar"
              className=" font-semibold flex w-[25rem] mb-3 rounded-xl border-2 btn btn-md cursor-pointer"
              placeholder="Password"
            />
          </form>
          <p className="text-center">
            Belum punya akun?{" "}
            <Link to="/masuk" className="font-bold">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Daftar;
