import React, {useEffect, useState} from "react";
import { Link } from "react-scroll";

import Profile from "../Component/Profile/Profile";
import Hero from "../Component/Profile/Hero";
import Sejarah from "../Component/Profile/Sejarah";
import LogoBaznas from "../Component/Profile/LogoBaznas";
import VisiBaznas from "../Component/Profile/VisiBaznas";
import MisiBaznas from "../Component/Profile/MisiBaznas";
import StrukturBaznas from "../Component/Profile/StrukturBaznas";
import Footer from "../Component/Homepage/Footer";
import Copyright from "../Component/Homepage/Copyright";

function Profil() {

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>{
      return window.scrollY > 400 ? setBg(true) : setBg(false);
    })
  });
  
  return (
    <div id="profil">
      <Profile />
      <Hero />
      <div className="flex container py-12" >
        <div className="mr-16 w-[2500px] relative ">
          <ul className= {`${bg ? "fixed top-[17rem] " : "block"} transition-all duration-300 text-center border-2 rounded-lg border-black font-semibold `} >
          <li className="py-2 px-2 border-b-2 border-black"><Link className="cursor-pointer hover:underline" to="sejarah">Sejarah Singkat</Link></li>
          <li className="py-2 px-2 border-b-2 border-black"><Link className="cursor-pointer hover:underline" to="logo">logo Baznas</Link></li>
          <li className="py-2 px-2 border-b-2 border-black"><Link className="cursor-pointer hover:underline" to="visi">Visi dan Misi </Link></li>
          <li className="py-2 px-2"><Link className="cursor-pointer hover:underline" to="sturktur">Struktur BAZNAS Kab. Banyumas</Link></li>
          </ul>
        </div>
        <div>
          <Sejarah/>
          <LogoBaznas/>
          <VisiBaznas/>
          <MisiBaznas/>
          <StrukturBaznas/>
        </div>
      </div>
      <Footer/>
      <Copyright />
    </div>
  );
}

export default Profil;
