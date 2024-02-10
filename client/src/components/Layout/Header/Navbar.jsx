import React, { useContext, useEffect, useState} from "react";
import {
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { NavbarContext } from "../../../context/NavbarProvider"; // NavbarProvider'ın bulunduğu dosya yolu
import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {

  let Links = [
    { name: "ANASAYFA", link: "/" },
    { name: "İLETİŞİM", link: "/iletisim" },
    { name: "HAKKIMIZDA", link: "/hakkimizda" },
    { name: "ÜRÜNLER", link: "/urunler" },
  ];

  const { mobilMenu, setMobilMenu, mobilMenuDegistir,isVisible, setIsVisible } = useContext(NavbarContext);

  const [genislik, setGenislik] = useState(window.innerWidth);

  useEffect(() => {
    // Pencere boyutu değiştiğinde yeniden genişlik değerini al
    window.addEventListener('resize', genislikDegisikligi);
    
    // Temizlik fonksiyonu
    return () => {
      window.removeEventListener('resize', genislikDegisikligi);
    };
  }, []);
  // Genişlik değerini güncelleme
  const genislikDegisikligi = () => {
    setGenislik(window.innerWidth);
  };



  if (mobilMenu&&(genislik<720)) {
    document.body.style.overflow="hidden";  
  }
  else{
    document.body.style.overflow="auto";  

  }


  return (
    <div className={`w-full bg-slate-800 flex items-center fixed z-50  ${isVisible?"":"sm:top-0 "} ${mobilMenu?"sm:top-0":"sm:flex"} shadow-2xl `}>
      <div className="h-[70px] 2xl:w-[1536px] w-[85%] md:w-[95%] sm:[95%] mx-auto flex justify-between items-center ">
        <div className={`logo-div font-light w-[250px] ml-2 text-2xl ${mobilMenu?"sm:hidden":"sm:flex"}`}>          <a href="/"><img className="w-full" src="/img/logo/logo.png" alt="logo" /></a>
</div>
        <div className="flex items-center sm:justify-start sm:absolute sm:w-full z-40 sm:bg-black sm:bg-opacity-75 sm:left-0 sm:top-0">
        
          <ul className={`flex items-center sm:flex-col sm:z-50 sm:py-5 sm:px-12 sm:bg-slate-800 sm:h-screen  ${mobilMenu?"sm:flex ":"sm:hidden "} ${isVisible?"":""}`}>
            
              <li className="text-lg sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >ANASAYFA
                </Link>
              </li>
              <li className="text-lg sm:text-xl md:text-base md:py-0 py-7 px-5 sm:hidden" id="urunler-link">
                <Link
                  to="/"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >ÜRÜNLER
                </Link>
                  <div className="absolute top-[100%] right-0 bg-slate-400 px-5 md:px-2 mx-auto py-9  sm:hidden text-slate-900 mega hover:flex hidden w-full text-xl md:text-base lg:text-lg">
                  <ul className="flex flex-row justify-evenly 2xl:w-[1800px] xl:w-[90%] lg:w-[90%] md:w-full mx-auto">
          <ul className="flex flex-col">
          <li className="hover:text-orange-400 duration-500"><Link to="/melamin-kapilar">MELAMİN KAPILAR</Link></li>
          <li className="font-thin hover:text-orange-400 duration-500"><a href="/urunler/duz-melamin-kapilar">DÜZ MELAMİN KAPILAR</a></li>
          <li className="font-extralight hover:text-orange-400 duration-500"><a href="/urunler/gobekli-melamin-kapilar">GÖBEKLİ MELAMİN KAPILAR</a></li>
          </ul>
          <ul className="flex flex-col">
          <li className="hover:text-orange-400 duration-500"><Link to="/lake-kapilar">LAKE KAPILAR</Link></li>
          <li className="font-extralight hover:text-orange-400 duration-500"><a href="/urunler/standart-lake-kapilar">STANDART LAKE KAPILAR</a></li>
          <li className="font-extralight hover:text-orange-400 duration-500"><a href="/urunler/luks-lake-kapilar">LÜKS LAKE KAPILAR</a></li>
          </ul>
          <ul className="flex flex-col">
          <li className="hover:text-orange-400 duration-500"><a href="/urunler/amerikan-kapilar">AMERİKAN KAPILAR</a></li>
          </ul>
          <ul className="flex flex-col">
          <li className="hover:text-orange-400 duration-500"><a href="/urunler/mutfak-dolaplari">MUTFAK DOLAPLARI</a></li>
          <li className="hover:text-orange-400 duration-500"><a href="/urunler/banyo-dolaplari">BANYO DOLAPLARI</a></li>

          </ul>
        </ul>
                  </div>
                
              </li>

              <li className="text-lg sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/hakkimizda"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >HAKKIMIZDA
                </Link>
              </li>

              <li className="text-lg sm:text-xl md:text-base md:py-0 py-5 px-5">
                <Link
                  to="/iletisim"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >İLETİŞİM
                </Link>
              </li>

              <li className="text-lg hidden sm:flex sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/melamin-kapilar"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >MELAMİN KAPILAR
                </Link>
              </li>

              <li className="text-lg hidden sm:flex sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/lake-kapilar"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >LAKE KAPILAR
                </Link>
              </li>
              <li className="text-lg hidden sm:flex sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/urunler/amerikan-kapilar"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >AMERİKAN KAPILAR
                </Link>
              </li>
              <li className="text-lg hidden sm:flex sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/urunler/mutfak-dolaplari"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >MUTFAK DOLAPLARI
                </Link>
              </li>
              <li className="text-lg hidden sm:flex sm:text-xl md:text-base md:py-0 py-5 px-3">
                <Link
                  to="/urunler/banyo-dolaplari"
                  className="text-gray-300  sm:text-white hover:text-orange-400 duration-500"
                  onClick={()=>setMobilMenu(false)}
                >BANYO DOLAPLARI
                </Link>
              </li>

              
            
            
          </ul>
        </div>
      </div>
      <div className={`hidden ${mobilMenu?"sm:hidden":"sm:flex"} `}>
        <button className="text-white text-2xl mr-5" onClick={mobilMenuDegistir}><MenuOutlined /></button>
      </div>
      <div className={`z-50 hidden ${mobilMenu?"sm:flex":"sm:hidden"} fixed right-0 `}><button className="text-white text-3xl mr-5" onClick={mobilMenuDegistir}><CloseOutlined/></button></div>
    </div>
  );
};

export default Navbar;
