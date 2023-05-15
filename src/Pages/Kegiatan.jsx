import React from 'react'
import Header from '../Component/Homepage/Header'
import Aktifitas from "../Component/Kegiatan/Aktifitas"
import Footer from "../Component/Homepage/Footer";
import Copyright from "../Component/Homepage/Copyright";

function Kegiatan() {
  return (
    <div id='kegiatan'>
    <Header/>
    <Aktifitas/>
    <Footer/>
    <Copyright />
    </div>
  )
}

export default Kegiatan