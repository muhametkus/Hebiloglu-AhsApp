import Axios from "axios";
import React, {useEffect, useState } from "react";
import UstDiv from "../../../src/components/UstDiv/UstDiv";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UrunlerKategorize = () => {

  const { altKategoriLink } = useParams();
  const [urunler, SetUrunler] = useState([]);
  const apiUrl = "https://apideneme.hebilogluahsap.com/nodeapi";
  const [sayfaAdi, SetSayfaAdi] = useState("");
  const navigate=useNavigate();
console.log("alt kategori: "+altKategoriLink);
  const uruneGit=(urunLinki)=>{
    navigate(`/urun-detay/${urunLinki}`)
  };

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await Axios.get(
          `${apiUrl}/urunler/kategori/${window.location.pathname.split("/")[2]}`
        );
        SetUrunler(res.data);
        SetSayfaAdi(res.data[0].altKategori);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [altKategoriLink]);

  return (
    <div className="Ürünler pb-14">
      <UstDiv SayfaAdi={`${sayfaAdi} KAPILAR`} />
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-14 justify-between 2xl:w-[1536px] w-[80%] md:w-[95%] mx-auto">
        {urunler &&
          urunler.map((kapi) => (
            <div
              key={kapi.urunLinki}
              className="w-[240px] h-[600px] sm:mx-auto flex flex-col justify-start cardlar  rounded-xl items-center "
            >
              <button onClick={()=>uruneGit(kapi.urunLinki)}>
                <img
                  className="resim-hover2 w-[240px] rounded-tl-lg rounded-tr-lg"
                  src={kapi.resimLinki}
                  alt={kapi.modelAdi}
                />
                <h3 className="text-center text-2xl my-3 text-slate-700">
                  {kapi.modelAdi}
                </h3>
              </button>
              <button
                onClick={()=>uruneGit(kapi.urunLinki)}
                className="btn mx-auto rounded-none text-lg bg-orange-500 mb-2 hover:bg-slate-600 hover:text-white sm:flex "
              >
                Modeli İncele
                <CaretRightOutlined />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UrunlerKategorize;
