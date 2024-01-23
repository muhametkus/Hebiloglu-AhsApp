import React, {useContext, useEffect, useState } from 'react'
import UstDiv from "../../../components/UstDiv/UstDiv";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { Button } from 'antd';



const MelaminKapilar = () => {



  return (
    <div className="">
      <UstDiv SayfaAdi="MELAMİN KAPILAR" />
      <div className="flex flex-row flex-wrap pb-16 gap-x-20 gap-y-14 justify-center 2xl:w-[1536px] w-[80%] md:w-[95%] mx-auto">

      
        <div   className="w-[240px] h-[600px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center mb-10">
          <Link to="/urunler/duz-melamin-kapilar">
          <h3 className='text-center text-2xl my-3'>DÜZ MELAMİN</h3>

            <img
              className="resim-hover2 w-[240px] rounded-tl-lg rounded-tr-lg mb-5"
              src="/img/kapilar/Melaminler/duzMelaminler/h-fugali.png"
              alt="Ozigo Melamin Kapı"
            />
          
          <button
            className="btn mx-auto rounded-none text-lg text-white bg-slate-700 mb-5 h-[80px] hover:bg-orange-500  hover:text-black flex "
          >
            MODELLERİ İNCELE
            
          </button>
          </Link>
        </div>

        <div   className="w-[242px] h-[600px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center mb-10">
          <Link to="/urunler/gobekli-melamin-kapilar">
            <h3 className='text-center text-2xl my-3'>GÖBEKLİ MELAMİN</h3>
            <img
              className="resim-hover2 w-[242px] rounded-tl-lg rounded-tr-lg mb-5"
              src="/img/kapilar/Melaminler/gobekliMelaminler/paris.png"
              alt="Ozigo Melamin Kapı"
            />
          
          <button
            className="btn mx-auto rounded-none text-lg text-white bg-slate-700 mb-5 h-[80px] hover:bg-orange-500  hover:text-black flex "
          >
            MODELLERİ İNCELE
            
          </button>
          </Link>
        </div>
        

      </div>
      
    </div>
  );
};

export default MelaminKapilar;
