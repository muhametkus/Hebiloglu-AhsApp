import React, { createContext, useState, useContext, useEffect } from "react";
import Axios from 'axios';

export const UrundetayContext = createContext();

const UrundetayProvider = ({ children }) => {
  const [secilenUrunLink, setSecilenUrunLink] = useState("");
  const apiUrl = "https://apideneme2.hebilogluahsap.com/urunApi";
  const [bulunanSayfa, SetBulunanSayfa] = useState("");
  const [urun, SetUrun] = useState([]);
  const [secilenKategori, SetSecilenKategori] = useState("");
  const [sayfaAdi,SetSayfaAdi]=useState("");
 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Axios.get(`${apiUrl}/urunler/urun/${bulunanSayfa}`);
        SetUrun(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [bulunanSayfa]);

  // useEffect(()=>{

  //   Axios.get(`${apiUrl}/urunler/kategori/${bulunanSayfa}`)
  //   .then((response)=>{
  //     SetTumUrunlerListesi(response.data);
  //     SetSayfaAdi(response.data[0].altKategori);
  //   })

  // },[bulunanSayfa])



  return (
    <UrundetayContext.Provider value={{ secilenUrunLink, setSecilenUrunLink, urun, bulunanSayfa, SetBulunanSayfa, SetUrun, secilenKategori, SetSecilenKategori,sayfaAdi }}>
      {children}
    </UrundetayContext.Provider>
  );
};

export default UrundetayProvider;
