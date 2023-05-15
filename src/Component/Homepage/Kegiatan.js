import React from "react";

import KegiatanSlider from "./KegiatanSlider";

function Kegiatan() {
  return (
    <section className="pt-32 pb-44">
      <div className="container">
        <div className="flex justify-around mb-10 mx-auto w-full">
          <h1 className="text-4xl relative text-secondary font-bold">
            Kategori Kegiatan
          </h1>
        </div>
        <div className="h-36 px-10 container relative">
          <KegiatanSlider />
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
