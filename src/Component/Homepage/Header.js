import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDropdown } from "@react-icons/all-files/io/IoIosArrowDropdown";
import { CgMenuGridO } from "@react-icons/all-files/cg/CgMenuGridO";
import { VscAccount } from "@react-icons/all-files/vsc/VscAccount";
import { RiShutDownLine } from "@react-icons/all-files/ri/RiShutDownLine";

// import Component
import Logo from "../../assets/logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import fotoProfil from "../../assets/fotoProfil.svg";

function Header() {
  let isLogin;
  let isPopUp;

  const [bg, setBg] = useState(false);
  const [login, setLogin] = useState(false);
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const togglePopUp = () => {
    if (popup === true) {
      setPopup(false);
      console.log("popup: " + popup);
    } else {
      setPopup(true);
      console.log("popup: " + popup);
    }
  };

  if (login) {
    isLogin = (
      <div className={"flex items-center"}>
        <div className="hidden lg:ml-10 cursor-pointer mr-6 lg:block">
          <img src={fotoProfil} />
        </div>
        <div className="hidden cursor-pointer text-primary rounded-lg  lg:block">
          <p>Reza iqbal</p>
        </div>
        <div className="hidden text-primary rounded-lg relative  lg:block">
          <button onClick={togglePopUp}>
            <IoIosArrowDropdown className="ml-5 scale-150" />
          </button>
          <div
            className={`${
              popup ? "hidden" : "visible"
            } border-2 border-b-gray-200 shadow-xl bg-white fixed top-24 right-10 py-4 px-4 transition-all duration-500`}
          >
            <ul className="text-le">
              <li className="flex items-center mb-3 cursor-pointer">
                <CgMenuGridO className="mr-2 scale-110" />
                My Dashboard
              </li>
              <li className="flex items-center mb-3 cursor-pointer">
                <VscAccount className="mr-2 scale-110" />
                Profile
              </li>
              <li className="flex items-center text-red-700 font-bold cursor-pointer">
                <RiShutDownLine className=" mr-2 scale-110" />
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    isLogin = (
      <div className={"flex items-center"}>
        <div className="hidden lg:ml-10 cursor-pointer mr-6 lg:block">
          <button>
            <Link to="/masuk">Masuk</Link>
          </button>
        </div>
        <div className="hidden bg-primary cursor-pointer text-white rounded-lg pt-2 pb-2 pl-6 pr-6 lg:block">
          <button>
            <Link to="/daftar">Daftar</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <header
      className={`${
        bg ? "bg-white border-b-2 h-[120px]" : "bg-white h-32"
      } flex items-center fixed top-0 w-full z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between font-medium">
        {/* Logo */}
        <a href="#">
          <img src={Logo} className=" lg:mr-10"></img>
        </a>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/*  Login */}
        {isLogin}

        {/* nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;
