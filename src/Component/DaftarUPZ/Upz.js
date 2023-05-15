import React from 'react'
import List from './List';
import { upz } from '../../data'

function Upz() {
    return (
        <section id="layanan" className="pt-40 pb-10 lg:mx-40">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="flex justify-around mb-16 mx-auto w-full">
                <span className="before:block before:absolute before:w-[200px] before:h-[16px] before:px-auto before:left-48 before:bg-primary relative items-center flex lg:before:-left-60">
                  <span className="after:block after:absolute after:w-[200px] after:h-[16px] after:px-auto after:right-48 after:bg-third relative justify-center items-center flex lg:after:-right-60">
                    <h1 className="text-4xl text-center relative text-secondary font-bold md:text-4xl lg:text-5xl">
                      <p>DAFTAR UPZ</p>
                    </h1>
                  </span>
                </span>
              </div>
              <table className='shadow-2xl border-2 text-table font-bold w-full text-center mx-auto'>
                <thead className='border-2 '>
                    <tr>
                        <td className='py-3 px-3'><p className='vl'>No</p></td>
                        <td className='py-3 px-3'><p className='vl'>Dinas/Instansi</p></td>
                        <td className='py-3 px-3'><p className='vl'>Alamat</p></td>
                        <td className='py-3 px-3'><p>Nama Pengelola</p></td>
                    </tr>
                </thead>
                <tbody>
                    {upz.map((item)=>(
                        <List item={item}/>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      );
}

export default Upz