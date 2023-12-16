import React from "react";

const Harita = () => {
  return (
    <div className="flex flex-row justify-between sm:flex-col w-full border gap-y-8">
      <div className="w-1/2 sm:w-full border">
        <h3 className="text-orange-500 text-2xl text-center">Showroom Adresimiz</h3>
        <div className="w-full">
        <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d533.3019015503298!2d29.264646142432674!3d40.876018926369994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd2d14a5d4c7%3A0x36c1eabdd575254c!2zSGViaWxvxJ9sdSBBaMWfYXAgTWHEn2F6YQ!5e0!3m2!1str!2str!4v1702758005243!5m2!1str!2str"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="w-1/2 sm:w-full  border">
        <h3 className="text-orange-500 text-2xl text-center">Fabrika Adresimiz</h3>
        <div className="w-full">
        <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.348132307332!2d29.263422403843148!3d40.879395543708526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadb625f97d863%3A0x50e4311efd783c8f!2sFevzi%20%C3%87akmak%2C%20Zonguldak%20Sk.%2012a%2C%2034899%20Pendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1702758118871!5m2!1str!2str" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
      </div>
    </div>
  );
};

export default Harita;
