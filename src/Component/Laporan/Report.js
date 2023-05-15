import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';

function Report() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage (offset){
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function backPage(){
    changePage(-1)
  }

  function nextPage(){
    changePage(+1)
  }

    return (
        <section id="layanan" className="pt-40 pb-10 lg:mx-40">
          <div className="container">
            <div className="flex flex-wrap items-center">
              <div className="flex justify-around mb-16 mx-auto w-full">
                <span className="before:block before:absolute before:w-[200px] before:h-[16px] before:px-auto before:left-48 before:bg-primary relative items-center flex lg:before:-left-60">
                  <span className="after:block after:absolute after:w-[200px] after:h-[16px] after:px-auto after:right-48 after:bg-third relative justify-center items-center flex lg:after:-right-60">
                    <h1 className="text-4xl text-center relative text-primary font-bold md:text-4xl lg:text-5xl">
                      <p>LAPORAN KEUANGAN BAZNAS </p><br/>
                      <p>TAHUN 2021 AUDITED</p>
                    </h1>
                  </span>
                </span>
              </div>
              <div className='flex mx-auto items-center'>
                <Document  file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page className="border-4 border-b-gray-900" height="550" pageNumber={pageNumber}></Page>
                </Document>
                <div className='flex flex-col ml-5 justify-center items-center'>
                  <p className='block'>Page {pageNumber} from {numPages}</p> <br/>
                  {pageNumber > 1 && <button className='py-3 px-5 bg-secondary text-white rounded-lg' onClick={backPage}>Halaman sebelumnya</button>}
                  {pageNumber < numPages && <button className='py-3 px-6 mt-4 bg-secondary text-white rounded-lg' onClick={nextPage}>Halaman selanjutnya</button>}
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Report