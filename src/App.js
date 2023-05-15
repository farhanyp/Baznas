import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./Pages/index";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/LogIn";
import Profil from "./Pages/Profil";
import Kegiatan from "./Pages/Kegiatan";
import DaftarUPZ from "./Pages/DaftarUPZ";
import Muzaki from "./Pages/Muzaki";
import Mustahiq from "./Pages/Mustahiq";

import "swiper/css/bundle";
import Laporan from "./Pages/Laporan";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Beranda />} />
        <Route exact path="/daftar" element={<SignUp />} />
        <Route exact path="/masuk" element={<Login />} />
        <Route exact path="/profil" element={<Profil />} />
        <Route exact path="/kegiatan" element={<Kegiatan />} />
        <Route exact path="/daftarUPZ" element={<DaftarUPZ />} />
        <Route exact path="/muzaki" element={<Muzaki />} />
        <Route exact path="/mustahiq" element={<Mustahiq />} />
        <Route exact path="/laporan" element={<Laporan />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
