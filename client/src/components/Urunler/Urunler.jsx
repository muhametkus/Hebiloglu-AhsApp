import React from "react";
import "./Urunler.css";
import { Card } from "antd";
const { Meta } = Card;

const Urunler = () => {
  return (
    <div className="w-full flex">
      <div className="w-[85%] md:w-[95%] flex flex-col  justify-between mx-auto gap-y-20">
        <div className="doors flex w-full justify-evenly">
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="./img/kapilar/Melaminler/gobekliMelaminler/beyaz3gobek.jpg"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>

        <Card
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

        <div className="flex w-full justify-evenly">
        <Card
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
