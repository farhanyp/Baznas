import React from 'react'
import Logo from "../../assets/LogoBaznasProfil.svg";

function LogoBaznas() {
  return (
    <div id='logo' className='pt-14 '>
        <h1 className='text-3xl font-bold text-primary pb-3'>LOGO BAZNAS</h1>
        <img src={Logo} className="mx-auto"/>
        <p className='text-center w-[700px] mx-auto'>Logo BAZNAS terdiri dari Lambang Burung Garuda Pancasila dengan tulisan BAZNAS dibawahnya dan Badan Amil Zakat Nasional.</p>
    </div>
  )
}

export default LogoBaznas