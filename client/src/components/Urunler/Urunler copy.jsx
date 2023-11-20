import React from "react";
import "./Urunler.css";
import { Card } from "antd";
const { Meta } = Card;

const Urunler = () => {
  return (
    <div className="w-full bg-gray-400 mx-auto py-28 sm:py-12">
      <div className="2xl:w-[1536px] w-[85%] md:w-[95%] sm:w-full flex flex-col justify-between gap-y-20 mx-auto sm:justify-center sm:gap-y-5">
        <div className="doors flex w-full justify-evenly sm:flex-col  sm:justify-center gap-y-5">
        <Card
        className="sm:mx-auto"
          hoverable
          style={{
            width: 240,
            height:550,
          }}
          cover={
            <img
              alt="example"
              src="./img/kapilar/Melaminler/gobekliMelaminler/beyaz3gobek.jpg"
            />
          }
        >
          <h2 className=" text-center text-xl font-semibold">Melamin Kapılar</h2>
        </Card>

        <Card
        className="sm:mx-auto"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="./img/kapilar/Lakeler/LuksLakeler/lakeluks1-d.jpg"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
        className="sm:mx-auto"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="./img/kapilar/Amerikan/SaraAmerikan.jpg"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>

        <div className="flex w-full justify-evenly sm:flex sm:flex-col mx-auto sm:gap-y-5">
        <Card
        className="sm:mx-auto"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="./img/mutfak/mutfak.webp"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
        className="sm:mx-auto"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="./img/banyolar/banyo1.jpg"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        </div>
      </div>
    </div>
  );
};

export default Urunler;
