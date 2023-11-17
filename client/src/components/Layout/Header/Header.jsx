import React, { useState } from "react";
import "./Header.css";
import { CaretDownOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';


const Header = () => {
  const [mobilMenu, setMobilMenu] = useState(false);
  
  console.log(mobilMenu);
  
  return (
    <div className="header-kapsayici w-full">
      <div className="alt-kapsayici w-full px-4 mx-auto flex justify-between items-center flex-row">
        <div className="sm:w-[350px] w-[200px]">
          <a href="/"><img className="w-full" src="http://www.hebilogluahsap.com/img/logo.png" alt="" /></a>
        </div>
        <MenuOutlined className="hidden sm:block text-4xl px-4 pb-3 pt-2 mr-5 bg-yellow-600 text-white"  onClick={()=>setMobilMenu(!mobilMenu)}/>
           <ul className="w-full flex flex-row justify-around items-center sm:hidden">
            <li className="py-2 px-5 md:px-2 hover:bg-red-600"><a href="/">Anasayfa</a></li>
            <li className="py-2 px-5 md:px-2 hover:bg-red-600"><a href="/">Hakkımızda</a></li>
            <li className="py-2 px-5 md:px-2 hover:bg-red-600"><a href="/">İletişim</a></li>
            <li className="py-2 px-5 md:px-2 hover:bg-red-600"><a href="/">Lake</a></li>
            <li className="py-2 px-5 md:px-2 hover:bg-red-600"><a href="/">Melamin</a></li>
            <li className="py-2 px-5 md:px-2 hover:bg-red-600"><a href="/">Amerikan</a></li>
            <li className="py-2 px-5 md:px-2 hover:bg-red-600 acilir-menu-link flex items-center"><a href="/" >Dolaplar</a> 
              <div className="acilir-menu absolute bg-slate-400 mt-[93px] px-7">
              <li className=""><a href="/">Mutfak</a></li>
              <li className=""><a href="/">Banyo</a></li>
              </div>
            </li>
          </ul>
    
      </div>
      <ul className={`w-full text-white text-3xl pr-10 pb-7 pt-5 hidden flex-row items-end sm:flex-col gap-y-7 ${mobilMenu?"sm:flex":"sm:hidden"}`}>
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/">Melamin</a></li>
            <li><a href="/">Amerikan</a></li>          
            <li><a href="/">Lake</a></li>
            <li><a href="/">Mutfak</a></li>
            <li><a href="/">Banyo</a></li>  
            <li><a href="/">İletişim</a></li>
            <li><a href="/">Hakkımızda</a></li>

          </ul>
    </div>
  );
};

export default Header;
