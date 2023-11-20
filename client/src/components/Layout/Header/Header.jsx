import React, { useState } from "react";
import "./Header.css";
import {
  CaretDownOutlined,
  DownOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Header = () => {
  const [mobilMenu, setMobilMenu] = useState(false);

  console.log(mobilMenu);

  return (
    <div className="header-kapsayici w-full">
      <div className="alt-kapsayici w-full 2xl:w-[1850px] mx-auto flex justify-between items-center flex-row">
        <div className="sm:w-[350px] w-[200px]">
          <a href="/">
            <img
              className="w-full"
              src="http://www.hebilogluahsap.com/img/logo.png"
              alt=""
            />
          </a>
        </div>
        <MenuOutlined
          className="hidden sm:block text-4xl px-4 pb-3 pt-2 mr-5 bg-yellow-600 text-white"
          onClick={() => setMobilMenu(!mobilMenu)}
        />
        <ul className="w-[50%] lg:w-[80%] md:w-[80%] flex flex-row justify-around items-center sm:hidden">
          <li className="py-1 px-4 md:px-2  decoration-white decoration-[1px]	transition-all ease-in-out underline-offset-8 underline">
            <a href="/">Anasayfa</a>
          </li>
          <li className="py-1 px-4 md:px-2  decoration-white decoration-[1px]	transition-all ease-in-out underline-offset-8 hover:underline">
            <a href="/">Hakkımızda</a>
          </li>
          <li className="py-1 px-4 md:px-2  decoration-white decoration-[1px]	transition-all ease-in-out underline-offset-8 hover:underline">
            <a href="/">İletişim</a>
          </li>

          <li className="py-2 px-5 md:px-2 dropdown dropdown-bottom dropdown-end dropdown-hover ">
            <label tabIndex={0} className=" m-1">
              Melamin
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 mt-1 mr-[-40px]"
            >
              <li>
                <a>Düz Melamin</a>
              </li>
              <li>
                <a>Göbekli Melamin</a>
              </li>
            </ul>
          </li>
          <li className="py-1 px-4 md:px-2  decoration-white decoration-[1px]	transition-all ease-in-out underline-offset-8 hover:underline">
            <a href="/">Amerikan</a>
          </li>
          <li className="py-1 px-4 md:px-2  decoration-white decoration-[1px]	transition-all ease-in-out underline-offset-8 hover:underline dropdown dropdown-bottom dropdown-end dropdown-hover ">
            <label tabIndex={0} className=" m-1">
              Lake
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-48 mt-1 mr-[-55px]"
            >
              <li>
                <a>Standart Lake Kapılar</a>
              </li>
              <li>
                <a>Lüks Lake Kapılar</a>
              </li>
            </ul>
          </li>
          <li className="py-1 px-4 md:px-2  decoration-white decoration-[1px]	transition-all ease-in-out underline-offset-8 hover:underline dropdown dropdown-bottom dropdown-end dropdown-hover ">
            <label tabIndex={0} className=" m-1">
              Dolaplar
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-24 mt-1 mr-[5px]"
            >
              <li>
                <a>Mutfak</a>
              </li>
              <li>
                <a>Banyo</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ul
        className={`w-full text-white text-3xl pr-10 pb-7 pt-5 hidden flex-row items-end sm:flex-col gap-y-7 ${
          mobilMenu ? "sm:flex" : "sm:hidden"
        }`}
      >
        <li>
          <a href="/">Anasayfa</a>
        </li>
        <li>
          <a href="/">Melamin</a>
        </li>
        <li>
          <a href="/">Amerikan</a>
        </li>
        <li>
          <a href="/">Lake</a>
        </li>
        <li>
          <a href="/">Mutfak</a>
        </li>
        <li>
          <a href="/">Banyo</a>
        </li>
        <li>
          <a href="/">İletişim</a>
        </li>
        <li>
          <a href="/">Hakkımızda</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
