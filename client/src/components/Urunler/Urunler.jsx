import React from "react";
import "./Urunler.css";
import { CaretRightOutlined, RightCircleFilled, RightCircleOutlined, RightOutlined } from '@ant-design/icons';

const Urunler = () => {
  return (
    <div className="w-full bg-gray-800 mx-auto pt-48 pb-8 sm:pt-40 sm:py-12">
      <div className="2xl:w-[1536px] w-[85%] md:w-[95%] sm:w-full flex flex-col justify-between mx-auto sm:justify-center sm:gap-y-5">
        <div className="doors flex w-full justify-evenly sm:flex-col  sm:justify-center gap-y-5 mb-3">

            <div className="w-[246.9px] h-[600px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center"><a href="/melamin-kapilar"> 
              <img className="resim-hover2 w-[246.9px] opacity-85 rounded-tl-lg rounded-tr-lg" src="/img/kapilar/Melaminler/duzMelaminler/h-fugali2.jpg" alt="Melamin Kapı" />
              <h3 className="text-center text-2xl my-3 text-white">MELAMİN KAPI</h3></a>
              <a href="/melamin-kapilar" className="btn mx-auto rounded-none text-lg bg-orange-500 mb-2 incele-buton hidden sm:flex ">Modelleri İncele<CaretRightOutlined  /></a>
            </div>

            <div className="w-[240px] h-[600px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center "><a href="/lake-kapilar"> 
              <img className="resim-hover2 w-[240px] rounded-tl-lg rounded-tr-lg" src="./img/kapilar/Lakeler/LuksLakeler/lakeluks1-d.jpg" alt="Lüks Lake Kapı" />
              <h3 className="text-center text-2xl my-3 text-white">LAKE KAPI</h3></a>
              <a href="/lake-kapilar" className="btn mx-auto rounded-none text-lg bg-orange-500 mb-2 incele-buton hidden sm:flex ">Modelleri İncele<CaretRightOutlined  /></a>
            </div>


            <div className="w-[240px] h-[600px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center"><a href="/amerikan-kapilar"> 
              <img className="resim-hover2 w-[240px] rounded-tl-lg rounded-tr-lg" src="./img/kapilar/Amerikan/SaraAmerikan.jpg" alt="Lüks Lake Kapı" />
              <h3 className="text-center text-2xl my-3 text-white">AMERİKAN KAPI</h3></a>
              <a href="/amerikan-kapilar" className="btn mx-auto rounded-none text-lg bg-orange-500 mb-2 incele-buton hidden sm:flex ">Modelleri İncele<CaretRightOutlined  /></a>
            </div>




        </div>

        <hr className="my-0 py-0 sm:hidden" />
        
        <div className="doors flex w-full justify-evenly sm:flex-col  sm:justify-center gap-y-5 mt-16">

            <div className="w-[350px] h-[470px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center"><a href="/mutfak-dolaplari">
              <img className="resim-hover2 w-[350px] rounded-tl-lg rounded-tr-lg" src="./img/mutfak/mutfak.webp" alt="Mutfak Dolapları" />
              <h3 className="text-center text-2xl my-3 text-white">MUTFAK DOLAPLARI</h3></a>
              <a href="/mutfak-dolaplari" className="btn mx-auto rounded-none text-lg bg-orange-500 mb-2 incele-buton hidden sm:flex ">Modelleri İncele<CaretRightOutlined  /></a>
            </div>

            <div className="w-[350px] h-[470px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center"><a href="/banyo-dolaplari">
              <img className="resim-hover2 w-[288px] rounded-tl-lg rounded-tr-lg" src="./img/banyolar/banyo1.jpg" alt="Mutfak Dolapları" /> 
              <h3 className="text-center text-2xl my-3 text-white">BANYO DOLAPLARI</h3></a>
              <a href="/banyo-dolaplari" className="btn mx-auto rounded-none text-lg bg-orange-500 mb-2 incele-buton hidden sm:flex ">Modelleri İncele<CaretRightOutlined  /></a>
            </div>

            


        </div>
        
      </div>
      
    </div>
  );
};

export default Urunler;
