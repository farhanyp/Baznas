import React from "react";

import Banner from "../../assets/banner-profil.svg";

function Hero() {
  return (
    <div className="pt-[120px] relative">
      <img src={Banner} />
      <p className="absolute text-primary font-bold text-4xl bottom-14 left-[35.5%]">KABUPATEN BANYUMAS</p>
    </div>
  );
}

export default Hero;
