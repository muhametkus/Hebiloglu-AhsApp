import React from "react";
import "./Hakkimizda.css";
import UstDiv from "../../components/UstDiv/UstDiv";
const Hakkimizda = () => {
  return (
    <div className="">
      <UstDiv SayfaAdi="Hakkımızda" />
      <div className="flex flex-col 2xl:w-[1536px] w-[80%] md:w-[95%] mx-auto pb-10">
        <div className="flex flex-row flex-wrap gap-x-8">
          
          <div className="w-[50%] mx-auto sm:w-full md:w-[90%]">
            <h1 className="text-5xl mb-5 sm:text-4xl">40 YILA YAKLAŞAN TECRÜBEMİZLE EVİNİZİ DEKORE EDİYORUZ</h1>
            <p className="text-lg mt-5">
              1983 yılında mobilya sektöründe hizmet vermek amacıyla Pendik'te
              kurulan ve geçmişten günümüze sektörde Hebiloğlu Mobilya
              markasıyla kişiye özel ve kurumsal projeler tasarladığı ürünlerini
              kendi tesislerinde üretmektedir. Hebiloğlu Mobilya markası
              imalatta ki titizliği, kalitesi, montaj zamanlamasındaki
              hassasiyeti ve satış sonrası hizmeti nedeni ile kısa sürede
              piyasada yer edindi.
            </p>
            <p className="mt-5 text-lg">
              Mutfak dolapları üretiminin yanı sıra sizin için özel olarak
              tasarladığı Banyo dolapları, Yatak odası dolapları, Portmantolar,
              Salon mobilyaları ve TV Üniteleri üretmektedir. Kişiye özel
              yaptığı tasarım ve üretimlerinin yanında toplu konut projelerinde
              de inşaat şirketlerinin tercih ettiği Hebiloğlu Mobilya siz
              değerli müşterilerine hayalinizdeki mekanları sunar.
            </p>
          </div>

          <div className="w-[45%] sm:w-full md:w-[90%] md:mx-auto">
            <img className="w-full sm:my-10" src="./img/hakkimizda/about.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
