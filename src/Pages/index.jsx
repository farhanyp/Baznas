import React from "react";

import Header from "../Component/Homepage/Header";
import Hero from "../Component/Homepage/Hero";
import Definisi from "../Component/Homepage/definisi";
import Layanan from "../Component/Homepage/Layanan";
import Kegiatan from "../Component/Homepage/Kegiatan";
import Berita from "../Component/Homepage/Berita";
import Kontak from "../Component/Homepage/Kontak";
import Footer from "../Component/Homepage/Footer";
import Copyright from "../Component/Homepage/Copyright";

function Beranda() {
  return (
    <div id="beranda">
      <Header />
      <Hero />
      <Definisi />
      <Layanan />
      <Kegiatan />
      <Berita />
      <Kontak />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Beranda;
