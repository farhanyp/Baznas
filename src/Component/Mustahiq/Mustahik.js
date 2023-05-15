import React from 'react'
import BTB from './BTB';
import LAB from './LAB';

function Mustahik() {
    return (
        <section id="layanan" className="pt-40 pb-10 lg:mx-40">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="flex justify-around mb-16 mx-auto w-full">
                <span className="before:block before:absolute before:w-[200px] before:h-[16px] before:px-auto before:left-48 before:bg-primary relative items-center flex lg:before:-left-60">
                  <span className="after:block after:absolute after:w-[200px] after:h-[16px] after:px-auto after:right-48 after:bg-third relative justify-center items-center flex lg:after:-right-60">
                    <h1 className="text-4xl text-center relative text-primary font-bold md:text-4xl lg:text-5xl">
                      <p>MUSTAHIQ</p>
                    </h1>
                  </span>
                </span>
              </div>
              <LAB/>
              <BTB/>    
            </div>
          </div>
        </section>
      );
}

export default Mustahik