import React from 'react'
import Header from '../Component/Homepage/Header'
import UPZ from '../Component/DaftarUPZ/Upz'
import Footer from "../Component/Homepage/Footer";
import Copyright from "../Component/Homepage/Copyright";

function DaftarUPZ() {
  return (
    <div id='daftarUPZ'>
        <Header/>
        <UPZ/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default DaftarUPZ