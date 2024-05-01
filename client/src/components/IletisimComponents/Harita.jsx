import React from "react";

const Harita = () => {
  return (
    <div className="flex flex-row justify-between sm:flex-col w-full gap-y-8 gap-x-5 pb-14">
      <div className="w-1/2 sm:w-full ">
        <h3 className="text-orange-500 text-2xl text-center mb-3">Showroom Adresimiz</h3>
        <div className="w-full">
        <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3019015503298!2d29.264646142432674!3d40.876018926369994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd2d14a5d4c7%3A0x36c1eabdd575254c!2zSGViaWxvxJ9sdSBBaMWfYXAgTWHEn2F6YQ!5e0!3m2!1str!2str!4v1702758005243!5m2!1str!2str"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="w-1/2 sm:w-full  ">
        <h3 className="text-orange-500 text-2xl text-center mb-3">Fabrika Adresimiz</h3>
        <div className="w-full">
        <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3017.8611965910554!2d29.373948276032777!3d40.852971171372815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDUxJzEwLjciTiAyOcKwMjInMzUuNSJF!5e0!3m2!1str!2str!4v1714599344958!5m2!1str!2str" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
      </div>
    </div>
  );
};

export default Harita;
